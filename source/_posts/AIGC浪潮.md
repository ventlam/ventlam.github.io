#ai 
# 1.总览与分类

![https://s.zhangguiyi.cn/vent/202302131706872.png](https://s.zhangguiyi.cn/vent/202302131706872.png)

## 1.1 文本生成

![https://s.zhangguiyi.cn/vent/202302211110491.png](https://s.zhangguiyi.cn/vent/202302211110491.png)

## 1.2 图像生成

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/97a4c645-30f9-4e37-a9ac-ae5849016f69/Untitled.png)

## 1.3 音频、视频生成

# 2. 关键技术

## 2.1 LLM -以ChatGPT为例

LLM模型使得生成范式，即(M)LM（(Masked) Language Model），逐渐替代分类范式成为主流。从下图中可以看到，近几年(M)LM模型有逐渐统一语言模型范式的趋势.

这里的(M)LM主要指的是自回归式的给定前缀生成下一个单词的大规模模型，通常由解码器（decoder）实现，将MLM（Masked Language Model，掩码语言模型）包含进该概念是因为MLM本质也是预测（生成）单词的模型，只是包含了编码器（encoder）结构

![https://s.zhangguiyi.cn/vent/202302220024745.png](https://s.zhangguiyi.cn/vent/202302220024745.png)

-   **In-Context Learning** :
    
    对于一些LLM没有见过的新任务，只需要设计一些任务的语言描述，并给出几个任务实例，作为模型的输入，即可让模型从给定的情景中学习新任务并给出满意的回答结果。这种训练方式能够有效提升模型小样本学习（few-shot learning）的能力(补充图片)
    
    ![https://s.zhangguiyi.cn/vent/202302220021505.png](https://s.zhangguiyi.cn/vent/202302220021505.png)
    

[Prompt Engineering](https://docs.cohere.ai/docs/prompt-engineering)

-   **Chain-of-Thought，CoT** :
    
    对于一些逻辑较为复杂的问题，直接向大规模语言模型提问可能会得到不准确的回答，但是如果以提示（prompt）的方式在输入中给出有逻辑的解题步骤（即将复杂问题拆解为多个子问题解决再从中抽取答案）的示例后再提出问题，大模型就能给出正确题解。
    
    如图所示，直接让模型进行数学题的计算会得到错误的结果，而引入解题过程则可以激发模型的推理能力，从而得到的正确的结果。
    
    ![https://s.zhangguiyi.cn/vent/202302220023028.png](https://s.zhangguiyi.cn/vent/202302220023028.png)
    
    [](https://github.com/reasoning-machines/pal)[https://github.com/reasoning-machines/pal](https://github.com/reasoning-machines/pal)
    
    [🟡 LLMs Using Tools | Learn Prompting](https://learnprompting.org/docs/advanced_applications/mrkl)
    
    有时，甚至不用给示例，在输入后面接一句“Let’s think step by step”，模型的输出就是一步一步“思考”后的各个子问题的结果，再将该输出拼到输入后构造第二次输入数据，大模型就能进一步将上一步的输出整合，得出正确的复杂问题的解。
    
    目前有研究发现，由于数据集中存在的大量代码数据，得益于代码的强逻辑性，通过将问题中的文本内容替换为编程语言能够进一步提升模型的CoT能力（Program-aided Reasoning）。
    
    由于CoT技术能够激发大规模语言模型对复杂问题的求解能力，该技术也被认为是打破比例定律的关键。
    
    ![https://s.zhangguiyi.cn/vent/202302220024812.png](https://s.zhangguiyi.cn/vent/202302220024812.png)
    

[](https://twitter.com/arankomatsuzaki/status/1529278580189908993)[https://twitter.com/arankomatsuzaki/status/1529278580189908993](https://twitter.com/arankomatsuzaki/status/1529278580189908993)

-   **Learning from Natural Instructions**

这种训练方式会在输前面添加一个“指令（instruction）”，该指令能够以自然语言的形式描述任务内容，从而使得大模型根据输入来输出任务期望的答案。该方式将下游任务进一步和自然语言形式对齐，能显著提升模型对未知任务的泛化能力。

![https://s.zhangguiyi.cn/vent/202302220053512.png](https://s.zhangguiyi.cn/vent/202302220053512.png)

[](https://arxiv.org/pdf/2104.08773.pdf)[https://arxiv.org/pdf/2104.08773.pdf](https://arxiv.org/pdf/2104.08773.pdf)

[ChatGPT: Optimizing Language Models for Dialogue](https://openai.com/blog/chatgpt/)

第一步：首先从大量的包含人类真实意图的指令集合中采样指令作为输入数据，并聘请专职标注员标注这些指令的输出，这部分相对而言是一个高质量的小数据集。数据收集完成后，使用GPT-3.5在该数据集上进行有监督的微调（supervised fine-tuning）。

第二步：得到上一步微调好的GPT-3.5之后，再次从指令集合中采样指令作为输入数据，从GPT-3.5得到多个不同的结果，并聘请专职标注员标注这些输出的好坏顺序，例如输出D>输出C>输出A>输出B。由于只需要标注模型不同输出的好坏，这部分标注的成本会降低很多，因此数据规模也会较大。得到这些人工标注的输出顺序之后，可以训练得到一个打分（reward）模型。

第三步，获得打分模型之后，接着从指令集合中采样一些新的指令作为输入数据，并结合打分模型，使用PPO（强化学习算法）方式来训练得到最终的ChatGPT。

![https://s.zhangguiyi.cn/vent/ChatGPT_Diagram.svg](https://s.zhangguiyi.cn/vent/ChatGPT_Diagram.svg)

## 2.2 CLIP(Contrastive Language-Image Pre-training)

![Contrastive Language-Image Pre-training](%5B%3Chttps://s.zhangguiyi.cn/vent/202302211019244.png%3E%5D(%3Chttps://s.zhangguiyi.cn/vent/202302211019244.png%3E))

[](https://paperswithcode.com/method/clip)[https://paperswithcode.com/method/clip](https://paperswithcode.com/method/clip)

## 2.3 LDM(Latent Diffusion Model)

### 2.3.1 LoRA

### 2.3.2 CriticalNet

# 4. 场景

## 4.1 工作提效

### 4.1.1 各类写作

-   代码
-   文档
-   文案

### 4.1.2 各类绘画

## 4.2 个人助手

### 4.2.1 辅助决策

### 4.2.2 情感诉求

# 4.3 The App

取代所有APP，取代大量白领创意性的工作，同时也创造出新的岗位。

# 5.应用

On Google ：Gmail /Google Maps

On Apple : App Store

On AIGC : Jasper AI / StableDiffusionWeb/