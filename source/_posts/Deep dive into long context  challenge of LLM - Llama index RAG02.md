---
title: 如何通过RAG提升LLM大模型对长文本的理解和处理能力-风爷推荐E10
categories: AI
date: 2024-01-14
tags:
  - ai
  - RAG
  - LlamaIndex
---
![image.png](https://s.draftai.cn/vent/20240114234551.png)

## 长文本 -  大模型核心挑战之一

目前世界上最好的LLM模型-GPT4，在处理长文本问题上，表现不佳。有多篇论文和测试显示，就算具备所谓Long Context 能力的GPT模型，也只能处理好文本头部和尾部信息，文本中部信息容易被丢失。Cladue 2 在这类挑战中表现会更好些，但是依然能够处理的文本长度有限。
那么应该怎么办呢？ RAG通常是目前较为经济和效果更好的解决方案。

> 当然，在可预见未来，大模型的迭代会解决这个问题，比如社区的[LongLlama](https://github.com/CStanKonrad/long_llama).

基于RAG的做法，有点偏工程思路，简单来说，你文本不是长吗？给你切短不就好了吗？切短喂给大模型，会存在两个问题。
- 切多短？一个文本切成多个小文本后，切断的过程，有些原本相邻的内容被破坏了，如何设置两个相邻文本的重叠度？
- 多个文本应该如何去查询，才能得到更好的答案？需要设计不同的查询路由，有点玄学意味在里头。

可以预见，以上两个问题并无唯一标准答案，需要根据实际业务场景和测试情况来确定。

本文希望从简单的代码示例来探讨以上的问题，先从文本怎么切开始，介绍 Llama Index 的一些关键概念和核心细节。

!!! 注意，文中代码只是为了帮助概念理解，完整Demo代码在文末链接。

### ChunkSize(块大小)
在 LLama_Index 里面对应的就是Chunk Size，我们来看看一些关于Chunk Size的概念：

1. 引言：
	在智能技术的新纪元中，检索增强生成（RAG）技术代表了一种创新的风向，它巧妙地将搜索系统的广泛检索能力与大型语言模型（LLM）结合在一起。
	
	在构建这样一个系统时，关键之一在于确定合适的块大小（chunk_size），这个参数至关重要，它不仅影响着系统的效率，更左右着整体的性能表现。
	要想找到最佳的块大小，LlamaIndex 的响应评估工具提供了极大的帮助。本文将指导你如何通过 LlamaIndex 的响应评估模块找到理想的块大小。

2. 块大小的重要性：在 RAG 系统中，选择合适的块大小是一项关键决策，它从多个方面影响着系统的效率和准确性：
    
    - 关联性和细腻程度：较小的块大小，例如 128，可以产生更细腻的数据块。但这种精细度可能带来风险，尤其是当 similarity_top_k 设置过于严格，例如仅为 2 时，关键信息可能不会出现在首批检索结果中。相反，512 的块大小更有可能包含所有必要信息，确保查询的回答随时可得。在这一点上，我们依赖忠实度和相关性两个指标，它们分别衡量响应中‘幻觉’的缺失和基于查询及检索上下文的‘相关性’。
    
    - 响应生成时间：随着块大小的增长，流入 LLM 以生成答案的信息量也相应增加。这虽然能够确保更全面的上下文，但可能导致系统响应速度的下降。保持系统在增加深度的同时仍保持快速响应，是我们需要重点关注的。 总之，确定最佳块大小是一种艺术，旨在在全面捕获关键信息和保持系统速度之间找到一个平衡点。进行全面的测试，针对不同大小的块进行优化，以找到最适合特定用例和数据集的配置方案，是实现这一目标的关键。

## 代码简单实现

让我们回顾RAG系统的关键五个步骤

![](https://docs.llamaindex.ai/en/stable/_images/stages.png)

### 环境配置

```sh
!pip install llama-index pypdf
```

### 读取数据
```python

# Load Data
reader = SimpleDirectoryReader("./data/")

documents = reader.load_data()
```

### VectorStoreIndex

向量存储是RAG的核心组件，因此使用 LlamaIndex 创建的应用，基本都会直接或间接地使用到它们。向量存储，你可以理解成不同类型的文件，比如 txt文件、PDF文件、图片等，会通过embeding算法变成一个非常巨大的矩阵（向量）。
 
如果不了解向量数据库的概念，可以先看看风爷之前的博客。

LLamaIndex 的向量存储，默认是内存向量存储，它会将所有的内容都放在内存里。默认采用内存向量存储，方便用户快速上手和尝试。它可以通过一下这两种方法来持久化：
`vector_store.persist()`  ，`SimpleVectorStore.from_persist_path(...)` 。

向量存储的基本单元可以是一组文档Node 对象（有点拗口，就理解成一个小段的文本、一小块图像等即可，当然还有一些元数据之类）

！！！注意，可以看到，这个VectorStoreIndex是抽象的类概念，它的具体实现有很多种：
### 向量数据库
LLamaIndex 支持超过20种不同的向量数据库。以下是从官方文档截取的一部分支持：

| Vector Store | Type | Metadata Filtering | Hybrid Search | Delete | Store Documents |
| ---- | ---- | ---- | ---- | ---- | ---- |
| Apache Cassandra® | self-hosted / cloud | ✓ |  | ✓ | ✓ |
| Astra DB | cloud | ✓ |  | ✓ | ✓ |
| Azure Cognitive Search | cloud |  | ✓ | ✓ | ✓ |
| Azure CosmosDB MongoDB | cloud |  |  | ✓ | ✓ |
| ChatGPT Retrieval Plugin | aggregator |  |  | ✓ | ✓ |
| Chroma | self-hosted | ✓ |  | ✓ | ✓ |
| DashVector | cloud | ✓ |  | ✓ | ✓ |


### 创建VectorStore

1. 先看一个简单的实现：
```python
# 引入VectorStoreIndex类，它用于创建和管理向量索引。
from llama_index import VectorStoreIndex

# 使用文档集合和服务上下文创建一个VectorStoreIndex实例。
# 这里，'documents' 是一个文档列表，'service_context' 提供了与服务相关的上下文信息。
vector_index = VectorStoreIndex.from_documents(documents, service_context=service_context)

```
2. 再看个复杂一点的：

```python
# 从llama_index导入ServiceContext, OpenAIEmbedding, 和 PromptHelper 类。
from llama_index import (
    ServiceContext,
    PromptHelper,
)

# 从llama_index.llms模块导入OpenAI类，用于与OpenAI的语言模型进行交互。
from llama_index.llms import OpenAI

# 从llama_index.text_splitter模块导入SentenceSplitter类，用于文本分割。
from llama_index.text_splitter import SentenceSplitter

# 创建一个OpenAI的实例，配置模型为gpt-3.5-turbo-1106，更便宜
llm = OpenAI(model="gpt-3.5-turbo-1106", temperature=0, max_tokens=256)

# 创建一个OpenAIEmbedding的实例，用于文本的向量嵌入。
embed_model = OpenAIEmbedding()

# 创建一个SentenceSplitter的实例，设置块大小为1024，重叠为20。
text_splitter = SentenceSplitter(chunk_size=1024, chunk_overlap=20)

# 创建一个PromptHelper的实例，配置上下文窗口大小、输出数量、块重叠比率和块大小限制。
prompt_helper = PromptHelper(
    context_window=4096,
    num_output=256,
    chunk_overlap_ratio=0.1,
    chunk_size_limit=None,
)

# 使用默认配置创建一个ServiceContext的实例，包括之前定义的llm, embed_model, text_splitter, 和 prompt_helper。
service_context = ServiceContext.from_defaults(
    llm=llm,
    embed_model=embed_model,
    text_splitter=text_splitter,
    prompt_helper=prompt_helper,
)


vector_index = VectorStoreIndex.from_documents(

documents, service_context=service_context

)

```


### 来看看ChunkSize初始化源码


```python
DEFAULT_CHUNK_SIZE = 1024 # tokens

DEFAULT_CHUNK_OVERLAP = 20 # tokens

DEFAULT_SIMILARITY_TOP_K = 2

DEFAULT_IMAGE_SIMILARITY_TOP_K = 2
```


代码里面的超参太多了，不同版本不一致，Demo代码也很难跑通。
比如这里chunk size 是512 ，实际上默认的chunk size 是1024 chunk_overlap 是20，得到源代码里面去找。
另外一种可能是，整体迭代太快，文档和代码有错漏脱节的地方。

### 完整代码

[Notebook 代码](https://colab.research.google.com/drive/11UJrLaSMcbDT4lbpPyHF21TLePpOqcZh?usp=sharing)直接复制跑起来即可，原本Demo代码的Bug已经被修正。
