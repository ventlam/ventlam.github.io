---
title: "[译]AMD 2.0 – MI450X 超越 Nvidia 的机会"
source: https://semianalysis.com/2025/04/23/amd-2-0-new-sense-of-urgency-mi450x-chance-to-beat-nvidia-nvidias-new-moat/
author:
  - "[[SemiAnalysis]]"
published: 2025-04-23
created: 2025-04-29
description: SemiAnalysis is expanding the AI engineering team! If you have an experience in PyTorch, training, inferencing, system modelling, SLURM/Kubernetes, send us your resume and 5 bullet points demonstrating your engineering excellence to letsgo@semianalysis.com. Ever since SemiAnalysis published an article in December 2024 detailing mediocre AMD software and the lack of usability, AMD has kicked into…
tags:
  - clippings
  - AI
---


  
##  Nvidia 的新护城河 快速改进、开发者优先的方法、低 AMD AI 软件工程师薪资、Python DSL、UALink 灾难、MI325x、MI355x、MI430X UL4、MI450X 架构、IF64/IF128、灵活的 IO、UALink、IFoE


由迪伦·帕特尔、邓洪·陈、丹尼尔·尼什巴尔、韦加·朱和伊凡·恰姆撰写

![](https://semianalysis.com/wp-content/uploads/2025/04/image-19-1.png)

*<sub>SemiAnalysis is expanding the AI engineering team! If you have an experience in PyTorch, training, inferencing, system modelling, SLURM/Kubernetes, send us your resume and 5 bullet points demonstrating your engineering excellence to <a href="https://semianalysis.com/2025/04/23/amd-2-0-new-sense-of-urgency-mi450x-chance-to-beat-nvidia-nvidias-new-moat/">letsgo@semianalysis.com</a>.</sub>*

Ever since [SemiAnalysis published an article in December 2024 detailing mediocre AMD software and the lack of usability](https://semianalysis.com/2024/12/22/mi300x-vs-h100-vs-h200-benchmark-part-1-training/), AMD has kicked into a higher gear and has made rapid progress in the past four months on many items we laid out. We view AMD’s new sense of urgency as a massive positive in its journey to catch up to Nvidia. AMD is now in a wartime stance, but there are still many battles ahead of it.  
自从 SemiAnalysis 在 2024 年 12 月发布了一篇关于 AMD 软件平庸和可用性缺乏的文章以来，AMD 已经进入了更高的档次，并在过去四个月中在我们列出的许多项目上取得了快速进展。我们认为 AMD 的新紧迫感是其追赶 Nvidia 旅程中的一个巨大积极因素。AMD 现在处于战时状态，但仍然面临许多战斗。

In this report, we will discuss the many positive changes AMD has made. They are on the right track but need to increase the R&D budget for GPU hours and make further investments in AI talent. We will provide additional recommendations and elaborate on AMD management’s blind spot: how they are uncompetitive in the race for AI Software Engineers due to compensation structure benchmarking to the wrong set of companies.  
在本报告中，我们将讨论 AMD 所做的许多积极变化。他们走在正确的轨道上，但需要增加 GPU 小时的研发预算，并进一步投资于人工智能人才。我们将提供额外的建议，并详细阐述 AMD 管理层的盲点：由于薪酬结构基准错误的公司，他们在争夺人工智能软件工程师的竞争中处于不利地位。

We will also discuss how AMD’s product launch cadence has put their current generation products against Nvidia’s next-gen products. Launching the MI325X at the same time as B200 has led to mediocre customer interest. Customers are now comparing the 8-GPU MI355X to the rack-scale 72-GPU GB200 NVL72 solution. [Our demand view in the Accelerator Model tracked Microsoft’s disappointment early in 2024 and lack of follow-on orders for AMD GPUs](https://semianalysis.com/accelerator-industry-model/).  
我们还将讨论 AMD 的产品发布节奏如何将他们当前一代产品与 Nvidia 的下一代产品进行对比。MI325X 与 B200 同时发布导致客户兴趣平平。客户现在将 8-GPU 的 MI355X 与机架规模的 72-GPU GB200 NVL72 解决方案进行比较。我们在加速器模型中的需求视图追踪了微软在 2024 年初的失望以及对 AMD GPU 缺乏后续订单的情况。

We now believe that, there is renewed interest in AMD GPUs from [OpenAI via Oracle](https://semianalysis.com/accelerator-industry-model/) and [a few other major customers](https://semianalysis.com/accelerator-industry-model/), but still not Microsoft, on the condition that they reach a sweet-heart pricing with AMD. **We will also outline how AMD’s window for fully catching up to NVIDIA could open in H2 2026, when AMD will finally bring a rack-scale solution to production. These SKUs, the MI450X IF64 and MI450X IF128, could be competitive to NVIDIA’s H2 2026 production rack-scale solution (VR200 NVL144).**  
我们现在相信，OpenAI 通过 Oracle 和其他一些主要客户对 AMD GPU 的兴趣重新燃起，但仍然没有微软，前提是他们与 AMD 达成优惠定价。我们还将概述 AMD 在 2026 年下半年完全赶上 NVIDIA 的窗口何时会打开，当时 AMD 将最终将机架级解决方案投入生产。这些 SKU，MI450X IF64 和 MI450X IF128，可能会与 NVIDIA 在 2026 年下半年的生产机架级解决方案（VR200 NVL144）具有竞争力。

SemiAnalysis is actively working with NVIDIA and AMD on inference benchmarking on Hopper and CDNA3 class GPUs and will publish an article on comprehensive benchmarks and comparisons within the upcoming months.  
SemiAnalysis 正在与 NVIDIA 和 AMD 积极合作，进行 Hopper 和 CDNA3 类 GPU 的推理基准测试，并将在未来几个月内发布一篇关于全面基准测试和比较的文章。

## Executive Summary 执行摘要

1. We met with Lisa Su to present our findings from the [December AMD article](https://semianalysis.com/2024/12/22/mi300x-vs-h100-vs-h200-benchmark-part-1-training) and she acknowledged the many gaps in the ROCm software stack & expressed a strong desire to improve.  
	我们与 Lisa Su 会面，展示了我们在 12 月 AMD 文章中的发现，她承认了 ROCm 软件栈中的许多缺口，并表达了强烈的改进愿望。
2. Over the past four months, AMD has made rapid progress on its AI software stack.  
	在过去的四个月里，AMD 在其 AI 软件栈上取得了快速进展。
3. In January 2025, AMD launched its developer relations (devrel) function, mainly led by Anush Elangovan, AMD’s AI Software Czar. His focus is interacting with external developers on Tech Twitter and In Real Life events.  
	在 2025 年 1 月，AMD 推出了其开发者关系（devrel）职能，主要由 AMD 的人工智能软件负责人 Anush Elangovan 领导。他的重点是与外部开发者在技术推特和现实生活活动中互动。
4. In January 2025, AMD recognized that external developers community are what made CUDA great and has since adopted a Developer First strategy.  
	在 2025 年 1 月，AMD 认识到外部开发者社区是使 CUDA 伟大的原因，因此采用了以开发者为先的战略。
5. Before SemiAnalysis published our AMD article in December, [AMD had zero MI300X in PyTorch Continuous Integration/Continuous Delivery (CI/CD)](https://x.com/AnushElangovan/status/1877342554842345479). AMD has since added MI300 into PyTorch CI/CD. AMD has made great progress over the past four months on CI/CD.  
	在 SemiAnalysis 于 12 月发布我们的 AMD 文章之前，AMD 在 PyTorch 持续集成/持续交付（CI/CD）中没有 MI300X。自那时以来，AMD 已将 MI300 添加到 PyTorch CI/CD 中。在过去四个月中，AMD 在 CI/CD 方面取得了重大进展。
6. AMD plans to take a page out of [Google’s TPU Research Cloud (TRC) book](https://sites.research.google/trc/about/) and launch a developer cloud at their upcoming Advancing AI event in June. The metric for success is if an [GPT-J moment](https://arankomatsuzaki.wordpress.com/2021/06/04/gpt-j/) happens on their AMD’s community developer cloud.   
	AMD 计划借鉴谷歌的 TPU 研究云（TRC）模式，并在他们即将于 6 月举行的“推进人工智能”活动中推出一个开发者云。成功的标准是 AMD 的社区开发者云上是否会出现一个 GPT-J 时刻。
7. AI Software Engineering compensation is AMD’s management’s blind spot. Their total compensation is significantly worse than companies that are great at AI software, such as NVIDIA and AI Labs.  
	AI 软件工程的薪酬是 AMD 管理层的盲点。他们的总薪酬明显低于在 AI 软件方面表现出色的公司，如 NVIDIA 和 AI Labs。
8. AMD’s internal development clusters have seen significant improvements over the past four months, yet these enhancements still fall short of what is needed to compete effectively in the long-term GPU development landscape.  
	AMD 的内部开发集群在过去四个月中取得了显著改善，但这些提升仍然不足以在长期 GPU 开发领域有效竞争。
9. AMD should considerably increase & prioritize allocations of its investments into R+D CapEx and OpEx initiatives to give their teams significantly more GPU resources for software development. The current short-sighted focus on quarterly earnings compromises its capacity for long-term competitiveness. AMD needs to invest significantly more GPUs, they have less than 1/20th of Nvidia’s total GPU count.  
	AMD 应该大幅增加并优先分配其在研发资本支出和运营支出项目上的投资，以为其团队提供更多的 GPU 资源用于软件开发。目前对季度收益的短视关注妨碍了其长期竞争力。AMD 需要显著投资更多的 GPU，他们的总 GPU 数量不到 Nvidia 的 1/20。
10. Making the entire Cuda ecosystem first class on Python has been a top priority for Jensen. NVIDIA now has a pythonic interface at every level of the stack. ROCm does not have this. This is a serious threat to AMD’s usability long term with developers.  
	让整个 Cuda 生态系统在 Python 上成为一流一直是 Jensen 的首要任务。NVIDIA 现在在堆栈的每个层级都有一个 Python 接口。ROCm 没有这个。这对 AMD 在长期与开发者的可用性构成了严重威胁。
11. Although RCCL has made some decent progress, the delta between NCCL and RCCL continues to significantly widen due to the [new NCCL improvements and features announced at GTC 2025](https://www.nvidia.com/en-us/on-demand/session/gtc25-s72583/).  
	尽管 RCCL 取得了一些不错的进展，但由于在 GTC 2025 上宣布的新 NCCL 改进和功能，NCCL 与 RCCL 之间的差距仍在显著扩大。
12. AMD has made some progress in the last four months on its software infrastructure layer (i.e., Kubernetes, SDC detectors, health checks, SLURM, Docker, metrics exporters), but its rate of progress is nowhere near keeping up with the rate of progress of AMD’s ML libraries.  
	在过去四个月中，AMD 在其软件基础设施层（即 Kubernetes、SDC 探测器、健康检查、SLURM、Docker、指标导出器）上取得了一些进展，但其进展速度远远跟不上 AMD 的 ML 库的进展速度。
13. AMD is currently lacking support for many inference features, such as good support for disaggregated prefill, Smart Routing, and NVMe KV Cache Tiering. NVIDIA [open-sourced Dynamo](https://github.com/ai-dynamo/dynamo), a distributed inference framework, further democratizing disaggregated serving for NVIDIA GPUs.  
	AMD 目前缺乏对许多推理功能的支持，例如对分散预填充、智能路由和 NVMe KV 缓存分层的良好支持。NVIDIA 开源了 Dynamo，一个分布式推理框架，进一步使 NVIDIA GPU 的分散服务民主化。
14. The MI355X is still not competitive with NVIDIA’s rack scale GB200 NVL72 solution. Instead, AMD is pitching MI355X as being competitive to NVIDIA’s air-cooled HGX solutions, but this is not the purchasing comparison most customers are making.  
	MI355X 仍然无法与 NVIDIA 的机架规模 GB200 NVL72 解决方案竞争。相反，AMD 将 MI355X 定位为与 NVIDIA 的风冷 HGX 解决方案竞争，但这并不是大多数客户所做的购买比较。
15. By 2H 2026, AMD’s MI450X rack-scale solution, if executed properly, could be competitive against Nvidia’s VR200 NVL144.  
	到 2026 年下半年，AMD 的 MI450X 机架级解决方案如果执行得当，可能会与 Nvidia 的 VR200 NVL144 竞争。
16. SemiAnalysis is expanding the AI engineering team! If you have an experience in PyTorch, training, inferencing, system modelling, SLURM/Kubernetes, send us your resume and 5 bullet points demonstrating your engineering excellence to [letsgo@semianalysis.com](https://semianalysis.com/2025/04/23/amd-2-0-new-sense-of-urgency-mi450x-chance-to-beat-nvidia-nvidias-new-moat/).  
	SemiAnalysis 正在扩展 AI 工程团队！如果您在 PyTorch、训练、推理、系统建模、SLURM/Kubernetes 方面有经验，请将您的简历和 5 个展示您工程卓越的要点发送至 letsgo@semianalysis.com。
17. AMD is hiring engineers across the whole software stack. Drop Anush a note at [anush+letsgo@amd.com](https://semianalysis.com/2025/04/23/amd-2-0-new-sense-of-urgency-mi450x-chance-to-beat-nvidia-nvidias-new-moat/).  
	AMD 正在招聘整个软件栈的工程师。请给 Anush 发个邮件，地址是 anush+letsgo@amd.com。

## What’s New Since our December AMD Article?自我们 12 月的 AMD 文章以来有什么新变化？

Hours after we dropped the AMD article, Lisa Su reached out to us to arrange a call with our engineering team to discuss in detail each of our findings and recommendations. The [very next day at 7am PT](https://x.com/dylan522p/status/1871287937268383867), we presented our findings to Lisa and walked her through our experience during the prior five months working with the AMD team to try to fix their software to carry out various workload benchmarks.  
在我们发布 AMD 文章后的几个小时，Lisa Su 与我们联系，安排与我们的工程团队进行电话会议，详细讨论我们的发现和建议。第二天早上 7 点（太平洋时间），我们向 Lisa 展示了我们的发现，并向她介绍了在过去五个月与 AMD 团队合作修复他们的软件以进行各种工作负载基准测试的经历。

We showed her dozens of bug reports our team submitted to our AMD engineering contacts. She was sympathetic to end users facing an unpleasant experience on ROCm and acknowledged the many gaps in the ROCm software stack. Furthermore, Lisa Su and her team expressed a strong desire for AMD to do better. To this end, for the next hour and a half, Lisa asked her engineering team and our engineers numerous detailed questions regarding our experience and our key recommendations.  
我们向她展示了我们团队提交给 AMD 工程联系人的数十个错误报告。她对面临 ROCm 不愉快体验的最终用户表示同情，并承认 ROCm 软件堆栈中存在许多缺陷。此外，Lisa Su 及其团队表达了 AMD 做得更好的强烈愿望。为此，在接下来的一个半小时里，Lisa 向她的工程团队和我们的工程师提出了许多关于我们的经验和关键建议的详细问题。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-1.-AMD-tweet-with-Lisa.png?resize=952%2C1024&ssl=1)

Source: X 来源：X

This tone shift from the top has resonated across the organization. **AMD is now in wartime mode**, it is addressing software gaps and is working hard on closing them. This is a huge change from when AMD’s PR department in 2024 *would not publicly acknowledge* any major issues with software.  
这种来自高层的语气转变在整个组织中产生了共鸣。AMD 现在处于战时模式，正在解决软件差距，并努力弥补这些差距。这与 AMD 在 2024 年时公关部门不会公开承认任何重大软件问题的情况相比，发生了巨大的变化。

In 2025 thus far, AMD has acknowledged that their software has way more bugs are than Nvidia currently but are rapidly improving and are engaging the community to bring ROCm to parity. In particular, Anush Elangovan, the AMD AI Software Tzar, has been active in tackling the issues at AMD.  
截至 2025 年，AMD 已承认他们的软件存在比 Nvidia 更多的错误，但正在迅速改进，并积极与社区合作以使 ROCm 达到平衡。特别是，AMD AI 软件负责人 Anush Elangovan 一直在积极解决 AMD 的问题。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-2.-Anush-Tweet.png?fit=1024%2C632&ssl=1)

Source: X 来源：X

## AMD’s Culture Shift – A Renewed Sense of UrgencyAMD 的文化转变 - 重新焕发的紧迫感

Acceptance is the final stage of grief. AMD has finally accepted its massive software gap and can now address its issues for its chance to beat NVIDIA in the software and hardware game. AMD has caught a second wind, [but Nvidia is still at an all-out sprint](https://nypost.com/2024/08/26/business/nvidia-employees-can-work-7-days-a-week-until-2-a-m-but-few-leave-because-of-ai-chip-giants-lavish-pay-report/), and AMD must match them and even outpace them to catch up. Nvidia’s staff clearly recognize that sometimes [extra hours are needed for Nvidia](https://nypost.com/2024/08/26/business/nvidia-employees-can-work-7-days-a-week-until-2-a-m-but-few-leave-because-of-ai-chip-giants-lavish-pay-report/) to continue to be a leader in a competitive market. For AMD to win, it needs to work at least as hard and smart as Nvidia if not harder and smarter. We see clear signs of this starting to happen.  
接受是悲伤的最后阶段。AMD 终于接受了其巨大的软件差距，现在可以解决其问题，以便在软件和硬件领域有机会击败 NVIDIA。AMD 重新焕发了活力，但 Nvidia 仍在全力冲刺，AMD 必须与他们匹敌，甚至超越他们以赶上。Nvidia 的员工显然认识到，有时需要额外的工作时间，以便 Nvidia 在竞争激烈的市场中继续保持领先地位。为了赢得胜利，AMD 需要至少与 Nvidia 一样努力和聪明，甚至更努力和更聪明。我们看到这一切开始发生的明确迹象。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-3.-Anush-Tweet.png?fit=1024%2C929&ssl=1)

Source: X 来源：X

There plenty of examples of the focused and hungry teams catching up. xAI vs OpenAI is an example of how a shift in culture to adopt a sense of urgency and take a wartime stance can lead to a company catching up with the competition at a ludicrous speed.  
有很多专注且渴望的团队追赶上来的例子。xAI 与 OpenAI 就是一个例子，说明文化的转变以采纳紧迫感并采取战时立场如何能使公司以惊人的速度赶上竞争对手。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-4.-Grok-AI.png?fit=1024%2C530&ssl=1)

Source: xAI 来源：xAI

We see many concrete examples that show this dynamic starting to play out at AMD. One area where AMD was executing is their product roadmap to achieve parity with Nvidia on rack-scale solutions. We explain our estimates of their rack-scale MI450X solution later in the article.  
我们看到许多具体例子表明这种动态在 AMD 开始显现。AMD 执行的一个领域是他们的产品路线图，以在机架规模解决方案上与 Nvidia 实现平价。我们将在文章后面解释他们的机架规模 MI450X 解决方案的估计。

Another example is AMD’s rapid progress on its AI software stack over the past four months. They have been showing significant improvements in both their [training](https://rocm.blogs.amd.com/artificial-intelligence/training_rocm_pt/README.html) and [inference performance](https://rocm.blogs.amd.com/artificial-intelligence/DeepSeekR1_Perf/README.html), as well as their out-of-the-box experience. [They even adopted SemiAnalysis code for their training benchmark](https://www.linkedin.com/feed/update/urn:li:activity:7292299941761187840).  
另一个例子是 AMD 在过去四个月中其 AI 软件堆栈的快速进展。他们在训练和推理性能以及开箱体验方面都显示出了显著的改善。他们甚至采用了 SemiAnalysis 代码作为他们的训练基准。

In January 2025, AMD launched its developer relations (devrel) function as it has finally understood that developers are what made Nvidia’s CUDA great and now acknowledges that winning over developers will be critical to the success of ROCm. Currently, the developer relations team is led by Anush Elangovan, who is acting as the sole devrel for AMD at in-person events as well as on [social media forums such as Tech Twitter](https://x.com/AnushElangovan).  
在 2025 年 1 月，AMD 推出了其开发者关系（devrel）职能，因为它终于明白开发者是让 Nvidia 的 CUDA 伟大的关键，现在承认赢得开发者对 ROCm 的成功至关重要。目前，开发者关系团队由 Anush Elangovan 领导，他在面对面活动以及社交媒体论坛如 Tech Twitter 上担任 AMD 的唯一 devrel。

AMD is going even further on the developer front. In June, AMD will launch a developer cloud focused on engaging with the overarching community. This is a direct result of SemiAnalysis’s suggestion for AMD to close the gap.  
AMD 在开发者方面更进一步。AMD 将于六月推出一个专注于与整体社区互动的开发者云。这是 SemiAnalysis 建议 AMD 缩小差距的直接结果。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-5.-Vamsi-quote.png?fit=1024%2C396&ssl=1)

Source: SemiAnalysis, AMD 来源：SemiAnalysis，AMD

AMD now beats Nvidia in the reproducibility of benchmarks and performance claims. AMD has started posting easy-to-follow instructions that allow users and developers to replicate their benchmarking runs instead of publishing unrealistic or biased performance claims that can’t be verified. A great example is how [AMD published a great blog on how to reproduce their MLPerf Inference 5.0 submission](https://rocm.blogs.amd.com/artificial-intelligence/reproducing-amd-mlperf-inference-submission/README.html). NVIDIA did not provide such instructions as part of the latest MLPerf exercise.  
AMD 现在在基准测试和性能声明的可重复性方面超过了 Nvidia。AMD 开始发布易于遵循的说明，允许用户和开发者复制他们的基准测试运行，而不是发布无法验证的不切实际或有偏见的性能声明。一个很好的例子是 AMD 发布了一篇关于如何重现他们的 MLPerf Inference 5.0 提交的优秀博客。NVIDIA 在最新的 MLPerf 练习中没有提供这样的说明。

## What Makes CUDA Great?CUDA 有什么优点？

CUDA’s greatest advantage isn’t just its internal software developers but also the ecosystem that includes 4 million external developers building on the CUDA platform, thousands of enterprises, and numerous AI Labs and startups. This creates a self‑reinforcing flywheel of tools, tutorials, and ready‑made kernels that lowers the barrier to adoption for every newcomer and keeps veterans moving fast. Due to this massive developer base, tribal knowledge is quickly shared with newcomers.  
CUDA 的最大优势不仅在于其内部软件开发人员，还在于包括 400 万外部开发人员在内的生态系统，这些开发人员在 CUDA 平台上进行开发，还有成千上万的企业以及众多的人工智能实验室和初创公司。这创造了一个自我强化的飞轮，提供工具、教程和现成的内核，降低了每个新手的采用门槛，并使老手能够快速前进。由于这个庞大的开发者基础，部落知识迅速与新手分享。

The result of this thriving ecosystem is that breakthrough ideas—whether new attention algorithms, state‑space models or high‑throughput serving engines—almost always appear on CUDA first, receive feedback sooner and get tuned harder on CUDA, which in turn attracts the next wave of developers.  
这个蓬勃发展的生态系统的结果是，突破性的想法——无论是新的注意力算法、状态空间模型还是高吞吐量服务引擎——几乎总是首先出现在 CUDA 上，获得更快的反馈，并在 CUDA 上进行更严格的调整，这反过来又吸引了下一波开发者。

The pay‑off from that collective energy is clear: when researchers publish a game‑changing kernel, the CUDA version typically launches day‑one. Tri Dao’s FlashAttention shipped reference CUDA code, and it took multiple quarters for ROCm to implement their own optimized attention. The selective‑state‑space model was the same, the authors only released a CUDA implementation but the authors themselves did not support or port it over to ROCm. The port of ROCm mamba was from AMD internal engineers and not the original authors. On the serving side, UC Berkeley’s vLLM and SGLang have their maintainers develop mainly on NVIDIA GPUs, and only after the CUDA path is stable do the maintainers then help AMD internal developers port to ROCm.  
这种集体能量的回报是显而易见的：当研究人员发布一个改变游戏规则的内核时，CUDA 版本通常会在第一天推出。Tri Dao 的 FlashAttention 发布了参考 CUDA 代码，而 ROCm 实现他们自己的优化注意力花费了多个季度。选择性状态空间模型也是如此，作者只发布了 CUDA 实现，但作者本人并没有支持或移植到 ROCm。ROCm mamba 的移植是由 AMD 内部工程师完成的，而不是原作者。 在服务端，UC Berkeley 的 vLLM 和 SGLang 的维护者主要在 NVIDIA GPU 上开发，只有在 CUDA 路径稳定后，维护者才会帮助 AMD 内部开发人员移植到 ROCm。

Another example is how bugs are discovered and patched faster thanks to the millions of external CUDA ecosystem developers. In contrast, on ROCm, it may take months before a bug is discovered, such as was the case with numerous bugs we discovered and reported last year. For example, ROCm’s torch.scaled\_dot\_product\_attention API in 2024. Attention is the most important layer in start of the art transformer models.  
另一个例子是，由于数百万外部 CUDA 生态系统开发者，错误被发现和修复的速度更快。相比之下，在 ROCm 上，发现一个错误可能需要几个月的时间，例如我们去年发现并报告的众多错误。比如，ROCm 的 torch.scaled\_dot\_product\_attention API 在 2024 年。注意力是最先进的变换器模型中最重要的层。

## Developers, Developers, Developers开发者，开发者，开发者

Since January 2025 AMD has been vocal about a developers first approach, echoing Steve Ballmer’s famous mantra and mirroring Jensen’s approach too. At [TensorWave’s “Beyond CUDA 2025” summit](https://www.youtube.com/watch?v=RAK3Ce0RXgM&ab_channel=TensorWave), Anush, AMD’s AI Software Tzar, framed ROCm’s future with three words—“ [**developers, developers, developers”**](https://www.youtube.com/watch?v=Vhh_GeBPOhs&ab_channel=MrWueb007) We believe this developers-first approach and messaging will be amplified on a broader stage at AMD’s June keynote event. AMD has finally understood that what made CUDA unbeatable was not just great silicon but a swarm of external developers. We feel extremely positive about AMD’s new developers-first approach.  
自 2025 年 1 月以来，AMD 一直在强调以开发者为先的方法，呼应了史蒂夫·巴尔默的著名口号，并且也反映了詹森的做法。在 TensorWave 的“超越 CUDA 2025”峰会上，AMD 的 AI 软件负责人 Anush 用三个词框定了 ROCm 的未来——“开发者，开发者，开发者”。我们相信这种以开发者为先的方法和信息将在 AMD 6 月的主题演讲中得到更广泛的传播。AMD 终于明白，CUDA 之所以无与伦比，不仅仅是因为出色的硅芯片，还有一大批外部开发者。我们对 AMD 的新开发者优先方法感到非常积极。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-6.-developers.gif?resize=240%2C180&ssl=1)

Source: Microsoft 来源：微软

In January 2025, Anush took this developers-first approach by engaging with external ROCm developers on Tech Twitter & GitHub collecting feedback, being customer support whenever ROCm craps out (which is often), and personally answering questions. This hands‑on engagement is real progress, but AMD’s developer relations still runs on a skeleton crew; aside from Anush, AMD has basically zero full‑time dev‑rel engineers. AMD has started hiring [full time developer relations engineers](https://careers.amd.com/careers-home/jobs/63017?lang=en-us), but to close the gap with NVIDIA’s army of evangelists, the company will need at least 20+ devrel engineers that host regular in‑person hackathons and meetups.  
在 2025 年 1 月，Anush 采取了这种以开发者为先的方式，通过在 Tech Twitter 和 GitHub 上与外部 ROCm 开发者互动，收集反馈，成为 ROCm 出现问题时的客户支持（这种情况经常发生），并亲自回答问题。这种亲身参与是真正的进展，但 AMD 的开发者关系仍然由一支骨干团队运作；除了 Anush，AMD 基本上没有全职的开发者关系工程师。AMD 已经开始招聘全职开发者关系工程师，但为了缩小与 NVIDIA 的宣传团队之间的差距，公司需要至少 20 名以上的开发者关系工程师，定期举办面对面的黑客马拉松和聚会。

NVIDIA’s annual GTC developer conference, *“Super Bowl of AI”* packs more than 500 developer focused deep‑dive sessions and hands‑on labs into a single week. Those tracks—covering every layer of the stack from PyTorch to JAX to CUTLASS to CUDA C++ to Assembly to profiling tools —give external developers a reliable place to learn and push the frontier.  
NVIDIA 每年的 GTC 开发者大会，“人工智能的超级碗”，在一周内安排了超过 500 个面向开发者的深度研讨会和实践实验室。这些课程涵盖了从 PyTorch 到 JAX，再到 CUTLASS、CUDA C++、汇编语言和性能分析工具的每一层堆栈，为外部开发者提供了一个可靠的学习和推动前沿的地方。

AMD, by contrast, still lacks a GTC style developer conference that has many developer focused sessions. The company’s June “Advancing AI” event will be great for roadmap reveals, but the event is essentially a few product keynotes plus a handful of prerecorded talks—nowhere near the multi‑track developer sessions, code‑lab depth developers get at GTC. If AMD is serious about its new developer‑first stance, it should launch an annual, in‑person ROCm Developer Conference: three to four days of parallel tracks that cover kernel authoring, graph compilers, HIP/Triton migration, MI300 cluster tuning, and real‑time debugging with the ROCm toolchain. Pair those talks with on‑site hackathons run by a beefed‑up (20‑plus‑strong) devrel team and follow‑up regional roadshows, and ROCm users would finally have a venue to share war stories, surface blocking bugs, and build the social fabric that made GTC indispensable to the CUDA community.  
与此相比，AMD 仍然缺乏一个 GTC 风格的开发者大会，后者有许多以开发者为中心的会议。该公司的 6 月“推进 AI”事件将非常适合路线图的揭示，但该事件本质上只是几个产品主题演讲加上一些预录的演讲——远不及 GTC 上多轨道的开发者会议和代码实验室的深度。如果 AMD 认真对待其新的以开发者为首的立场，它应该启动一个年度的、面对面的 ROCm 开发者大会：为期三到四天的平行会议，涵盖内核编写、图形编译器、HIP/Triton 迁移、MI300 集群调优以及使用 ROCm 工具链的实时调试。将这些演讲与由增强的（20 人以上）开发者关系团队主办的现场黑客马拉松和后续的区域路演结合起来，ROCm 用户最终将有一个分享战斗故事、发现阻塞错误以及建立社交网络的场所，这使得 GTC 对 CUDA 社区不可或缺。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-7.-CUDA-developer-session.png?fit=1024%2C562&ssl=1)

Source: NVIDIA 来源：NVIDIA

Although George Hotz could have settled for AMD’s earlier offer of cloud‑hosted MI300X systems with full BMC access, he insisted on physical hardware so he could *“hack the metal”* directly. AMD initially balked—even though Hotz’s goal was to help open‑source tooling on their GPUs. The stalemate turned into a public spectacle when the widely respected PyTorch co‑creator, Soumith Chintala, tweeted in support of Geohotz receiving the physical boxes.  
尽管乔治·霍茨本可以接受 AMD 早期提供的具有完整 BMC 访问权限的云托管 MI300X 系统，但他坚持要物理硬件，以便能够“直接破解金属”。AMD 最初对此感到犹豫——尽管霍茨的目标是帮助在他们的 GPU 上开源工具。僵局在广受尊敬的 PyTorch 联合创始人 Soumith Chintala 在推特上支持 Geohotz 获得物理设备时变成了一场公众盛事。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-8.-Chintala-Tweet.png?fit=1024%2C519&ssl=1)

Source: X 来源：X

We believe that this nudge worked, and a [Geohotz March 8 blog](https://geohot.github.io/blog/jekyll/update/2025/03/08/AMD-YOLO.html) revealed that AMD had relented, sending him the two MI300X boxes. With this, AMD finally passed *Geohotz’s “cultural test.”* For AMD, this is arguably a bigger reputational coup than a technical one—shipping real silicon to a high‑profile hacker signals a newfound, developer‑first ethos that marketing dollars alone can’t buy, and it finally turns a bruising Twitter saga into a story demonstrating AMD’s new developer-first ethos.  
我们相信这个推动有效，Geohotz 3 月 8 日的博客透露，AMD 已经让步，向他发送了两个 MI300X 盒子。通过这一点，AMD 终于通过了 Geohotz 的“文化测试”。对 AMD 来说，这无疑是一个比技术上的更大的声誉胜利——向一位高知名度的黑客发货真实的硅片，传达了一种新的以开发者为先的理念，这不是仅靠营销资金所能买到的，并且它最终将一场痛苦的 Twitter 传奇转变为展示 AMD 新开发者优先理念的故事。

In addition to sending Geohotz boxes, we believe that AMD can also score another easy reputation and marketing win by donating physical AMD GPU boxes to academic labs. [Jensen & Ian Buck has had a long history of donating GPUs to academics labs even going back as far as 2014](https://x.com/haozhangml/status/1914439713332863348?s=46). This year, Jensen continues to supporting academics labs such as [CMU’s Catalyst Labs](https://x.com/scsatcmu/status/1912910889566490821?s=46), [Berekely’s Sky labs](https://x.com/vllm_project/status/1893001644037566610), [UCSD’s HaoAI Lab](https://x.com/haoailab) and others for some time by donating physical gold plated B200 boxes to them in addition to providing free cloud access to NVIDIA GPUs.  
除了发送 Geohotz 盒子，我们相信 AMD 还可以通过向学术实验室捐赠实体 AMD GPU 盒子来获得另一个轻松的声誉和市场营销胜利。Jensen 和 Ian Buck 在向学术实验室捐赠 GPU 方面有着悠久的历史，甚至可以追溯到 2014 年。今年，Jensen 继续支持学术实验室，如 CMU 的 Catalyst Labs、Berekely 的 Sky Labs、UCSD 的 HaoAI Lab 等，向他们捐赠实体镀金 B200 盒子，并提供免费的 NVIDIA GPU 云访问。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-9.-CMU-Tweet.png?fit=1020%2C932&ssl=1)

Source: X 来源：X

## Continuous Integration / Continuous Deployment (CI/CD)持续集成 / 持续部署 (CI/CD)

Before SemiAnalysis published the AMD article in December, [AMD had zero MI300X participating in PyTorch CI/CD](https://x.com/AnushElangovan/status/1877342554842345479). AMD has since added MI300 into PyTorch CI/CD. AMD had been well known for providing buggy software – adding MI300 into PyTorch CI will go a long way towards this effort of continuing to rid AMD’s software of bugs!  
在 SemiAnalysis 于 12 月发布 AMD 文章之前，AMD 在 PyTorch CI/CD 中没有参与 MI300X。此后，AMD 已将 MI300 添加到 PyTorch CI/CD 中。AMD 一直以提供有缺陷的软件而闻名——将 MI300 添加到 PyTorch CI 将大大推动消除 AMD 软件中的错误的努力！

Previously, AMD’s did not want to spend money on investing in CI/CD resources, but we believe that this stance has changed over the past four months. At the ROCm SF developer meetup events, an AMD software engineer walked up to us, thanked us, and told us that they now have CI resources due to our efforts.  
之前，AMD 不想在 CI/CD 资源上花钱，但我们相信这种立场在过去四个月中发生了变化。在 ROCm SF 开发者见面会上，一位 AMD 软件工程师走到我们面前，感谢我们，并告诉我们他们现在有了 CI 资源，这要归功于我们的努力。

In addition to unit test CI, AMD has also enabled MI300 on TorchInductor Performance CI such that [performance is tracked in inductor /torch.compile commit](https://x.com/AnushElangovan/status/1884727132477382915). NVIDIA has only provided the A100 in this CI and has not even provided any H100s or B200s for torchinductor perf CI. For this specific compile CI, AMD is ahead of NVIDIA. However – there is still much progress to be had as AMD’s dynamic shapes torch.compile is only at a 77% pass rate compared to Nvidia’s 90%+.  
除了单元测试 CI，AMD 还在 TorchInductor 性能 CI 上启用了 MI300，以便在 inductor/torch.compile 提交中跟踪性能。NVIDIA 在此 CI 中仅提供了 A100，甚至没有提供任何 H100 或 B200 用于 torchinductor 性能 CI。在这个特定的编译 CI 中，AMD 领先于 NVIDIA。然而，仍然有很大的进步空间，因为 AMD 的动态形状 torch.compile 的通过率仅为 77%，而 Nvidia 的通过率超过 90%。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-12.-PyTorch.png?fit=1024%2C559&ssl=1)

Source: PyTorch 来源：PyTorch

AMD should build on this progress by open sourcing and making all of their CI/CD and dashboards publicly accessible such that anyone can see the pass rate of AMD’s software across all ROCm libraries (HipBLASLt, Sglang, vLLM,TransformerEngine, etc). [Currently, the only publicly accessible ROCm CI for their ML libraries is PyTorch](https://hud.pytorch.org/benchmark/compilers).  
AMD 应该在此基础上进一步发展，开源并使其所有的 CI/CD 和仪表板公开可访问，以便任何人都可以查看 AMD 软件在所有 ROCm 库（HipBLASLt、Sglang、vLLM、TransformerEngine 等）中的通过率。目前，唯一公开可访问的 ROCm CI 是他们的 ML 库 PyTorch。

## Upcoming Community Developer Cloud即将推出的社区开发者云

One of the reasons that Google’s TPU was able to gain external developer adoption was due to TPU’s free Colab access and because it provided large cluster access via [TPU Research Cloud](https://sites.research.google/trc/about/) (TRC). This allowed the community quick and free access, enabling many interesting projects as shown in [TRC’s spotlight](https://sites.research.google/trc/spotlight/) and [the many papers published as part of TRC](https://sites.research.google/trc/publications/). In fact, in 2020, well before the ChatGPT moment, a high schooler was able to train a model that was competitive with GPT-2 on a relatively giant TPU pod for free. In addition to providing plenty of smaller 8-16 chip pods, TRC also regularly provides free 1-2-week access to 1000+ chip pods to researchers.  
谷歌的 TPU 能够获得外部开发者采用的原因之一是 TPU 提供了免费的 Colab 访问，并且通过 TPU Research Cloud (TRC)提供了大型集群访问。这使得社区能够快速且免费地访问，从而启用了许多有趣的项目，如 TRC 的聚光灯和作为 TRC 一部分发布的许多论文所示。事实上，在 2020 年，远在 ChatGPT 时刻之前，一名高中生能够在一个相对巨大的 TPU pod 上免费训练出与 GPT-2 竞争的模型。除了提供大量较小的 8-16 芯片 pod 外，TRC 还定期向研究人员提供 1000+芯片 pod 的免费 1-2 周访问。

The [famous open source GPT-J model](https://arankomatsuzaki.wordpress.com/2021/06/04/gpt-j/) was also trained on TPUs for free leading to an complete open repo about how to use TPUs with JAX and furthering external community adoption of TPUs. TRC has been wildly successful at promoting the TPU and supporting the open-source community.  
著名的开源 GPT-J 模型也在 TPU 上免费训练，导致了一个关于如何使用 TPU 与 JAX 的完整开放仓库，并进一步推动了外部社区对 TPU 的采用。TRC 在推广 TPU 和支持开源社区方面取得了巨大的成功。

AMD’s developer cloud plans essentially take a page out of Google’s book. We believe that if AMD properly invests in enough GPUs for this developer cloud program such that its GPUs easily and freely accessible, AMD’s developer cloud will be able to help it broaden adoption of its GPUs. This is a key battle AMD must win in its race against NVIDIA.  
AMD 的开发者云计划基本上借鉴了谷歌的做法。我们相信，如果 AMD 为这个开发者云项目适当投资足够的 GPU，使其 GPU 易于且自由地访问，AMD 的开发者云将能够帮助其扩大 GPU 的采用。这是 AMD 在与 NVIDIA 竞争中必须赢得的关键战役。

**The metric for success is if an GPT-J moment happens on their AMD’s community developer cloud.  
成功的标准是是否在他们的 AMD 社区开发者云上发生 GPT-J 时刻。**

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-12.1-Vamsi-quote.png?fit=1024%2C396&ssl=1)

Source: SemiAnalysis, AMD 来源：SemiAnalysis，AMD

## AMD Management’s Blind Spot – AMD AI Software Engineer CompensationAMD 管理层的盲点 - AMD AI 软件工程师薪酬

AMD faces a critical challenge in its AI software division due to non-competitive compensation, significantly impacting its ability to attract and retain top talent. Other companies that are known for developing great AI software pay significantly better than AMD.  
AMD 在其人工智能软件部门面临着一个关键挑战，原因是薪酬不具竞争力，这严重影响了其吸引和留住顶尖人才的能力。其他以开发优秀人工智能软件而闻名的公司支付的薪酬远高于 AMD。

While compensation isn’t everything, it remains a significant factor influencing engineers’ decisions. Engineers often evaluate career opportunities based on multiple factors, including technical challenges, workplace culture, and growth opportunities. However, competitive compensation remains critical, particularly in highly specialized fields such as AI software engineering.  
虽然薪酬不是一切，但它仍然是影响工程师决策的重要因素。工程师通常根据多个因素评估职业机会，包括技术挑战、工作场所文化和成长机会。然而，竞争性的薪酬仍然至关重要，特别是在像人工智能软件工程这样的高度专业化领域。

It is well known amongst AI engineers that the total compensation packages at AMD, which include base salary, RSUs (Restricted Stock Units), and bonuses, lag considerably behind competitors like NVIDIA, Tesla Dojo, [OpenAI Chip Team](https://openai.com/careers/hardwaresoftware-co-design-engineer/), Google TPU, and xAI, etc.  
在人工智能工程师中，众所周知，AMD 的总薪酬方案，包括基本工资、RSU（限制性股票单位）和奖金，远远落后于竞争对手，如 NVIDIA、Tesla Dojo、OpenAI Chip Team、Google TPU 和 xAI 等。

In conversations with top AI software engineers about why they chose not to join AMD, many highlighted that working at AMD software feels like working on porting features that NVIDIA engineers developed two years earlier. In contrast, NVIDIA provides engineers with the opportunity to work on cutting-edge software and to build software for chips used in state-of-the-art models like o3, for both training and inference.  
在与顶级人工智能软件工程师的对话中，许多人强调选择不加入 AMD 的原因是，在 AMD 软件工作感觉像是在移植 NVIDIA 工程师两年前开发的功能。相比之下，NVIDIA 为工程师提供了在前沿软件上工作的机会，并为用于最先进模型（如 o3）的芯片构建软件，涵盖训练和推理。

Additionally, engineers attracted to the “David” in a “David vs Goliath” scenario often choose Google TPU or the [OpenAI Chip team](https://openai.com/careers/hardwaresoftware-co-design-engineer/) over AMD. These teams offer significantly better compensation and arguably have a higher probability of success in competing against NVIDIA due to those companies having giant volume of internal workloads to be their own customers. This makes them more appealing options for ambitious engineers.  
此外，吸引那些在“戴维与歌利亚”场景中选择“戴维”的工程师，往往会选择谷歌 TPU 或 OpenAI 芯片团队而非 AMD。这些团队提供显著更好的薪酬，并且由于这些公司拥有巨大的内部工作量作为自己的客户，竞争 NVIDIA 的成功概率也更高。这使得它们对有抱负的工程师更具吸引力。

AMD’s internal benchmarking of their compensation structure appears to cherry pick comparable companies. By benchmarking against semiconductor companies that aren’t known for great software such as Juniper Networks, Cisco, and ARM, AMD may mistakenly perceive their compensation as competitive. However, when correctly benchmarked against companies renowned for AI software such as GPU kernels, GEMMs, PyTorch internals, distributed training infrastructure, and inference engines—the gap in pay becomes glaringly apparent.  
AMD 内部对其薪酬结构的基准测试似乎选择了可比公司。通过与不以优秀软件著称的半导体公司（如 Juniper Networks、Cisco 和 ARM）进行基准测试，AMD 可能错误地认为其薪酬具有竞争力。然而，当与以 AI 软件著称的公司（如 GPU 内核、GEMMs、PyTorch 内部、分布式训练基础设施和推理引擎）进行正确的基准测试时，薪酬差距变得显而易见。

When conducting a proper apples-to-apples comparison, for example, comparing an NVIDIA PyTorch Lead to AMD’s PyTorch Lead or NVIDIA’s NCCL engineers to AMD’s RCCL engineers, NVIDIA pays significantly better and thus is able to attract and retain top talent.  
在进行适当的同类比较时，例如，将 NVIDIA 的 PyTorch 负责人与 AMD 的 PyTorch 负责人进行比较，或将 NVIDIA 的 NCCL 工程师与 AMD 的 RCCL 工程师进行比较，NVIDIA 的薪酬显著更高，因此能够吸引和留住顶尖人才。

This issue represents a critical blind spot in AMD management’s strategy. We think that AMD understands how essential software engineers are to AMD’s long-term competitiveness and innovation and wants to place them at the core of their strategy, but we think the blind spot comes from inaccurate benchmarking and attempting to make comparisons in broad strokes – a fog of war, as it were. This unfortunately has resulted in a persistent undervaluation of software which risks further exacerbating the company’s weaker software capabilities relative to its direct competitors.  
这个问题代表了 AMD 管理层战略中的一个关键盲点。我们认为 AMD 理解软件工程师对其长期竞争力和创新的重要性，并希望将他们置于战略的核心，但我们认为盲点来自于不准确的基准测试和试图进行粗略比较——可以说是一种战争迷雾。不幸的是，这导致了对软件的持续低估，这可能进一步加剧公司相对于直接竞争对手的软件能力较弱的问题。

AMD should keep AI software engineering base salaries stable but implement substantial increases in RSUs. By tying engineer compensation more closely to AMD’s future growth and, the company can more directly align the interests of their top talent with long-term organizational performance.  
AMD 应保持 AI 软件工程师的基本工资稳定，但应大幅增加 RSU。通过将工程师的薪酬与 AMD 的未来增长更紧密地联系起来，公司可以更直接地将其顶尖人才的利益与长期组织绩效对齐。

Given AMD’s financial position with over $5 billion in cash reserves, the company possesses ample capacity to invest strategically in software talent. Leadership must now decide to prioritize retaining and attracting high-caliber engineers through meaningful compensation enhancements. Without taking such action, AMD risks perpetuating its lag behind NVIDIA, undermining its progress in the rapidly evolving AI market.  
鉴于 AMD 的财务状况拥有超过 50 亿美元的现金储备，公司具备充足的能力在软件人才方面进行战略投资。领导层现在必须决定优先通过有意义的薪酬提升来留住和吸引高素质的工程师。如果不采取这样的行动，AMD 将面临在 NVIDIA 后面持续滞后的风险，削弱其在快速发展的 AI 市场中的进展。

AMD’s internal development clusters have seen significant improvements over the past four months, yet these enhancements still fall short of what is needed to compete effectively in the long-term GPU development landscape.  
AMD 的内部开发集群在过去四个月中取得了显著改善，但这些提升仍然不足以在长期 GPU 开发领域有效竞争。

Currently, AMD claims to have rented an aggregate capacity of ~8,000 MI300 GPUs from CSPs distributed across several clusters and it claims that among this, the largest single cluster contains about 2,000 MI300 GPUs. However, deeper examination suggests the realistic consistent availability may be closer to 3,000 to 4,000 GPUs in aggregate across the whole company as AMD internally operates on a burst model. Internal developers now have adequate access to single-node development resources, but multi-node and comprehensive cluster development remain constrained. This limitation severely impacts larger-scale projects and collaborative development efforts, and there is still a need for a substantial increase in absolute quantity and consistency of GPU availability.  
目前，AMD 声称已从多个集群的 CSP 租用了约 8,000 个 MI300 GPU，并声称其中最大的单个集群包含约 2,000 个 MI300 GPU。然而，深入检查表明，整个公司的实际可用数量可能更接近 3,000 到 4,000 个 GPU，因为 AMD 内部采用的是突发模型。内部开发人员现在可以充分访问单节点开发资源，但多节点和综合集群开发仍然受到限制。这一限制严重影响了大规模项目和协作开发的努力，并且仍然需要在 GPU 可用性的绝对数量和一致性上有显著增加。

Moreover, with the new industry-standard approach of datacenter-scale disaggregated prefill optimization for inferencing, even developing inference solutions now requires resources at the cluster scale. AMD’s current limited cluster level resources for individual internal developers further complicates its ability to effectively innovate and compete in this evolving landscape.  
此外，随着数据中心规模的分散预填优化的新行业标准方法，甚至开发推理解决方案现在也需要集群规模的资源。AMD 目前对个别内部开发者的有限集群级资源进一步复杂化了其在这一不断发展的环境中有效创新和竞争的能力。

A major impediment to further expansion and innovation at AMD is the short-term, burst-oriented model for procurement of clusters for internal use, with most contracts lasting less than a year. This contrasts starkly with NVIDIA’s strategy, which employs persistent, multi-year cluster deployments, giving engineers greater freedom to pursue creative and high-risk projects without continuous oversight from financial controllers. NVIDIA, for example, operates extensive internal GPU resources including the A100 Selene cluster with thousands of GPUs, two EOS clusters (one with 4,600 H100 GPUs and another with 11,000 H100 GPUs) alongside dozens of smaller 64-1024 sized H100/H200 clusters located both on-premises and rented from cloud providers such as OCI, Azure, CoreWeave, and Nebius, etc. The massive scale of the GB200 clusters they will get this year. The above numbers also exclude the billions of dollars of clusters for DGX Cloud that they have.  
AMD 进一步扩展和创新的一个主要障碍是短期、突发导向的内部集群采购模式，大多数合同持续时间不到一年。这与 NVIDIA 的战略形成鲜明对比，后者采用持久的多年集群部署，使工程师能够在没有财务控制者持续监督的情况下，追求创造性和高风险的项目。例如，NVIDIA 运营着广泛的内部 GPU 资源，包括拥有数千个 GPU 的 A100 Selene 集群、两个 EOS 集群（一个有 4,600 个 H100 GPU，另一个有 11,000 个 H100 GPU），以及数十个规模在 64-1024 的 H100/H200 集群，这些集群位于本地和从云服务提供商如 OCI、Azure、CoreWeave 和 Nebius 等租赁。它们今年将获得的 GB200 集群的规模巨大。上述数字还不包括他们为 DGX Cloud 拥有的数十亿美元的集群。

AMD’s current setup, where each GPU hour effectively carries a direct profit-and-loss consideration, discourages essential exploratory projects and strategic long-term developments.  
AMD 目前的设置，使得每个 GPU 小时实际上都带有直接的盈亏考量，这抑制了必要的探索性项目和战略性长期发展。

AMD must urgently pivot from its current sub-year cluster strategy toward signing long-term, multi-year commitments, and it should specifically invest in a substantial cluster of 10,000+ flagship class GPUs. Such a commitment would demonstrate AMD’s dedication to each GPU generation, like NVIDIA’s robust, long-term software and hardware support spanning multiple years for every GPU generation. The existing burst model is significantly damaging AMD’s internal development efforts and limiting innovation potential. Transitioning to a sustained, multi-year investment approach will enable AMD to pursue strategic innovation and competitive advantage effectively.  
AMD 必须紧急从当前的年度集群策略转向签署长期的、多年的承诺，并且应该特别投资于一个超过 10,000 个旗舰级 GPU 的大型集群。这种承诺将展示 AMD 对每一代 GPU 的投入，就像 NVIDIA 对每一代 GPU 提供的强大、长期的软件和硬件支持一样，跨越多个年份。现有的突发模式正在严重损害 AMD 的内部开发工作，并限制创新潜力。转向持续的、多年的投资方式将使 AMD 能够有效地追求战略创新和竞争优势。

With over $5 billion in available cash reserves, AMD clearly has the financial flexibility to shift toward a more strategic, long-term investment approach. The current short-sighted focus on quarterly earnings compromises AMD’s capacity for future innovation and development leadership. Adopting a multi-year commitment to GPU generations would significantly enhance long-term support, aligning AMD’s internal capabilities more closely with customer expectations. This strategic adjustment would also reassure customers regarding AMD’s commitment to sustained support and innovation, thereby strengthening market confidence and long-term partnerships.  
凭借超过 50 亿美元的现金储备，AMD 显然具备向更具战略性、长期投资方法转变的财务灵活性。目前对季度收益的短视关注妨碍了 AMD 未来创新和发展领导力的能力。采取对 GPU 世代的多年承诺将显著增强长期支持，使 AMD 的内部能力与客户期望更紧密地对齐。这一战略调整还将向客户保证 AMD 对持续支持和创新的承诺，从而增强市场信心和长期合作关系。

## ROCm’s Lack of First-Class Python SupportROCm 对一流 Python 支持的缺乏

Making the entire CUDA ecosystem a first-class experience on Python has been a top priority for NVIDIA for the past 12 months. None other than Jensen himself is personally looped in and managing this effort. In the 2010s, Jensen was the first to understand that investing into making CUDA software great for AI would pay dividends. In 2025, Jensen’s key insight is to now understand that the de facto language of AI is Python, and that supporting every layer of NVIDIA’s current C++ CUDA stack into the Python world will yield a high return on investment. AT GTC this year, NVIDIA released dozens of Python libraries from GEMM libraries like nvmath-python libraries to cuda.binding cuBLASLt bindings to kernel DSLs like cuTile, Warp, Triton, CuTe Python. Unfortunately, ROCm libraries support in Python is nowhere near what NVIDIA has. **NVIDIA has a python interface at every layer of the stack. AMD does not offer this.**  
在过去的 12 个月里，使整个 CUDA 生态系统在 Python 上成为一流体验一直是 NVIDIA 的首要任务。连 Jensen 本人都亲自参与并管理这一工作。在 2010 年代，Jensen 是第一个意识到投资于使 CUDA 软件在 AI 领域出色将会带来回报的人。到 2025 年，Jensen 的关键洞察是现在要理解 AI 的事实标准语言是 Python，并且将 NVIDIA 当前的 C++ CUDA 堆栈的每一层支持到 Python 世界中将带来高投资回报。今年在 GTC 上，NVIDIA 发布了数十个 Python 库，从 GEMM 库如 nvmath-python 库到 cuda.binding cuBLASLt 绑定，再到像 cuTile、Warp、Triton、CuTe Python 这样的内核 DSL。不幸的是，ROCm 库在 Python 中的支持远不及 NVIDIA。NVIDIA 在堆栈的每一层都有 Python 接口，而 AMD 并没有提供这一点。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-13.-CUDA-Accelerated-Python.png?fit=1024%2C557&ssl=1)

Source: NVIDIA 来源：NVIDIA

By supporting Python first class in CUDA, end users can spend less time to get the same performance or spend the same amount of time to get even better performance. CUDA Python effectively shifts the pareto frontier curve on “Performance of Application versus Time Spent Optimizing”  
通过在 CUDA 中支持 Python 一流，最终用户可以花更少的时间获得相同的性能，或者花相同的时间获得更好的性能。CUDA Python 有效地移动了“应用性能与优化时间”之间的帕累托前沿曲线。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-14.-CUDA-Ecosystem.png?fit=1024%2C596&ssl=1)

Source: NVIDIA 来源：NVIDIA

To use a simple example, previously if a developer wanted to call cuBLASLt with a custom epilogue, they would need to write a C++ extension and then Pybind it to Python which is a bit convolved and adds another layer of indirection that an ML engineer needs to worry about. Now with nvmath-python, the same task can now be carried out and automatically tuned with just 3 python lines**. The task is now turned from a 30-minute task to a 2-minute one.** These NVIDIA Python libraries aren’t just half-baked bindings, they are first-class implementations with performance top of mind.  
为了使用一个简单的例子，以前如果开发者想要使用自定义尾声调用 cuBLASLt，他们需要编写一个 C++ 扩展，然后将其绑定到 Python，这有点复杂，并增加了一个机器学习工程师需要担心的间接层。现在使用 nvmath-python，相同的任务现在只需 3 行 Python 代码即可完成并自动调优。这个任务的时间从 30 分钟缩短到了 2 分钟。这些 NVIDIA Python 库不仅仅是半成品的绑定，它们是以性能为核心的第一流实现。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-15.-Nv-math-Python.png?fit=1024%2C547&ssl=1)

Source: NVIDIA 来源：NVIDIA

In another example, with the cuda.cooperative device side library, one can now access speed of light CUDA prebuilt algorithms such as block reduce through a python interface. This level of performance was previously only available in C++ CUDA through [CUB](https://docs.nvidia.com/cuda/cub/index.html).  
在另一个例子中，使用 cuda.cooperative 设备端库，现在可以通过 Python 接口访问光速 CUDA 预构建算法，例如块归约。这个性能水平之前仅在 C++ CUDA 中通过 CUB 可用。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-16.-CUDA-cooperative.png?fit=1024%2C559&ssl=1)

Source: NVIDIA 来源：NVIDIA

For end users that want 1:1 Python bindings instead of higher order Pythonic libraries, NVIDIA also offers this through cuda.binding and cuda.core. **NVIDIA has a python interface at every layer of the stack. AMD does not offer this.**  
对于希望使用 1:1 Python 绑定而不是更高阶 Python 库的最终用户，NVIDIA 也通过 cuda.binding 和 cuda.core 提供此功能。NVIDIA 在堆栈的每一层都有 Python 接口。AMD 不提供此功能。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-17.-Python-Interfaces.png?fit=1024%2C614&ssl=1)

Source: NVIDIA 来源：NVIDIA

AMD has launched recently python interfaces for [AITER](https://github.com/ROCm/aiter) which is the equivalent of cuDNN-python and supports OAI triton for kernel authoring but the rest of the layers of the stack, ROCm has no comparable product and they aren’t even thinking about supporting a first-class python experience yet.  
AMD 最近推出了 AITER 的 Python 接口，相当于 cuDNN-python，并支持 OAI triton 进行内核创作，但栈的其余层次中，ROCm 没有可比的产品，他们甚至还没有考虑支持一流的 Python 体验。

## Python GPU Kernel Authoring DSLsPython GPU 内核创作 DSLs

At GTC 2025, in addition to debuting the overall Python CUDA libraries, NVIDIA also announced Python kernel authoring DSLs – namely Python CuTe 4.0, cuTile Python and Warp. And this is on top of Nvidia’s existing Triton DSL support! **AMD is lacking and uncompetitive in the Python Kernel DSLs space to the extent that Nvidia teams are now competing against each other with multiple different NVIDIA DSLs now publicly launched**. There are currently five different NVIDIA python DSLs (OAI Triton, CuTe Python, cuTile Python, Numba, Warp), with many more that are internally in the works that they haven’t announced publicly yet.  
在 GTC 2025 上，除了首次推出整体 Python CUDA 库外，NVIDIA 还宣布了 Python 内核创作 DSL，即 Python CuTe 4.0、cuTile Python 和 Warp。这是在 Nvidia 现有的 Triton DSL 支持基础上进行的！AMD 在 Python 内核 DSL 领域缺乏竞争力，以至于 Nvidia 团队现在在多个不同的 NVIDIA DSL 之间相互竞争，这些 DSL 现在已经公开发布。目前有五种不同的 NVIDIA Python DSL（OAI Triton、CuTe Python、cuTile Python、Numba、Warp），还有许多正在内部开发中尚未公开宣布的。

Python kernel DSLs can be categorized into two types based on the abstraction unit. Programmers describe single-thread behaviors in thread-based languages, while in tile-based languages, they describe operations on partitions of matrices.  
Python 内核 DSL 可以根据抽象单元分为两种类型。程序员在基于线程的语言中描述单线程行为，而在基于块的语言中，他们描述对矩阵分区的操作。

CuTe Python is NVIDIA’s recommended path for writing speed-of-light kernels in for thread-based Python kernel DSLs. It provides low-level primitives as building blocks for custom kernels, and it uses a powerful abstraction cuTe (CUDA Tensor) to describe data and thread layouts. CUTLASS Python’s API design is based on CUTLASS, so new users can leverage CUTLASS’s extensive documentation of concepts and usage to get up to speed. While AMD has a CUTLASS-analogous C++ library CK (Composable Kernel), its documentation on concepts and usage is comparatively sparse and unclear. CK Python interface is coming for their high-level interfaces but none in the works for their CuTe-analogous atom layer.  
CuTe Python 是 NVIDIA 推荐的用于编写光速内核的线程基础 Python 内核 DSL 的路径。它提供了低级原语作为自定义内核的构建块，并使用强大的抽象 cuTe（CUDA 张量）来描述数据和线程布局。CUTLASS Python 的 API 设计基于 CUTLASS，因此新用户可以利用 CUTLASS 的广泛文档来了解概念和用法，以快速上手。虽然 AMD 有一个与 CUTLASS 类似的 C++ 库 CK（可组合内核），但其关于概念和用法的文档相对稀少且不清晰。CK Python 接口正在为其高级接口开发，但尚未为其 CuTe 类似的原子层开发。

**More importantly, AMD in general currently has no Python DSLs for thread-based kernel programming which is needed for speed of light.  
更重要的是，AMD 目前普遍没有用于线程基础内核编程的 Python DSL，这对于光速是必需的。**

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-18.-Cutlass-in-Python.png?fit=1024%2C400&ssl=1)

Source: NVIDIA 来源：NVIDIA

For Tile Based and SIMT based as well as hybrid Tile/SIMT mixed based kernel authoring Python DSLs, NVIDIA announced cuTile at GTC 2025. cuTile is not meant for 100% speed of light performance but is meant for 98% speed of light performance at 10% the time to write the kernel. It is relatively easy to write kernels in cuTile**. Unfortunately, AMD has no offering for hybrid SIMT/Tile based python kernels DSLs.**  
对于基于瓦片和 SIMT 以及混合瓦片/SIMT 的内核编写 Python DSL，NVIDIA 在 GTC 2025 上宣布了 cuTile。cuTile 并不是为了实现 100%的光速性能，而是旨在以 10%的时间编写内核实现 98%的光速性能。在 cuTile 中编写内核相对容易。不幸的是，AMD 没有提供混合 SIMT/瓦片的 Python 内核 DSL。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-19.-Tile-and-SIMT-Kernels.png?fit=1024%2C542&ssl=1)

Source: NVIDIA 来源：NVIDIA

Triton popularized tile-based programming models in the age of tensor cores where the effective abstraction is at the layer of a Tile instead of on a per thread basis. Nvidia will continue to fully support Triton’s Tile based DSLs in addition to cuTile Tile based DSLs.  
Triton 在张量核心时代普及了基于瓦片的编程模型，其中有效的抽象是在瓦片层面，而不是按线程基础。Nvidia 将继续全面支持 Triton 的基于瓦片的 DSL，以及 cuTile 基于瓦片的 DSL。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-20.-Tile-programming.png?fit=1024%2C637&ssl=1)

Source: Nvidia 来源：Nvidia

For differential simulation AI, NVIDIA announced Warp Python DSLs. Warp is a hybrid tile and SIMT based programming model useful for writing simulations and geometry processing. The great benefit of Warp over cuTile is that Warp is automatically differentiable which is extremely useful in simulation to automatically generate the backward pass. **AMD has no offering for this hybrid SIMT/Tile based differentiable Python kernels DSLs either.**  
对于差分模拟 AI，NVIDIA 宣布了 Warp Python DSL。Warp 是一种混合的 tile 和 SIMT 基础的编程模型，适用于编写模拟和几何处理。Warp 相对于 cuTile 的一个巨大优势是 Warp 是自动可微分的，这在模拟中非常有用，可以自动生成反向传播。AMD 也没有提供这种混合的 SIMT/Tile 基础的可微分 Python 内核 DSL。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-21.-Nvidia-Warp-1.png?fit=1024%2C548&ssl=1)

Source: Nvidia 来源：Nvidia

Nvidia continues to fully support OpenAI Triton Python DSL in addition to all their newly announced Python DSLs. The primarily maintainer of Triton is OpenAI whose mission is to build safe AGI. Indeed, at [the SemiAnalysis Blackwell PTX Hackathon 2025](https://semianalysis.com/2025-hackathon-eol/), **Phil Tilet, lead OpenAI maintainer of Triton, has even said that “AGI won’t come from 10% faster matrix multiplications”,** & this is the ethos surrounding what features Triton will prioritize. Thus Triton isn’t the platform AI chip vendors should solely support if they want to have the fastest AI chip. We believe that AI chip vendors should still fully support Triton in addition to other Python DSLs.  
Nvidia 继续全力支持 OpenAI Triton Python DSL，以及他们新宣布的所有 Python DSL。Triton 的主要维护者是 OpenAI，其使命是构建安全的 AGI。事实上，在 2025 年的 SemiAnalysis Blackwell PTX Hackathon 上，Triton 的首席维护者 Phil Tilet 甚至表示：“AGI 不会来自 10% 更快的矩阵乘法”，这就是围绕 Triton 将优先考虑哪些功能的理念。因此，如果 AI 芯片供应商想要拥有最快的 AI 芯片，Triton 并不是他们应该单独支持的平台。我们相信，AI 芯片供应商仍然应该在支持其他 Python DSL 的同时，全面支持 Triton。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-23.-OpenAI-quote.png?fit=1024%2C196&ssl=1)

Source: OpenAI, SemiAnalysis Blackwell PTX Hackathon 来源：OpenAI，SemiAnalysis Blackwell PTX 黑客马拉松

This stance has led to a misalignment of objectives where OpenAI Triton does not care about getting absolute speed of light peak performance while AI Chip vendors like Nvidia, MTIA, MAIA, AMD care a lot about getting peak performance in their kernel language.  
这种立场导致了目标的不一致，OpenAI Triton 并不关心获得绝对的光速峰值性能，而像 Nvidia、MTIA、MAIA、AMD 这样的 AI 芯片供应商则非常关注在其内核语言中获得峰值性能。

Nvidia’s Triton performance isn’t close to speed of light while AMD’s Triton performance is even further away from speed of light. AMD needs to heavily hire and invest into making Triton performance much stronger in addition to supporting/inventing in other python kernel DSLs.  
英伟达的 Triton 性能远未接近光速，而 AMD 的 Triton 性能更是远离光速。AMD 需要大量招聘并投资于提升 Triton 性能，同时支持/发明其他 Python 内核 DSL。

AMD has an experimental kernel language called [wave](https://github.com/iree-org/iree-turbine/tree/main/iree/turbine/kernel/wave) that uses a warp based programming model but it seems to be still very early stage and doesn’t have the full backing of the company. This is a far cry from cuTile, CuTe, Warp, all of which have the full backing of Jensen and Nvidia, who are all in on making CUDA Python great. Furthermore, it is questionable if warp-based kernel DSLs add the right abstraction layer considering the industry is moving towards warp-group based MMAs hardware & 2-CTA MMAs hardware instead of warp based MMAs.  
AMD 有一种名为 wave 的实验性内核语言，采用基于 warp 的编程模型，但似乎仍处于早期阶段，并没有得到公司的全面支持。这与 cuTile、CuTe、Warp 大相径庭，后者都得到了詹森和英伟达的全力支持，他们全力以赴地致力于让 CUDA Python 变得出色。此外，考虑到行业正朝着基于 warp 组的 MMA 硬件和 2-CTA MMA 硬件发展，而不是基于 warp 的 MMA，基于 warp 的内核 DSL 是否增加了正确的抽象层也是值得怀疑的。

## The Widening Gap Between AMD RCCL and NVIDIA NCCLAMD RCCL 与 NVIDIA NCCL 之间的差距扩大

Collective communication libraries are extremely important for AI training and inference as these libraries let multiple GPUs work on the same workload. Nvidia’s collective communication library is called NCCL. AMD’s library is a “ctrl+c, ctrl+v” fork of NCCL and it is called RCCL. Ever since we shared our thoughts on RCCL in [our December 2024 article](https://semianalysis.com/2024/12/22/mi300x-vs-h100-vs-h200-benchmark-part-1-training/), RCCL team has made some decent progress. More than a year after the MI300X went into production, the RCCL team has now finally supported the [LL128 protocol](https://github.com/ROCm/rccl/pull/1549) on MI300X. This is a great improvement but by comparison, Blackwell on day one already supports all three collective protocols (SIMPLE, LL, LL128).  
集体通信库对于 AI 训练和推理极为重要，因为这些库允许多个 GPU 在同一工作负载上协同工作。Nvidia 的集体通信库称为 NCCL。AMD 的库是 NCCL 的一个“ctrl+c, ctrl+v”分支，称为 RCCL。自从我们在 2024 年 12 月的文章中分享了对 RCCL 的看法以来，RCCL 团队取得了一些不错的进展。在 MI300X 投入生产一年多后，RCCL 团队现在终于在 MI300X 上支持 LL128 协议。这是一个很大的改进，但相比之下，Blackwell 在第一天就已经支持所有三种集体协议（SIMPLE、LL、LL128）。

Furthermore, RCCL finally supports rail optimized trees which improves networking performance by reducing traffic away from spine switches, leading to fewer path collisions. This feature has been supported by NCCL by countless years already.  
此外，RCCL 最终支持铁路优化树，这通过减少流量从主干交换机转移来提高网络性能，从而减少路径冲突。这个功能已经被 NCCL 支持了无数年。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-24.-Trees.png?fit=861%2C1024&ssl=1)

Source: Github 来源：Github

**Although RCCL has made some decent progress, the delta between NCCL and RCCL continues to significantly widen due to the** [**new NCCL improvements and features announced at GTC 2025**](https://www.nvidia.com/en-us/on-demand/session/gtc25-s72583/)**.** TheRCCL team will need more access to proper resources like large compute clusters to catch up with NCCL. They should be given exclusive access to a persistent cluster of at least 1,024 MI300 class GPUs. Furthermore, AMD leadership needs to invest into massively increasing RCCL engineer RSUs compensation in order to attract and retain key talent in what is one of the most mission critical software libraries.  
尽管 RCCL 取得了一些不错的进展，但由于在 GTC 2025 上宣布的新 NCCL 改进和功能，NCCL 与 RCCL 之间的差距仍在显著扩大。RCCL 团队需要更多的适当资源，如大型计算集群，以赶上 NCCL。他们应该被给予至少 1,024 个 MI300 级 GPU 的持久集群的独占访问权限。此外，AMD 领导层需要投资大幅提高 RCCL 工程师的 RSU 薪酬，以吸引和留住在这个最关键的软件库之一的关键人才。

Because AMD’s RCCL library is a carbon copy fork of Nvidia’s NCCL, NCCL 2.27 and 2.28 massive refactor will continue expanding the CUDA moat and will force AMD’s RCCL team to expend thousands of engineering hours to sync Nvidia’s major refactor into RCCL. While AMD’s engineering team is bogged down having to spend thousands of engineering hours to sync the changes, Nvidia will be using that time instead to continue advancing the frontier of collective communications software stack and algorithms. This dynamic makes it virtually impossible for AMD to sustain RCCL’s existing development efforts while working towards achieving parity with NCCL, let alone surpassing NCCL.  
由于 AMD 的 RCCL 库是 Nvidia 的 NCCL 的完全复制分支，NCCL 2.27 和 2.28 的大规模重构将继续扩大 CUDA 的护城河，并迫使 AMD 的 RCCL 团队花费数千小时的工程时间将 Nvidia 的重大重构同步到 RCCL。与此同时，AMD 的工程团队被迫花费数千小时的工程时间来同步这些更改，而 Nvidia 将利用这段时间继续推进集体通信软件栈和算法的前沿。这种动态使得 AMD 几乎不可能在努力实现与 NCCL 的平等的同时维持 RCCL 现有的开发工作，更不用说超越 NCCL 了。

AMD has indicated that they are currently in the planning phase of rewriting RCCL from scratch to stop being a fork of NCCL.  
AMD 表示他们目前正在规划从头开始重写 RCCL，以停止成为 NCCL 的一个分支。

At his GTC 2025 talk, as a joke, we asked NCCL chief Sylvain Jeaugey, if in the spirit of open-source development, he would lend a helping hand to RCCL as its currently mostly a copy paste library.  
在他的 GTC 2025 演讲中，我们开玩笑地问 NCCL 负责人 Sylvain Jeaugey，是否可以本着开源开发的精神，向 RCCL 伸出援手，因为它目前主要是一个复制粘贴的库。

He rebuffed our suggestion:  
他拒绝了我们的建议：  
  
*SemiAnalysis: Will Nvidia provide support to the AMD team’s RCCL fork due to this big of a refactor in the upcoming 2.28?  
SemiAnalysis：由于即将到来的 2.28 版本进行如此大规模的重构，Nvidia 会支持 AMD 团队的 RCCL 分支吗？  
Sylvain: Are we going to also help RCCL move to that? I don’t think so – usually we don’t really take part in that development.  
Sylvain：我们也会帮助 RCCL 迁移到那个吗？我认为不会——通常我们并不参与那种开发。  
Source:* [*Nvidia*](https://www.nvidia.com/en-us/on-demand/session/gtc25-s72583/?start=2025) *– timestamp 33:48*  
来源：Nvidia – 时间戳 33:48

During this talk, Sylvain also announced many new NCCL features in the upcoming massive refactor. These new features include supporting symmetric memory natively in NCCL as well as new algorithms that run much faster and use fewer SMs thus allowing more SMs for compute.  
在此次演讲中，Sylvain 还宣布了即将进行的大规模重构中的许多新 NCCL 功能。这些新功能包括在 NCCL 中原生支持对称内存，以及运行速度更快、使用更少 SM 的新算法，从而允许更多 SM 用于计算。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-24.1-New-Symmetric-Memory-Stack.png?fit=1024%2C609&ssl=1)

Source: NVIDIA 来源：NVIDIA

[PyTorch introduced SymmetricMemory API](https://dev-discuss.pytorch.org/t/pytorch-symmetricmemory-harnessing-nvlink-programmability-with-ease/2798) that enable users to harness multi-GPU scale up programmability with ease and [write collectives or fused compute/communication kernels in CUDA or Triton](https://github.com/yifuwang/symm-mem-recipes). Previously, writing multi-GPU fused compute/communication kernels required a ton of work, but the work needed has been reduced considerably with the use of PyTorch SymMem. Performant inference kernels like one-shot and two-shot collectives as well as all gather fused matmul kernels can be written in SymmetricMemory easily.  
PyTorch 引入了 SymmetricMemory API，使用户能够轻松利用多 GPU 扩展编程能力，并在 CUDA 或 Triton 中编写集合或融合计算/通信内核。之前，编写多 GPU 融合计算/通信内核需要大量工作，但使用 PyTorch SymMem 后所需的工作量大大减少。高性能推理内核，如一次性和两次性集合，以及所有收集融合矩阵乘法内核，可以轻松地在 SymmetricMemory 中编写。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-25.-Process-0-1.jpg?fit=1024%2C567&ssl=1)

Source: PyTorch 来源：PyTorch

This feature has been available on NVIDIA GPUs for the past 8 months while AMD GPUs still don’t support it. AMD has indicated that they will land initial support for PyTorch SymmetricMemory API in Q2 2025.  
此功能在过去 8 个月中已在 NVIDIA GPU 上可用，而 AMD GPU 仍不支持。AMD 已表示他们将在 2025 年第二季度首次支持 PyTorch SymmetricMemory API。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-26.-Pytorch.png?fit=831%2C1024&ssl=1)

Source: PyTorch, YiFu 来源：PyTorch，YiFu

In the upcoming 2.27 release, allreduce achieves a 4x lower reduction at the same message size and attains the same algorithm bandwidth at 4x smaller message sizes.  
在即将发布的 2.27 版本中，allreduce 在相同消息大小下实现了 4 倍更低的归约，并在消息大小缩小 4 倍时达到了相同的算法带宽。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-28.-New-Algorithms.png?fit=1024%2C620&ssl=1)

Source: NVIDIA 来源：NVIDIA

In the upcoming 2.28 release, NCCL offers device-side APIs allowing end users to easily write custom communication/compute fusion kernels.  
在即将发布的 2.28 版本中，NCCL 提供了设备端 API，允许最终用户轻松编写自定义通信/计算融合内核。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-29.-Device-side-API.png?fit=1024%2C619&ssl=1)

Source: NVIDIA 来源：NVIDIA

The upcoming NCCL 2.28 release will also support [GPUDirect Async](https://developer.nvidia.com/blog/improving-network-performance-of-hpc-systems-using-nvidia-magnum-io-nvshmem-and-gpudirect-async/) (IBGDA) on both InfiniBand and RoCEv2 Ethernet. Currently, in NCCL and RCCL, a CPU proxy is used to control flow for scale-out communication. Although the dataflow doesn’t go through the CPU, sending the control flow through the CPU still limits the real world achieved performance. With NVIDIA NCCL’s 2.28 integration with IBGDA – supported in both RoCEv2 and InfiniBand – the control flow is initialized by the GPU and does not go through the CPU, leading to better performance on all2all and all2all based algorithms across small and medium message sizes.  
即将发布的 NCCL 2.28 版本将支持在 InfiniBand 和 RoCEv2 以太网上的 GPUDirect Async (IBGDA)。目前，在 NCCL 和 RCCL 中，使用 CPU 代理来控制扩展通信的流量。尽管数据流不经过 CPU，但通过 CPU 发送控制流仍然限制了实际性能的实现。通过 NVIDIA NCCL 的 2.28 与 IBGDA 的集成——在 RoCEv2 和 InfiniBand 中均受支持——控制流由 GPU 初始化，不经过 CPU，从而在小型和中型消息大小的 all2all 和基于 all2all 的算法上实现更好的性能。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-30.-Proxy-initiated-communication.png?fit=1024%2C600&ssl=1)

Source: NVIDIA 来源：NVIDIA

Another feature that is currently only available on Nvidia is user buffer registration. This feature avoids creating extra copies between the user’s tensor and NCCL’s internal buffers. This helps with reducing the number of collective SMs needed and with alleviating memory pressure, leading a 5-20% end to end training improvement.  
另一个目前仅在 Nvidia 上可用的功能是用户缓冲区注册。此功能避免在用户的张量和 NCCL 的内部缓冲区之间创建额外的副本。这有助于减少所需的集体 SM 数量，并减轻内存压力，从而实现 5-20%的端到端训练改进。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-32.-User-buffer-registration.png?fit=1024%2C576&ssl=1)

Source: NVIDIA 来源：NVIDIA

Most experienced ML engineers have seen the dreaded NCCL\_TIMEOUT/RCCL\_TIMEOUT or NCCL/RCCL stalling. NVIDIA NCCL supports [ncclras](https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/troubleshooting/ras.html), which simplifies debugging these issues. Unfortunately, RCCL does not currently include any features to help with debugging.  
大多数经验丰富的机器学习工程师都见过可怕的 NCCL\_TIMEOUT/RCCL\_TIMEOUT 或 NCCL/RCCL 停滞。NVIDIA NCCL 支持 ncclras，这简化了调试这些问题。不幸的是，RCCL 目前不包括任何帮助调试的功能。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-33.-Large-Scale-Training.png?fit=1024%2C571&ssl=1)

Source: NVIDIA 来源：NVIDIA

## Infrastructure Software Progress Not As Fast基础软件进展不够快

AMD’s has made meaningful progress in the last four months on its software infrastructure layer (i.e. kubernetes, SDC detectors, health checks, SLURM, docker, metrics exporters), but the rate of progress is nowhere near keeping up with the rate of progress of AMD’s ML libraries.  
在过去四个月中，AMD 在其软件基础设施层（即 kubernetes、SDC 探测器、健康检查、SLURM、docker、指标出口）上取得了显著进展，但进展速度远远跟不上 AMD 的机器学习库的进展速度。

Until seven months ago, AMD had no GPU metrics export function at all, meaning that cluster operators had no way to gain observability into their GPUs. Although ROCm claimed to be an open-source ecosystem, AMD’s GPU metrics exporter was not open source until SemiAnalysis took this point up with AMD executives, advocating for them to adopt a sense of urgency for AMD to live by the ethos of their claimed commitment to the “open source” ecosystem.  
直到七个月前，AMD 根本没有 GPU 指标导出功能，这意味着集群操作员无法对其 GPU 进行可观察性分析。尽管 ROCm 声称是一个开源生态系统，但 AMD 的 GPU 指标导出工具在 SemiAnalysis 与 AMD 高管提出这一点之前并不是开源的，SemiAnalysis 倡导 AMD 应对其声称的“开源”生态系统的承诺采取紧迫感。

Fortunately, after many follow-ups, AMD has finally open sourced their GPU exporter. Note that their GPU exporter is still a work in progress and many features are still missing and are not at parity with NVIDIA’s GPU open-source metrics exporter yet. For example, AMD’s GPU exporter currently has still does not support the metric for matrix core activity, CU occupancy or CU active. These are extremely important metrics to proxy how workloads are performing. The only current utilization metric available in AMD’s GPU exporter is GPU\_UTIL which, as most experienced [ML engineers know, doesn’t actually measure util at all for both Nvidia and AMD GPUs](https://x.com/memorypaladin/status/1817689501113979357).  
幸运的是，在多次跟进之后，AMD 终于开源了他们的 GPU 导出工具。请注意，他们的 GPU 导出工具仍在开发中，许多功能仍然缺失，尚未与 NVIDIA 的 GPU 开源指标导出工具达到同等水平。例如，AMD 的 GPU 导出工具目前仍不支持矩阵核心活动、CU 占用率或 CU 活跃度的指标。这些都是代理工作负载性能的极其重要的指标。AMD 的 GPU 导出工具中唯一可用的利用率指标是 GPU\_UTIL，正如大多数经验丰富的机器学习工程师所知，这实际上并不测量 Nvidia 和 AMD GPU 的利用率。

[As mentioned in our December AMD article](https://semianalysis.com/2024/12/22/mi300x-vs-h100-vs-h200-benchmark-part-1-training/#amd%e2%80%99s-forked-libraries), the AMD Docker UX is extremely poor compared to Nvidia’s UX. AMD has acknowledged this shortcoming and has mentioned to us that they are working on this. They have indicated that they will announce a roadmap for this later this quarter.  
正如我们在 12 月的 AMD 文章中提到的，AMD Docker 的用户体验与 Nvidia 的用户体验相比极其糟糕。AMD 已经承认了这一缺陷，并向我们表示他们正在对此进行改进。他们表示将在本季度晚些时候公布一份路线图。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-34.-Nvidia-Docker.png?fit=1024%2C377&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

Unlike on Nvidia’s stack, the current state of Slurm+Container on AMD’s stack is disappointing. [On Nvidia with open source pyxis Slurm](https://github.com/NVIDIA/pyxis), launching container through Slurm is as easy as running “srun –container-name=pytorch”. In contrast, when working on AMD, one must through an extremely convolved process that requires the use of lots of indirections.  
与 Nvidia 的堆栈不同，AMD 的 Slurm+Container 当前状态令人失望。在 Nvidia 的开源 pyxis Slurm 上，通过 Slurm 启动容器就像运行“srun –container-name=pytorch”一样简单。相比之下，在 AMD 上工作时，必须经过一个极其复杂的过程，需要使用大量的间接调用。

When considering how all AMD’s internal AI engineers use SLURM with containers, it is distressing to see the amount of indirection that are needed and how poor the current AMD Slurm+Container UX is.  
考虑到所有 AMD 内部的 AI 工程师如何使用 SLURM 与容器，看到所需的间接调用数量以及当前 AMD Slurm+Container 用户体验的糟糕程度令人感到沮丧。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-35.-Github.png?fit=1024%2C575&ssl=1)

Source: GitHub, AMD 来源：GitHub，AMD

We have recommended on multiple occasions that AMD prioritize fixing this and focus on supporting a first-class Slurm+Containers experience by putting some money to work and paying for SchmedMD’s (the maintainers of Slurm) consulting services. We have yet to see any concrete timelines or roadmap on when AMD plans to fix this issue.  
我们多次建议 AMD 优先修复此问题，并专注于通过投入资金并支付 SchmedMD（Slurm 的维护者）的咨询服务来支持一流的 Slurm+Containers 体验。我们尚未看到 AMD 计划何时解决此问题的具体时间表或路线图。

Moreover, Nvidia’s datacenter-manager tool (DCGM) has directly integrated NVVS (Nvidia Validation suite) such that running diagnostics is as simple as running “sudo dcgmi diag -r <diag\_level>”. In contrast, on AMD, the RVVS (ROCm validation Suite) is separate from their Datacenter tool (RDC), forcing the end user to download yet another library. We recommend that AMD integrate RVVS into RDC to make the user experience as simple as that of Nvidia’s DCGM.  
此外，Nvidia 的数据中心管理工具 (DCGM) 已直接集成 NVVS (Nvidia 验证套件)，使得运行诊断变得像运行 “sudo dcgmi diag -r ” 一样简单。相比之下，AMD 的 RVVS (ROCm 验证套件) 与他们的数据中心工具 (RDC) 是分开的，这迫使最终用户下载另一个库。我们建议 AMD 将 RVVS 集成到 RDC 中，以使用户体验与 Nvidia 的 DCGM 一样简单。

Also, AMD’s UX and validation coverage is not as good as DCGM’s. [Nvidia’s DCGM utilizes notation denoting different levels (r1,r2,r3,r4)](https://docs.nvidia.com/datacenter/dcgm/latest/user-guide/dcgm-diagnostics.html#run-levels-and-tests) while AMD’s NVVS does not use any such notation.  
此外，AMD 的用户体验和验证覆盖率不如 DCGM。Nvidia 的 DCGM 使用表示不同级别的符号（r1，r2，r3，r4），而 AMD 的 NVVS 则没有使用任何这样的符号。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-36.-DCGM-Diagnostics.png?fit=1024%2C504&ssl=1)

Source: NVIDIA 来源：NVIDIA

AMD is currently lacking support for many inference features such as disaggregated prefill, Smart Routing, and NVMe KV Cache Tiering. Disaggregated serving has been an industry standard for year, and last month NVIDIA [open-sourced Dynamo](https://github.com/ai-dynamo/dynamo), a distributed inference framework, further democratizing disaggregated serving. Disaggregated prefill splits the prefill stage and decode stage into different GPUs. Even Google has launched their own [disaggregated inferencing framework](https://cloud.google.com/ai-hypercomputer/docs/workloads/pathways-on-cloud/multihost-inference#disaggregated_inference).  
AMD 目前缺乏对许多推理功能的支持，例如分离预填充、智能路由和 NVMe KV 缓存分层。分离服务已经成为行业标准多年，上个月 NVIDIA 开源了 Dynamo，一个分布式推理框架，进一步使分离服务大众化。分离预填充将预填充阶段和解码阶段分配到不同的 GPU 上。甚至 Google 也推出了他们自己的分离推理框架。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-37.-DistServe-Runtime.png?fit=1024%2C649&ssl=1)

Source: Peking University 来源：北京大学

NVIDIA’s Dynamo Smart Router intelligently routes each token in a multi-GPU inference deployment to both available instances. For the prefill phase – this means ensuring that incoming tokens are equally distributed to the different GPUs serving prefill to avoid bottlenecks on any given experts in the prefill phase.  
NVIDIA 的 Dynamo 智能路由器智能地将每个令牌在多 GPU 推理部署中路由到两个可用实例。在预填充阶段，这意味着确保传入的令牌均匀分配到不同的 GPU 上，以避免在任何给定的专家中出现瓶颈。

Similarly – in the decode phase – it is important to ensure sequence lengths and requests are well distributed and balanced across GPUs serving decode. Some experts that are more heavily trafficked can be replicated as well by the GPU Planner provided by Dynamo to help keep the load balanced.  
同样，在解码阶段，确保序列长度和请求在服务解码的 GPU 之间良好分配和平衡也很重要。一些流量较大的专家可以通过 Dynamo 提供的 GPU 规划器进行复制，以帮助保持负载平衡。

The router also load balances across each replica serving the model which is something AMD’s vLLM and many other inference engines do not support.  
路由器还在每个为模型提供服务的副本之间进行负载均衡，这是 AMD 的 vLLM 和许多其他推理引擎不支持的功能。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-38.-Dynamo-Smart-Router-NVcache.png?fit=1024%2C611&ssl=1)

Source: NVIDIA 来源：NVIDIA

Dynamo’s GPU Planner is an autoscaler of both prefill and decode nodes, spinning up additional nodes with fluctuations in demand that are natural over the course of the day. It can implement a degree of load balancing among many experts in an MoE model in both prefill and decode nodes. The GPU planner spins up additional GPUs to provide additional compute to high-load experts. It can also dynamically reallocate nodes between prefill and decode nodes as needed, further maximizing resource utilization.  
Dynamo 的 GPU 规划器是一个自动扩展器，能够根据日常需求波动自动增加预填充和解码节点。它可以在预填充和解码节点之间实现一定程度的负载均衡，适用于 MoE 模型中的多个专家。GPU 规划器会增加额外的 GPU，以为高负载专家提供额外的计算能力。它还可以根据需要动态重新分配预填充和解码节点，进一步最大化资源利用率。

This additionally supports changing the ratio of GPUs used for decoding and for prefill – this is especially useful for cases like Deep Research, where more prefill is required as opposed to decoding, as these applications need to review a huge amount of context but only generate a comparatively small amount.  
这还支持改变用于解码和预填充的 GPU 比例——这在像深度研究这样的情况下尤其有用，因为这些应用需要审查大量上下文，但只生成相对较少的内容，因此需要更多的预填充。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-39.-Dynamo-GPU-Planner.png?fit=1024%2C554&ssl=1)

Source: NVIDIA 来源：NVIDIA

NVIDIA Dynamo’ KV-Cache Offload Manager allows more efficient overall execution of prefill overall by saving the KVCache from prior user conversations in NVMe storage rather than discarding it.  
NVIDIA Dynamo 的 KV-Cache Offload Manager 通过将先前用户对话中的 KVCache 保存在 NVMe 存储中，而不是丢弃它，从而实现了更高效的整体预填充执行。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-40.-Nvidia-Dynamo-Architecture.png?fit=1024%2C633&ssl=1)

Source: NVIDIA 来源：NVIDIA

When a user engages in an ongoing multi response conversation with an LLM, the LLM needs to factor in the prior questions and responses earlier in the conversation, taking these as input tokens as well. In the naïve implementation, the inference system will have discarded the KV Cache originally used for generating those earlier questions and responses, meaning that the KV Cache will have to be computed again, repeating the same set of calculations.  
当用户与 LLM 进行持续的多响应对话时，LLM 需要考虑对话中之前的问题和响应，将这些也作为输入标记。在简单的实现中，推理系统将会丢弃最初用于生成那些早期问题和响应的 KV 缓存，这意味着 KV 缓存必须重新计算，重复相同的计算集。

Instead, with Dynamo’s NVMe KVCache offload feature, when a user steps away, the KVCache can be offloaded to an NVMe storage system until the user returns to the conversation. When the user asks a subsequent question in the conversation, the KVCache can be quickly retrieved from the NVMe storage system, obviating the need to calculate the KVCache again.  
相反，使用 Dynamo 的 NVMe KVCache 卸载功能，当用户离开时，KVCache 可以卸载到 NVMe 存储系统，直到用户返回对话。当用户在对话中提出后续问题时，KVCache 可以从 NVMe 存储系统快速检索，避免再次计算 KVCache 的需要。

This frees up capacity on the prefill nodes to handle more incoming volume, or alternative could reduce the size of the prefill deployment needed. The user will also have a much better experience with faster time to first token as there is now much less time needed to retrieve the KV Cache vs computing it.  
这释放了预填充节点上的容量，以处理更多的传入流量，或者可以减少所需的预填充部署的大小。用户的体验也会更好，因为获取 KV 缓存所需的时间现在大大减少，从而使首次令牌的时间更快。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-42.-Dynamo-Distributed-KVcache.png?fit=1014%2C683&ssl=1)

Source: NVIDIA 来源：NVIDIA

These features for KVCache offload will matter more and more as RLVR and multi-agent systems with tool use become more common.  
随着 RLVR 和使用工具的多智能体系统变得越来越普遍，KVCache 卸载的这些功能将变得越来越重要。

**We genuinely want to see another effective competitor to Nvidia and want to help AMD get to that spot**. AMD has made great progress over the past four months but there are still a lot of changes that AMD needs to make to be competitive with Nvidia. Earlier in the article, we have outlined in detail our recommendations to Lisa Su and the AMD Leadership Team, and we provide a summary here:  
我们真心希望看到另一个有效的竞争者出现，以对抗 Nvidia，并希望帮助 AMD 达到那个位置。过去四个月，AMD 取得了很大进展，但仍有许多变化需要进行，以便与 Nvidia 竞争。在文章的前面部分，我们详细列出了对 Lisa Su 和 AMD 领导团队的建议，这里提供一个总结：

1. AMD needs to maintain (if not intensify) their sense of urgency to even have a chance at being on par with NVIDIA.  
	AMD 需要保持（如果不是加大）他们的紧迫感，才能有机会与 NVIDIA 平起平坐。
2. AMD leadership team’s biggest blind spot is low total compensation (base + RSU + bonus) for their AI software engineers due to incorrect compensation structure benchmarking to semiconductor companies instead of companies that are great at AI software. We have discussed how our recommendation will help strengthen the alignment of engineers’ compensation to AMD’s success (or failure). **We strongly believe that if AMD does not significantly increase their AI Software Engineer pay, AMD will continue losing to Nvidia****.**  
	AMD 领导团队最大的盲点是对其 AI 软件工程师的总薪酬（基本工资 + RSU + 奖金）过低，因为他们的薪酬结构基准错误地参考了半导体公司，而不是那些在 AI 软件方面表现出色的公司。我们已经讨论过我们的建议将如何帮助加强工程师薪酬与 AMD 成功（或失败）之间的对齐。我们坚信，如果 AMD 不显著提高其 AI 软件工程师的薪酬，AMD 将继续输给 Nvidia。
3. We recommend that AMD invest heavily in Python interfaces at every layer of the ROCm stack, and not just in Python Kernel Authoring DSLs.  
	我们建议 AMD 在 ROCm 堆栈的每一层大力投资 Python 接口，而不仅仅是在 Python 内核编写 DSL 中。
4. AMD needs to invest heavily in a team of 20+ developer relations engineers hosting In Real Life events and interacting with the community at a deeper level.  
	AMD 需要在一个 20 多人的开发者关系工程师团队上进行大量投资，举办线下活动并与社区进行更深入的互动。
5. Unlike NVIDIA GTC, AMD doesn’t hold any developer-focused conferences and only holds product launch keynote events, for instance *“Advancing AI”.* We recommend that AMD host an in‑person “ROCm Developer Conference”.  
	与 NVIDIA GTC 不同，AMD 并不举办任何以开发者为中心的会议，只举办产品发布主题演讲活动，例如“推进人工智能”。我们建议 AMD 举办一次线下的“ROCm 开发者大会”。
6. NVIDIA has launched their [Dynamo disaggregated prefill inference framework called](https://github.com/ai-dynamo/dynamo) and [their NIXL inference KV cache tiering library](https://github.com/ai-dynamo/nixl). AMD does not have first-class support for disaggregated prefill or NVMe KVCache tiering. They need to rapidly make progress on this, or they will fall behind on inference.  
	NVIDIA 推出了他们的 Dynamo 分散预填推理框架和他们的 NIXL 推理 KV 缓存分层库。AMD 对分散预填或 NVMe KVCache 分层没有一流的支持。他们需要迅速在这方面取得进展，否则他们将在推理方面落后。
7. AMD should give ROCm collective engineers a persistent cluster of at least 1,024 MI300 class GPUs that are for the exclusive of this team. This will go a long way towards helping RCCL catch up to NCCL.  
	AMD 应该为 ROCm 集体工程师提供一个至少包含 1,024 个 MI300 级 GPU 的持久集群，专门供该团队使用。这将大大有助于 RCCL 赶上 NCCL。
8. Nvidia overstates TFLOP/s in their chip specifications, but AMD overstates TFLOP/s specifications even more. [Even in AMD’s own blog, they have admitted to a significantly larger gap between their marketed TFLOP/s and what is achievable](https://rocm.blogs.amd.com/software-tools-optimization/Understanding_Peak_and_Max-Achievable_FLOPS/README.html) than users might experience with NVIDIA.  
	Nvidia 在其芯片规格中夸大了 TFLOP/s，但 AMD 对 TFLOP/s 规格的夸大更为严重。即使在 AMD 自己的博客中，他们也承认其宣传的 TFLOP/s 与实际可实现的之间存在显著更大的差距，用户可能会体验到与 NVIDIA 的差距。
9. AMD should state their Model FLOPS Utilization (MFU) and TFLOP/s/GPU whenever they publicly announce a new in-house model training run. [AMD does not currently do this](https://rocm.blogs.amd.com/artificial-intelligence/introducing-instella-3B/README.html). We have asked AMD repeatedly about their MFU but so far, we have not received a satisfactory answer. This could lead one to assume their MFU is quite low.  
	AMD 应该在公开宣布新的内部模型训练时说明他们的模型浮点运算性能利用率 (MFU) 和每个 GPU 的 TFLOP/s。AMD 目前并没有这样做。我们已经多次询问 AMD 关于他们的 MFU，但到目前为止，我们还没有收到令人满意的答复。这可能让人假设他们的 MFU 相当低。
10. In contrast to [Nvidia’s Pyxis solution](https://github.com/NVIDIA/pyxis), first-class support for AMD SLURM for containers is non-existent. AMD’s should invest in [SchedMD (maintainers of SLURM)](https://www.schedmd.com/) consulting to help get containers in AMD SLURM to be on par with NVIDIA.  
	与 Nvidia 的 Pyxis 解决方案相比，AMD 对容器的 SLURM 支持几乎不存在。AMD 应该投资于 SchedMD（SLURM 的维护者）咨询，以帮助使 AMD SLURM 中的容器与 NVIDIA 的水平相当。
11. AMD should open source and make all of their CI/CD and dashboards publicly accessible across all ROCm libraries (HipBLASLt, Sglang, vLLM,TransformerEngine, etc). [Currently, the only publicly accessible ROCm CI for their ML libraries is PyTorch](https://hud.pytorch.org/benchmark/compilers).  
	AMD 应该开源并使其所有 CI/CD 和仪表板在所有 ROCm 库（HipBLASLt、Sglang、vLLM、TransformerEngine 等）中公开可访问。目前，唯一可以公开访问的 ROCm CI 是他们的 ML 库 PyTorch。
12. Currently AMD has internal clusters on a short-term basis on a burst model. But since demand for compute matches the available supply of compute, that means that there is a lot of development projects and efforts that can’t be carried out. This happens often when engineers are not able to convince capacity gatekeepers to provide burst compute capacity to carry out this research. The roadblock is the fact that there is an effective P&L attached to every GPU hour. The situation at Nvidia is completely different as their internal clusters are persistent and multi-year. This gives Nvidia’s engineers a large degree of freedom to be creative and work on higher risk projects on spare capacity on the cluster without an accountant hovering over them. **AMD has over 5 billion dollars of cash on hand, and has the financial ability to invest more heavily into internal clusters**.  
	目前，AMD 在短期内以突发模型拥有内部集群。但由于计算需求与可用计算供给相匹配，这意味着有很多开发项目和努力无法进行。当工程师无法说服容量管理者提供突发计算能力以进行研究时，这种情况经常发生。障碍在于每个 GPU 小时都有一个有效的损益表。Nvidia 的情况完全不同，因为他们的内部集群是持久的且是多年的。这使得 Nvidia 的工程师在集群的闲置容量上有很大的自由度，可以进行创造性工作和高风险项目，而不必担心会计人员的监督。AMD 目前手头有超过 50 亿美元的现金，具备更大力度投资内部集群的财务能力。
13. Most of AMD’s internal cluster are rented for sub-1 year basis. This means that their customers will still be using MI300 in 2027 at which point AMD’s internal MI300 volume will be very low given contract expiries, leading to poor long-term support for “vintage” generations of GPUs. AMD should change their internal cluster procurement strategy to commit to multi-year procurement so as to enable long-term support of each GPU generation. **If AMD internal clusters aren’t even committing multiple years to each GPU generation, why should their customers commit to long-term ownership of AMD GPUs?**  
	AMD 的大部分内部集群是以不到 1 年的基础租赁的。这意味着到 2027 年，他们的客户仍将使用 MI300，而届时 AMD 内部的 MI300 数量将非常低，考虑到合同到期，这将导致对“老旧”代 GPU 的长期支持不足。AMD 应该改变其内部集群采购策略，承诺进行多年采购，以便能够对每一代 GPU 提供长期支持。如果 AMD 内部集群甚至没有对每一代 GPU 承诺多年，为什么他们的客户要承诺长期拥有 AMD 的 GPU 呢？
14. AMD’s software infrastructure layer (i.e. Kubernetes, SDC detectors, health checks, SLURM, docker, metrics exporters) has made some progress over the past four months but the rate of progress is much slower than the rate of progress of AMD’s ML libraries. We recommend AMD executives investigate investing more engineering resources into AMD’s AI software infrastructure layer.  
	AMD 的软件基础设施层（即 Kubernetes、SDC 探测器、健康检查、SLURM、docker、指标出口）在过去四个月中取得了一些进展，但进展速度远低于 AMD 的 ML 库的进展速度。我们建议 AMD 高管考虑投入更多工程资源到 AMD 的 AI 软件基础设施层。
15. Jensen has been donating DGX B200 boxes to academic labs like [Berkeley Sky lab](https://x.com/vllm_project/status/1893001644037566610), [CMU Catalyst Research Group](https://x.com/scsatcmu/status/1912910889566490821?s=46) and [many other university labs](https://x.com/haoailab/status/1914402516420440072). We recommend that AMD also support the academic ecosystem. It is incredibly easy win for AMD marketing to ship boxes and post photos with PhD students grinning next to a shiny AMD box.  
	詹森一直在向伯克利天空实验室、CMU 催化研究小组以及许多其他大学实验室捐赠 DGX B200 盒子。我们建议 AMD 也支持学术生态系统。对 AMD 的市场营销来说，寄送盒子并发布与博士生在闪亮的 AMD 盒子旁边微笑的照片是一个非常简单的胜利。

For the past couple of years, NVIDIA leadership has internally viewed [Huawei](https://semianalysis.com/2025/04/16/huawei-ai-cloudmatrix-384-chinas-answer-to-nvidia-gb200-nvl72/) as the company with the [highest probability of being competitive with NVIDIA](https://semianalysis.com/2025/04/16/huawei-ai-cloudmatrix-384-chinas-answer-to-nvidia-gb200-nvl72/). Due to the rapid improvement and sense of urgency from AMD, we believe that NVIDIA should instead think of AMD as their main competitor as well. We make the following recommendations to Jensen if they want to continue being the market leader:  
在过去的几年中，NVIDIA 的领导层内部认为华为是与 NVIDIA 竞争概率最高的公司。由于 AMD 的快速进步和紧迫感，我们认为 NVIDIA 也应该将 AMD 视为主要竞争对手。如果他们想继续保持市场领导地位，我们向 Jensen 提出以下建议：

1. Continue to rapidly expand the API surface area with useful new features. If NVIDIA expands their API surface area faster than AMD can copy/port to make it ROCm compatible, NVIDIA will continue to be the market leader. Recent launches across the CUDA Python stack was a great example of NVIDIA massively increasing its API surface area with useful new features.  
	继续快速扩展 API 表面，增加有用的新功能。如果 NVIDIA 扩展其 API 表面速度快于 AMD 复制/移植以使其兼容 ROCm，NVIDIA 将继续成为市场领导者。最近在 CUDA Python 堆栈上的发布是 NVIDIA 通过有用的新功能大幅增加其 API 表面的一个很好的例子。
2. For many developers, working on Nvidia consumer GPUs is a gateway to working on the broader CUDA ecosystem. Unfortunately, due to NVIDIA consumer EULA, PyTorch and most other ML libraries are unable to host consumer NVIDIA GPUs in their CI/CD, leading to a suboptimal experience on NVIDIA GPUs. We recommend that NVIDIA explore a strategy to get NVIDIA consumer GPUs into PyTorch CI/CD.  
	对于许多开发者来说，使用 Nvidia 消费级 GPU 是进入更广泛的 CUDA 生态系统的一个入口。不幸的是，由于 NVIDIA 消费级 EULA，PyTorch 和大多数其他机器学习库无法在其 CI/CD 中托管消费级 NVIDIA GPU，这导致在 NVIDIA GPU 上的体验不佳。我们建议 NVIDIA 探索一种策略，将 NVIDIA 消费级 GPU 引入 PyTorch CI/CD。
3. [NCCL User Buffer Registration](https://docs.nvidia.com/deeplearning/nccl/user-guide/docs/usage/bufferreg.html) reduces memory pressure which allows for larger batch sizes and less activation recomputation leading to ~5-10% increase in performance. Although [basic integration with low level PyTorch APIs](https://github.com/pytorch/pytorch/pull/133603) is supported, there is currently no integration into the common APIs such as DistributedDataParallel (DDP), DTensors, or FullySharedDataParallel (FSDP). We recommend that NVIDIA integrates the user buffer registration feature across the whole PyTorch stack.  
	NCCL 用户缓冲区注册减少了内存压力，这允许更大的批量大小和更少的激活重计算，从而导致性能提高约 5-10%。尽管支持与低级 PyTorch API 的基本集成，但目前尚未与常见 API（如 DistributedDataParallel（DDP）、DTensors 或 FullySharedDataParallel（FSDP））集成。我们建议 NVIDIA 在整个 PyTorch 堆栈中集成用户缓冲区注册功能。
4. Although NVIDIA’s out of box experience is better than AMD, there is still room for improvement. [For example, for developer to get optimal performance for RMSNorm, they need to use NVIDIA/apex library instead of having it out of the box in PyTorch](https://github.com/pytorch/pytorch/pull/146388). RMSNorm is an extremely common layer in SOTA LLMs. We recommend NVIDIA work with the Meta PyTorch team on figuring out a strategy to integrate fast RMSNorm kernels and other cuDNN kernels directly into PyTorch.  
	尽管 NVIDIA 的开箱体验优于 AMD，但仍有改进的空间。例如，为了让开发者获得 RMSNorm 的最佳性能，他们需要使用 NVIDIA/apex 库，而不是在 PyTorch 中开箱即用。RMSNorm 是 SOTA LLMs 中极为常见的层。我们建议 NVIDIA 与 Meta PyTorch 团队合作，找出将快速 RMSNorm 内核和其他 cuDNN 内核直接集成到 PyTorch 中的策略。
5. NVIDIA needs to pay for additional CI H100s so that PyTorch can enable H100 for their [TorchInductor Benchmark CI](https://hud.pytorch.org/benchmark/compilers). Even AMD has enabled already MI300 for this Benchmark CI.  
	NVIDIA 需要支付额外的 CI H100，以便 PyTorch 可以为他们的 TorchInductor Benchmark CI 启用 H100。甚至 AMD 已经为这个 Benchmark CI 启用了 MI300。
6. Over the past four months, AMD has done a great job making most of their benchmarks easily reproducible by the community. For example, [AMD wrote a great blog on how to reproduce their MLPerf Inference 5.0 submission](https://rocm.blogs.amd.com/artificial-intelligence/reproducing-amd-mlperf-inference-submission/README.html). If NVIDIA wants the ML community to have confidence in the benchmarks that NVIDIA posts, we recommend that NVIDIA provide reproducible instructions and an explanatory blog post whenever they post benchmark results.  
	在过去的四个月里，AMD 在让大多数基准测试易于被社区复现方面做得很好。例如，AMD 写了一篇很好的博客，介绍如何复现他们的 MLPerf Inference 5.0 提交。如果 NVIDIA 希望 ML 社区对 NVIDIA 发布的基准测试结果有信心，我们建议 NVIDIA 在发布基准测试结果时提供可复现的说明和解释性博客文章。
7. A meaningful number of NVIDIA’s open source libraries are very poor at following the “open source” ethos and do code dumps at every release. Examples include NCCL and CUTLASS. We have seen progress in some open-source libraries such as [trt-llm when they moved towards a Github first approach](https://github.com/NVIDIA/TensorRT-LLM/pull/2980). We recommend that NVIDIA embrace the open-source ethos across all the open libraries.  
	许多 NVIDIA 的开源库在遵循“开源”精神方面表现很差，并在每次发布时进行代码倾倒。例子包括 NCCL 和 CUTLASS。我们已经看到一些开源库如 trt-llm 在采用 Github 优先的方法时取得了进展。我们建议 NVIDIA 在所有开源库中拥抱开源精神。
8. Stop promoting [marketing Jensen Math 2:4 sparsity FLOPs specifications, curtail the unannounced use of bi-directional bandwidth conventions so as to reduce confusion across the whole ecosystem](https://semianalysis.com/2025/03/19/nvidia-gtc-2025-built-for-reasoning-vera-rubin-kyber-cpo-dynamo-inference-jensen-math-feynman/#jensen-math-changes-every-year). Avoid overstating dense FLOP/s specifications and instead move to publishing a FLOP/s metric that reflects what is achievable for a real-world normal input distribution rather than for an [unrealistic \[-4, 4\] uniform discrete integer distribution.](https://github.com/NVIDIA/cutlass/blob/main/media/images/cutlass-3.8-blackwell-gemm-peak-performance.svg)  
	停止推广市场营销 Jensen Math 2:4 稀疏 FLOPs 规格，限制未公告的双向带宽规范的使用，以减少整个生态系统的混淆。避免夸大密集 FLOP/s 规格，而是转向发布一个反映实际可实现的 FLOP/s 指标，基于现实世界的正常输入分布，而不是不切实际的\[-4, 4\]均匀离散整数分布。
9. Look into hiring AMD’s engineers that contribute to libraries such as [RCCL](https://github.com/ROCm/rccl/graphs/contributors), [ComposableKernels](https://github.com/ROCm/composable_kernel/graphs/contributors), [hipBLASLt](https://github.com/ROCm/hipBLASLt/graphs/contributors), [ROCm/PyTorch](https://github.com/pytorch/pytorch/pulls?q=is%3Apr+is%3Aopen+%5BROCm%5D), etc. by [looking the contributor tab on Github](https://github.com/ROCm/rccl/graphs/contributors) and searching on the [“\[ROCm\]” PR tag on Github](https://github.com/pytorch/pytorch/pulls?q=is%3Apr+is%3Aopen+%5BROCm%5D).  
	考虑雇佣为 RCCL、ComposableKernels、hipBLASLt、ROCm/PyTorch 等库做出贡献的 AMD 工程师，可以通过查看 Github 上的贡献者标签和在 Github 上搜索“\[ROCm\]” PR 标签来实现。

## MI325X and MI355X Customer InterestMI325X 和 MI355X 客户兴趣

There has been a [lack of interest from customers in purchasing the MI325X as we’ve been saying for a year.](https://semianalysis.com/accelerator-industry-model/) It was supposed to be a competitor to H200, but the MI325X started shipment in Q2 2025, about three quarters after the H200 and at the exact same time as Blackwell mass production. The obvious customer choice has been the much lower cost per performance Blackwell and so the release of the MI325X was too little too late and AMD was only able to sell minimal volumes of the MI325.  
正如我们所说的，客户对购买 MI325X 的兴趣一直很低。它本应是 H200 的竞争对手，但 MI325X 在 2025 年第二季度才开始发货，比 H200 晚了大约三个季度，并且与 Blackwell 的大规模生产同时进行。显而易见，客户的选择是性价比更高的 Blackwell，因此 MI325X 的发布为时已晚，AMD 仅能销售极少量的 MI325。

[Our demand view in the Accelerator Model tracked Microsoft’s disappointment early in 2024 and lack of follow on orders throughout the rest of 2024](https://semianalysis.com/accelerator-industry-model/). We believe that there is renewed interest in AMD GPUs from [OpenAI via Oracle](https://semianalysis.com/accelerator-industry-model/) and [a few other major customers](https://semianalysis.com/accelerator-industry-model/), but still not Microsoft, on the condition that they reach a sweet-heart pricing with AMD. To be clear, MI355X is still not competitive with NVIDIA’s rack scale GB200 NVL72 solution because the MI355X’s scale-up world size is still only 8 GPUs while for NVIDIA’s GB200 NVL72 the world size is 72 GPUs.  
我们在加速器模型中的需求视图跟踪了微软在 2024 年初的失望以及在 2024 年剩余时间内缺乏后续订单。我们相信，OpenAI 通过 Oracle 和其他一些主要客户对 AMD GPU 的兴趣重新燃起，但前提是他们与 AMD 达成优惠价格，微软仍然不在其中。明确来说，MI355X 仍然无法与 NVIDIA 的机架规模 GB200 NVL72 解决方案竞争，因为 MI355X 的扩展世界规模仍然只有 8 个 GPU，而 NVIDIA 的 GB200 NVL72 的世界规模为 72 个 GPU。

AMD’s pitch on the competitiveness of MI355X centers around the fact that it doesn’t require direct to chip liquid cooling (DLC). There certainly is merit to some point, but there is a degree of irony to the fact that AMD is still pitching the next gen MI355X as a competitor to Nvidia’s last-gen economy-class products. AMD’s MI355X cannot compete head on with NVIDIA’s flagship GB200 NVL72 for frontier reasoning inferencing due to the smaller scale-up world size mentioned above, so it is instead positioned to compete with the air-cooled HGX B200 NVL8 and the air-cooled HGX B300 NVL16.  
AMD 对 MI355X 竞争力的宣传围绕着它不需要直接到芯片的液体冷却（DLC）这一事实。某种程度上确实有其道理，但 AMD 仍将下一代 MI355X 宣传为与 Nvidia 上一代经济型产品的竞争者，这一点有些讽刺。由于上述提到的较小的规模化世界大小，AMD 的 MI355X 无法与 NVIDIA 的旗舰 GB200 NVL72 在前沿推理推断上正面竞争，因此它被定位为与空气冷却的 HGX B200 NVL8 和空气冷却的 HGX B300 NVL16 竞争。

With that said, [this product segment will ship meaningful volumes](https://semianalysis.com/accelerator-industry-model/) and depending on the MI355X’s software quality and the price that AMD is willing to sell at, the MI355X could be decently competitive on performance per TCO basis when compared to NVIDIA’s HGX. This is particularly true for small to medium models that do not benefit from large scale-up world sizes. However, we believe that GB200 NVL72 will win on performance and perf per TCO when it comes to reasoning models and frontier inferencing that do benefit from large disaggregated deployments or mixture of experts that best harness large scale-up networks.  
话虽如此，这个产品细分市场将会发货有意义的数量，具体取决于 MI355X 的软件质量以及 AMD 愿意出售的价格，MI355X 在性能与 TCO 的基础上与 NVIDIA 的 HGX 相比可能会具有相当的竞争力。这对于不受大规模世界规模影响的小型到中型模型尤其如此。然而，我们相信 GB200 NVL72 在推理模型和前沿推理方面将会在性能和每 TCO 性能上胜出，因为这些模型受益于大型分散部署或最佳利用大规模网络的专家混合。

Below, we will discuss what we see on MI355X, MI420X, MI450X, UALink, Infinity Fabric over Ethernet, and pricing.  
下面，我们将讨论我们在 MI355X、MI420X、MI450X、UALink、以太网上的 Infinity Fabric 以及定价方面看到的内容。

### Subscriber Content 订阅者内容

## The MI355X Microarchitecture (CDNA4) – SemiAnalysis EstimatesMI355X 微架构 (CDNA4) – SemiAnalysis 估计

The MI355 microarchitecture (CDNA4) will feature a Hopper SM90 style microarchitecture with Thread Block cluster, Tensor Memory Accelerator (TMA), TMA multicasting, wgmma and async data movements and async mma. We believe that CDNA4’s TMA equivalent will be called ROCm Memory Accelerator (RMA). This will allow CDNA4 to have more efficient data movements compared to CDNA3 but unfortunately picoJoules per bit & picoJoules per FLOP will still be higher than Blackwell’s SM100 uarch. This is due to CDNA4 not having tensor memory, 2 CTA mma, or preferred thread block cluster size.  
MI355 微架构 (CDNA4) 将采用 Hopper SM90 风格的微架构，配备线程块集群、张量内存加速器 (TMA)、TMA 多播、wgmma 以及异步数据移动和异步 mma。我们相信 CDNA4 的 TMA 等效物将被称为 ROCm 内存加速器 (RMA)。这将使 CDNA4 在数据移动方面比 CDNA3 更高效，但不幸的是，单位比特的皮焦耳和单位浮点运算的皮焦耳仍将高于 Blackwell 的 SM100 微架构。这是因为 CDNA4 没有张量内存、2 CTA mma 或首选线程块集群大小。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-43.-Blackwell-TMEM.png?fit=1024%2C558&ssl=1)

Source: NVIDIA 来源：NVIDIA

Like the MI300X and the MI325X, the MI355X also wastes too much silicon area on FP64 cores which are never used in AI. The reason AMD hasn’t been able to bring itself to pare down silicon usage on FP64 cores is that that AMD has historically done well in greybeard High-Performance Computing (HPC) applications that require FP64. The problem is that catering to this now small segment of HPC customers is now holding AMD back from capturing the now far larger AI customer segment that prefers to use number formats such as MX4/6/8, FP4/FP8 or FP16.  
与 MI300X 和 MI325X 一样，MI355X 在 FP64 核心上也浪费了太多硅面积，而这些核心在 AI 中从未被使用。AMD 未能削减 FP64 核心的硅使用量的原因在于，AMD 在历史上在需要 FP64 的老牌高性能计算（HPC）应用中表现良好。问题在于，迎合这一现在已小得多的 HPC 客户群体，正在阻碍 AMD 捕捉现在更大、偏好使用 MX4/6/8、FP4/FP8 或 FP16 等数字格式的 AI 客户群体。

NVIDIA is pursuing a different strategy. When moving to Blackwell from Hopper, Nvidia has reduced the number of FP64 tensor cores by 50% and are instead using software emulation with 7-8 INT8 tensor core operations to still achieve decent FP64 performance. This silicon is then re-allocated to tensor cores for MX4 tensor cores which are far more desirable to AI Lab customers. The below table illustrates how cuBLAS FP64 emulation nonetheless delivers meaningful TFLOP improvements for the B200 over the H200 in FP64.  
NVIDIA 正在追求不同的战略。在从 Hopper 迁移到 Blackwell 时，Nvidia 将 FP64 张量核心的数量减少了 50%，而是使用 7-8 个 INT8 张量核心操作进行软件仿真，以仍然实现不错的 FP64 性能。这些硅片随后被重新分配给 MX4 张量核心，这对 AI 实验室客户来说更具吸引力。下表说明了 cuBLAS FP64 仿真如何在 FP64 方面为 B200 提供了相对于 H200 的显著 TFLOP 提升。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-45.-cuBLAS.png?fit=1024%2C578&ssl=1)

Source: NVIDIA 来源：NVIDIA

This emulation works decently well that we in fact believe that NVIDIA will remove FP64 tensor cores almost entirely in the future and shift to only using software emulation to provide FP64.  
这种仿真效果相当不错，我们实际上相信 NVIDIA 将在未来几乎完全移除 FP64 张量核心，并转而仅使用软件仿真来提供 FP64。

## MI400 Series Flexible IOMI400 系列灵活 IO

AMD’s learned from their mistake on MI300 with regard to infinity fabric being much worse than NVLink while also recognizing they don’t have the hardware talent to actually execute on an NVSwitch equivalent. Furthermore, they don’t want to encroach on the industry ecosystem and verticalize. As such they have gone with the shotgun approach of supporting everything under the sun.  
AMD 从 MI300 的错误中吸取了教训，意识到无限织物远不如 NVLink，同时也认识到他们没有硬件人才来实际执行 NVSwitch 的等效方案。此外，他们不想侵犯行业生态系统并进行垂直整合。因此，他们采取了支持所有事物的广泛策略。

In come flexible IO lanes. Instead of having seperate SerDes and IO paths for each different type of IO such as PCIe and Scale Up, AMD has gone with having 144 lanes of IO that can support many different standards. They can support PCIe 6.0, Infinity Fabric at 64G, UALink at 128G, xGMI 4 at 128G which is somewhat of a superset of UALink, and Infinity Fabric over Ethernet at 212G. This enables AMD silicon team to have maximum flexibility for various different use cases.  
灵活的 IO 通道来了。AMD 并没有为每种不同类型的 IO（如 PCIe 和 Scale Up）设置单独的 SerDes 和 IO 路径，而是采用了 144 条 IO 通道，可以支持多种不同的标准。它们可以支持 PCIe 6.0、64G 的 Infinity Fabric、128G 的 UALink、128G 的 xGMI 4（这在某种程度上是 UALink 的超集）以及 212G 的以太网 Infinity Fabric。这使得 AMD 的硅团队在各种不同的使用案例中具有最大的灵活性。

AMD with this can do scale up UALink or Ethernet. They can do SSDs directly attached to the GPU. They can have Infinity fabric directly connected to GPUs. They can have NICs attached via UALink. The possibilities are almost endless. It is an incredibly large array of permutations for systems and a lot of changes can happen.  
AMD 可以通过此实现 UALink 或以太网的扩展。他们可以将 SSD 直接连接到 GPU。他们可以将 Infinity Fabric 直接连接到 GPU。他们可以通过 UALink 连接 NIC。可能性几乎是无穷无尽的。这是一个极其庞大的系统排列组合，许多变化可以发生。

As such there are a number of different racks AMD is considering from Torus fabrics with UALink to up to 256 GPU Ethernet based fabrics. We will detail the most likely current racks below, but its over a year from mass production and customers are still discussing their options. This incredible flexibility comes at a cost though.  
因此，AMD 正在考虑多种不同的机架，从带有 UALink 的 Torus fabrics 到最多 256 个 GPU 的以太网基础的 fabrics。我们将在下面详细介绍最可能的当前机架，但距离大规模生产还有一年多的时间，客户仍在讨论他们的选择。不过，这种令人难以置信的灵活性是有代价的。

With different forms of IO, the silicon engineering is not easy. AMD has to make SerDes and data paths that work with all of these different permutations. This is an incredibly hard engineering path fraught with engineering risk.  
随着不同形式的 IO，硅工程并不容易。AMD 必须制造与所有这些不同排列兼容的 SerDes 和数据路径。这是一条充满工程风险的极其困难的工程路径。

## MI430X UL4 – SemiAnalysis EstimatesMI430X UL4 – SemiAnalysis 估计

Due to AMD’s accelerated roadmap, we believe that they are skipping MI375X (CDNA4 refresh) and going straight to their CDNA-NEXT generation of chips.  
由于 AMD 加速的路线图，我们认为他们跳过了 MI375X（CDNA4 刷新），直接进入他们的 CDNA-NEXT 代芯片。

For AMD’s CDNA-NEXT generation of chips, we believe that AMD will release two SKUs – one targeted at FP64 boomer HPC workloads and another targeted at AI workloads that will not have many FP64 tensor cores. They both consist of 2 IO dies, 2 base active interposers, and 4 compute dies 3D stacked.  
对于 AMD 的 CDNA-NEXT 代芯片，我们相信 AMD 将发布两个 SKU——一个针对 FP64 高性能计算工作负载，另一个针对 AI 工作负载，后者将不会有太多 FP64 张量核心。它们都由 2 个 IO 芯片、2 个基础活动中介层和 4 个 3D 堆叠的计算芯片组成。

We believe that MI430X UL4 will be their HPC focused CDNA-NEXT chip. Since this is an HPC focused chip, the MI430X UL4 will have plenty of FP64 tensor cores. Because there will be zero UALink switches available for a while to come, the MI430X will only connect between 4 GPUs in a point-to-point mesh topology hence the “4” in UL4. This is the current limitation of UALink deployments that are available today – in the absence of a UALink switch taped out from Astera Lab, Enfabrica, XConn, or Auradine, UALink can only connect a low number of GPUs together. While they can do torus or mesh topologies, AMD doesn’t have the design or software resources to do both hence prioritizing only ethernet for scale up.  
我们相信 MI430X UL4 将是他们专注于高性能计算的 CDNA-NEXT 芯片。由于这是一个专注于高性能计算的芯片，MI430X UL4 将拥有大量的 FP64 张量核心。由于在可预见的未来将没有可用的 UALink 交换机，MI430X 将仅在点对点网状拓扑中连接 4 个 GPU，因此 UL4 中的“4”。这是目前可用的 UALink 部署的限制——在没有来自 Astera Lab、Enfabrica、XConn 或 Auradine 的 UALink 交换机的情况下，UALink 只能将少量 GPU 连接在一起。虽然它们可以实现环形或网状拓扑，但 AMD 没有设计或软件资源来同时实现这两者，因此优先考虑以太网进行扩展。

The concept of UALink sounds amazing in theory, where there is an open standard for scale up. The unfortunate truth is that for some open standards, progress is very slow due to the numerous amount of committee meetings. Furthermore, AMD does not currently have their own internal UALink switching group which means they must rely on Astera Lab or Broadcom. We believe that from Broadcom perspective, UALink switches will be lower volume than Ethernet switches thus they are not investing enough resources to make the switch come to market quicker.  
UALink 的概念在理论上听起来很棒，因为它有一个开放的扩展标准。不幸的事实是，对于某些开放标准，由于委员会会议的数量众多，进展非常缓慢。此外，AMD 目前没有自己的内部 UALink 交换组，这意味着他们必须依赖 Astera Lab 或 Broadcom。我们认为，从 Broadcom 的角度来看，UALink 交换机的销量将低于以太网交换机，因此他们没有投入足够的资源来使交换机更快上市。

To be clear, Ultra Ethernet for scale out open standards is going great & will be widely adopted & UEC ready switches are already on market.  
明确来说，超以太网用于扩展开放标准进展顺利，且将被广泛采用，UEC 兼容的交换机已经上市。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-46.-AMD-UALink-1.png?fit=845%2C1024&ssl=1)

Source: SemiAnalysis Estimates 来源：SemiAnalysis 估计

There is a possibility from the hardware perspective for MI430X and MI455X to do a larger point to point network with some sort of Torus like Google TPUs, or other topology, but AMD isn’t investing the resources to enable that. Previously Alibaba wanted UALink Scale Up, but with the newest bans, we believe this will no longer be prioritized.  
从硬件的角度来看，MI430X 和 MI455X 有可能实现更大规模的点对点网络，类似于谷歌 TPU 的某种环形拓扑或其他拓扑，但 AMD 并没有投入资源来实现这一点。之前阿里巴巴希望实现 UALink 扩展，但由于最新的禁令，我们认为这将不再被优先考虑。

In the next section, we will talk about the CDNA-NEXT generation SKU that is targeted for AI workload – MI450X.  
在下一部分，我们将讨论针对 AI 工作负载的 CDNA-NEXT 代 SKU - MI450X。

## MI450X Infinity Fabric over Ethernet (IFoE) IFoE64 & MI450X IFoE128 – SemiAnalysis EstimatesMI450X 无限织物以太网 (IFoE) IFoE64 和 MI450X IFoE128 – SemiAnalysis 估计

As we have written about many times, when it comes to AI compute, [systems matter more than chip level performance](https://semianalysis.com/2023/04/12/google-ai-infrastructure-supremacy/).  
正如我们多次提到的，谈到人工智能计算时，系统比芯片级性能更为重要。

[![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2024/11/b6fb8cda-5f23-477e-b4f3-27245364be1e_1088x828.png?fit=1024%2C779&ssl=1)

Apr 12, 2023  
2023 年 4 月 12 日

##### Google AI Infrastructure Supremacy: Systems Matter More Than Microarchitecture谷歌人工智能基础设施的优势：系统比微架构更重要

Dylan Patel, George Cozma, Gerald Wong  
迪伦·帕特尔，乔治·科兹马，杰拉尔德·黄

](https://semianalysis.com/2023/04/12/google-ai-infrastructure-supremacy/)

While ASIC competitors, Nvidia, and even [Huawei](https://semianalysis.com/2025/04/16/huawei-ai-cloudmatrix-384-chinas-answer-to-nvidia-gb200-nvl72/) have offered their AI hardware in rack level scale-up form factor, AMD customers have thus far been stuck with a smaller and thus inferior scale up domain of only 8 accelerators versus the 72 offered for Nvidia to cite one example.  
尽管 ASIC 竞争对手 Nvidia 甚至华为已经提供了机架级别的 AI 硬件，但 AMD 的客户迄今为止仍然被困在只有 8 个加速器的较小且劣质的扩展领域，而 Nvidia 则提供了 72 个加速器作为一个例子。

The pressure has been on for AMD to come up with its own rack-scale solution. However, Taiwanese ODMs, namely Quanta and Foxconn, have been focusing most of their engineering resources on supporting Nvidia, particularly with the well-known ongoing issues with GB200 NVL72 racks. Meanwhile, smaller ODMs are also busy as they are very focused on ASIC customers like Google, AWS, and OpenAI.  
AMD 面临着推出自己机架级解决方案的压力。然而，台湾的 ODM，特别是广达和富士康，已经将大部分工程资源集中在支持 Nvidia 上，特别是针对 GB200 NVL72 机架的众所周知的持续问题。同时，较小的 ODM 也很忙，因为他们非常专注于像 Google、AWS 和 OpenAI 这样的 ASIC 客户。

This leaves very little spare capacity or incentive for ODM partners to develop rack scale solution for AMD. [AMD’s solution to this problem was to acquire ZT Systems, a US based ODM, for $4.9 billion USD in March 2025.](https://www.amd.com/en/newsroom/press-releases/2025-3-31-amd-completes-acquisition-of-zt-systems.html) After the acquisition the engineering team at [ZT will focus completely on developing the rack scale solution for AMD, dropping most of their work on Nvidia systems.](https://x.com/LisaSu/status/1910131191946121533) There are some smaller efforts from Celestica and Lenovo, but primarily it is AMD / ZT.  
这几乎没有给 ODM 合作伙伴留下任何额外的能力或动力来为 AMD 开发机架规模解决方案。AMD 对此问题的解决方案是在 2025 年 3 月以 49 亿美元收购美国 ODM ZT Systems。收购后，ZT 的工程团队将完全专注于为 AMD 开发机架规模解决方案，放弃大部分对 Nvidia 系统的工作。Celestica 和联想有一些小规模的努力，但主要还是 AMD / ZT。

That said, AMD will not have their rack scale solution ready until the release of the MI450X, which is scheduled to launch in 2H26. This launch comes around the same time as Rubin, which will be offered in the Oberon (NVL144) form factor. In the sections below we will detail the concept of the MI450X rack scale solution and explain why it could be a competitive product to Rubin NVL144 when it launches.  
也就是说，AMD 的机架规模解决方案要等到 MI450X 发布时才会准备好，MI450X 计划在 2026 年下半年发布。这个发布与 Rubin 同时进行，Rubin 将以 Oberon (NVL144) 形态提供。在下面的部分中，我们将详细介绍 MI450X 机架规模解决方案的概念，并解释为什么它在发布时可能成为 Rubin NVL144 的竞争产品。

First, we show the compute tray concept:  
首先，我们展示计算托盘的概念：

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-47-1.png?fit=1024%2C743&ssl=1)

Source: SemiAnalysis Estimates 来源：SemiAnalysis 估计

We believe that four MI450X OAM modules will be socketed onto one compute board for serviceability and repairability. It is a reasonable assumption that there are four MI450X GPUs and one Venice CPUs per compute tray as x86 EPYC CPU is more powerful than Nvidia’s arm-based CPU. Furthermore, x86 CPU enables more seamline software integrations. MI450X’s TDP will be between 1600W and 2000W. Its FLOPS will be competitive to Rubin based going by the expected TDP.  
我们相信四个 MI450X OAM 模块将被插入到一个计算板上，以便于维护和修理。合理的假设是每个计算托盘有四个 MI450X GPU 和一个 Venice CPU，因为 x86 EPYC CPU 比 Nvidia 的基于 ARM 的 CPU 更强大。此外，x86 CPU 使得更多的 Seamline 软件集成成为可能。MI450X 的 TDP 将在 1600W 到 2000W 之间。根据预期的 TDP，其 FLOPS 将与 Rubin 基于的性能具有竞争力。

The MI450X GPU will have direct access to three different levels of memory, which indicates that the rack solution will be optimized for inference workloads as the availability of multiple memory tiers enables more efficient KVCaching. It is also interesting to see a direct PCIe channel between GPU and SSD, whereas for the GB200, the GPU still accesses NVMe storage via the Grace CPU. The four tiers of memory:  
MI450X GPU 将直接访问三种不同级别的内存，这表明机架解决方案将针对推理工作负载进行优化，因为多个内存层的可用性使得 KVCaching 更加高效。值得注意的是，GPU 和 SSD 之间有直接的 PCIe 通道，而对于 GB200，GPU 仍然通过 Grace CPU 访问 NVMe 存储。四个内存层：

1. In-package HBM (288GB/432GB, 18TB/s)  
	封装内 HBM（288GB/432GB，18TB/s）
2. Direct GPU Attached LPDDR5X through custom HBM (819GB/s)  
	通过定制 HBM 直接连接 GPU 的 LPDDR5X（819GB/s）
3. Direct attached PCIe linked SSD  
	直接连接的 PCIe 链接 SSD
4. CPU MR DIMM DDR5 over 16 lanes of 64G Infinity Fabric  
	CPU MR DIMM DDR5 超过 16 条 64G Infinity Fabric 通道

The Direct GPU attached LPDDR5X is similar to the architecture of Rubin Ultra. The Direct attached PCIe linked SSD similar to NVIDIA HGX’s local NVMe GPUDirect Storage.  
直接连接的 GPU 附加 LPDDR5X 类似于 Rubin Ultra 的架构。直接连接的 PCIe 链接 SSD 类似于 NVIDIA HGX 的本地 NVMe GPUDirect Storage。

The UAlink scale up switch will not be ready by 2H26, hence the scale up protocol of MI450X will be the ethernet based – Infinity Fabric over Ethernet (IFoE) T **he IFoE scale up bandwidth of MI450X is at least 1.8TB/s uni-di = 72 lanes of 200Gbit/s. This will be competitive with Rubin.**  
UAlink 扩展开关将在 2H26 之前无法准备好，因此 MI450X 的扩展协议将基于以太网 - 以太网上的无限结构（IFoE）。MI450X 的 IFoE 扩展带宽至少为 1.8TB/s 单向 = 72 条 200Gbit/s 的通道。这将与 Rubin 竞争。

Overall, we believe there will be three different SKUs of the MI450X – each with a different backend network configuration:  
总体而言，我们认为 MI450X 将有三种不同的 SKU - 每种都有不同的后端网络配置：

1. Three AMD 800GbE ethernet NICs per GPU (shown in the chart above)  
	每个 GPU 配备三张 AMD 800GbE 以太网 NIC（如上图所示）
	1. UALink protocol between the GPU and the NIC  
		GPU 与 NIC 之间的 UALink 协议
	1. 2.4Tbit/s per GPU 每个 GPU 2.4Tbit/s
	1. The most aggressive SKU in terms of scale out bandwidth.  
		在扩展带宽方面最具攻击性的 SKU。
2. Two AMD 800GbE ethernet NICs per GPU  
	每个 GPU 配备两个 AMD 800GbE Ethernet NIC
	1. UALink protocol between the GPU and the NIC  
		GPU 与 NIC 之间的 UALink 协议
	1. 1.6Tbit/s per GPU 每个 GPU 1.6Tbit/s
	1. Less aggressive scale out option.  
		较不激进的扩展选项。
3. Two custom PCIe 6.0 800GbE ethernet NICs per GPU  
	每个 GPU 两个定制的 PCIe 6.0 800GbE 网卡
	1. PCIe 6.0 protocol between the GPU and the NIC  
		GPU 与网卡之间的 PCIe 6.0 协议
	1. 1.6Tbit/s per GPU 每个 GPU 1.6Tbit/s
	1. Allow the customers to choose non-AMD NIC.  
		允许客户选择非 AMD 网卡。

Customers that choose AMD’s NIC will have 1.5x more scale out bandwidth per GPU compared to a non-AMD NIC.  
选择 AMD 网络接口卡的客户将比非 AMD 网络接口卡每个 GPU 拥有 1.5 倍的扩展带宽。

At the compute tray level, we believe that AMD’s solution will be competitive on paper to NVIDIA’s H2 2026 VR200 NVL144 solution. Next, let’s look at the scale-up network and architecture in more detail.  
在计算托盘级别，我们相信 AMD 的解决方案在纸面上将与 NVIDIA 的 2026 年下半年 VR200 NVL144 解决方案具有竞争力。接下来，让我们更详细地看看扩展网络和架构。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-48.png?fit=708%2C1024&ssl=1)

Source: SemiAnalysis Estimates 来源：SemiAnalysis 估计

We believe AMD’s MI450X IFoE rack will have switch trays between the compute trays using the ORV3 rack, much like Nvidia’s Oberon platform. There will be 8 compute trays at the top of each rack, 9 switch trays in the middle, and 8 compute trays at the bottom of each rack. The key difference between the AMD IFoE64 rack and the Nvidia GB200 NVL72 is that there are 10 compute trays at the top of Nvidia’s rack while AMD’s will only have 8 compute trays above the switch trays. This brings the total scale up world size for AMD’s MI450x IFoE to 64 GPUs, which is 8 less than Nvidia’s. [We have explained why Nvidia chose to go with 72 scale up world size instead of 64 before.](https://semianalysis.com/2024/08/04/nvidias-blackwell-reworked-shipment/) To recap, 64 is the most efficient scale-up domain size to run AI workloads on but having a set of 8 extra GPUs in the scale up domain allows a degree of flexibility should compute nodes fail while carrying out workloads. The scale up size of the MI450X is not yet finalized, but we still believe customers prefer a 72-GPU scale up domain size.  
我们相信 AMD 的 MI450X IFoE 机架将在计算托盘之间使用 ORV3 机架的交换机托盘，类似于 Nvidia 的 Oberon 平台。每个机架顶部将有 8 个计算托盘，中间有 9 个交换机托盘，底部有 8 个计算托盘。AMD IFoE64 机架与 Nvidia GB200 NVL72 之间的主要区别在于，Nvidia 机架顶部有 10 个计算托盘，而 AMD 的机架在交换机托盘上方只有 8 个计算托盘。这使得 AMD 的 MI450X IFoE 的总规模提升世界大小为 64 个 GPU，比 Nvidia 少 8 个。我们之前解释过 Nvidia 为何选择 72 的规模提升世界大小而不是 64。回顾一下，64 是运行 AI 工作负载的最有效的规模提升域大小，但在规模提升域中拥有 8 个额外的 GPU 可以在计算节点在执行工作负载时出现故障时提供一定的灵活性。MI450X 的规模提升大小尚未最终确定，但我们仍然相信客户更喜欢 72-GPU 的规模提升域大小。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-49-2.png?fit=1024%2C591&ssl=1)

Source: SemiAnalysis Estimates 来源：SemiAnalysis 估计

The IFoE scale up domain will use an all to all topology. Each switch tray will contain two 51.2T switches, meaning that the aggregate scale up bandwidth of MI450 IFoE64 will be 921.6 Tbit/s of uni-directional bandwidth. For scale-up connectivity, each GPU will utilize 72 lanes of 200G ethernet connecting 18 switches. This works out to 4 lanes of 200G ethernet or 800Gbit/s of uni-directional (uni-di) bandwidth between each GPU and each Switch ASIC. There will be a total of 9,216 DAC cables in the copper backplane, more than Nvidia’s 5,184 DAC cable in the GB200 copper backplane.  
IFoE 扩展域将使用全对全拓扑。每个交换机托盘将包含两个 51.2T 交换机，这意味着 MI450 IFoE64 的总扩展带宽将为 921.6 Tbit/s 的单向带宽。对于扩展连接，每个 GPU 将利用 72 条 200G 以太网通道连接 18 个交换机。这相当于每个 GPU 与每个交换机 ASIC 之间有 4 条 200G 以太网通道或 800Gbit/s 的单向（uni-di）带宽。铜背板中将有总共 9,216 条 DAC 电缆，超过 Nvidia 在 GB200 铜背板中的 5,184 条 DAC 电缆。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-50.png?fit=1024%2C652&ssl=1)

Source: SemiAnalysis Estimates 来源：SemiAnalysis 估计

Interestingly, we believe that AMD will also launch a more aggressive rack scale architecture of MI450X IFoE128, which basically combines two MI450X IFoE64 racks into one scale up domain. MI450X IFoE128 will have the same 1.8TByte/s scaleup bandwidth per GPU as MI450X IFoE64. While Nvidia has taken a similar approach in joining two physical racks into one scale up domain in its NVL36x2 concept, AMD’s concept utilizes a different cable solution. Nvidia’s attempt of NVL36x2 was short lived and never saw the light of day due to issues with the ACC cables that connect the two NVL36 racks via the front of the rack using the NVSwitch trays. Instead of using ACCs, we believe that AMD will attempt to connect the two racks with DAC cables via a massive copper backplane that spans across two racks.  
有趣的是，我们相信 AMD 还将推出更具攻击性的 MI450X IFoE128 机架规模架构，它基本上将两个 MI450X IFoE64 机架合并为一个扩展域。MI450X IFoE128 将与 MI450X IFoE64 具有相同的每个 GPU 1.8TByte/s 扩展带宽。虽然 Nvidia 在其 NVL36x2 概念中采取了类似的方法，将两个物理机架合并为一个扩展域，但 AMD 的概念采用了不同的电缆解决方案。Nvidia 的 NVL36x2 尝试短暂存在，因 ACC 电缆连接两个 NVL36 机架的问题而未能问世，这些电缆通过机架前部使用 NVSwitch 托盘连接。我们相信，AMD 将尝试通过跨越两个机架的大型铜背板，使用 DAC 电缆连接这两个机架，而不是使用 ACCs。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-51.png?fit=1024%2C923&ssl=1)

Source: SemiAnalysis Estimates 来源：SemiAnalysis 估计

We believe that the DAC backplane approach of AMD provides two advantages over the ACC approach that Nvidia tried with.  
我们相信，AMD 的 DAC 背板方案相较于 Nvidia 尝试的 ACC 方案提供了两个优势。  
  
First, with Nvidia’s approach, each cross-rack link between GPUs requires two hops. AMD’s DAC backplane solves this problem as all the hops are still one hops.  
首先，使用 Nvidia 的方案，每个 GPU 之间的跨机架链接需要两次跳转。AMD 的 DAC 背板解决了这个问题，因为所有的跳转仍然是一次跳转。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-52.png?fit=880%2C1024&ssl=1)

Source: SemiAnalysis Estimates 来源：SemiAnalysis 估计

Second, as the interconnect does not go through the front of the rack, the switch ASICs can be place closer to the backplane connector reducing the distance between each link.  
其次，由于互连不经过机架的前面，交换机 ASIC 可以更靠近背板连接器，从而减少每个链路之间的距离。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-54-scaled.png?fit=1024%2C487&ssl=1)

Source: SemiAnalysis Estimates 来源：SemiAnalysis 估计

With benefits comes challenges. In order to double the scale up domain from 64 to 128 while maintain 1.8TByte/s per GPU, the uni-di scale up bandwidth between each GPU and each Switch will be halved to be 2 lanes of 212G ethernet SerDes or 400Gbit/s. Cable management would present a significant challenge, as there would even more cables, a total of 18,432 DAC cables with half the cable from each rack going across to the other rack. The longer distance of the cross-rack cables also poses a significant challenge for execution as it becomes harder to maintain signal integrity over longer distances on DAC cables.  
随着好处而来的还有挑战。为了将 64 的扩展域规模翻倍到 128，同时保持每个 GPU 1.8TByte/s 的速度，单向扩展带宽在每个 GPU 和每个交换机之间将减半，变为 2 条 212G 以太网 SerDes 或 400Gbit/s。电缆管理将面临重大挑战，因为将会有更多的电缆，总共有 18,432 条 DAC 电缆，每个机架的一半电缆跨越到另一个机架。跨机架电缆的更长距离也对执行构成了重大挑战，因为在 DAC 电缆上保持信号完整性在更长距离上变得更加困难。

Overall, we believe that AMD will make significant progress with rack scale solution post acquisition of ZT System to remain competitive on the hardware level. With the Kyber architecture of Nvidia scheduled to be launched in 2H27, this presents an opportunity for AMD to catch up with Nvidia on rack scale solution in 2H26 against 2H26 Rubin Oberon form factor.  
总体而言，我们相信 AMD 在收购 ZT 系统后将在机架规模解决方案上取得重大进展，以保持在硬件层面的竞争力。随着 Nvidia 的 Kyber 架构计划在 2027 年下半年推出，这为 AMD 在 2026 年下半年与 Nvidia 在机架规模解决方案上迎头赶上提供了机会，针对的是 2026 年下半年 Rubin Oberon 形态因素。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-56-scaled.png?fit=1024%2C424&ssl=1)

Source: SemiAnalysis Estimates, Nvidia 来源：SemiAnalysis 估计，Nvidia

We believe the MI450X IFoE64 architecture will be competitive with 2H 2026’s Rubin Vera NVL144 as they have the same scale up bandwidth per GPU @1.8TByte/s and competitive FLOPs. There is a chance that AMD even one up Nvidia with the MI450X IFoE128 solution which almost doubles the scale up domain of Rubin Vera NVL144.  
我们相信 MI450X IFoE64 架构将在 2026 年下半年与 Rubin Vera NVL144 竞争，因为它们每个 GPU 的扩展带宽相同，均为 1.8TByte/s，并且 FLOPs 具有竞争力。AMD 甚至有可能通过 MI450X IFoE128 解决方案超越 Nvidia，该解决方案几乎将 Rubin Vera NVL144 的扩展域翻倍。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-57-scaled.png?fit=1024%2C346&ssl=1)

Source: SemiAnalysis Estimates, Nvidia 来源：SemiAnalysis 估计，Nvidia

They have a 256 GPU DAC backplane approach in design too.  
他们在设计中也采用了 256 GPU DAC 背板方案。

## MI300X, MI325X, MI355X Pricing & TCOMI300X、MI325X、MI355X 定价与总拥有成本

As discussed earlier, AMD’s launch timing means that its current generation products have been facing off against Nvidia’s next generation products. We have already observed price cuts in the MI300X into late 2024 as we have gotten closer to the first shipment dates for Blackwell systems. In 2025 thus far, the MI325X has been competing with Nvidia’s Blackwell for customer orders. With AMD’s GPUs seeing less than ideal traction, we see a round of price cuts coming to the MI325X and MI355X in the second half of the year just to stay competitive with the B200 1000W and B300A NVL16. And this is even before we consider how AMD’s current products stack against the GB200 NVL72 and its intimidating inference performance that is enhanced even further with the release of Dynamo.  
正如之前讨论的，AMD 的发布时机意味着其当前一代产品正在与 Nvidia 的下一代产品竞争。随着我们接近 Blackwell 系统的首次发货日期，我们已经观察到 MI300X 在 2024 年末的降价情况。因此，到目前为止，MI325X 在 2025 年与 Nvidia 的 Blackwell 争夺客户订单。由于 AMD 的 GPU 表现不尽如人意，我们预计在下半年 MI325X 和 MI355X 将进行一轮降价，以便与 B200 1000W 和 B300A NVL16 保持竞争力。这甚至是在我们考虑 AMD 当前产品与 GB200 NVL72 及其令人畏惧的推理性能（在 Dynamo 发布后进一步增强）相比之前的情况。

AMD’s MI300X and MI325X server level cost and total cluster upfront costs are 20-30% lower than Nvidia’s H100 due to lower chip pricing as well as the availability of less expensive Ethernet networking switches and the use of transceivers from vendors other than Nvidia.  
由于芯片价格较低以及更便宜的以太网网络交换机的可用性，以及使用来自非 Nvidia 供应商的收发器，AMD 的 MI300X 和 MI325X 服务器级成本和整个集群的前期总成本比 Nvidia 的 H100 低 20-30%。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-58.png?fit=1024%2C580&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

Operating costs for AMD’s servers are similar to Nvidia’s servers as they generally have comparable TDPs and most operating costs scale with respect to IT power requirements.  
AMD 服务器的运营成本与 Nvidia 服务器相似，因为它们通常具有可比的 TDP，并且大多数运营成本与 IT 电力需求成比例。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-59.png?fit=1024%2C556&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

However, with leading edge GPUs, the Capital Cost generally dominates and so AMD’s total cost of ownership is noticeably below that of Nvidia, with the MI300X coming in at a TCO of $1.37 per hour per GPU vs Nvidia’s H100 at $1.62 per hour per GPU. Note that the below graph is based on theoretical 8 bit FLOP/s and not realistic FLOP/s. [As discussed earlier, AMD as owned to overstate their theoretical FLOP/s](https://rocm.blogs.amd.com/software-tools-optimization/Understanding_Peak_and_Max-Achievable_FLOPS/README.html)  
然而，对于领先的 GPU，资本成本通常占主导地位，因此 AMD 的总拥有成本明显低于 Nvidia，MI300X 的 TCO 为每个 GPU 每小时 1.37 美元，而 Nvidia 的 H100 为每个 GPU 每小时 1.62 美元。请注意，下面的图表基于理论的 8 位 FLOP/s，而不是现实的 FLOP/s。如前所述，AMD 曾被指控夸大其理论 FLOP/s。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig.-60.png?fit=1024%2C375&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

![](https://pixel.wp.com/g.gif?v=ext&blog=233841863&post=150426353&tz=0&srv=semianalysis.com&hp=atomic&ac=3&amp=0&j=1%3A14.6-a.9&host=semianalysis.com&ref=https%3A%2F%2Ft.co%2F&rand=0.12718469237316932)