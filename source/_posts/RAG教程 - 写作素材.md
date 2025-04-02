#RAG #ai 

## 大纲

- **什么是RAG**
	- Retrieval Augmented Generation（检索增强生成）
		-  Facebook的2020年论文提出。
		-  当时大模型太弱，关注度不够。主要是bert
- RAG的核心组件：
		- Retriever
		- Generator
		- Augment Method
- RAG系统组成：
	- 模型所需的外部数据(indexed vector)
	- 大模型
	- 查询所需外部信息


- **RAG 实战 -- 基于LlamaIndex实现私有数据Q&A**
	- 从Llama index他们的视角来看
		- ![image.png](https://s.alidraft.com/vent/202312211619130.png)
        - **加载**：这是指从数据所在的位置（无论是文本文件、PDF、其他网站、数据库还是API）获取您的数据到您的流程中。LlamaHub提供了数百种连接器供您选。
        - **索引**：这意味着创建一个允许查询数据的数据结构。对于LLMs来说，这几乎总是意味着创建`向量 嵌入`，这是您数据含义的数值表示，以及许多其他元数据策略，以便于准确找到上下文相关的数据
        - **存储**：一旦您的数据被索引，您几乎总是希望存储您的索引以及其他元数据，以避免重新索引。
        - **查询**：对于任何给定的索引策略，您可以利用LLMs和LlamaIndex数据结构进行多种查询，包括子查询、多步查询和混合策略
        - **评估**：在任何流程中，一个关键的步骤是检查它相对于其他策略的效果，或者当你做出改变时。评估提供了关于你对查询的响应有多准确、忠实和快速的客观衡量
        - ![image.png](https://s.alidraft.com/vent/202312211634399.png)



	**- 网页数据的Q&A** 
		Jupyter Notebook 链接（代码分享用colab)

- **RAG评估**

**未来规划**
- 写个 obsidian版的notion Q&A 插件
-  移动端向量数据库？


## Building and Evaluating Advanced RAG

https://learn.deeplearning.ai/building-evaluating-advanced-rag/lesson/2/advanced-rag-pipeline


## **[Retrieval-Augmented Generation for Large Language Models: A Survey"](https://arxiv.org/pdf/2312.10997.pdf)**


###  Timeline of RAG
![image.png](https://s.alidraft.com/vent/202312211120837.png)

###  RAG vs Fine-tuning
![image.png](https://s.alidraft.com/vent/202312211120910.png)

### Paradigm of RAG

![image.png](https://s.alidraft.com/vent/202312211123188.png)


###  Taxonomy of Core Components

![image.png](https://s.alidraft.com/vent/202312211137427.png)


## 简单RAG
![[RAG Learning]]



```sh
!pip install llama-index transformers

```

```python
from llama_index.readers import BeautifulSoupWebReader

  

url = "https://www.draftai.cn/2023/12/19/chatonce-support-chat-with-file/"

  

documents = BeautifulSoupWebReader().load_data([url])

```

```python

## index 
import os

import openai

  

os.environ['OPENAI_API_KEY'] = "sk-"

openai.api_key = os.environ['OPENAI_API_KEY']
from llama_index.llms import OpenAI

  

llm = OpenAI(model="gpt-3.5-turbo-1106", temperature=0)
from llama_index import ServiceContext

  
## 需要解释一下
service_context = ServiceContext.from_defaults(llm=llm, embed_model="local:BAAI/bge-small-zh-v1.5") #BAAI/bge-small-zh-v1.5. BAAI/bge-small-en-v1.5




```

```python
from llama_index.response.notebook_utils import display_response
import logging

import sys

  

logging.basicConfig(stream=sys.stdout, level=logging.INFO)

logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))
query_engine = vector_index.as_query_engine(response_mode="compact")

  

response = query_engine.query("智写AI能干嘛?它最新的功能是什么？")

  

display_response(response)
```

![image.png](https://s.alidraft.com/vent/202312211901720.png)


![image.png](https://s.alidraft.com/vent/202312211900917.png)


![image.png](https://s.alidraft.com/vent/202312211903829.png)

## Llama index

![[High-Level Concepts - LlamaIndex 🦙 0.9.19]]