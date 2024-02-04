---
title: 跟着贾扬清学习打造一个价值35亿的AI搜索引擎-风爷推荐EP11
categories: Investment
date: 2024-02-04
tags:
  - RAG
---

## AI搜索引擎 - Perplexity

**[Perplexity AI](https://www.perplexity.ai/)**，一家AI搜索初创公司，在B轮融资中筹集了7360万美元，使其估值达到了5.2亿美元。这轮融资来自包括Nvidia和杰夫·贝佐斯等知名投资人。这是Perplexity AI自2022年8月成立以来的第二轮融资，去年3月的A轮融资筹集了2560万美元。

跟着风爷，来看看Perplexity的**主站**页面：

![](https://s.draftai.cn/vent/202402011806033.png)

根据它的热门hints，搜索一个话题：“Amazon, Meta gained $280b”。如下图，可以看到这个搜索体验还是不一样，它直接生成了一个完整的答案。某种意义上来说，这确实是**未来形态的搜索**。

再看它旁边的侧边栏，搜索图片、视频和生成图片。我理解以后真正的搜索，确实如皮衣教主黄仁勋所言，计算模式从"搜索"进化为"搜索"加"生成"。

![](https://s.draftai.cn/vent/202402041616283.png)

### 多模态搜索
再来看看**多模态的搜索**：
![多模态搜索](https://s.draftai.cn/vent/202402041630541.png)

可以看到，现在图片搜索还是不太成熟，我感觉主要是反向索引的问题。文搜图还是挺有市场和机会的。 视频搜索应该调用的Youtube的API，估计metadata比较完善，搜索质量还算不错。

### Copilot
接下来再体验一下它的新功能: **Copilot**。 我问它，我现在是否应该买亚马逊的股票。
![](https://s.draftai.cn/vent/202402041631708.png)

可以看到**Copilot**工作流程：
- 理解问题
- 搜索网页，找到信源(21 sources)
- 生成结果

![](https://s.draftai.cn/vent/202402041632638.png)


![](https://s.draftai.cn/vent/202402041646031.png)

看看完整的答案，感觉非常不错。总结一下：
- 股票表现好，12月平均目标价为每股182美金，甚至有些分析师看到2024年底每股250美金，2026年底每股350美金。
- 增长不错，也有值得担心的是，CEO在接下来12个月卖掉5000万股。另外，现在亚马逊的PE也很高。

### 发现
它的发现页面，主要是热门趋势新闻，估计也是调用了google的Trending接口。
![Perplexity Discover](https://s.draftai.cn/vent/202402011806592.png)


可以看到，**Perplexity**实际上是一个增强版的AI搜索引擎。通过对网页、视频等多种模态进行搜索查询的对话式AI平台，使用户能够获得更相关的答案。

## Lepton-AI搜索开源实现

前阿里巴巴VP贾扬清的创业团队，最近开源了一个类似Perplexity的AI搜索引擎：**[Lepton](https://github.com/leptonai/search_with_lepton/tree/main)**
我们先来看看它的首页，非常非常像**Perplexity**（以至于两个团队在X上有所交锋）
![](https://s.draftai.cn/vent/202402011804340.png)

结果页面也非常像：
![Lepton Answer](https://s.draftai.cn/vent/202402011808638.png)

## Lepton 源码解析
下载源码，安装一下所需的依赖包。中间会遇到安装的问题，升级一下你的PIP就好。

实际上，整个项目其实非常简单，主要由一个基于[FastAPI](https://fastapi.tiangolo.com/)的python后端服务和一个基于[Next.JS](https://nextjs.org/)的前端网站（当然使用了[tailwind](https://tailwindcss.com/)）组成。

![](https://s.draftai.cn/vent/202402041721399.png)

核心的AI搜索引擎，这个search_with_lepton文件，实际上一个简单的FastAPI应用。也就是说，核心的RAG系统，是通过整合多个接口和AI模型实现的endpoint.

接下来，风爷结合代码，来看看这个AI搜索引擎是怎么工作的？
1. 当用户发起查询时，`query_function` 方法被调用。
2. 根据环境配置（`env`），选择合适的搜索后端（如 Lepton, Bing, Google）。
3. 使用选定的搜索后端发起搜索请求，获取上下文。
4. 将搜索结果（上下文）和用户查询传递给大型语言模型（LLM），生成答案。
5. （可选）基于查询和上下文生成相关问题。
6. 将上下文、LLM 生成的答案和相关问题以流的形式返回给用户，并将结果存储到 Lepton KV 以便后续检索。

**细节如下：**
### 1. 用户发起查询

当用户发起查询时，通常是通过一个 HTTP 请求调用 `RAG` 类的 `query_function` 方法。这个方法作为 API 端点的处理函数，接收用户的查询参数。

### 2. 选择搜索后端

在 `query_function` 方法中，首先根据环境变量 `BACKEND` 来选择搜索后端。这是在 `init` 方法中设置的，根据配置选择不同的搜索服务：

```python
self.backend = os.environ["BACKEND"].upper()
if self.backend == "LEPTON":
    self.leptonsearch_client = Client(...)
elif self.backend == "BING":
    self.search_function = lambda query: search_with_bing(...)
elif self.backend == "GOOGLE":
    self.search_function = lambda query: search_with_google(...)
# 其他后端配置...
```

### 3. 发起搜索请求，获取上下文

然后，`query_function` 会使用选定的搜索后端对用户的查询进行搜索：

```python
contexts = self.search_function(query)
```

这里的 `contexts` 包含了搜索结果，可以是相关网页、文章片段等，为下一步生成答案提供上下文。

### 4. 使用大型语言模型（LLM）生成答案

接下来，`query_function` 将搜索结果和用户查询作为输入，调用大型语言模型生成答案。这通常通过一个 API 调用来实现，例如使用 OpenAI 的 GPT 模型：

```python
llm_response = self.local_client().chat.completions.create(...)
```

在这个调用中，`self.local_client()` 返回一个线程局部的客户端实例（为了线程安全），并通过 `chat.completions.create` 方法发送请求到语言模型服务。

### 5. （可选）生成相关问题

如果配置允许，`query_function` 还可以调用 `get_related_questions` 方法来生成相关问题：

```python
if self.should_do_related_questions and generate_related_questions:
    related_questions_future = self.executor.submit(
        self.get_related_questions, query, contexts
    )
```

这里使用了 `concurrent.futures.ThreadPoolExecutor` 来异步生成相关问题，以提高处理效率。

### 6. 返回结果并存储

最后，`query_function` 将生成的答案和相关问题以流的形式返回给用户，并可能将这些信息存储到 Lepton KV 中，以便后续检索：

```python
return StreamingResponse(
    self.stream_and_upload_to_kv(...),
    media_type="text/html",
)
```

`stream_and_upload_to_kv` 方法将结果以流的形式发送给客户端，同时异步将结果存储到 KV 存储。

## 总结
 可以看到，Lepton也好，Perplexity也好，和风爷之前文章介绍的RAG系统，底层原理还是非常接近的。当然，输入源有所不同，最后的结果存储也有所不同。其实核心的底层技术基本没啥变化。
 
 从产品的角度来看，RAG，确实是有非常大的应用空间，可以打造出非常伟大的AI原生产品。