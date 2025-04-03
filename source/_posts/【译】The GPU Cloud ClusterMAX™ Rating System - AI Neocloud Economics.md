---
title: 【译】GPU 云集群 评级系统 ｜ AI新云经济学
author:
  - "[[SemiAnalysis]]"
published: 2025-03-26
created: 2025-04-03
tags:
  - GPU
  - NVDA
  - CoreWeave
---
 
  
## GPU 云集群 MAX™评级系统 | 如何租用 GPU 90%+覆盖率通过租用 GPU 价值、GPU 泡沫破裂、CoreWeave IPO、AI 新云经济学

由迪伦·帕特尔、邓洪·陈、丹尼尔·尼什巴尔、伊万·恰姆和雷克·克努赫特森撰写

![](https://semianalysis.com/wp-content/uploads/2025/03/file_000000001dcc51f6900bfe241a0a01ea_conversation_id67e3bba7-e4a8-800d-a1c6-8b68859eb1d7message_id70400c72-4c38-472b-8262-06a8cef06f44.png)

*The ClusterMAX™ Rating System and content within this article were prepared independently by SemiAnalysis. No part of SemiAnalysis’s compensation by our clients was, is, or will be directly or indirectly related to the specific tiering, ratings or comments expressed.  
ClusterMAX™ 评级系统及本文内容由 SemiAnalysis 独立准备。SemiAnalysis 从客户处获得的任何补偿与具体的分级、评级或表达的评论无直接或间接关系。*

## Introduction 介绍

The exuberance in the GPU rental market has cooled off. We predicted this in our [December 2023 GPU Cloud Economics Report](https://semianalysis.com/2023/12/04/gpu-cloud-economics-explained-the/) and re-iterated this view in our [AI Neocloud Anatomy and Playbook Report released in October 2024](https://semianalysis.com/2024/10/03/ai-neocloud-playbook-and-anatomy/#part-2-the-ai-neocloud-economy). Technological improvements mean the cost of computing goes down over time, and we now believe it’s a buyers’ market for GPU rentals, especially for the Hopper class and MI300 class GPU. There is widespread availability from over 100+ AI Neoclouds and Hyperscalers.  
GPU 租赁市场的热情已经降温。我们在 2023 年 12 月的 GPU 云经济报告中预测了这一点，并在 2024 年 10 月发布的 AI Neocloud 解剖与行动计划报告中重申了这一观点。技术进步意味着计算成本随着时间的推移而降低，我们现在认为 GPU 租赁市场是买方市场，特别是对于 Hopper 系列和 MI300 系列 GPU。来自 100 多个 AI Neocloud 和超大规模云服务商的广泛可用性。

Part of this is due to new entrants, and with more options to rent. Currently, there is no “how-to guide” to rent a GPU or any independent evaluation of GPU clouds until today.  
这部分是由于新进入者的影响，以及租赁选项的增加。目前，直到今天还没有关于租用 GPU 的“操作指南”或任何独立的 GPU 云评估。

For the past 12 months we have spent time creating the GPU Cloud ClusterMAX™ Rating System, or ClusterMAX ™ for short. We have independently tested and/or collected customer feedback from as many GPU clouds as possible. We believe that with this first GPU Cloud Rating, we will cover **90% of the GPU rental market by GPU volume**. We hope to include more providers in our next rating exercise so that we can evaluate their quality.  
在过去的 12 个月里，我们花时间创建了 GPU 云 ClusterMAX™评级系统，简称 ClusterMAX™。我们独立测试和/或收集了尽可能多的 GPU 云的客户反馈。我们相信，通过这个首个 GPU 云评级，我们将覆盖 90%的 GPU 租赁市场按 GPU 数量计算。我们希望在下一个评级活动中包括更多的提供商，以便我们能够评估他们的质量。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/Fig-1.-Neocloud-Ranking-GIMP.png?resize=778%2C868&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

This isn’t an exhaustive list of GPU providers. We have a much more extensive list of players that we are aware of, and the entire market map is shown in the following image. This list appears to be expanding daily, but many of the neoclouds are not yet ready for customers. This is the point of ClusterMAX™, as it’s a simple tool to help you navigate complexity. It is probably worth spending your dollar on a ClusterMAX™ rated provider.  
这并不是一个详尽的 GPU 供应商列表。我们知道的参与者有一个更广泛的列表，整个市场地图显示在下面的图像中。这个列表似乎每天都在扩展，但许多新云尚未准备好为客户服务。这就是 ClusterMAX™的意义所在，因为它是一个简单的工具，可以帮助您应对复杂性。花钱选择一个 ClusterMAX™评级的供应商可能是值得的。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-2.-Neocloud-providers-by-type-GIMP.png?resize=1024%2C562&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

Our rating classifications are Platinum, Gold, Silver, Bronze, and UnderPerform. We will explain each rating in more detail later in this report.  
我们的评级分类为铂金、黄金、白银、铜牌和表现不佳。我们将在本报告的后面详细解释每个评级。

In addition we will also be discussing the market for H100 rentals, where it’s headed from here, Hyperscaler vs Neocloud pricing, cluster level TCO, cluster returns and scenario analysis, various debates around demand, and applying this framework/analysis to Coreweave and their IPO.  
此外，我们还将讨论 H100 租赁市场的现状及未来发展，Hyperscaler 与 Neocloud 的定价，集群级总拥有成本（TCO），集群回报和情景分析，关于需求的各种辩论，以及将这一框架/分析应用于 Coreweave 及其 IPO。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-3.-Trophies-GIMP.png?resize=1024%2C211&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

## Executive Summary 执行摘要

1. SemiAnalysis has developed the world’s first GPU Cloud Rating System – we have named this system ClusterMAX™. We look into rating GPUs from the perspective of an average reasonable customer.  
	SemiAnalysis 开发了全球首个 GPU 云评级系统——我们将该系统命名为 ClusterMAX™。我们从普通合理客户的角度来评估 GPU。
2. SemiAnalysis has independently tested dozens of GPUs and ClusterMAX™ currently has approximately 90% coverage of the entire GPU market by GPU volume.  
	SemiAnalysis 独立测试了数十款 GPU，目前 ClusterMAX™ 在 GPU 体量方面覆盖了整个 GPU 市场的约 90%。
3. The bar across the GPU cloud industry is currently very low. ClusterMAX™ aims to provide a set of guidelines to help raise the bar across the whole GPU cloud industry. ClusterMAX™ guidelines evaluate features that most GPU renters care about.  
	目前，GPU 云行业的标准非常低。ClusterMAX™旨在提供一套指导方针，以帮助提高整个 GPU 云行业的标准。ClusterMAX™指导方针评估大多数 GPU 租赁者关心的特性。
4. ClusterMAX™ has five different tiers: Platinum, Gold, Sliver, Bronze and UnderPerform.  
	ClusterMAX™有五个不同的等级：铂金、黄金、白银、铜和表现不佳。
5. We will be conducting regular ClusterMAX™ rating and evaluation exercises every 3-6 months so that various GPUs can have their improvements reflected, and customer can have the latest information on GPUs.  
	我们将每 3-6 个月进行定期的 ClusterMAX™评级和评估，以便各种 GPU 的改进能够得到反映，客户可以获得最新的 GPU 信息。
6. ClusterMAX™ Platinum represents GPU clouds that are raising the industry bar and there is only one GPU cloud, CoreWeave, that provides services at this tier.  
	ClusterMAX™ Platinum 代表着提升行业标准的 GPU 云，只有一个 GPU 云，CoreWeave，提供此级别的服务。
7. CoreWeave is the only non-hyperscaler currently that is experienced at operating large-scale 10k+ H100 clusters reliably.  
	CoreWeave 是目前唯一一家在可靠地运营大规模 10k+ H100 集群方面具有经验的非超大规模云服务商。
8. Some of these providers in ClusterMAX™ Bronze category are already making a considerable effort to catch up such as Google Cloud. We believe Google Cloud is on a Rocketship path toward ClusterMAX™ Gold or ClusterMAX™ Platinum by the next time we re-evaluate them.  
	ClusterMAX™ 铜级别中的一些提供商，例如 Google Cloud，已经在努力追赶。我们相信 Google Cloud 正在朝着 ClusterMAX™ 金级或 ClusterMAX™ 白金级的方向快速发展，直到我们下次重新评估他们。
9. Enterprises mainly rent GPUs from Hyperscalers + CoreWeave. Enterprises rarely rent from Emerging Neoclouds.  
	企业主要从超大规模云服务商和 CoreWeave 租用 GPU。企业很少从新兴的 Neoclouds 租用。
10. Hyperscalers’ GPU rental prices are higher than that of Neocloud Giants and Emerging Neoclouds as Hyperscalers mainly serve the enterprise market.  
	超大规模云服务商的 GPU 租赁价格高于 Neocloud 巨头和新兴 Neoclouds，因为超大规模云服务商主要服务于企业市场。
11. Oracle comes in at one of the lowest GPU Rental price points amongst the Hyperscalers.  
	在超大规模云服务商中，Oracle 的 GPU 租赁价格处于最低水平之一。
12. Amongst GPU clouds that are highly competent on the technical front, Nebius offers the lowest absolute price and the best terms for short to medium-term rents. Crusoe also offers reasonable pricing and contract terms in additional to strong technical competency.  
	在技术能力非常强的 GPU 云服务中，Nebius 提供最低的绝对价格和最佳的短期到中期租赁条款。Crusoe 也提供合理的定价和合同条款，并且在技术能力上也很强。
13. As we first discussed in our article on [GPU Cloud Economics published back in December 2023](https://semianalysis.com/2023/12/04/gpu-cloud-economics-explained-the/), technological improvements mean the cost of compute goes down over time, and we now believe it’s a buyers’ market for GPU rentals. There are 100 of GPU clouds all competing for mostly the same customers.  
	正如我们在 2023 年 12 月发布的关于 GPU 云经济的文章中首次讨论的那样，技术进步意味着计算成本随着时间的推移而下降，我们现在认为 GPU 租赁市场是买方市场。目前有 100 个 GPU 云服务商都在争夺大致相同的客户。
14. The launch of DeepSeek provided a momentary short-term stabilization and even increase in H200 rental prices but in the medium to long term, prices are still declining.  
	DeepSeek 的推出在短期内提供了暂时的稳定，甚至使 H200 租赁价格有所上涨，但从中长期来看，价格仍在下降。
15. Jensen Huang, Chief Revenue Destroyer, said last week, “ *When Blackwells start shipping in volume, you couldn’t even give Hoppers away”.* From perspective of the GPU operator,this should be a call for GPU Rental providers to ensure that they engage in contracts that protect them from rapid compute price declines – i.e. sign long term contracts where possible. From the customer’s perspective, they may prefer flexibility in their commitments and opt for shorter-term contracts.  
	詹森·黄，首席收入破坏者，上周表示：“当黑威尔开始大规模发货时，你甚至无法赠送霍普斯。” 从 GPU 运营商的角度来看，这应该是对 GPU 租赁提供商的呼吁，确保他们签订保护他们免受快速计算价格下跌的合同——即尽可能签订长期合同。从客户的角度来看，他们可能更喜欢在承诺上的灵活性，选择短期合同。
16. We will talk more about GPU Rental pricing and the IRR of GPUs as well as recent GPU Rental Market Rates for different contract lengths at the end of the article. Scroll down to the end if you are the reader who cares mainly about the finance side of GPUs or how to think about unit economics for the GPU rental business.  
	我们将在文章末尾讨论更多关于 GPU 租赁定价和 GPU 的内部收益率，以及不同合同期限的最新 GPU 租赁市场利率。如果你是主要关心 GPU 财务方面或如何考虑 GPU 租赁业务的单位经济的读者，请向下滚动到文章末尾。

## The GPU Cloud ClusterMAX™ Rating SystemGPU 云集群 MAX™评级系统

The goal of the ClusterMAX™ rating is to evaluate and benchmark the more than 100 GPU providers. This provides the broader ML community with an understanding of the capabilities, features, advantages, and disadvantages of each GPU provider. This better informs a provider which GPU cloud(s) can best meet their needs. Our second objective is to provide a set of guidelines to help raise the bar across the whole GPU cloud industry. Currently, the bar is lower than you can imagine.  
ClusterMAX™评级的目标是评估和基准测试超过 100 个 GPU 提供商。这为更广泛的机器学习社区提供了对每个 GPU 提供商的能力、特性、优点和缺点的理解。这更好地告知提供商哪些 GPU 云可以最好地满足他们的需求。我们的第二个目标是提供一套指导方针，以帮助提升整个 GPU 云行业的标准。目前，标准低于你想象的水平。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-4.-Southpark-GIMP.png?resize=1024%2C560&ssl=1)

Source: [South Park](https://www.youtube.com/watch?v=jUsf_BXUbKY) 来源：南方公园

ClusterMAX ™ hopefully will raise the bar, and we’ve stepped into the deep end and done extensive benchmarking and profiling over the last year to see the best and worst practices at GPU providers. We have scaled from single nodes to 1024 GPU clusters, and today we share our findings with the broader community.  
ClusterMAX ™ 希望能够提升标准，我们已经深入研究并进行了广泛的基准测试和性能分析，以了解 GPU 供应商的最佳和最差实践。我们已经从单节点扩展到 1024 GPU 集群，今天我们与更广泛的社区分享我们的发现。

We evaluate features that GPU renters care about, such as:  
我们评估 GPU 租赁者关心的特性，例如：

- Security 安全
- LifeCycle and Technical Expertise  
	生命周期和技术专长
- Slurm and Kubernetes Slurm 和 Kubernetes
- Storage 存储
- NCCL/RCCL Networking Performance  
	NCCL/RCCL 网络性能
- Reliability and Service Level Agreements (SLAs)  
	可靠性和服务水平协议（SLA）
- Automated Active and Passive Health Checks and Monitoring  
	自动化主动和被动健康检查与监控
- Consumption Models, Price Per Value, and Availability  
	消费模型、价值价格和可用性
- Technical Partnerships 技术合作伙伴关系

In today’s report we will dive deeper into specifics on how we evaluate GPUs and our guidelines later in the article.  
在今天的报告中，我们将深入探讨我们如何评估 GPU 的具体细节以及文章后面的指导方针。

We will re-evaluate and update our GPU Cloud ClusterMAX™ Tier list every 3-6 months to incorporate new information for the GPU rental market. We want to give GPU providers feedback and the opportunity to improve, and we are always open to and appreciate our dialogues with GPU providers.  
我们将每 3-6 个月重新评估并更新我们的 GPU 云集群 MAX™等级列表，以纳入 GPU 租赁市场的新信息。我们希望为 GPU 提供商提供反馈和改进的机会，并始终欢迎并感激与 GPU 提供商的对话。

We break our ClusterMAX™ rating system into five tiers:  
我们将 ClusterMAX™评级系统分为五个等级：

- ClusterMAX™ Platinum ClusterMAX™铂金
- ClusterMAX™ Gold ClusterMAX™ 金
- ClusterMAX™ Sliver ClusterMAX™ 银
- ClusterMAX™ Bronze ClusterMAX™ 铜
- UnderPerform 表现不佳

Each tier has attributes that justify the rating it receives. Let’s discuss from best to worst.  
每个级别都有其属性来证明其获得的评级。让我们从最好到最差进行讨论。

The **ClusterMAX™ Platinum** tier represents *the best* GPU cloud providers in the industry. Providers in this category consistently excel across evaluation criteria, including security, price for value, technical expertise, reliability backed by clearly defined SLAs, seamless managed Slurm/Kubernetes offering, and best in class NCCL/RCCL networking performance. Platinum-tier providers are proactive, innovative, and maintain an active feedback loop with the community to continually raise the bar. That’s why they are the best.  
ClusterMAX™ 白金级别代表了行业中最优秀的 GPU 云服务提供商。该类别的提供商在评估标准上始终表现出色，包括安全性、性价比、技术专长、可靠性（有明确的服务水平协议支持）、无缝的管理 Slurm/Kubernetes 提供以及一流的 NCCL/RCCL 网络性能。白金级别的提供商积极主动、创新，并与社区保持活跃的反馈循环，以不断提高标准。这就是他们为何是最优秀的原因。

**ClusterMAX™ Gold** tier providers deliver *strong* performance across most key evaluation categories, with some opportunities for improvement. They offer solid security, reliable infrastructure, and competitive pricing, and competent technical support. Although Gold-tier GPU clouds may have gaps or inconsistencies in features like active health checks, they generally demonstrate responsiveness to feedback and a commitment to improvement. They are positioned as great choices for GPU renters to maximize throughput.  
ClusterMAX™ 金级提供商在大多数关键评估类别中表现出色，尽管仍有一些改进的机会。他们提供可靠的安全性、稳定的基础设施和具有竞争力的定价，以及称职的技术支持。尽管金级 GPU 云在主动健康检查等功能上可能存在差距或不一致，但它们通常对反馈表现出响应性，并致力于改进。它们被视为 GPU 租户最大化吞吐量的绝佳选择。

Providers rated at **ClusterMAX™ Silver** demonstrate *adequate* GPU cloud offerings with a satisfactory balance of performance, security, and value, but they typically have noticeable gaps compared to Gold or Platinum-tier services. These providers meet basic standards for reliability, security, support, and have adequate networking performance but lack advanced orchestration, or have confusing pricing structures. Silver-tier GPU clouds have room for improvement and typically benefit significantly from adopting industry best practices.  
ClusterMAX™ 银级提供商展示了足够的 GPU 云服务，性能、安全性和价值之间有令人满意的平衡，但与金级或铂金级服务相比，通常存在明显的差距。这些提供商满足可靠性、安全性、支持的基本标准，并具有足够的网络性能，但缺乏高级编排，或定价结构令人困惑。银级 GPU 云有改进的空间，通常通过采用行业最佳实践而显著受益。

The **ClusterMAX™ Bronze** tier includes GPU cloud providers that fulfill the *minimum* criteria but consistently exhibit shortcomings in our evaluation areas. Common issues may include inconsistent support, subpar networking performance, unclear SLAs, limited integration with popular tools like Kubernetes or Slurm, or less competitive pricing. Providers in this category need considerable improvements to enhance reliability and customer experience. Some of these providers in this category are already making considerable effort to catch up – Google Cloud for example – and we are excited to see what their next ClusterMAX™ result will be in 3-6 months.  
ClusterMAX™ 铜级包括满足最低标准但在我们的评估领域中持续表现不佳的 GPU 云服务提供商。常见问题可能包括支持不一致、网络性能不佳、服务水平协议不明确、与 Kubernetes 或 Slurm 等流行工具的集成有限，或定价竞争力不足。此类别的提供商需要进行大量改进，以增强可靠性和客户体验。该类别中的一些提供商已经在努力追赶，例如 Google Cloud，我们期待看到他们在 3-6 个月内的下一个 ClusterMAX™ 结果。

GPU providers placed in the **UnderPerform** category fail to meet basic industry and security requirements across multiple evaluation metrics. Providers in this tier generally exhibit substantial such as insecure security practices, poor reliability or uptime, unclear or misleading marketing, limited technical knowledge or customer support, and inadequate orchestration capabilities. Most commonly, providers in the Underperform tier do not have SOC2 compliance or have security risks exposing traffic between your workload and the internet which could be logged by networking equipment. The GPU providers that land themselves in the **UnderPerform** category are often the same companies that spam AI generated advertisements.  
被归类为表现不佳的 GPU 供应商未能满足多个评估指标下的基本行业和安全要求。此层级的供应商通常表现出显著的问题，例如不安全的安全实践、可靠性或正常运行时间差、模糊或误导性的营销、有限的技术知识或客户支持，以及不足的编排能力。最常见的是，表现不佳层级的供应商没有 SOC2 合规性，或者存在安全风险，暴露了您的工作负载与互联网之间的流量，这可能被网络设备记录。落入表现不佳类别的 GPU 供应商通常是那些发送 AI 生成广告的公司。

## Jensen Huang, Chief Revenue Destroyer詹森·黄，首席收入破坏者

Jensen Huang, Chief Revenue Destroyer, said last week, “When Blackwells start shipping in volume, you couldn’t even give Hoppers away.”  
詹森·黄，首席收入破坏者，上周表示：“当黑威尔开始大规模出货时，你甚至无法赠送霍普斯。”

Back in April 2024, our pricing model in the [AI Cloud Total Cost of Ownership Model](https://semianalysis.com/ai-cloud-tco-model/) suggested such an outcome. GPU prices declined throughout 2024 due to a ramp up in H100 production, with this decline continuing into late 2024 as buyers pivoted to focus on their Blackwell strategy. One year later, our forecasts have been dead on, with a 2-3% margin of error for H100 SXM.  
回到 2024 年 4 月，我们在 AI 云总拥有成本模型中的定价模型建议了这样的结果。由于 H100 生产的增加，2024 年 GPU 价格持续下降，这一下降趋势一直持续到 2024 年末，因为买家开始转向关注他们的黑威尔战略。一年后，我们的预测非常准确，H100 SXM 的误差范围为 2-3%。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-5.-H100-Pricing-GIMP.png?resize=1024%2C670&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

The forecast model operates with three main inputs:  
预测模型主要基于三个输入：  
  
1\. **Install base of AI Accelerators globally**: We utilize our [Accelerator Industry Model](https://semianalysis.com/accelerator-industry-model/) to determine the installed base of every GPU SKU shipped thus far and our estimates based on supply chain analysis for future GPU shipments.  
1\. 全球 AI 加速器的安装基础：我们利用加速器行业模型来确定迄今为止每个 GPU SKU 的安装基础，以及基于供应链分析对未来 GPU 出货量的估计。  
  
2\. **Total Cost of Ownership for AI Clusters:** We calculate the total cost of ownership for an AI Cluster, including capital costs such as the AI server, networking, storage, installation, and service, as well as operating costs such as colocation rental, power costs, remote hands and support engineers and internet connectivity.  
2\. 人工智能集群的总拥有成本：我们计算人工智能集群的总拥有成本，包括资本成本，如人工智能服务器、网络、存储、安装和服务，以及运营成本，如共置租金、电力成本、远程支持和支持工程师以及互联网连接。  
  
3\. **Compute Throughput for AI Accelerators**: Estimated and measured effective training FLOPS and inference throughput (in tokens/second/GPU). For some systems, our AI Engineering team has run training and inference profiling and benchmarks, while for others, we have estimated output based on the chip specifications and architecture.  
3\. 人工智能加速器的计算吞吐量：估计和测量的有效训练 FLOPS 和推理吞吐量（以令牌/秒/GPU 为单位）。对于某些系统，我们的人工智能工程团队进行了训练和推理的性能分析和基准测试，而对于其他系统，我们则根据芯片规格和架构进行了输出估算。

We use the total cost of compute together with the compute throughput to calculate the cost of compute in terms of $/hr per effective PFLOP for training and $/M tokens for inference.  
我们使用计算的总成本以及计算吞吐量来计算训练时的每有效 PFLOP 的$/小时计算成本和推理时的$/百万个令牌成本。

The market cost of compute is then determined by a weighted average of the cost of compute for each accelerator, based on its install base. With this market cost of compute, we can then multiply this by the compute capabilities of a given accelerator to calculate the “mark to market” rental cost for that accelerator.  
然后，计算的市场成本是通过对每个加速器的计算成本进行加权平均来确定的，基于其安装基础。通过这个市场计算成本，我们可以将其乘以给定加速器的计算能力，以计算该加速器的“市场租赁”成本。

The below table provides a simple example of the workings behind this forecast. Here, we see that the GB200 NVL72 offers a 75% lower inference unit cost in terms of $/M tokens vs an H100 and a 56% lower training cost in terms of $/hr per effective PFLOP. This means that if the GB200 NVL72 sets the market cost of compute, then the H100 would have to be priced 65% lower per hour than the GB200 NVL72 in order for buyers to be indifferent between renting the two. The H100 would have to be set at a rental of $0.98 per hour per GPU to compete with a GB200 NVL72 priced at $2.20 per hour per GPU.  
下表提供了该预测背后工作原理的简单示例。在这里，我们看到 GB200 NVL72 在每百万个令牌的推理单元成本方面比 H100 低 75%，在每有效 PFLOP 每小时的训练成本方面低 56%。这意味着如果 GB200 NVL72 设定了计算市场成本，那么 H100 的定价必须比 GB200 NVL72 每小时低 65%，以便买家在租用这两者之间无差异。H100 的租金必须设定为每小时每个 GPU 0.98 美元，以便与每小时每个 GPU 2.20 美元的 GB200 NVL72 竞争。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-5.1-Figures-of-Merit.png?resize=1734%2C1204&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

The dynamic of increasing availability of systems with far lower cost of compute that drives the overall cost of compute in terms of $/M tokens and $ per effective PFLOP lower, in turn dragging rental prices for older cards down as well.  
系统可用性不断增加的动态，导致计算成本（以每百万个令牌和每有效 PFLOP 的美元计算）降低，从而也拖累了旧卡的租金价格。

Behind the paywall (at the end) we have a deep dive into future pricing of GB200, the IRR estimates of H100 and GB200 Neoclouds, and the market prices for different contract lengths. We will also discuss how we can apply the above framework towards analyzing CoreWeave’s unit economics and potential return on investment. This was pretty much midroll advertisement for the AI TCO. Now, back to the ClusterMAX™ rating.  
在付费墙后（最后），我们深入探讨了 GB200 的未来定价、H100 和 GB200 Neoclouds 的内部收益率估算，以及不同合同期限的市场价格。我们还将讨论如何将上述框架应用于分析 CoreWeave 的单位经济学和潜在投资回报。这几乎是 AI TCO 的中插广告。现在，回到 ClusterMAX™评级。

## GPU Cloud ClusterMAX™ Rating System GuidelinesGPU 云 ClusterMAX™评级系统指南

We have designed our GPU Cloud ClusterMAX™ Rating based on what most GPU Renters want from their GPU. Let’s discuss the needs of GPU users before we jump into our guidelines. Our guidelines prioritize the needs of GPU users and their preferred experience.  
我们设计的 GPU 云集群 MAX™ 评级是基于大多数 GPU 租用者对其 GPU 的需求。让我们在进入我们的指南之前讨论一下 GPU 用户的需求。我们的指南优先考虑 GPU 用户的需求和他们的首选体验。

Most GPU Renters want GPU nodes with out-of-the-box-managed Slurm/Kubernetes, allowing them to focus on coding, training, and deploying their PyTorch/JAX models. GPU renters wish to focus on small to large-scale experiments without much consideration of managing and maintaining the infrastructure underneath. Most GPU renters recognize that GPUs can sometimes fail, and when this happens, they want full visibility into the root cause and how the provider is addressing the issue.  
大多数 GPU 租用者希望 GPU 节点具备开箱即用的管理 Slurm/Kubernetes，这样他们可以专注于编码、训练和部署他们的 PyTorch/JAX 模型。GPU 租用者希望专注于小规模到大规模的实验，而不必过多考虑管理和维护底层基础设施。大多数 GPU 租用者意识到 GPU 有时会出现故障，当这种情况发生时，他们希望能够全面了解根本原因以及提供商如何解决该问题。

To develop our ClusterMAX™ Rating, we have talked to many GPU renters to consider their needs and wants from their GPU. Based on our discussions, we have considered the following attributes during our evaluation:  
为了开发我们的 ClusterMAX™评级，我们与许多 GPU 租赁者进行了交谈，以考虑他们对 GPU 的需求和期望。根据我们的讨论，我们在评估过程中考虑了以下属性：

- Security 安全
- Lifecycle and Technical Expertise  
	生命周期和技术专长
- Reliability/SLA 可靠性/SLA
- Slurm and Kubernetes offerings  
	Slurm 和 Kubernetes 解决方案
- NCCL/RCCL Networking Performance  
	NCCL/RCCL 网络性能
- Storage 存储
- Active/Passive Health Checks and Monitoring  
	主动/被动健康检查和监控
- Pricing and Consumption Model  
	定价和消费模型
- Technical Partnerships 技术合作伙伴关系

## Security 安全

We start with Security, as this is a critical make-or-break factor for many GPU renters. They store their proprietary model weights on GPUs, which cost tens of thousands to tens of millions of dollars to train and are the core intellectual property of most GenAI companies. Furthermore, training and/or inferencing these ML models can involve the use of proprietary or personally identifiable information or other user data. Customers of these companies that rent GPUs do not want their data to be leaked due to the use of an insecure GPU cloud. In EU countries, the stakes are even higher, as there are heavy fines for leaking user data under GDPR law.  
我们从安全开始，因为这是许多 GPU 租赁者的关键因素。他们将其专有模型权重存储在 GPU 上，这些权重的训练成本从数万美元到数百万美元不等，并且是大多数 GenAI 公司的核心知识产权。此外，训练和/或推理这些机器学习模型可能涉及使用专有或个人可识别信息或其他用户数据。这些租用 GPU 的公司的客户不希望由于使用不安全的 GPU 云而导致数据泄露。在欧盟国家，风险更高，因为根据 GDPR 法律，泄露用户数据会面临重罚。

We also notice that across the industry, there is a long tail of Emerging Neoclouds that do not have even basic SOC2 or ISO 27001 security certifications. We even see some clouds on “AMD Alliance Instinct Cloud Partners” list that do not have basic security such as SOC2 or ISO27001. We have spoken with AMD, and they have confirmed that they are investigating the issue and committed to helping raise the industry standard on this topic.  
我们还注意到，在整个行业中，有一长串新兴的 Neoclouds，甚至没有基本的 SOC2 或 ISO 27001 安全认证。我们甚至看到一些在“AMD Alliance Instinct Cloud Partners”名单上的云没有基本的安全措施，如 SOC2 或 ISO27001。我们与 AMD 进行了交谈，他们确认正在调查此问题，并承诺帮助提高该主题的行业标准。

Enterprises mostly rent from hyperscalers, as GPU users trust Hyperscalers to properly implement security measures. We are starting to see some enterprises look into renting from Neoclouds, and most are gravitating toward CoreWeave. These enterprises conduct more stringent due diligence and are risk adverse when renting from a non-Hyperscaler.  
企业主要从超大规模云服务商那里租用，因为 GPU 用户信任超大规模云服务商能够正确实施安全措施。我们开始看到一些企业考虑从 Neoclouds 租用，大多数企业倾向于 CoreWeave。这些企业在从非超大规模云服务商租用时进行更严格的尽职调查，并且对风险持谨慎态度。

Many enterprises don’t even have a security checklist to validate their cloud as they expect security akin to the Hyperscalers renting CPUs. Neoclouds entering the enterprise market, such as CoreWeave, must demonstrate to their potential enterprise customers they are secure. CoreWeave, for example, has crossed that hurdle, with financial companies such as Jane Street among its customers. High-frequency trading companies, such as Jane Street, have the strictest security requirements, as they deal with proprietary data and algorithms, which are the secret sauce to how they generate profits.  
许多企业甚至没有安全检查清单来验证他们的云，因为他们期望的安全性类似于租用 CPU 的超大规模云服务商。进入企业市场的 Neoclouds，例如 CoreWeave，必须向潜在的企业客户证明他们是安全的。例如，CoreWeave 已经跨越了这一障碍，金融公司如 Jane Street 是其客户之一。高频交易公司，如 Jane Street，具有最严格的安全要求，因为他们处理的是专有数据和算法，这些是他们盈利的秘密武器。

Ensuring tenant network isolation is essential to prevent unauthorized access to data. On Ethernet, this is achieved by setting VLANs on the networking switches such that nodes from Tenant A can only communicate with nodes from Tenant A, and nodes from Tenant A cannot communicate with nodes from Tenant B, and vice versa. On Ethernet, tenant isolation can also be carried out using DPUs, such as Bluefield-3, to manage this isolation instead of having the networking switches handle it. We see only the most advanced GPU cloud operators implementing tenant isolation using DPUs – examples include CoreWeave, OCI, AWS, GCP and Azure.  
确保租户网络隔离对于防止未经授权访问数据至关重要。在以太网中，通过在网络交换机上设置 VLAN 来实现这一点，使得租户 A 的节点只能与租户 A 的节点通信，而租户 A 的节点不能与租户 B 的节点通信，反之亦然。在以太网中，租户隔离还可以通过使用 DPU（如 Bluefield-3）来进行管理，而不是让网络交换机来处理。我们看到只有最先进的 GPU 云服务提供商在使用 DPU 实施租户隔离——例如 CoreWeave、OCI、AWS、GCP 和 Azure。

Other GPU clouds lack the technical capabilities to fully utilize the DPU feature set and must resort to implementing tenant isolation on the networking switches instead. On InfiniBand, tenant isolation is done through [Partition Keys](https://docs.nvidia.com/networking/display/winof2v310lts/infiniband+network) (PKeys). We recommend that GPU renters explicitly request in their Cloud Master Service Agreement (MSA) that there is tenant networking isolation on both the Ethernet and InfiniBand network through VLANs or IB PKeys to ensure protection via proper tenant isolation further.  
其他 GPU 云缺乏充分利用 DPU 功能集的技术能力，必须转而在网络交换机上实施租户隔离。在 InfiniBand 中，租户隔离是通过分区密钥（PKeys）来完成的。我们建议 GPU 租户在其云主服务协议（MSA）中明确要求在以太网和 InfiniBand 网络上通过 VLAN 或 IB PKeys 实现租户网络隔离，以确保通过适当的租户隔离进一步保护。

In addition to PKeys, on InfiniBand there are additional keys that a GPU Operator must set to ensure proper security and to ensure that the InfiniBand network cannot be easily hijacked:  
除了 PKeys，InfiniBand 还有其他密钥，GPU 操作员必须设置这些密钥以确保适当的安全性，并确保 InfiniBand 网络不会被轻易劫持：

The [Subnet Manager Key (SM Key)](https://docs.oracle.com/cd/E76424_01/html/E36266/z4001ba12074893.html) must be set to prevent unauthorized Subnet Managers/UFMs from being deployed. The [Management Key](https://docs.nvidia.com/networking/display/ibdiagnetusermanualv290/infiniband+security#src-80580471_safe-id-SW5maW5pQmFuZFNlY3VyaXR5LU1hbmFnZW1lbnRLZXkoTUtFWSk) (MKey) must also be set to protect the fabric against unauthorized configuration changes. To prevent congestion control functions of the fabric from being hijacked, [CongestionControl Key (CC Key)](https://docs.nvidia.com/networking/display/ibdiagnetusermanualv290/infiniband+security#src-80580471_safe-id-SW5maW5pQmFuZFNlY3VyaXR5LUNvbmdlc3Rpb25Db250cm9sS2V5KENDS2V5KQ) must be set, this needs to be set in nonblocking IB fabrics too. For InfiniBand fabrics that have SHARP in network reduction enabled, [Aggregation Management Key (AM Key)](https://docs.nvidia.com/networking/display/ibdiagnetusermanualv290/infiniband+security#src-80580471_safe-id-SW5maW5pQmFuZFNlY3VyaXR5LUFnZ3JlZ2F0aW9uTWFuYWdlbWVudEtleShBTUtleSk) must be enabled to prevent the InfiniBand’s SHARP Aggregation Manager from being hijacked. As one can see, there are numerous InfiniBand security keys that must be set to ensure proper security; however, there is a notable lack of public documentation from Nvidia and a general lack of awareness and education in the industry regarding these critical keys.  
子网管理器密钥（SM 密钥）必须设置，以防止未经授权的子网管理器/UFMs 被部署。管理密钥（MKey）也必须设置，以保护网络免受未经授权的配置更改。为了防止网络的拥塞控制功能被劫持，必须设置拥塞控制密钥（CC 密钥），这也需要在非阻塞的 IB 网络中设置。对于启用了网络缩减的 SHARP 的 InfiniBand 网络，必须启用聚合管理密钥（AM 密钥），以防止 InfiniBand 的 SHARP 聚合管理器被劫持。可以看出，必须设置许多 InfiniBand 安全密钥以确保适当的安全性；然而，Nvidia 的公开文档明显不足，行业内对这些关键密钥的意识和教育普遍缺乏。

We recommend that Nvidia provide publicly accessible documentation and education on InfiniBand security, helping GPU clouds properly set it up. We’ve pointed many GPU clouds directly to Nvidia for best practices.  
我们建议 Nvidia 提供公开可访问的文档和关于 InfiniBand 安全的教育，帮助 GPU 云正确设置。我们已经将许多 GPU 云直接指向 Nvidia 以获取最佳实践。

We recommend as a GPU renter, you explicitly request in your Cloud Master Service Agreement (MSA) that PKeys, AM Keys, SM Keys, M Keys, CC Keys, VS Keys be set to further solidify that the GPU you rent from have enabled these security protections.  
我们建议作为 GPU 租用者，您在云主服务协议（MSA）中明确要求设置 PKeys、AM Keys、SM Keys、M Keys、CC Keys、VS Keys，以进一步确保您租用的 GPU 启用了这些安全保护。

CoreWeave used to provide their multi-tenant GPU cluster offering by having a single Kubernetes cluster housing multiple tenants and then using Kubernetes namespace isolation between each tenant on the same Kubernetes cluster, providing each tenant with a [vCluster](https://www.vcluster.com/docs/vcluster/introduction/what-are-virtual-clusters). This offering, now commonly referred to as “CoreWeave Classic,” was not a secure offering, and CoreWeave had already migrated away from the approach of implementing clusters with Kubernetes namespace isolation between tenants a couple of years ago.    
CoreWeave 曾通过拥有一个单一的 Kubernetes 集群来提供其多租户 GPU 集群服务，该集群容纳多个租户，并在同一 Kubernetes 集群上使用 Kubernetes 命名空间隔离每个租户，为每个租户提供一个 vCluster。这个服务现在通常被称为“CoreWeave Classic”，并不是一个安全的服务，CoreWeave 在几年前已经迁移 away from 通过 Kubernetes 命名空间隔离租户来实现集群的方式。

CoreWeave has switched to having only one tenant per Kubernetes cluster, as this is a properly secure offering. In this implementation, a physical cluster will comprise multiple Kubernetes clusters, and each tenant will have its own Kubernetes cluster, rather than each tenant just having a Kubernetes namespace.  
CoreWeave 已切换为每个 Kubernetes 集群仅有一个租户，因为这是一个适当安全的服务。在这种实现中，一个物理集群将由多个 Kubernetes 集群组成，每个租户将拥有自己的 Kubernetes 集群，而不是每个租户仅拥有一个 Kubernetes 命名空间。

The reason why Kubernetes namespace isolation between tenants is not secure is that there are many container escape vulnerabilities, mainly in the GPU Driver or in the container toolkit. These container escape vulnerabilities would allow an attacker to escape a container and move laterally to another user on the same host, potentially escalating to another tenant’s host within the Kubernetes cluster.  
Kubernetes 命名空间在租户之间的隔离不安全的原因是存在许多容器逃逸漏洞，主要在 GPU 驱动程序或容器工具包中。这些容器逃逸漏洞可能允许攻击者逃离容器并横向移动到同一主机上的另一个用户，可能会升级到 Kubernetes 集群中另一个租户的主机。

Currently, there are monthly newly discovered known container escape vulnerabilities, but there could potentially be dozens of unknown container escape vulnerabilities. In September 2024, Wiz discovered a critical GPU container and Kubernetes vulnerability that affected over 35% of environments. Thus, doing just Kubernetes namespace isolation is not safe. The isolation boundaries should be on VLANs and each tenant getting their own Kubernetes cluster.  
目前，每月都有新发现的已知容器逃逸漏洞，但可能还有数十个未知的容器逃逸漏洞。在 2024 年 9 月，Wiz 发现了一个影响超过 35% 环境的关键 GPU 容器和 Kubernetes 漏洞。因此，仅仅进行 Kubernetes 命名空间隔离是不安全的。隔离边界应该在 VLAN 上，每个租户获得自己的 Kubernetes 集群。

- [https://www.wiz.io/blog/nvidia-ai-vulnerability-deep-dive-cve-2024-0132](https://www.wiz.io/blog/nvidia-ai-vulnerability-deep-dive-cve-2024-0132)
- [https://www.wiz.io/blog/wiz-research-critical-nvidia-ai-vulnerability](https://www.wiz.io/blog/wiz-research-critical-nvidia-ai-vulnerability)
- [https://nvidia.custhelp.com/app/answers/detail/a\_id/5614](https://nvidia.custhelp.com/app/answers/detail/a_id/5614https:/nvd.nist.gov/vuln/detail/CVE-2025-23359)
- [https://nvd.nist.gov/vuln/detail/CVE-2025-23359](https://nvd.nist.gov/vuln/detail/CVE-2025-23359)
- [https://nvidia.custhelp.com/app/answers/detail/a\_id/5599](https://nvidia.custhelp.com/app/answers/detail/a_id/5599)
- [https://nvidia.custhelp.com/app/answers/detail/a\_id/5585/~/security-bulletin%3A-nvidia-container-toolkit—november-2024](https://nvidia.custhelp.com/app/answers/detail/a_id/5585/~/security-bulletin%3A-nvidia-container-toolkit---november-2024)

Many GPU offerings utilize a multi-tenant cluster, but each tenant is on different sets of specific physical servers such that no two tenants share the same physical servers. For some GPU cloud offerings, particularly with on-demand offerings, there may be more than one tenant per physical host. If there is more than one tenant per physical host, there needs to be VM isolation as container isolation between multi tenants on the same host is not stringent enough due to the above Nvidia/AMD container security issues that have arisen nearly every month. To reiterate – if only container isolation is used, then hackers can use these known container escapes to escape to the physical host privileges and potentially peek into the other tenant’s containers and examine model weights. They might even be able to access other servers and retrieve the tenant models of other servers. We strongly recommend against multiple tenants per physical host with just container-based isolation.  
许多 GPU 产品利用多租户集群，但每个租户都在不同的特定物理服务器上，以至于没有两个租户共享相同的物理服务器。对于某些 GPU 云产品，特别是按需产品，可能每个物理主机上会有多个租户。如果每个物理主机上有多个租户，则需要进行虚拟机隔离，因为在同一主机上多租户之间的容器隔离并不够严格，原因是上述 Nvidia/AMD 容器安全问题几乎每个月都会出现。重申一下——如果仅使用容器隔离，那么黑客可以利用这些已知的容器逃逸来获取物理主机的权限，并可能窥视其他租户的容器并检查模型权重。他们甚至可能能够访问其他服务器并检索其他服务器的租户模型。我们强烈建议不要在仅使用基于容器的隔离的情况下，在每个物理主机上使用多个租户。

## Lifecycle and Technical Expertise生命周期和技术专长

Evaluating technical expertise is crucial when selecting a GPU cloud provider, as this directly impacts your team’s overall experience. The impact of technical expertise is felt even before onboarding, particularly in areas such as marketing clarity, sales process, transparent pricing, reasonable drafts of master service agreements (MSAs), pre-onboarding support, and data migration capabilities.  
评估技术专长在选择 GPU 云服务提供商时至关重要，因为这直接影响到您团队的整体体验。技术专长的影响在入职前就能感受到，特别是在市场营销清晰度、销售流程、透明定价、合理的主服务协议（MSA）草案、入职前支持和数据迁移能力等方面。

Moreover, assessing the **Sales Phase** —whether the communication was transparent, technical questions were promptly addressed, and commitments were clearly defined—also reflects the provider’s overall customer-centric approach. We see that experienced GPU clouds often have a technical engineer who consults with the customer to help with a smooth sales and onboarding experience.  
此外，评估销售阶段——沟通是否透明、技术问题是否及时解决、承诺是否明确——也反映了提供商的整体以客户为中心的方式。我们看到，经验丰富的 GPU 云服务通常会有一位技术工程师与客户咨询，以帮助顺利进行销售和入职体验。

A straightforward question to ask during the sales process is whether they are familiar with Sylvain. All the top GPU clouds that have optimized their NCCL settings and InfiniBand switch configurations and are skilled at debugging NCCL and Networking fabrics have interacted with the renowned Sylvain.  
在销售过程中可以问的一个简单问题是他们是否熟悉 Sylvain。所有优化了其 NCCL 设置和 InfiniBand 交换机配置并擅长调试 NCCL 和网络架构的顶级 GPU 云都与著名的 Sylvain 有过互动。

One essential item in your MSA is the exact delivery dates. Late deliveries are widespread in the GPU cloud industry. As a customer, you should ensure that you are happy with the exact delivery date in your MSA and should make sure there is an escape clause if there are any delays.  
您的 MSA 中一个重要条款是确切的交付日期。延迟交付在 GPU 云行业中很普遍。作为客户，您应该确保对 MSA 中的确切交付日期感到满意，并确保在出现任何延迟时有逃生条款。

During the **Preparatory Phase,** leading GPUs typically enable users to migrate data into clusters in advance, significantly reducing the “time to value” by ensuring workloads can begin immediately after onboarding. All Hyperscalers such as GCP, Azure, OCI, and AWS all allow for this. Furthermore, most Neoclouds such as CoreWeave and Nebius allow customers the opportunity to upload giant datasets in advance not to waste GPU time. The GPU cloud should gather enough relevant information and ask key questions to ensure that there are no unexpected speed bumps or roadblocks.  
在准备阶段，领先的 GPU 通常使用户能够提前将数据迁移到集群中，从而显著减少“价值实现时间”，确保工作负载可以在入驻后立即开始。所有超大规模云服务商，如 GCP、Azure、OCI 和 AWS 都允许这样做。此外，大多数 Neoclouds，如 CoreWeave 和 Nebius，允许客户提前上传大型数据集，以避免浪费 GPU 时间。GPU 云应该收集足够的相关信息并提出关键问题，以确保没有意外的障碍或阻碍。

The **Onboarding Process** itself is pivotal; the cluster should be provided on time, and there should be a high degree of automation for cluster provisioning, ensuring that there are no human errors or mistakes. The cluster that is provided should have undergone burn-in, and the burn-in process and acceptance tests should be publicly available on their website or in YouTube conference talk recordings. Instances should have no issues with reboot. After a reboot, all systems should be working, and there should be no need to manually set anything, for example, re-mounting networked filesystems. When we apply the ClusterMAX™ Rating System during the onboarding phase, we assess the “time to value” or “time to successfully launch useful work.” For example, if managed Slurm or Kubernetes is available out of the box, the end user does not need to spend a few days figuring out how to install it themselves, thus shortening the time to value.  
入职流程本身至关重要；集群应按时提供，并且集群配置应高度自动化，以确保没有人为错误或失误。提供的集群应经过烧机测试，烧机过程和验收测试应在其网站或 YouTube 会议录音中公开可用。实例在重启时应没有问题。重启后，所有系统应正常工作，无需手动设置任何内容，例如重新挂载网络文件系统。当我们在入职阶段应用 ClusterMAX™评级系统时，我们评估“价值实现时间”或“成功启动有用工作的时间”。例如，如果托管的 Slurm 或 Kubernetes 开箱即用，最终用户就不需要花几天时间自己安装，从而缩短了价值实现时间。

Ongoing support during the **Main Working Phase** is critical as GPUs do have a higher failure rate than traditional CPU servers. H100s/H200s tend to experience soft or hard failures; therefore, it is critical to have excellent support services. **The** **MI300x has more than twice the failure rate as the H100/H200 due to higher temperatures and less mature Samsung HBM.** For maintenance incidents and outages, we observe that top GPU clouds communicate what is happening, the debug steps being carried out, and an ETA for implementing the fix. For failures of 1-2 GPU nodes, we observe top GPU clouds quickly spinning up new nodes within 90 seconds to provide to their tenants, ensuring that their customers don’t need to wait for troubleshooting. Top GPU clouds will also compensate customers fairly for outages. The loss of just a single GPU server for training means the unavailability of a significant portion of a cluster, as most training codebases require a specific number of GPUs and cannot operate without even a single GPU.  
在主要工作阶段期间，持续支持至关重要，因为 GPU 的故障率确实高于传统的 CPU 服务器。H100/H200 往往会出现软故障或硬故障；因此，拥有优秀的支持服务至关重要。由于温度较高和三星 HBM 不够成熟，MI300x 的故障率是 H100/H200 的两倍以上。对于维护事件和停机，我们观察到顶级 GPU 云会沟通发生了什么，正在进行的调试步骤，以及实施修复的预计时间。对于 1-2 个 GPU 节点的故障，我们观察到顶级 GPU 云会在 90 秒内快速启动新的节点以提供给他们的租户，确保他们的客户不需要等待故障排除。顶级 GPU 云还会公平地补偿客户因停机而造成的损失。仅仅失去一台用于训练的 GPU 服务器就意味着集群中很大一部分不可用，因为大多数训练代码库需要特定数量的 GPU，并且没有任何一个 GPU 就无法运行。

Lastly, for the **Offboarding Phase**, we evaluate if there is vendor lock-in. Hyperscalers famously have high egress fees to prevent their customers from switching to another cloud. Most Neocloud Giants and Emerging Neoclouds do not charge egress fees for moving data to another GPU cloud.  
最后，在离职阶段，我们评估是否存在供应商锁定。超大规模云服务商以高额的出口费用而闻名，以防止客户切换到其他云服务。大多数新云巨头和新兴云服务商在将数据迁移到其他 GPU 云时不收取出口费用。

## Slurm and Kubernetes Slurm 和 Kubernetes

90% of customers prefer Kubernetes for inference workloads, and about 50% of the customers use Slurm for training. Top-ranking GPU providers are increasingly differentiating themselves by offering fully tested, out-of-the-box managed Kubernetes and Slurm environments, in addition to providing raw GPU node offerings without pre-configured schedulers. Customers universally prefer these managed scheduling solutions, as self-setup Slurm and self-setup Kubernetes consume valuable GPU resources and may take days to set up, directly increasing costs and delaying productive work.  
90%的客户更喜欢使用 Kubernetes 进行推理工作负载，约 50%的客户使用 Slurm 进行训练。顶级 GPU 供应商通过提供经过全面测试的即插即用的托管 Kubernetes 和 Slurm 环境，越来越多地实现差异化，此外还提供没有预配置调度程序的原始 GPU 节点产品。客户普遍更喜欢这些托管调度解决方案，因为自我设置的 Slurm 和自我设置的 Kubernetes 会消耗宝贵的 GPU 资源，并且可能需要几天时间来设置，直接增加了成本并延迟了生产工作。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-6.-SLURM-GIMP.png?resize=1024%2C765&ssl=1)

Source: Futurama 来源：未来狂想曲

We expect that Slurm will remain popular well into the distant future. A common misconception is that the choice of scheduler is independent of whether virtualization is used. You can have bare metal Slurm, or you can have Slurm with VMs. Slurm and bare metal are not mutually exclusive. The same applies to Kubernetes; you can have bare-metal Kubernetes, as is the case at CoreWeave, or have Kubernetes with virtual machines, such as in GKE or EKS.  
我们预计 Slurm 将在遥远的未来继续受欢迎。一个常见的误解是调度程序的选择与是否使用虚拟化是独立的。您可以使用裸金属 Slurm，或者可以使用带有虚拟机的 Slurm。Slurm 和裸金属并不相互排斥。Kubernetes 也是如此；您可以使用裸金属 Kubernetes，正如 CoreWeave 的情况，或者使用带有虚拟机的 Kubernetes，例如 GKE 或 EKS。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-7.-Kubernetes-and-Bare-metal-GIMP.png?resize=522%2C238&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

When providers offer managed Kubernetes and Slurm platforms, this enables customers to maximize their GPU utilization, significantly reducing their time-to-useful work. Notably, even technically sophisticated organizations such as **Meta** and **Jane Street** choose to use CoreWeave’s managed Slurm and Kubernetes offerings due to their effectiveness and reliability. CoreWeave’s managed Slurm and Kubernetes go a long way to help increase goodput and increase time to value. A notable exception is OpenAI, which opts out of managed schedulers due to heightened security and operational paranoia surrounding artificial general intelligence (AGI).  
当提供商提供托管的 Kubernetes 和 Slurm 平台时，这使客户能够最大化他们的 GPU 利用率，显著减少他们的有效工作时间。值得注意的是，即使是技术上复杂的组织，如 Meta 和 Jane Street，也选择使用 CoreWeave 的托管 Slurm 和 Kubernetes 产品，因为它们的有效性和可靠性。CoreWeave 的托管 Slurm 和 Kubernetes 在提高有效吞吐量和增加价值时间方面发挥了重要作用。一个显著的例外是 OpenAI，由于对人工通用智能（AGI）周围的安全性和操作偏执的担忧，选择不使用托管调度程序。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-8.-SemiAnalysis-Slurm-estimates-GIMP.png?resize=1024%2C523&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

We also see that a lot of providers do not have [topology.conf set up for their out of the box Slurm solution.](https://slurm.schedmd.com/topology.html) Not having topology.conf set up leads to workload slowdowns and decreases NCCL performance. Some providers’ Slurm solutions are also not properly set up and do not have the [pyxis plugin which allows reproducibility environments with containers as Slurm and is widely used by customers](https://github.com/NVIDIA/pyxis) across CoreWeave, GCP, AWS, OCI, and other major providers. Other providers do not adequately set up NVIDIA HPC-X modules or Slurm MPI integrations.  
我们还看到许多提供商没有为他们的开箱即用的 Slurm 解决方案设置 topology.conf。没有设置 topology.conf 会导致工作负载减慢并降低 NCCL 性能。一些提供商的 Slurm 解决方案也没有正确设置，并且没有 pyxis 插件，该插件允许使用容器作为 Slurm 的可重现环境，并被 CoreWeave、GCP、AWS、OCI 和其他主要提供商的客户广泛使用。其他提供商没有充分设置 NVIDIA HPC-X 模块或 Slurm MPI 集成。

## Storage 存储

Efficient and performant storage solutions are essential for machine learning workloads, both for training and inference. We see most customers want managed high-performance parallel filesystems such as Weka, Lustre, Vast Data, DDN, and/or want a managed s3-compatible object storage.  
高效且性能优越的存储解决方案对于机器学习工作负载至关重要，无论是训练还是推理。我们看到大多数客户希望使用托管的高性能并行文件系统，如 Weka、Lustre、Vast Data、DDN，和/或希望使用托管的兼容 S3 的对象存储。

During training, vast quantities of data must be quickly and reliably accessed to feed GPUs without bottlenecks, which means that high-performance storage is needed for model checkpoint loads and saves such that GPUs can maximize MFU and thereby significantly accelerate training time.  
在训练过程中，必须快速且可靠地访问大量数据，以便为 GPU 提供数据而不造成瓶颈，这意味着需要高性能存储来加载和保存模型检查点，以便 GPU 能够最大化 MFU，从而显著加快训练时间。

Managed object storage options are equally crucial for flexible, cost-effective, and scalable data storage, enabling teams to efficiently store, version, and retrieve training datasets, checkpoints, and model artifacts.  
管理对象存储选项对于灵活、经济高效和可扩展的数据存储同样至关重要，使团队能够高效地存储、版本控制和检索训练数据集、检查点和模型工件。

For ML inference workloads, performance-oriented storage ensures that models are loaded rapidly from storage production scenarios. Slow or inefficient storage can cause noticeable delays, degrading the end-user experience or reducing real-time responsiveness of AI-driven applications. It is, therefore, vital to assess whether GPU cloud providers offer robust managed parallel filesystem and object storage solutions, ensuring that these options are optimized and validated for excellent performance across varied workloads.  
对于机器学习推理工作负载，面向性能的存储确保模型能够快速从存储生产场景中加载。缓慢或低效的存储可能会导致明显的延迟，降低最终用户体验或减少基于人工智能的应用程序的实时响应能力。因此，评估 GPU 云服务提供商是否提供强大的托管并行文件系统和对象存储解决方案至关重要，确保这些选项经过优化和验证，以在各种工作负载中实现卓越性能。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-9.-Nvidia-NIXL-GIMP.png?resize=1024%2C643&ssl=1)

Source: Nvidia 来源：Nvidia

With GPUs, the main two sources of user frustration with storage are when file volumes randomly unmount and when users encounter the Lots of Small File (LOSF) problem. The solution to the random unmounting issue is to use a program called “autofs” that will automatically keep your shared filesystem mounted.  
使用 GPU 时，用户在存储方面主要有两个来源的挫败感：文件卷随机卸载和用户遇到大量小文件（LOSF）问题。解决随机卸载问题的方法是使用一个名为“autofs”的程序，它会自动保持您的共享文件系统挂载。

Next, the LOSF problem can easily be avoided as it is only an issue if you decide to roll out your own storage solution like an NFS-server instead of paying for a storage software vendor like Weka or Vast. An end user will very quickly notice an LOSF problem on the cluster as the time even to import PyTorch into Python will lead to a complete lag out if an LOSF problem exists on the cluster.  
接下来，LOSF 问题可以很容易地避免，因为它仅在您决定推出自己的存储解决方案（如 NFS 服务器）而不是支付像 Weka 或 Vast 这样的存储软件供应商时才会成为问题。最终用户会很快注意到集群中的 LOSF 问题，因为即使是将 PyTorch 导入 Python 的时间，如果集群中存在 LOSF 问题，也会导致完全的延迟。

The diagram below, produced during our testing on Crusoe’s cluster, demonstrates how a cluster storage solution optimized and free of the LOSF problem should behave. As you can see, the time to complete importing PyTorch into the Python process stays relatively flat even when scaling up GPU count.  
下面的图表是在我们对 Crusoe 集群进行测试时生成的，展示了一个经过优化且没有 LOSF 问题的集群存储解决方案应如何表现。正如您所看到的，即使在增加 GPU 数量时，导入 PyTorch 到 Python 进程所需的时间仍然相对平稳。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-10.-Time-to-Pytorch-1-GIMP.png?resize=1024%2C677&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

This is a world of difference to a cluster that is running on unoptimized shared storage, where the time required to import PyTorch in a Python multi-node training run explodes, often causing the cluster to be completely unusable. Notice the difference between high-performing storage and how another cluster with LOSF issues would behave.  
这与在未优化的共享存储上运行的集群有天壤之别，在这种情况下，导入 PyTorch 到 Python 多节点训练运行所需的时间会激增，常常导致集群完全无法使用。请注意高性能存储与另一个存在 LOSF 问题的集群之间的差异。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-11.-Time-to-Pytorch-2-GIMP.png?resize=1024%2C678&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

## NCCL/RCCL Networking PerformanceNCCL/RCCL 网络性能

When selecting GPU cloud services, thorough validation of NCCL/RCCL networking performance is vital for maximizing training and inference performance. Providers should offer validated, out-of-the-box NCCL/RCCL-tests scripts enabling customers to independently confirm network performance, particularly within the critical real-world message-size range of 16MiB to 512MiB.  
在选择 GPU 云服务时，彻底验证 NCCL/RCCL 网络性能对于最大化训练和推理性能至关重要。服务提供商应提供经过验证的即插即用 NCCL/RCCL 测试脚本，使客户能够独立确认网络性能，特别是在关键的实际消息大小范围内，即 16MiB 到 512MiB。

A network that is half as slow on all reduce leads to a 10% drop in performance on MFU on an O(70B) training and a 15-20% drop in MFU for an O(8x7B) mixture of expert models. It is a common misconception that inference does not need high-speed networking. In reality, inference providers apply network-bandwidth-intensive techniques like [disaggregated serving](https://arxiv.org/abs/2401.09670) to achieve cost-effective, high-performance inferencing. Disaggregated serving has been an industry standard for years, and last week NVIDIA open-sourced [Dynamo](https://ynamo/), a distributed inference framework, further democratized disaggregated serving and many other inference optimization techniques.  
在所有 reduce 操作中，网络速度减半会导致 O(70B)训练的 MFU 性能下降 10%，而 O(8x7B)专家模型混合的 MFU 性能下降 15-20%。人们普遍误解推理不需要高速网络。实际上，推理提供商应用了网络带宽密集型技术，如分离服务，以实现具有成本效益的高性能推理。分离服务多年来一直是行业标准，上周 NVIDIA 开源了 Dynamo，一个分布式推理框架，进一步使分离服务和许多其他推理优化技术民主化。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-12.-Blackwell-25x-hopper-GIMP.png?resize=1024%2C538&ssl=1)

Source: Nvidia 来源：Nvidia

It’s essential to recognize that not all on paper 400G networks offer identical performance – actual realized network performance depends heavily on whether the network is non-blocking and rail optimized, whether it uses InfiniBand or Ethernet, and which NICs and switches are used, and finally if the GPU operator has properly configured and validated their network fabric with nccl/rccl-tests.  
重要的是要认识到，并非所有纸面上的 400G 网络都提供相同的性能——实际实现的网络性能在很大程度上取决于网络是否是无阻塞的和铁路优化的，是否使用 InfiniBand 或以太网，以及使用了哪些 NIC 和交换机，最后，如果 GPU 操作员已正确配置并验证了他们的网络结构与 nccl/rccl 测试。

We observe that network fabrics utilizing ConnectX-7 NICs perform the best. We see that well-tuned network with premium switches, as is the case at OCI, can be very competitive with Spectrum-X Ethernet networking. InfiniBand still tends to perform the best, especially when enabling SHARP in-network reductions. We have run networking NCCL/RCCL benchmarks from 128 GPUs to 1024 GPUs and will release all the performance data in our upcoming NCCL/RCCL networking Deep Dive article within the next couple of months. We have tested and are releasing our analysis of the following networks in the upcoming article:  
我们观察到，使用 ConnectX-7 NIC 的网络结构表现最佳。我们看到，像 OCI 这样的优质交换机与良好调优的网络可以与 Spectrum-X 以太网网络非常具有竞争力。InfiniBand 仍然往往表现最佳，特别是在启用 SHARP 网络内缩减时。我们已经从 128 个 GPU 到 1024 个 GPU 运行了网络 NCCL/RCCL 基准测试，并将在接下来的几个月内发布我们即将推出的 NCCL/RCCL 网络深度分析文章中的所有性能数据。我们已经测试并将在即将发布的文章中发布以下网络的分析：

- 8x400GbE Spectrum-X RoCEv2 Ethernet H100  
	8x400GbE Spectrum-X RoCEv2 以太网 H100
- 8x400G InfiniBand NDR H100
- 8x400G InfiniBand NDR with SHARP H100  
	8x400G InfiniBand NDR 与 SHARP H100
- 8x400GbE Oracle Cloud RoCev2 Ethernet H100  
	8x400GbE Oracle Cloud RoCev2 以太网 H100
- 8x200GbE Google Cloud Fastrak Ethernet a3-mega H100  
	8x200GbE 谷歌云 Fastrak 以太网 a3-mega H100
- 8x400GbE Google Cloud RoCEv2 Ethernet a3-ultra H200  
	8x400GbE 谷歌云 RoCEv2 以太网 a3-ultra H200
- 16x200GbE AWS EFAv3 Ethernet p5en H200  
	16x200GbE AWS EFAv3 以太网 p5en H200
- 8x400GbE RoCEv2 Ethernet MI300X  
	8x400GbE RoCEv2 以太网 MI300X

Even if a network is non-blocking, we see that networks with larger 1-hop rail optimized pods can achieve higher NCCL performance because less traffic will need to transit between rail pods, thus leading to less congestion. On GCP’s 8x400GbE a3-ultra, their 1-hop rail pod consists of just 4 nodes, whereas for OCI Ethernet and the InfiniBand reference architecture, the 1-hop rail pod is 32 servers in size. This is one of the reasons why OCI 4x400GbE offering has better NCCL performance than GCP’s latest 8x400GbE a3-ultra offering.  
即使网络是非阻塞的，我们看到具有更大 1 跳轨道优化节点的网络可以实现更高的 NCCL 性能，因为需要在轨道节点之间传输的流量更少，从而导致拥堵更少。在 GCP 的 8x400GbE a3-ultra 上，他们的 1 跳轨道节点仅由 4 个节点组成，而对于 OCI 以太网和 InfiniBand 参考架构，1 跳轨道节点的规模为 32 台服务器。这是 OCI 4x400GbE 产品的 NCCL 性能优于 GCP 最新的 8x400GbE a3-ultra 产品的原因之一。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-13.-H100-Topology-GIMP.png?resize=1024%2C549&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

GPU clouds implementing topology-aware tenant allocation means better performance as tenant nodes can minimize the number of hops when communicating with each other by binpacking tenant nodes into the minimum amount of rail pods needed. Topology-aware tenant allocation is required even for nonblocking networks.  
实施拓扑感知租户分配的 GPU 云意味着更好的性能，因为租户节点可以通过将租户节点打包到所需的最少轨道节点中来最小化相互通信时的跳数。即使对于非阻塞网络，拓扑感知租户分配也是必需的。

Within a tenant’s environment, out-of-box topology-aware scheduling configurations such as Kubernetes topology or Slurm’s topology.conf are crucial, even in optimized and non-blocking network setups. We have seen that such configurations can yield performance gains of 20-30% for certain message sizes, regardless of cluster size. We observe that this has a significant impact on performance for workloads that utilize only a portion of a cluster, as well as for workloads that occupy the entire cluster. We have seen on a 1024-GPU non-blocking InfiniBand Reference architecture deployment that nccl-tests are 20-30% slower for certain message sizes. We will expand on this topic in our NCCL/RCCL deep dive article.  
在租户环境中，开箱即用的拓扑感知调度配置，如 Kubernetes 拓扑或 Slurm 的 topology.conf，是至关重要的，即使在优化和非阻塞的网络设置中。我们已经看到，这些配置可以为某些消息大小带来 20-30%的性能提升，无论集群大小如何。我们观察到，这对仅利用集群一部分的工作负载以及占用整个集群的工作负载的性能有显著影响。我们在 1024-GPU 非阻塞 InfiniBand 参考架构部署中看到，对于某些消息大小，nccl-tests 的速度慢了 20-30%。我们将在我们的 NCCL/RCCL 深度探讨文章中进一步扩展这一主题。

For Ethernet-based setups, understanding whether providers employ high-quality Arista switches with a high-quality, battle-tested NOS, such as Arista EOS, that has been properly tuned for optimal performance, or whether they are using less expensive alternatives, can significantly impact NCCL performance. Note that there are considerable performance differences between a great Tomahawk5 switch from a top switch company and a mediocre Tomahawk5 switch from a middle-of-the-pack switch company. This is especially true when it comes to WhiteBox Tomahawk5 switches that are not well-tuned and poorly configured by the GPU cloud. It is possible to tune them really well, it is just the case that many clouds have not because it is challenging to do so.  
对于基于以太网的设置，了解提供商是否使用高质量的 Arista 交换机以及经过充分调优以实现最佳性能的高质量、经过实战检验的 NOS（如 Arista EOS），或者他们是否使用更便宜的替代品，可能会显著影响 NCCL 性能。请注意，顶级交换公司出色的 Tomahawk5 交换机与中等水平交换公司普通的 Tomahawk5 交换机之间存在显著的性能差异。尤其是在 GPU 云未经过良好调优和配置的 WhiteBox Tomahawk5 交换机方面，这一点尤为明显。虽然可以对它们进行良好的调优，但许多云服务提供商并没有这样做，因为这是一项具有挑战性的工作。

Another consideration is if SHARP in-network reduction is enabled on the InfiniBand fabric. There are only three GPU providers in the world that have correctly set up SHARP – namely CoreWeave, Azure, and Firmus/Sustainable Metal Cloud. InfiniBand SHARP provides a boost to network performance by doing reductions inside the InfiniBand switch instead of in the SMs of the GPUs. Even when SHARP is enabled by the GPU provider, it is very difficult for the end user to correctly tune and make sure their training and inference codebase have the proper versions of PyTorch, Nvidia drivers, and the proper NCCL library version to gain a performance speedup.  
另一个考虑因素是是否在 InfiniBand 网络上启用了 SHARP 内网缩减。全球只有三家 GPU 供应商正确设置了 SHARP，即 CoreWeave、Azure 和 Firmus/Sustainable Metal Cloud。InfiniBand SHARP 通过在 InfiniBand 交换机内部进行缩减，而不是在 GPU 的 SM 中，从而提升网络性能。即使 GPU 供应商启用了 SHARP，最终用户也很难正确调整并确保他们的训练和推理代码库具有适当版本的 PyTorch、Nvidia 驱动程序和适当的 NCCL 库版本，以获得性能提升。

Due to this difficulty, there are only five customers in the world across the GPU cloud industry that are using SHARP for production training and inference workloads, and out of these five customers, one is Nvidia itself. As such, we recommend that Nvidia make SHARP easier to set up for the GPU provider and enable SHARP by default, thereby improving the overall user experience when deploying and managing SHARP.  
由于这个困难，全球只有五个客户在 GPU 云行业中使用 SHARP 进行生产训练和推理工作，其中一个客户就是 Nvidia。因此，我们建议 Nvidia 使 SHARP 更容易为 GPU 提供商设置，并默认启用 SHARP，从而改善在部署和管理 SHARP 时的整体用户体验。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-14.-128-GPU-with-400G-non-blocking-GIMP.png?resize=1024%2C799&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

Lastly, we see that the top 10% of GPU clouds are focused on developing [NCCL profiler plugins,](https://github.com/NVIDIA/nccl/tree/master/ext-profiler) enabling them to gain deep performance observability and let their customers gain more insights into the NCCL performance for debugging and optimization. GPU clouds that choose to deploy NCCL monitoring plugins into production environments will enable their customers to achieve faster performance and higher goodput, leading to a better overall customer experience and greater performance per dollar spent.  
最后，我们看到前 10%的 GPU 云专注于开发 NCCL 分析器插件，使他们能够获得深度性能可观察性，并让他们的客户获得更多关于 NCCL 性能的洞察，以便进行调试和优化。选择将 NCCL 监控插件部署到生产环境中的 GPU 云将使他们的客户实现更快的性能和更高的有效吞吐量，从而带来更好的整体客户体验和更高的每花费一美元的性能。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-15.-Nccl-plugin-GIMP.png?resize=1024%2C541&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

## Reliability and Service Level Agreements (SLAs)可靠性和服务水平协议（SLA）

Reliability and clear Service Level Agreements (SLAs) are the foundational agreement of what you expect from your GPU provider’s uptime. Precision about how providers define SLA events – whether they’re related to node failures, network disruptions like link flapping, or hardware-software-level issues such as NCCL timeouts – is essential. For example, a GPU cloud operating under a vaguely defined SLA could try to claim they are meeting their 99% SLA requirement even if a cluster is unusable if there is a NIC that flaps for one microsecond every minute.  
可靠性和明确的服务水平协议（SLA）是您对 GPU 提供商正常运行时间的期望的基础协议。关于提供商如何定义 SLA 事件的精确性至关重要——无论是与节点故障、网络中断（如链路抖动）还是与硬件-软件级别问题（如 NCCL 超时）相关。例如，运行在模糊定义的 SLA 下的 GPU 云可能会试图声称他们满足 99%的 SLA 要求，即使在集群不可用的情况下，如果每分钟有一个 NIC 抖动一微秒。

When NICs flap even for one microsecond, it causes NCCL to stall, and the entire training workload hangs. In such a case, it may take anywhere from a couple of minutes to 30 minutes to restart the workload. Top GPU clouds typically have a low rate of NCCL timeouts and NIC flaps, as they have already undergone the process of burning in their network and transceivers, and have taken essential steps such as cleaning dust off fiber cables, which is one of the leading causes of degraded goodput.  
当 NIC 抖动即使只有一微秒时，会导致 NCCL 停滞，整个训练工作负载挂起。在这种情况下，重新启动工作负载可能需要几分钟到 30 分钟不等。顶级 GPU 云通常具有较低的 NCCL 超时和 NIC 抖动率，因为它们已经经历了网络和收发器的烧录过程，并采取了清洁光纤电缆等必要步骤，而光纤电缆上的灰尘是导致良好吞吐量下降的主要原因之一。

Top GPU Providers typically outline conditions under which service credits are issued, including the mechanisms for credit reimbursement, transparency around these processes, and the turnaround time for resolving incidents. Equally important is whether the provider maintains readily available “hot spares,” which enable immediate failover in the event of hardware failure, thereby significantly reducing downtime.  
顶级 GPU 供应商通常会概述发放服务信用的条件，包括信用报销的机制、这些过程的透明度以及解决事件的周转时间。同样重要的是，供应商是否保持随时可用的“热备件”，以便在硬件故障发生时能够立即切换，从而显著减少停机时间。

We see top GPU clouds leverage specialized deployment teams for cluster burn-in and deployment. These teams will integrate and test at the individual server level and at the cluster-wide level, during which networking testing will be carried out at OEMs’ integration factory. We recommend that the cluster-wide high-temperature burn-in should last at least 3-4 weeks so as to catch all the infant mortality-related failures among the node’s components.  
我们看到顶级 GPU 云利用专业的部署团队进行集群的烧机和部署。这些团队将在单个服务器级别和集群级别进行集成和测试，在此期间将在 OEM 的集成工厂进行网络测试。我们建议集群范围内的高温烧机应持续至少 3-4 周，以捕捉节点组件中的所有早期故障相关问题。

It is common for integration teams to pitch using LINPACK as their burn-in and acceptance process. Still, we don’t believe this is a very good test, as LINPACK does not utilize the network extensively, nor does it heavily utilize the GPU’s HBM memory; instead, it only utilizes and tests the GPU’s FP64 cores. ML Training, by contrast, is very network, HBM, and BF16/FP16/FP8 tensor core intensive, and as such, we believe that it is a burn-in and acceptance test that carries out a proper burn-in of critical components.  
集成团队通常会使用 LINPACK 作为其烧机和验收过程。然而，我们认为这并不是一个很好的测试，因为 LINPACK 并没有广泛利用网络，也没有大量使用 GPU 的 HBM 内存；相反，它只利用并测试 GPU 的 FP64 核心。相比之下，机器学习训练非常依赖网络、HBM 和 BF16/FP16/FP8 张量核心，因此我们认为这是一个能够对关键组件进行适当烧机的烧机和验收测试。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-16.-Failure-rate-GIMP.png?resize=1024%2C691&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

Testing and burn-in procedures are essential practices designed to identify potential hardware or networking issues before deployment. Providers that openly share burn-in reports and document their testing processes publicly demonstrate higher accountability and confidence in their infrastructure’s stability. This level of transparency is required to be a ClusterMAX™ Platinum GPU cloud. CoreWeave has demonstrated its in-depth acceptance and burn-in procedures through its KubeCon talk and its many public blog posts.  
测试和烧机程序是旨在在部署之前识别潜在硬件或网络问题的基本实践。那些公开分享烧机报告并公开记录其测试过程的提供商展示了更高的责任感和对其基础设施稳定性的信心。要成为 ClusterMAX™铂金 GPU 云，这种透明度是必需的。CoreWeave 通过其 KubeCon 演讲和众多公开博客文章展示了其深入的接受和烧机程序。

For failures of 1-2 GPU nodes, we see top GPU clouds typically can quickly spin up new nodes within 90 seconds to give to their tenants such that their customers don’t need to wait for troubleshooting. Top GPU clouds also fairly compensate for inaccessibility. The unavailability of just a single GPU server means the unavailability of a large chunk of a cluster, since most training codebases require a set number of GPUs and cannot afford to be missing a single GPU.  
对于 1-2 个 GPU 节点的故障，我们看到顶级 GPU 云通常可以在 90 秒内快速启动新节点，以便提供给其租户，这样他们的客户就不需要等待故障排除。顶级 GPU 云也会对不可用性进行合理补偿。仅仅一个 GPU 服务器的不可用意味着集群中大部分的不可用，因为大多数训练代码库需要一定数量的 GPU，无法承受缺少一个 GPU。

## Automated Active and Passive Health Checks and Monitoring自动化主动和被动健康检查与监控

Top GPU providers offer customers the option to implement robust, out-of-the-box passive health checks designed to identify GPU anomalies, such as critical XID errors promptly. These passive checks monitor GPUs for fallback events, mainly when GPUs degrade and revert to slower PCI bus communication modes. Providers ensure continuous awareness of GPU health, detecting conditions that might otherwise lead to reduced performance or failures. These passive health checks verify node integrity by confirming that storage mounts remain stable and accessible, ensuring data availability and system reliability.  
顶级 GPU 供应商为客户提供实施强大、开箱即用的被动健康检查的选项，旨在及时识别 GPU 异常，例如关键的 XID 错误。这些被动检查监控 GPU 的回退事件，主要是在 GPU 降级并恢复到较慢的 PCI 总线通信模式时。供应商确保持续了解 GPU 健康状况，检测可能导致性能下降或故障的情况。这些被动健康检查通过确认存储挂载保持稳定和可访问来验证节点完整性，确保数据可用性和系统可靠性。

Beyond passive monitoring, leading GPU providers equip their solutions with automated weekly scheduled and preemptible **active health checks** that proactively validate hardware and software performance on a weekly basis. These active diagnostics commonly include NCCL-tests, which evaluate GPU-to-GPU communication integrity and performance, ensuring clusters can efficiently perform collective operations and match the expected reference numbers. Providers also integrate the NVIDIA Data Center GPU Manager (DCGM) diagnostic suite (sudo dcgmi diag -r 4), which deeply evaluates GPU hardware health, identifying issues before they escalate.  
除了被动监控，领先的 GPU 供应商为其解决方案配备了自动化的每周定期和可抢占的主动健康检查，这些检查每周主动验证硬件和软件性能。这些主动诊断通常包括 NCCL 测试，评估 GPU 之间的通信完整性和性能，确保集群能够高效地执行集体操作并匹配预期的参考数字。供应商还集成了 NVIDIA 数据中心 GPU 管理器（DCGM）诊断套件（sudo dcgmi diag -r 4），深入评估 GPU 硬件健康，识别问题以防止其升级。

To further strengthen detection capabilities, top GPU providers incorporate sophisticated automatically weekly scheduled **Silent Data Corruption (SDC) detection checks**, such as TinyMeg2, enabling early detection of subtle corruption issues within the tensor core or SIMT unit. They enhance these diagnostics with rapid ML training Megatron convergence tests—typically two-minute benchmarks—that quickly reveal deviations in computational correctness, thereby minimizing downtime and preserving data accuracy.  
为进一步增强检测能力，顶级 GPU 供应商结合了复杂的自动每周定期静默数据损坏（SDC）检测检查，如 TinyMeg2，使得能够及早发现张量核心或 SIMT 单元中的微妙损坏问题。他们通过快速的机器学习训练 Megatron 收敛测试增强这些诊断——通常是两分钟的基准测试——迅速揭示计算正确性的偏差，从而最小化停机时间并保持数据准确性。

Finally, premium GPU providers offer extensive **out-of-the-box Grafana monitoring capabilities**, providing operators with deep visibility into their clusters’ operational states. This monitoring typically includes live tracking of TFLOP/s estimates, enabling an accurate and real-time assessment of GPU performance. Providers deliver comprehensive monitoring for critical interconnect links, promptly identifying link flaps or intermittent connectivity issues. Additionally, integrations with visualization platforms such as Grafana enable intuitive monitoring dashboards that include features like real-time Slurm job queue integration, performance trend visualization, and clear indicators showing when active health checks were last executed, empowering administrators with actionable insights to maintain optimal GPU performance and reliability.  
最终，优质 GPU 供应商提供广泛的开箱即用 Grafana 监控功能，为操作员提供对其集群操作状态的深度可见性。此监控通常包括对 TFLOP/s 估算的实时跟踪，使 GPU 性能的准确和实时评估成为可能。供应商提供对关键互连链路的全面监控，及时识别链路波动或间歇性连接问题。此外，与 Grafana 等可视化平台的集成使得直观的监控仪表板成为可能，包含实时 Slurm 作业队列集成、性能趋势可视化以及清晰的指示器，显示上次执行活动健康检查的时间，赋予管理员可操作的洞察，以维持最佳的 GPU 性能和可靠性。

## Consumption Models, Price Per Value, and Availability消费模型、价值价格和可用性

Pricing, consumption models, and immediate availability are one of the most important factors when selecting a GPU provider. Customers want the most comprehensive feature sets at the lowest price with the best terms.  
定价、消费模型和即时可用性是选择 GPU 供应商时最重要的因素之一。客户希望以最低的价格和最佳的条款获得最全面的功能集。

GPU Compute prices are expressed in USD per hour per GPU – based on a typical on-demand price of USD 2.99/hr/GPU for an H100 SXM with 8x400G InfiniBand, renting one server of 8 GPUs would cost USD 23.92 per hour and $574.08 per day.  
GPU 计算价格以每小时每个 GPU 的美元计价——基于 H100 SXM 的典型按需价格为每小时每个 GPU 2.99 美元，租用一台 8 个 GPU 的服务器每小时将花费 23.92 美元，每天 574.08 美元。

For most Neoclouds, this price is all-inclusive and bundles in the on-board CPU, networking, power usage, local NVMe storage, as well as having Slurm and drivers properly set up. Customers typically take up dedicated network storage used for training, checkpointing, or managing training and inference data, as well as object storage. Storage generally is charged separately, with prices of around 6-9c per GB/month for high-performance network storage and 2-3c per GB/month for Object storage. Internet connectivity and data ingress and egress are typically not chargeable.  
对于大多数 Neocloud，价格是全包的，包括板载 CPU、网络、功耗、本地 NVMe 存储，以及正确设置的 Slurm 和驱动程序。客户通常会使用专用网络存储来进行训练、检查点或管理训练和推理数据，以及对象存储。存储通常是单独收费的，高性能网络存储的价格约为每 GB 每月 6-9 美分，对象存储的价格约为每 GB 每月 2-3 美分。互联网连接和数据进出通常不收费。

There are a few different options when subscribing for GPU Compute:  
订阅 GPU 计算时有几种不同的选项：

- **On-demand**: The GPU compute buyer pays based on the actual time the GPU instance/server is used, with the price of compute subject to adjustment. This affords the most flexibility and is most often used for development, burst inferencing, or hobbyist work. However, it typically has the highest price out of the three main options. The current best on-demand pricing is $2.99 USD per hour per GPU.  
	按需：GPU 计算买家根据实际使用 GPU 实例/服务器的时间支付费用，计算价格可进行调整。这提供了最大的灵活性，通常用于开发、突发推理或爱好者工作。然而，它通常是三种主要选项中价格最高的。目前最佳的按需定价为每小时每个 GPU 2.99 美元。
- **Spot**: Also known as pre-emptive, like on-demand, usage is charged by actual time on the instance/server, but usage can be interrupted at any time to make way for other workloads or users. This is best suited for jobs that do not require real-time processing, although the smooth resumption of jobs remains a developing capability. Spot instances are most suitable for inference workloads or batch jobs that can be interrupted with one minute’s notice. Nobody uses spot instances for training, as being randomly kicked off a multi-node instance is highly disruptive. Spot pricing gives Neoclouds flexibility to quickly free up capacity for more important customers or more lucrative workloads. Spot pricing can be lower than on-demand – we have seen quotes in the $2.00 and even $1.00 to $2.00 range.  
	现货：也称为预 emptive，像按需一样，使用费用按实例/服务器的实际时间收费，但使用可以在任何时候被中断，以便为其他工作负载或用户腾出空间。这最适合不需要实时处理的工作，尽管工作的平稳恢复仍然是一个正在发展的能力。现货实例最适合可以在一分钟通知内中断的推理工作负载或批处理作业。没有人会使用现货实例进行训练，因为被随机踢出多节点实例会造成很大的干扰。现货定价使 Neoclouds 能够灵活地迅速释放容量，以便为更重要的客户或更有利可图的工作负载腾出空间。现货定价可能低于按需定价——我们看到的报价在 2.00 美元甚至 1.00 美元到 2.00 美元的范围内。
- **Contract/Reserved**: The compute price is locked in for a given time, and usage cannot be interrupted. Ordinary contract tenors include one month, 6 months, one year, 18 months, 2 years, 3 years. Due to the wide availability of H100/H200 across 100 of GPU clouds, most customers do not sign 1-3 years deals anymore  
	合同/保留：计算价格在给定时间内锁定，使用不能中断。普通合同期限包括一个月、六个月、一年、十八个月、两年、三年。由于 H100/H200 在 100 个 GPU 云中的广泛可用性，大多数客户不再签订 1-3 年的合同。

Pre-emptible or on-demand cluster options offer more flexibility, making them ideal for intermittent or elastic workloads. A noteworthy strategy emerging among some Neocloud providers involves selling idle compute capacity at discounted rates but with specific clauses permitting providers to reclaim resources with short notice (typically seven days) should higher-paying customers emerge.  
可抢占或按需集群选项提供了更多灵活性，使其非常适合间歇性或弹性工作负载。一些 Neocloud 提供商中出现的一种值得注意的策略是以折扣价出售闲置计算能力，但附带特定条款，允许提供商在高价客户出现时以短期通知（通常为七天）收回资源。

Providers like Google Cloud Platform (GCP) and Amazon Web Services (AWS) offer scheduled capacity through flex modes or capacity blocks, allowing customers predictable access at defined intervals.  
像谷歌云平台（GCP）和亚马逊网络服务（AWS）这样的提供商通过灵活模式或容量块提供定期容量，使客户能够在定义的时间间隔内获得可预测的访问。

From a **GPU Provider’s perspective**, it’s typically advantageous to secure long-term contracts, mainly because, as highlighted by NVIDIA’s “Chief Revenue Destroyer” Jensen Huang, GPU performance per dollar improves extremely rapidly each year, making early commitments favorable for the GPU cloud to lock in margins early on with long term contracts.  
从 GPU 提供商的角度来看，确保长期合同通常是有利的，主要是因为正如 NVIDIA 的“首席收入破坏者”黄仁勋所强调的，GPU 每美元的性能每年都在极快地提高，这使得 GPU 云在早期承诺时能够通过长期合同锁定利润。

From the **Customer’s perspective**, it is typically advantageous to secure short-term contracts due to the reason that Mr. “Chief Revenue Destroyer” mentioned at his GTC Keynote – namely, the exponentially increasing GPU performance per dollar delivered each year that he launches a new GPU generation.  
从客户的角度来看，通常获得短期合同是有利的，原因是“首席收入破坏者”在他的 GTC 主题演讲中提到的——即每年推出新一代 GPU 时，每美元所提供的 GPU 性能呈指数级增长。

Most customers are engaged in an AI arms race with their competitors, meaning that availability remains a critical differentiator. Customers frequently require immediate resource provisioning and want their clusters available not just today, but they practically want them available yesterday. Both Nebius and Crusoe excel in this domain, with extensive availability and the capability to provision substantial GPU clusters (such as 128 GPUs) from initial contact to contract signing and provisioning within remarkably short timelines—often less than two days.  
大多数客户正与竞争对手进行 AI 军备竞赛，这意味着可用性仍然是一个关键的差异化因素。客户经常需要立即提供资源，并希望他们的集群不仅今天可用，实际上他们希望它们昨天就可用。Nebius 和 Crusoe 在这一领域表现出色，具备广泛的可用性和在初次接触到合同签署及资源提供之间在极短时间内（通常少于两天）提供大量 GPU 集群（如 128 个 GPU）的能力。

Nebius currently stands out by offering the best absolute pricing while still maintaining robust technical capabilities. Their approach involves aggressive cost optimization strategies, including the adoption of Original Design Manufacturer (ODM) hardware for GPU servers, significantly lowering their total cost of ownership. For example, by bypassing traditional OEM providers like Dell or Supermicro, which can price servers with as high as 10-15% gross margins, Nebius achieves cost reductions through a custom-designed ODM chassis, minimizing gross margins from a typical 10-15% down to around 2%.  
Nebius 目前通过提供最佳的绝对定价，同时保持强大的技术能力而脱颖而出。他们的做法涉及激进的成本优化策略，包括采用原始设计制造商（ODM）硬件用于 GPU 服务器，显著降低了其总拥有成本。例如，通过绕过传统的 OEM 供应商如戴尔或超微，这些供应商的服务器毛利率高达 10-15%，Nebius 通过定制设计的 ODM 机箱实现了成本降低，将毛利率从典型的 10-15% 降至约 2%。

This strategy not only reduces initial hardware expenditures but also lowers [ongoing power consumption](https://www.youtube.com/watch?v=jPLbKjYAado), allowing Nebius to pass substantial savings onto customers. All Hyperscalers use this ODM strategy, too, but Nebius stands out as the only non-Hyperscaler that deploys an ODM-built chassis.  
这一策略不仅减少了初始硬件支出，还降低了持续的电力消耗，使 Nebius 能够将可观的节省转嫁给客户。所有超大规模云服务商也使用这种 ODM 策略，但 Nebius 是唯一一个部署 ODM 机箱的非超大规模云服务商。

Oracle presents a distinct advantage in pricing for customers, prioritizing Hyperscaler capabilities and stringent security measures. Their pricing model reflects enterprise-grade security and comprehensive integration with other cloud services, aligning well with organizations that require deep ecosystem integration or compliance-focused workloads. Consequently, while not necessarily the cheapest absolute option, Oracle delivers exceptional price-to-value for enterprise customers.  
甲骨文在定价方面为客户提供了独特的优势，优先考虑超大规模云服务能力和严格的安全措施。他们的定价模型反映了企业级安全性和与其他云服务的全面集成，适合需要深度生态系统集成或合规性工作负载的组织。因此，尽管不一定是绝对最便宜的选择，甲骨文为企业客户提供了卓越的性价比。

Nvidia has a program called “Nvidia Cloud Partner (NCP),” where GPU clouds that can meet certain requirements can achieve NCP status, and Nvidia helps them get sales and ensure they have lines of communication with technical folks to help advance their GPU cloud offering. We tend to see that GPU clouds with NCP status have better performance than those without it.  
Nvidia 有一个名为“Nvidia Cloud Partner (NCP)”的项目，符合某些要求的 GPU 云可以获得 NCP 状态，Nvidia 会帮助他们获得销售并确保他们与技术人员保持沟通，以帮助推进他们的 GPU 云产品。我们发现，获得 NCP 状态的 GPU 云通常比没有 NCP 状态的表现更好。

Jensen has invested in the following GPU clouds:  
Jensen 已投资于以下 GPU 云：

- Together AI 一起 AI
- CoreWeave 核心织造
- Nebius 内比乌斯
- Crusoe 克鲁索
- Lambda labs

These five GPU clouds tend to have a good user experience overall and performance based on our testing. 4 out of the five have offerings that are at the ClusterMAX™ Platinum standard or ClusterMAX™ Gold standard.  
根据我们的测试，这五个 GPU 云整体上用户体验良好，性能表现出色。五个中有四个的服务达到了 ClusterMAX™白金标准或 ClusterMAX™黄金标准。

In contrast, we tend to see that GPU clouds that AMD has invested in do not do well on user experience, and none of the clouds that AMD invested in even rank as ClusterMAX™ Platinum or ClusterMAX™ Gold or ClusterMAX™ Sliver.  
相比之下，我们倾向于看到 AMD 投资的 GPU 云在用户体验方面表现不佳，且 AMD 投资的云中没有一个甚至排名为 ClusterMAX™白金或 ClusterMAX™黄金或 ClusterMAX™白银。

Some of the “AMD Alliance Instinct Cloud Partners” don’t even have basic security, such as SOC2. As such, we view being on the “AMD Alliance Instinct Cloud Partners” list as not a good predictor of tiering well in ClusterMAX™.  
一些“AMD 联盟 Instinct 云合作伙伴”甚至没有基本的安全性，例如 SOC2。因此，我们认为在“AMD 联盟 Instinct 云合作伙伴”名单上的表现并不能很好地预测在 ClusterMAX™中的等级。

We have spoken with AMD, and they have confirmed that they are investigating the issue and committed to helping raise the industry standard on this topic.  
我们已与 AMD 进行了沟通，他们确认正在调查此问题，并承诺帮助提高该领域的行业标准。

GPU clouds that pay for support from [SchedMD](https://www.schedmd.com/) (the makers of Slurm) can significantly enhance the customer experience and services by providing robust and efficient management of GPU resources. By leveraging SchedMD’s expertise, GPU cloud providers can offer users a seamless and optimized experience, ensuring that computational tasks are handled efficiently and effectively.  
支付 SchedMD（Slurm 的开发者）支持费用的 GPU 云可以通过提供强大而高效的 GPU 资源管理显著提升客户体验和服务。通过利用 SchedMD 的专业知识，GPU 云服务提供商可以为用户提供无缝且优化的体验，确保计算任务高效且有效地处理。

We recommend to AMD that AMD ensures that all their “Alliance Instinct Cloud Partners” achieve SOC2 and ensure that any new “Cloud Partner” have SOC2 security before joining. We recommend to Nvidia and AMD that they need to set the industry-wide bar and help even their non-partner cloud get SOC2 security. Getting SOC2 Security should not be optional for GPU cloud, but instead, it is a must-have for GPU clouds. It is just like FAA certifications on airlines. You might want to fly on an airline that doesn’t have FAA certification, but most won’t. As most model weights and codebases are proprietary intellectual property (IP) and not open source and are worth tens of thousands to millions of dollars, most customers want basic security, such as SOC2.  
我们建议 AMD 确保所有“联盟本能云合作伙伴”都获得 SOC2 认证，并确保任何新的“云合作伙伴”在加入之前具备 SOC2 安全性。我们建议 Nvidia 和 AMD 需要设定行业标准，并帮助他们的非合作伙伴云获得 SOC2 安全性。获得 SOC2 安全性对于 GPU 云来说不应是可选的，而应是必备的。这就像航空公司需要获得 FAA 认证一样。您可能想乘坐没有 FAA 认证的航空公司，但大多数人不会。由于大多数模型权重和代码库是专有知识产权（IP），而不是开源的，价值从数万美元到数百万美元不等，因此大多数客户希望获得基本的安全性，例如 SOC2。

Furthermore, we recommend that AMD provide [pyxis container Slurm support](https://github.com/NVIDIA/pyxis) such that running containers on Slurm has a good UX. Currently, it is challenging to run containers on Slurm, and even AMD’s own internal scripts are a mess due to this missing Pyxis capability. Verus on a correctly setup Nvidia GPU cloud, running containers with Pyxis on Slurm is an effortless experience.  
此外，我们建议 AMD 提供 Pyxis 容器的 Slurm 支持，以便在 Slurm 上运行容器时有良好的用户体验。目前，在 Slurm 上运行容器具有挑战性，甚至 AMD 自己内部的脚本由于缺少 Pyxis 功能而变得混乱。在正确设置的 Nvidia GPU 云上，使用 Pyxis 在 Slurm 上运行容器是一种轻松的体验。

For NVIDIA, we recommend that they should provide good publicly accessible documentation and education about the different keys (SMKeys, MKeys, PKeys, VSKeys, CCKeys, AMKeys, etc) needed to secure an InfiniBand network properly. We recommend that Nvidia help their GPU clouds properly secure their InfiniBand network and complete an audit of all GPU clouds that use InfiniBand.  
对于 NVIDIA，我们建议他们提供良好的公开可访问文档和教育，关于安全地正确配置 InfiniBand 网络所需的不同密钥（SMKeys、MKeys、PKeys、VSKeys、CCKeys、AMKeys 等）。我们建议 Nvidia 帮助他们的 GPU 云正确保护其 InfiniBand 网络，并对所有使用 InfiniBand 的 GPU 云进行审计。

Furthermore, we recommend that Nvidia should fix ease of use for SHARP for the GPU provider and recommend that Nvidia should enable it by default instead of making it challenging for the GPU provider to set it up and for the end user to see the real-world benefits of SHARP on their training and inference workloads.  
此外，我们建议 Nvidia 应改善 SHARP 的易用性，以便于 GPU 提供商，并建议 Nvidia 应默认启用该功能，而不是让 GPU 提供商设置起来困难，以及让最终用户在其训练和推理工作负载中看到 SHARP 的实际好处。

We recommend that Nvidia runs regression tests on GCP networking, AWS networking and Oracle networking to prevent regressions on their Hyperscalers partners’ NCCL performance every time they release a new NCCL version. For example: on Oracle, since NCCL 2.21.5, there have been performance regressions on certain clouds when they attempted to deploy any of the subsequent NCCL versions up to 2.26.  
我们建议 Nvidia 在 GCP 网络、AWS 网络和 Oracle 网络上进行回归测试，以防止每次发布新版本的 NCCL 时对其超大规模合作伙伴的 NCCL 性能造成回归。例如：在 Oracle 上，自 NCCL 2.21.5 以来，当他们尝试部署任何后续 NCCL 版本（直到 2.26）时，某些云的性能出现了回归。

## ClusterMAX™ Platinum GPU ProvidersClusterMAX™ Platinum GPU 提供商

The **ClusterMAX™ Platinum** tier represents the highest standard of GPU cloud services available in the industry. Providers in this category consistently excel across all critical evaluation criteria, including adopting robust security measures, competitive pricing for the value they offer, extensive technical expertise, outstanding reliability with clearly defined SLAs, seamless managed Slurm/Kubernetes offering, and superior NCCL/RCCL networking performance. Platinum-tier providers are proactive, innovative, and maintain an active feedback loop with the community to continually raise the industry bar, setting benchmarks for excellence. Currently, there is only one GPU cloud that is raising the industry bar and qualifies for ClusterMAX™ Platinum which is CoreWeave**.**  
ClusterMAX™ Platinum 级别代表了行业内可用的最高标准的 GPU 云服务。该类别的提供商在所有关键评估标准上始终表现出色，包括采用强大的安全措施、提供具有竞争力的定价、广泛的技术专长、出色的可靠性（具有明确的服务水平协议）、无缝的管理 Slurm/Kubernetes 提供以及卓越的 NCCL/RCCL 网络性能。Platinum 级别的提供商积极主动、创新，并与社区保持活跃的反馈循环，以不断提高行业标准，设定卓越的基准。目前，只有一个 GPU 云正在提升行业标准并符合 ClusterMAX™ Platinum 资格，那就是 CoreWeave。

## CoreWeave 核心织造

CoreWeave is clearly leading in providing the best GPU cloud experience and has very high goodput and are entrusted to manage the large-scale GPU infrastructure for AGI labs like OpenAI and MetaAI, high frequency trading firms like Jane Street, and even NVIDIA’s internal clusters. CoreWeave is the experts at running large scale GPU clusters reliably.  
CoreWeave 显然在提供最佳 GPU 云体验方面处于领先地位，具有非常高的良品率，并被信任管理大型 GPU 基础设施，为像 OpenAI 和 MetaAI 这样的 AGI 实验室、高频交易公司如 Jane Street，甚至 NVIDIA 的内部集群提供服务。CoreWeave 是可靠运行大规模 GPU 集群的专家。

CoreWeave provides 4 offerings:  
CoreWeave 提供 4 种服务：

- CoreWeave Bare Metal without any managed scheduler  
	CoreWeave 裸金属，无需任何管理调度程序
- CoreWeave Managed SUNK (Slurm in Kubernetes)  
	CoreWeave 管理的 SUNK（Kubernetes 中的 Slurm）
- CoreWeave Managed Slurm CoreWeave 管理的 Slurm
- CoreWeave Managed Kubernetes  
	CoreWeave 管理的 Kubernetes

For their bare metal offering, which doesn’t include any CoreWeave-managed software or scheduler, there are essentially only two customers: OpenAI/Azure and Nvidia EOS. OpenAI/Azure wants bare metal due to their security and operational paranoia surrounding artificial general intelligence (AGI), as well as the ability to control the cluster more tightly for reliability and performance reasons. For the CoreWeave 11,000 H100 EOS cluster, which Nvidia rents and uses for internal development, it is also bare metal as it is useful for Nvidia to manage their own Slurm and Kubernetes while they develop their Slurm and Kubernetes operators and plugins.  
对于他们的裸金属产品，不包括任何 CoreWeave 管理的软件或调度程序，实际上只有两个客户：OpenAI/Azure 和 Nvidia EOS。OpenAI/Azure 希望使用裸金属是因为他们对人工通用智能（AGI）周围的安全性和操作偏执，以及为了可靠性和性能原因更紧密地控制集群的能力。对于 Nvidia 租用并用于内部开发的 CoreWeave 11,000 H100 EOS 集群，它也是裸金属，因为 Nvidia 在开发他们的 Slurm 和 Kubernetes 操作员及插件时，管理自己的 Slurm 和 Kubernetes 是有用的。

Although the rest of their customers have the option not to use the CoreWeave managed offering, all their customers decide to opt for it due to CoreWeave’s amazingly managed offering.  
尽管其余客户可以选择不使用 CoreWeave 管理的产品，但所有客户都决定选择它，因为 CoreWeave 的管理产品非常出色。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-17.-Coreweave-customers-GIMP.png?resize=1024%2C563&ssl=1)

Source: CoreWeave 来源：CoreWeave

Firstly, we will talk about CoreWeave’s automated node lifecycle controller that ensure that during cluster bring up nodes receive a full burn-in test and full cluster InfiniBand network high-temperature burn in with NCCL-tests and ib\_write\_bw. Not only does this bring up burn-in test for hard failures, but they also compare it to reference numbers and see when nodes do not meet the performance expectations or are running into silence data corruption (SDC) issues. Nodes that do not meet this comprehensive test will be automatically drained for investigation and will not proceed to the customer cluster till it is fully resolved.  
首先，我们将讨论 CoreWeave 的自动节点生命周期控制器，该控制器确保在集群启动期间，节点接收全面的烧机测试和完整的集群 InfiniBand 网络高温烧机测试，使用 NCCL 测试和 ib\_write\_bw。这不仅为硬件故障提供了烧机测试，还将其与参考数字进行比较，以查看节点何时未达到性能预期或遇到静默数据损坏（SDC）问题。未通过此综合测试的节点将被自动排空以进行调查，并且在完全解决之前不会进入客户集群。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-18.-Coreweave-lifecycle-GIMP.png?resize=1024%2C454&ssl=1)

Source: CoreWeave 来源：CoreWeave

Once deployed in a customer environment, they will continuously do passive health checks every couple of seconds to ensure the GPUs are functioning properly. By doing this, it leads to high goodput and automatically drains and fixes unhealthy nodes. For passive health checks, they monitor for:  
一旦在客户环境中部署，它们将每隔几秒钟持续进行被动健康检查，以确保 GPU 正常运行。通过这样做，可以实现高吞吐量，并自动排除和修复不健康的节点。对于被动健康检查，它们监控：

- GPUs falling off the bus  
	GPU 掉线
- PCIe Errors PCIe 错误
- Ethernet and InfiniBand events such as Link Flaps  
	以太网和 InfiniBand 事件，例如链路波动
- Thermals such as GPU temperate  
	热量，例如 GPU 温度
- GPU and CPU Memory stats such as ECC error rate  
	GPU 和 CPU 内存统计信息，例如 ECC 错误率
- Nvidia XID and Nvidia SXID error codes  
	Nvidia XID 和 Nvidia SXID 错误代码
- Etc.等等。

In addition to passive health checks, they automatically schedule on a weekly basis active health check to run on idle GPUs to do a full set of active testing to verify nodes are healthy. These tests include:  
除了被动健康检查外，它们还会每周自动安排在空闲的 GPU 上运行主动健康检查，以进行全面的主动测试以验证节点是否健康。这些测试包括：

- NVIDIA DCGM diag level 3 with Extensive Testing (EUD)  
	NVIDIA DCGM 诊断级别 3 与广泛测试 (EUD)  
	DtoH and HtoD Bandwdith for validating PCIe performance from CPU to GPU  
	从 CPU 到 GPU 验证 PCIe 性能的 DtoH 和 HtoD 带宽
- Local NCCL all reduce tests for validating NVLink/NVSwitch/NVLS performance  
	本地 NCCL 全部归约测试用于验证 NVLink/NVSwitch/NVLS 性能
- Local InfiniBand all reduce test for validating InfiniBand performance and links (by force disabling NVLink/p2p/SHM)  
	本地 InfiniBand 全规约测试，用于验证 InfiniBand 性能和链接（通过强制禁用 NVLink/p2p/SHM）
- Pairwise GPU ib\_write\_bw and ib\_write\_latency bidirectional tests to verify that the network is within specs with reference numbers.  
	成对 GPU ib\_write\_bw 和 ib\_write\_latency 双向测试，以验证网络是否符合规格及参考编号。
- Pairwise CPU ib\_write\_bw and ib\_write\_latency bidirectional tests to verify that the network is within specs with reference numbers.  
	成对的 CPU ib\_write\_bw 和 ib\_write\_latency 双向测试，以验证网络是否符合规格参考编号。
- GPUBurn for validating GPU won’t fail under load  
	GPUBurn 用于验证 GPU 在负载下不会失败。
- Nvidia TinyMeg2 for validating hardware correctness and that GPU are free from SDC  
	Nvidia TinyMeg2 用于验证硬件正确性以及确保 GPU 不受 SDC 影响
- Megatron Tests to test if TFLOP/s/GPU performance match reference numbers and that the loss convergence matches reference loss curve  
	Megatron 测试用于测试 TFLOP/s/GPU 性能是否与参考数字匹配，以及损失收敛是否与参考损失曲线匹配

By automatically scheduling these tests during cluster bring up and continuously during the whole lifecycle of the customer cluster, they are able to ensure that the customer has high goodput by proactively removing unhealthy nodes to prevent customers from submitting jobs from unhealth nodes. Customers can see in the dashboard when was the last time their nodes have had an active health check ran called “verification”.  
通过在集群启动期间以及在客户集群的整个生命周期中持续自动调度这些测试，他们能够确保客户拥有高吞吐量，通过主动移除不健康的节点来防止客户从不健康的节点提交作业。客户可以在仪表板上看到他们的节点上一次进行主动健康检查的时间，称为“验证”。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-19.-Node-Health-GIMP.png?resize=1024%2C392&ssl=1)

Source: SemiAnalysis 来源：SemiAnalysis

On their main dashboard, they also show events such as the classic common error of “GPUFallingoffthebus” and “LinkFlaps”. At the infra layer without any changes to application/end user code, they use “DCGM\_FI\_PROF\_PIPE\_TENSOR\_ACTIVE \* 1979” to track the current fp8 TFLOP/s (times 989 to bf16 TFLOP/s estimates) rough estimate and has a system to correlate which alerts causes a drop in cluster or job wide TFLOP/s. for example, you can clearly see that the drop in jobwide TFLOP/s is caused by PCIeFault and IBLink flapping Fault. While using DCGM\_FI\_PROF\_PIPE\_TENSOR\_ACTIVE isn’t the most accurate estimate of MFU, it does allow the customer and CoreWeave to view which events are relevant to the drop in MFU. In addition, the CoreWeave MFU infra layer estimates, customers can also calculate their MFU and TFLOP/s/GPU at their application layer for a more accurate absolute TFLOP/s/GPU.  
在他们的主仪表板上，他们还显示了事件，例如经典的常见错误“GPUFallingoffthebus”和“LinkFlaps”。在基础设施层中，在不对应用程序/最终用户代码进行任何更改的情况下，他们使用“DCGM\_FI\_PROF\_PIPE\_TENSOR\_ACTIVE \* 1979”来跟踪当前的 fp8 TFLOP/s（乘以 989 得到 bf16 TFLOP/s 估算值）的粗略估算，并且有一个系统来关联哪些警报导致集群或作业范围内的 TFLOP/s 下降。例如，您可以清楚地看到作业范围内的 TFLOP/s 下降是由 PCIeFault 和 IBLink 颤动故障引起的。虽然使用 DCGM\_FI\_PROF\_PIPE\_TENSOR\_ACTIVE 不是 MFU 的最准确估算，但它确实允许客户和 CoreWeave 查看哪些事件与 MFU 下降相关。此外，除了 CoreWeave MFU 基础设施层的估算外，客户还可以在其应用层计算 MFU 和 TFLOP/s/GPU，以获得更准确的绝对 TFLOP/s/GPU。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-20.-Observability-Single-pane-of-glass-GIMP.png?resize=1024%2C559&ssl=1)

Source: CoreWeave 来源：CoreWeave

CoreWeave has amazing out of the box dashboards to track InfiniBand and NVLink bandwidth and a whole host of other stats such as temperature and makes them all visible to the end user to help debug. As some are aware, the cold aisle temps change during the day and night and these temp changes may cause 2-3% difference in performance, CoreWeave provides the end user full visibility into the temp sensors of each node they are on.  
CoreWeave 提供了出色的开箱即用仪表板，以跟踪 InfiniBand 和 NVLink 带宽以及其他一系列统计数据，如温度，并使所有这些信息对最终用户可见，以帮助调试。正如一些人所知，冷通道的温度在白天和夜间会发生变化，这些温度变化可能导致 2-3% 的性能差异，CoreWeave 为最终用户提供了对他们所处每个节点的温度传感器的全面可见性。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-21.-Infiniband-GIMP.png?resize=1024%2C265&ssl=1)

Source: CoreWeave, SemiAnalysis  
来源：CoreWeave，SemiAnalysis

All of these active and passive metrics are collected to detect outliers, something similar to drawing a “curve of best fit” and finding the nodes and points that don’t fit into a certain range of the median.  
所有这些主动和被动指标都是为了检测异常值而收集的，类似于绘制“最佳拟合曲线”，并找到不符合某个中位数范围的节点和点。

Furthermore, CoreWeave has improved their customer’s visibility into reliability and the state of each node by having a node controller overview that shows the state of each node from a healthy state to being triaged to being debugged or RMA’ed back to the OEM.  
此外，CoreWeave 通过提供节点控制器概览，改善了客户对可靠性和每个节点状态的可见性，该概览显示了每个节点的状态，从健康状态到被分类处理，再到被调试或退回给 OEM。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-22.-Node-controller-GIMP.png?resize=1024%2C635&ssl=1)

Source: CoreWeave 来源：CoreWeave

What we find amazing about CoreWeave is that they provide an automated, managed solution that abstracts away all the tasks that an ML engineer or scientist ideally doesn’t want to do.  
我们对 CoreWeave 感到惊讶的是，他们提供了一种自动化的、托管的解决方案，抽象掉了机器学习工程师或科学家理想上不想做的所有任务。

The monitoring, passive and automated schedule active health checks and out-of-the-box managed scheduler, all of this loop back into what an ML engineer/scientist wants, which is to focus on non-infra tasks and have a healthy set of verified nodes that is constantly scanned by passive health checks and automatically weekly scanned by active health checks. But an ML engineer/scientist also recognizes that sometimes things may break and broken nodes are not caught by the health checks and in those cases, they want FULL visibility into everything that is going on.  
监控、被动和自动调度的主动健康检查以及开箱即用的托管调度器，这一切都回归到机器学习工程师/科学家所希望的，即专注于非基础设施任务，并拥有一组健康的经过验证的节点，这些节点会不断通过被动健康检查进行扫描，并每周自动进行主动健康检查。但机器学习工程师/科学家也意识到，有时事情可能会出现故障，而故障节点不会被健康检查捕捉到，在这种情况下，他们希望对正在发生的一切有完全的可见性。

Their out-of-the-box Slurm solution comes with a [pyxis plugin](https://github.com/NVIDIA/pyxis) for running reproducible containers as a first-class inside of Slurm and comes with [automatically generated Slurm topology](https://slurm.schedmd.com/topology.conf.html) to ensure optimized NCCL collectives. CoreWeave also has [open sourced their nccl-tests scripts](https://github.com/coreweave/nccl-tests/tree/master) for reproducibility. Besides Azure, CoreWeave is one of the only providers of InfiniBand SHARP in network reduction-enabled solutions. It has also worked with Nvidia and some of its customers to enable SHARP, optimizing their customers’ workloads and NCCL performance.  
他们的开箱即用的 Slurm 解决方案配备了一个 pyxis 插件，用于在 Slurm 内部作为一流运行可重现的容器，并附带自动生成的 Slurm 拓扑，以确保优化的 NCCL 集合。CoreWeave 还开源了他们的 nccl-tests 脚本以实现可重现性。除了 Azure，CoreWeave 是网络减缩启用解决方案中为数不多的 InfiniBand SHARP 提供商之一。它还与 Nvidia 及其一些客户合作，以启用 SHARP，优化客户的工作负载和 NCCL 性能。

These are all reasons why companies like Meta or Jane Street choose to use CoreWeave-managed Slurm/Kubernetes.  
这些都是像 Meta 或 Jane Street 这样的公司选择使用 CoreWeave 管理的 Slurm/Kubernetes 的原因。

CoreWeave also offers a Slurm in Kubernetes (SUNK) solution where they run Slurm inside of Kubernetes. This allows customers to schedule their Slurm training with their Kubernetes inference services dynamically. This solution has essentially zero downsides, except for one.  
CoreWeave 还提供了一个在 Kubernetes 中运行 Slurm 的解决方案（SUNK），使他们能够在 Kubernetes 内部运行 Slurm。这使得客户能够动态地安排他们的 Slurm 训练与 Kubernetes 推理服务。这种解决方案几乎没有任何缺点，除了一个。

The one downside is that changing GPU vboost settings requires the Slurm container setting to be privileged but this is very simple fix to enable in the yaml. Some people may think that SUNK means there is vendor lockup, but this is not true. If customers want to move away from CoreWeave, they can take their batch scripts and Kubernetes yaml files to other providers since Kubernetes yaml and batch scripts are open standards and work on any Slurm solution are properly set it. The reason customers continue to stick with and renew their contracts is CoreWeave’s technical expertise and their amazing node lifecycle controller and health checks.  
唯一的缺点是更改 GPU vboost 设置需要将 Slurm 容器设置为特权，但在 yaml 中启用这一点非常简单。有些人可能认为 SUNK 意味着存在供应商锁定，但这并不真实。如果客户想要离开 CoreWeave，他们可以将自己的批处理脚本和 Kubernetes yaml 文件带到其他提供商，因为 Kubernetes yaml 和批处理脚本是开放标准，并且在任何适当设置的 Slurm 解决方案上都能工作。客户继续坚持并续签合同的原因是 CoreWeave 的技术专长以及他们出色的节点生命周期控制器和健康检查。

From our independent testing of CoreWeave H100 clusters, we noticed that the team of engineers and solution architects are the subject matter experts in GPU infrastructure and NCCL. Their onboarding experience was smooth, and they provided an onboarding doc that shows all the IP addresses and certain common FAQ. It becomes very clear to us that CoreWeave is the technical subject matter expert when we ask in-depth questions about certain PCIe AER health checks and about specific InfiniBand security keys, such as the difference between SMKeys and MKeys.  
根据我们对 CoreWeave H100 集群的独立测试，我们注意到工程师和解决方案架构师团队在 GPU 基础设施和 NCCL 方面是主题专家。他们的入职体验非常顺利，并提供了一份入职文档，显示了所有的 IP 地址和一些常见的 FAQ。当我们询问有关某些 PCIe AER 健康检查和特定 InfiniBand 安全密钥（例如 SMKeys 和 MKeys 之间的区别）时，CoreWeave 显然是技术主题专家。

One thing that is missing from self-serve deployment, and CoreWeave’s deployment, is a bunch of complex tops, yaml files, and Kubernetes, which is typically not in the vocabulary of an ML Scientist who want to train in Slurm, but luckily, CoreWeave tasks an engineer to any customer that wants CoreWeave to do the deployment themselves. We recommend that CoreWeave work on a UI console flow for deploying their managed Slurm solution, ideally with less than four button clicks.  
自助部署和 CoreWeave 的部署中缺少的一件事是大量复杂的顶部、yaml 文件和 Kubernetes，这通常不在希望在 Slurm 中进行训练的 ML 科学家的词汇中，但幸运的是，CoreWeave 为任何希望 CoreWeave 自行进行部署的客户指派了一名工程师。我们建议 CoreWeave 开发一个 UI 控制台流程，以便部署他们的托管 Slurm 解决方案，理想情况下不超过四次按钮点击。

CoreWeave clusters commonly submit [very competitive MLPerf training results.](https://www.coreweave.com/blog/mlperf-coreweave-nvidia-record-breaking-cloud-native-ai-supercomputer) Furthermore, all the MLPerf Training results that [NVIDIA submits](https://developer.nvidia.com/blog/nvidia-sets-new-generative-ai-performance-and-scale-records-in-mlperf-training-v4-0/) are obtained on the CoreWeave 11,000 H100 EOS cluster, which NVIDIA rents from CoreWeave. CoreWeave runs many clusters, many of which have over 10,000 GPUs.  Due to their close partnership with NVIDIA, they get access to early tranches of the next GPU allocation, and as we mentioned in the Neocloud Anatomy, the players that deploy first for each GPU cycle can lock in long-term low-risk contracts from favorable customers.  
CoreWeave 集群通常提交非常有竞争力的 MLPerf 训练结果。此外，NVIDIA 提交的所有 MLPerf 训练结果都是在 CoreWeave 11,000 H100 EOS 集群上获得的，该集群是 NVIDIA 从 CoreWeave 租用的。CoreWeave 运行许多集群，其中许多集群拥有超过 10,000 个 GPU。由于与 NVIDIA 的紧密合作关系，他们可以提前获得下一轮 GPU 配额的早期份额，正如我们在 Neocloud Anatomy 中提到的，首先部署每个 GPU 周期的参与者可以从有利的客户那里锁定长期低风险合同。

CoreWeave is the only Neocloud capable of operating clusters with 10,000+ GPUs consistently and reliably. Besides CoreWeave, the only other GPU clouds that are able to operate them reliability are the four Hyperscalers: Azure, OCI, AWS and GCP.  
CoreWeave 是唯一能够持续可靠地操作 10,000+ GPU 集群的 Neocloud。除了 CoreWeave，唯一能够可靠地操作这些集群的其他 GPU 云是四大超大规模云服务商：Azure、OCI、AWS 和 GCP。

From the customer perspective, a downside of CoreWeave is that they rarely accept short-term rentals, and most of their rentals are giant clusters for long-term tenants. This is different from Nebius and Crusoe, which offer competitive terms for short-term rentals of GPUs.  
从客户的角度来看，CoreWeave 的一个缺点是他们很少接受短期租赁，而且他们的大多数租赁都是针对长期租户的巨型集群。这与 Nebius 和 Crusoe 不同，后者为 GPU 的短期租赁提供了有竞争力的条款。

## ClusterMAX™ Gold Tier GPU ProvidersClusterMAX™金级 GPU 供应商

**ClusterMAX™ Gold** tier providers deliver strong performance across most key evaluation categories, with some opportunities for improvement. They offer solid security practices, reliable infrastructure, competitive pricing models, and competent technical support. Although Gold-tier GPU clouds may have occasional gaps or inconsistencies in specific features like advanced active health checks, they generally demonstrate responsiveness to feedback and a clear commitment to continuous improvement, positioning themselves as excellent choices for GPU renters for maximizing goodput. To move from Gold to Platinum, they must have a demonstrated history of raising the industry bar such as CoreWeave.  
ClusterMAX™ 金牌级提供商在大多数关键评估类别中表现出色，但仍有一些改进的机会。他们提供稳健的安全实践、可靠的基础设施、具有竞争力的定价模型和称职的技术支持。尽管金牌级 GPU 云在某些特性（如高级主动健康检查）上可能存在偶尔的差距或不一致，但他们通常对反馈表现出响应性，并明确致力于持续改进，使他们成为 GPU 租赁者最大化良好产出的优秀选择。要从金牌级提升到铂金级，他们必须有提升行业标准的历史，例如 CoreWeave。

## Crusoe 克鲁索

We’ve been using Crusoe Cloud for the past seven months and have been consistently impressed by their offering. Their console UI is straightforward to navigate and user-friendly, which has significantly simplified resource management and deployment. The intuitive experience they offer in the dashboard sets a high standard in the GPU cloud market, particularly in terms of ease of use and accessibility.  
我们已经使用 Crusoe Cloud 七个月了，对他们的服务一直印象深刻。他们的控制台用户界面简单易用，用户友好，这大大简化了资源管理和部署。他们在仪表板上提供的直观体验在 GPU 云市场中树立了高标准，特别是在易用性和可访问性方面。

We had a very positive experience dealing with GPU bus errors on Crusoe servers. When we discovered the GPU bus error, Crusoe sent us an email to resolve the issue. In the email, Crusoe explained that it had automatically detected a GPU-fell-off-the-bus error, reserved a health spare node, and requested that we restart the node in the console to complete the migration. Crusoe automatically identified issues, proactively fixed them, and guided users on migration. This robust fault management improves user experience.  
我们在处理 Crusoe 服务器上的 GPU 总线错误时有非常积极的体验。当我们发现 GPU 总线错误时，Crusoe 给我们发了一封电子邮件以解决该问题。在邮件中，Crusoe 解释说它自动检测到了 GPU 掉线错误，保留了一个健康的备用节点，并请求我们在控制台中重启该节点以完成迁移。Crusoe 自动识别问题，主动修复它们，并指导用户进行迁移。这种强大的故障管理改善了用户体验。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-22.1-Crusoe-1-GIMP.png?resize=1024%2C444&ssl=1)

Source: Crusoe, SemiAnalysis  
来源：Crusoe，SemiAnalysis

Initially, Crusoe lacked a fully managed Slurm solution, requiring customers to set up Slurm clusters through Terraform scripts manually. However, they offset this complexity with an exceptional white-glove service experience, where Crusoe engineers personally handled Slurm setup for most customers, ensuring smooth deployment and minimal friction. Last week at GTC, Crusoe recently addressed this gap by announcing their fully managed Slurm offering called “ [Auto Clusters](https://static.rainfocus.com/nvidia/gtcs25/sess/1736564473769001z9Hl/FinalPresPDF/S74475_1743005927914001c0TT.pdf),” unveiled at GTC last week. This new service promises to simplify customer workflows further and remove previous manual deployment complexities. Their new “Auto Clusters” product will also come with [automatically generated Slurm topology](https://slurm.schedmd.com/topology.conf.html) to ensure optimized NCCL collectives and auto node replacement when detecting unhealthy nodes.  
最初，Crusoe 缺乏一个完全托管的 Slurm 解决方案，要求客户通过 Terraform 脚本手动设置 Slurm 集群。然而，他们通过卓越的白手套服务体验来抵消这种复杂性，Crusoe 工程师亲自为大多数客户处理 Slurm 设置，确保顺利部署和最小摩擦。上周在 GTC 上，Crusoe 最近通过宣布他们的完全托管 Slurm 产品“Auto Clusters”来解决这一差距，该产品在上周的 GTC 上首次亮相。这个新服务承诺进一步简化客户工作流程，并消除之前手动部署的复杂性。他们的新“Auto Clusters”产品还将配备自动生成的 Slurm 拓扑，以确保优化的 NCCL 集合，并在检测到不健康节点时自动替换节点。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/crusoe_autocluster.png?resize=1024%2C578&ssl=1)

Source: Crusoe 来源：Crusoe

Crusoe already provides a robust, fully managed Kubernetes offering, making it straightforward for users to deploy and scale containerized workloads. In terms of monitoring and reliability, Crusoe currently implements basic passive health checks; however, these are less detailed and comprehensive compared to those of industry leaders such as CoreWeave. They have not yet implemented automated active weekly scheduled health checks, such as dcgm diag, nccl-tests, Nvidia TinyMeg2, etc. Still, they’ve indicated that this critical feature is actively in development and will soon be integrated into both their managed Slurm and managed Kubernetes offerings and will try to advance their health checks to the level of CoreWeave.  
Crusoe 已经提供了一个强大、完全托管的 Kubernetes 解决方案，使用户能够轻松部署和扩展容器化工作负载。在监控和可靠性方面，Crusoe 目前实施了基本的被动健康检查；然而，与行业领导者如 CoreWeave 相比，这些检查的细节和全面性较低。他们尚未实施自动化的每周定期主动健康检查，例如 dcgm diag、nccl-tests、Nvidia TinyMeg2 等。尽管如此，他们表示这一关键功能正在积极开发中，并将很快集成到他们的托管 Slurm 和托管 Kubernetes 解决方案中，并将努力将他们的健康检查提升到 CoreWeave 的水平。

Although they don’t do weekly scheduled active health checks, during cluster bring-up, they do burn-in and active health checks at the initial launch of the cluster; they do some level of testing and qualification. We recommend they investigate how CoreWeave does their cluster burn-in and advance their cluster burn-in to the same level as CoreWeave. CoreWeave has raised the industry bar for the most advanced cluster wide burn in.  
尽管他们不进行每周定期的主动健康检查，但在集群启动期间，他们会在集群初始启动时进行烧机测试和主动健康检查；他们会进行一定程度的测试和验证。我们建议他们研究 CoreWeave 如何进行集群烧机测试，并将他们的集群烧机测试提升到与 CoreWeave 相同的水平。CoreWeave 已经为最先进的集群全面烧机测试设定了行业标准。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-22.3-Crusoe-3-GIMP.png?resize=1024%2C538&ssl=1)

Source: Crusoe 来源：Crusoe

In terms of pricing and contract terms, Crusoe offers competitive short- to medium-term contracts that are attractive to startups and some enterprises. Their prices and terms are not as competitive as Nebius, but for fast-moving startups that want a simplified UI and user experience, Crusoe is competitive.  
在定价和合同条款方面，Crusoe 提供具有竞争力的短期到中期合同，这对初创公司和一些企业具有吸引力。他们的价格和条款不如 Nebius 具有竞争力，但对于希望拥有简化用户界面和用户体验的快速发展的初创公司来说，Crusoe 是具有竞争力的。

Similarly, Crusoe presently does not offer managed Grafana dashboards for GPU monitoring, which is another area they have identified for improvement. They have communicated clear plans to introduce advanced, managed Grafana monitoring dashboards in their upcoming managed Slurm and Kubernetes solutions, further enhancing observability and usability. Overall, Crusoe demonstrates significant responsiveness to user feedback and shows a strong commitment to rapidly evolving their product to meet customer needs and compete effectively in the GPU cloud marketplace.  
同样，Crusoe 目前并未提供用于 GPU 监控的托管 Grafana 仪表板，这是他们识别出的另一个改进领域。他们已明确传达计划，在即将推出的托管 Slurm 和 Kubernetes 解决方案中引入先进的托管 Grafana 监控仪表板，进一步增强可观察性和可用性。总体而言，Crusoe 对用户反馈表现出显著的响应能力，并展现出强烈的承诺，迅速发展其产品以满足客户需求，并在 GPU 云市场中有效竞争。

## Nebius 内比乌斯

Nebius is notable for providing the lowest pricing in the GPU cloud market, enabled by their financial position. With billions of dollars on their balance sheet and no existing debt, they benefit from abundant financial resources and significant maneuvering room. Their financial strength directly translates more risk taking and much stronger investment into business development. Examples of this include innovative offerings like bridging H100 contracts into B200 deployments as well as ubiquitous billboards in Santa Clara designed to capture mindshare. The result is unparalleled cost savings for their customers, as Nebius offers market-leading terms and highly competitive rates.  
Nebius 因其在 GPU 云市场提供最低价格而备受瞩目，这得益于其财务状况。凭借数十亿美元的资产负债表和没有现有债务，他们享有丰富的财务资源和显著的操作空间。他们的财务实力直接转化为更大的风险承担和更强的业务发展投资。这方面的例子包括将 H100 合同转化为 B200 部署的创新产品，以及在圣克拉拉设计的无处不在的广告牌，旨在吸引关注。结果是为客户带来了无与伦比的成本节省，因为 Nebius 提供市场领先的条款和高度竞争的价格。

One of Nebius’s key strategies for maintaining such low prices is its commitment to using custom Original Design Manufacturer (ODM) chassis. By designing hardware internally and partnering directly with Original Design Manufacturers (ODMs), Nebius bypasses traditional OEM providers like Dell and Supermicro, which typically apply gross margins of around 10-15%. Nebius’s ODM strategy significantly reduces gross margins to about 2%, dramatically lowering both initial hardware investments and ongoing operating expenses, such as power consumption. This cost efficiency places Nebius uniquely among non-Hyperscalers providers, as they adopt an optimization typically only seen within hyperscale cloud providers.  
Nebius 保持如此低价格的关键策略之一是其致力于使用定制的原始设计制造商（ODM）机箱。通过内部设计硬件并直接与原始设计制造商（ODM）合作，Nebius 绕过了传统的 OEM 供应商，如戴尔和超微，这些供应商通常施加约 10-15%的毛利率。Nebius 的 ODM 策略将毛利率显著降低到约 2%，大幅降低了初始硬件投资和持续的运营费用，如电力消耗。这种成本效率使 Nebius 在非超大规模提供商中独树一帜，因为他们采用的优化通常只在超大规模云提供商中看到。

Due to its roots as an ex-Russian cloud provider, it boasts an exceptionally talented team of cracked ex-Russian engineers. Nebius still lags behind competitors regarding user experience, though. Despite offering on-demand NVIDIA H100 GPUs at roughly $1.50 per hour (at least for the first thousand hours per month) —half the cost charged by competitors like Lambda Labs—Nebius struggles with customer adoption. Many users still prefer Lambda Labs primarily because Nebius’s UI and UX remain overly complex and unintuitive, creating friction that deters less technically inclined customers. Nebius is committed to fixing its UI/UX issues.  
由于其作为前俄罗斯云服务提供商的根基，它拥有一支极具才华的前俄罗斯工程师团队。然而，Nebius 在用户体验方面仍落后于竞争对手。尽管提供按需的 NVIDIA H100 GPU，价格约为每小时 1.50 美元（至少在每月的前一千小时内）——这仅为 Lambda Labs 等竞争对手收费的一半——Nebius 在客户采纳方面仍面临困难。许多用户仍然更喜欢 Lambda Labs，主要是因为 Nebius 的 UI 和 UX 仍然过于复杂且不直观，造成了阻碍，令技术能力较弱的客户感到困扰。Nebius 致力于解决其 UI/UX 问题。

Finally, Nebius currently offers a fully managed Kubernetes solution but does not yet provide fully automated managed Slurm clusters, a significant gap in their product portfolio. They are actively developing their “Soperator” Slurm solution, which includes foundational passive and active health checks. However, these checks still fall short of industry-leading standards set by providers like CoreWeave. To match competitors’ reliability and observability, Nebius will need to invest more heavily in comprehensive, weekly scheduled active health checks and implement advanced out-of-the-box Grafana dashboards. Strengthening these operational aspects would further enhance their already compelling value proposition by increasing reliably to the level of CoreWeave and having automated node lifecycles.  
最后，Nebius 目前提供完全托管的 Kubernetes 解决方案，但尚未提供完全自动化的托管 Slurm 集群，这在他们的产品组合中是一个显著的缺口。他们正在积极开发“ Soperator” Slurm 解决方案，其中包括基础的被动和主动健康检查。然而，这些检查仍然未达到 CoreWeave 等提供商设定的行业领先标准。为了匹配竞争对手的可靠性和可观察性，Nebius 需要在全面的每周计划主动健康检查上进行更多投资，并实施先进的开箱即用 Grafana 仪表板。加强这些运营方面将进一步提升他们已经引人注目的价值主张，通过将可靠性提高到 CoreWeave 的水平并实现自动化节点生命周期。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-22.4-Nebius-1-GIMP.png?resize=1024%2C793&ssl=1)

Source: Nebius 来源：Nebius

## Oracle Cloud Infrastructure甲骨文云基础设施

From our testing, OCI’s GPU experience is strong and consistently recognized as the most cost-effective among the four major Hyperscalers. Their GPU offerings come with a one-click UI deployment from the OCI marketplace called “ [OCI HPC stack](https://docs.oracle.com/en/solutions/deploy-nvidia-ai-on-oci-gvt-region/configure-hpc-cluster-stack-oracle-cloud-marketplace.html#GUID-DD03DBFF-0258-4669-9753-72930294287C) ” for both Slurm and monitoring. However, despite this impressive setup, OCI’s Slurm solution isn’t fully managed—it currently operates as a co-managed offering supported by one or two of OCI’s solution architects. To remain competitive, especially against AWS’s and CoreWeave’s comprehensive managed Slurm solutions (the latter having an exceptional node lifecycle controller and automated active health checks), we strongly recommend OCI invest in a fully managed “Oracle Managed Slurm (OMS)” offering, which would benefit the gamut of Oracle customers (sans OpenAI, due to their AGI safety policies).  
根据我们的测试，OCI 的 GPU 体验强劲，并且在四大超大规模云服务商中被一致认为是最具成本效益的。它们的 GPU 产品提供了一个来自 OCI 市场的“一键式 UI 部署”，称为“OCI HPC stack”，适用于 Slurm 和监控。然而，尽管这个设置令人印象深刻，OCI 的 Slurm 解决方案并不是完全托管的——它目前作为一个由 OCI 的一两个解决方案架构师支持的共同管理产品运行。为了保持竞争力，特别是针对 AWS 和 CoreWeave 的全面托管 Slurm 解决方案（后者拥有卓越的节点生命周期控制器和自动化的主动健康检查），我们强烈建议 OCI 投资于一个完全托管的“Oracle Managed Slurm (OMS)”产品，这将使 Oracle 的广大客户受益（不包括 OpenAI，因为他们的 AGI 安全政策）。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-22.5-Oracle-GIMP.png?resize=1024%2C919&ssl=1)

Source: Oracle 来源：甲骨文

In terms of monitoring, reliability, and passive health checks, OCI offers a decent solution through their Slurm HPC stack marketplace, complete with DCGM, Grafana monitoring, and passive health checks. Nevertheless, OCI currently lacks the option for advanced active health checks and automated node lifecycle management found in CoreWeave’s offerings, such as automated weekly scheduled active health checks (e.g., NCCL-tests, ib\_write\_bw, dcgm diag) and automatically marking the ones that are unhealthy. Oracle has confirmed that this functionality is already on their roadmap and is scheduled for completion in Q2. Another thing that is missing from OCI HPC stack offering for Slurm is the integrated with high speed parallel filesystems such as OCI’s Managed Lustre offering.  
在监控、可靠性和被动健康检查方面，OCI 通过其 Slurm HPC 堆栈市场提供了一个不错的解决方案，配备了 DCGM、Grafana 监控和被动健康检查。然而，OCI 目前缺乏 CoreWeave 提供的高级主动健康检查和自动节点生命周期管理的选项，例如自动每周调度的主动健康检查（例如，NCCL-tests、ib\_write\_bw、dcgm diag）以及自动标记不健康的节点。Oracle 已确认此功能已在其路线图上，并计划在第二季度完成。OCI HPC 堆栈在 Slurm 中的另一个缺失之处是与高速并行文件系统的集成，例如 OCI 的托管 Lustre 解决方案。

OCI also provides automated `topology.conf` configurations out of the box, enabling topology-aware scheduling that enhances network performance—an important feature still overlooked by many emerging GPU cloud providers.  
OCI 还提供开箱即用的自动化 `topology.conf` 配置，支持拓扑感知调度，提升网络性能——这是许多新兴 GPU 云服务提供商仍然忽视的重要特性。

Unlike GCP, OCI has been operating RoCE networks for quite a while now, even before the age of GenAI GPUs. They have a stacked bench of high-performance networking experts such as [Jag](https://blogs.oracle.com/cloud-infrastructure/post/first-principles-zettascale-oci-superclusters) and his team. Jag and his team can reason about networking from first principles, such as industry-wide link flapping being caused by DSP recalibration, while drawing on their decades of experience. From our testing, we noticed that OCI’s RoCEv2 networking is very competitive with Spectrum-X Ethernet, assuming you are on the right nccl version and have a custom OCI tuner plugin. Even though OCI uses Nvidia CX-7 NICs as part of their networking stack, we have noticed several small nccl tuner regressions on OCI clusters above nccl 2.21.5 even when on the same number of communication SMs. We will show the comprehensive benchmark results in up to 512 GPUs on OCI we ran on real-world message sizes in our upcoming nccl/rccl networking deep dive article.  
与 GCP 不同，OCI 已经运营 RoCE 网络相当长一段时间，甚至在 GenAI GPU 时代之前。他们拥有一支高性能网络专家团队，如 Jag 和他的团队。Jag 和他的团队能够从基本原理出发推理网络问题，例如行业范围内的链路抖动是由 DSP 重新校准引起的，同时借鉴他们数十年的经验。根据我们的测试，我们注意到 OCI 的 RoCEv2 网络在与 Spectrum-X 以太网的竞争中非常有优势，前提是您使用正确的 nccl 版本并且有自定义的 OCI 调谐插件。尽管 OCI 在其网络堆栈中使用 Nvidia CX-7 NIC，但我们注意到在 nccl 2.21.5 以上的 OCI 集群中，即使在相同数量的通信 SM 上，也出现了几个小的 nccl 调谐回归。我们将在即将发布的 nccl/rccl 网络深度分析文章中展示我们在 OCI 上运行的高达 512 个 GPU 的全面基准测试结果，测试真实世界消息大小。

We recommend to OCI that they work with the Nvidia NCCL team to ensure that there is proper regression testing on OCI clusters before the Nvidia NCCL team puts out a new nccl version release such that the out-of-the-box NCCL tuner will be able to have optimized performance on OCI.  
我们建议 OCI 与 Nvidia NCCL 团队合作，以确保在 Nvidia NCCL 团队发布新的 nccl 版本之前，对 OCI 集群进行适当的回归测试，以便开箱即用的 NCCL 调优器能够在 OCI 上实现优化性能。

Ultimately, OCI’s support and service teams stand out due to their technical expertise and customer-centric approach. Throughout our interactions, the OCI team consistently demonstrated deep technical expertise and a genuine commitment to customer success. Beyond GPUs, OCI is a Hyperscalers, which means it offers services such as databases, object storage, and CPU-based VMs for tasks like data processing or web scraping.  
最终，OCI 的支持和服务团队因其技术专长和以客户为中心的方式而脱颖而出。在我们的互动中，OCI 团队始终展现出深厚的技术专长和对客户成功的真诚承诺。除了 GPU，OCI 还是一个超大规模云服务提供商，这意味着它提供数据库、对象存储和基于 CPU 的虚拟机等服务，用于数据处理或网络爬虫等任务。

This comprehensive infrastructure eliminates the need for customers to transfer or stream data from other hyperscale providers to specialized GPU Neoclouds, resulting in significant operational efficiency and reduced complexity. Another notable advantage of going with a Hyperscaler is their approach to long-term customer engagements. Renting long-term compute resources often comes bundled with partnership opportunities for go-to-market (GTM) collaboration. These GTM partnerships have the potential to benefit customers by expanding their market reach within OCI’s extensive customer base. However, the actual effectiveness of these GTM partnerships can vary significantly depending on individual circumstances.  
这种综合基础设施消除了客户从其他超大规模提供商转移或流式传输数据到专用 GPU Neoclouds 的需求，从而显著提高了运营效率并减少了复杂性。选择超大规模提供商的另一个显著优势是他们对长期客户关系的处理。租用长期计算资源通常与市场推广（GTM）合作的伙伴关系机会捆绑在一起。这些 GTM 合作伙伴关系有潜力通过扩大客户在 OCI 广泛客户基础中的市场覆盖面来惠及客户。然而，这些 GTM 合作伙伴关系的实际效果可能会因个别情况而有显著差异。

Regarding security, OCI excels by providing top-notch, enterprise-grade standards, including robust tenant networking isolation, VLAN isolation on RoCEv2 fabrics, and PKEY isolation for InfiniBand fabrics. In contrast, many GPU-focused cloud providers lack even basic certifications like SOC2 or ISO27001 compliance or necessary network isolation protocols, making OCI a preferred choice for enterprises with stringent security requirements.  
在安全性方面，OCI 通过提供一流的企业级标准而表现出色，包括强大的租户网络隔离、RoCEv2 结构上的 VLAN 隔离以及 InfiniBand 结构上的 PKEY 隔离。相比之下，许多专注于 GPU 的云服务提供商甚至缺乏基本的认证，如 SOC2 或 ISO27001 合规性或必要的网络隔离协议，这使得 OCI 成为对安全要求严格的企业的首选。

## Azure

Azure offers a robust GPU cloud infrastructure, recognized for its exceptional networking performance. From our internal testing on clusters with up to 128 H100s, Azure demonstrated impressive capabilities, notably utilizing InfiniBand SHARP for efficient in-network reductions. This advanced networking setup makes Azure a top-tier option for high-performance, large-scale AI workloads, particularly suited to intensive multi-node training scenarios. In our upcoming NCCL/RCCL deep dive article, we will show real-world NCCL benchmarks with and without SHARP on Azure InfiniBand networking.  
Azure 提供了强大的 GPU 云基础设施，以其卓越的网络性能而闻名。在我们对最多 128 个 H100 的集群进行的内部测试中，Azure 展现了令人印象深刻的能力，特别是利用 InfiniBand SHARP 进行高效的网络内缩减。这种先进的网络设置使 Azure 成为高性能、大规模 AI 工作负载的顶级选择，特别适合于密集的多节点训练场景。在我们即将发布的 NCCL/RCCL 深度探讨文章中，我们将展示 Azure InfiniBand 网络上有无 SHARP 的实际 NCCL 基准测试。

Security is another standout strength for Azure. It holds an exceptional reputation for robust security and compliance practices, which has made it a trusted partner for government agencies, defense contractors, and leading AGI research labs such as OpenAI. Azure’s proven reliability at scale is evident in its successful management of massive GPU clusters, including support for OpenAI’s well-known deployments involving clusters of over 100,000 NVIDIA H100 GPUs, which highlights Azure’s ability to manage demanding and sensitive workloads securely. Note that OpenAI does complain a lot about Azure’s reliability for giant clusters, but OpenAI has extremely high standards for reliability since they have such giant clusters.  
安全是 Azure 的另一个突出优势。它在强大的安全性和合规性实践方面享有卓越的声誉，这使其成为政府机构、国防承包商和领先的 AGI 研究实验室（如 OpenAI）的可信合作伙伴。Azure 在大规模下的可靠性在其成功管理大规模 GPU 集群中得到了体现，包括支持 OpenAI 著名的部署，涉及超过 100,000 个 NVIDIA H100 GPU 的集群，这突显了 Azure 安全管理高要求和敏感工作负载的能力。请注意，OpenAI 确实对 Azure 在大型集群的可靠性有很多抱怨，但 OpenAI 对可靠性的标准极高，因为他们拥有如此庞大的集群。

For workload management, Azure offers CycleCloud, a user-friendly, web-based UI for deploying and managing Slurm clusters. CycleCloud includes basic health checks to enhance reliability and operational awareness. We look forward to doing a complete analysis of CycleCloud. However, compared to more advanced offerings like CoreWeave’s fully automated active and passive health-checking systems, Azure’s solution has room for improvement. We specifically recommend that Azure consider adopting practices similar to CoreWeave’s comprehensive approach, such as regular automated checks (including NCCL tests, ib\_write\_bw, and DCGM diagnostics), as well as automated node draining and replacement to improve overall reliability.  
对于工作负载管理，Azure 提供了 CycleCloud，这是一个用户友好的基于网络的 UI，用于部署和管理 Slurm 集群。CycleCloud 包括基本的健康检查，以增强可靠性和操作意识。我们期待对 CycleCloud 进行全面分析。然而，与 CoreWeave 的完全自动化主动和被动健康检查系统等更高级的产品相比，Azure 的解决方案还有改进的空间。我们特别建议 Azure 考虑采用类似于 CoreWeave 综合方法的做法，例如定期自动检查（包括 NCCL 测试、ib\_write\_bw 和 DCGM 诊断），以及自动节点排空和更换，以提高整体可靠性。

Additionally, Azure offers a managed Lustre parallel file system, which provides high-performance storage tailored specifically for large-scale HPC and AI workloads. This integrated, optimized storage solution ensures that data-intensive workloads can scale efficiently and reliably. To further enhance their offerings, Azure would benefit from adopting more extensive passive and active monitoring solutions like those implemented by industry-leading GPU cloud providers like CoreWeave, ensuring even higher reliability and improved performance monitoring for their users.  
此外，Azure 提供了一个托管的 Lustre 并行文件系统，专为大规模 HPC 和 AI 工作负载量身定制，提供高性能存储。这个集成的、优化的存储解决方案确保数据密集型工作负载能够高效且可靠地扩展。为了进一步增强其产品，Azure 可以借鉴行业领先的 GPU 云服务提供商如 CoreWeave 实施的更广泛的被动和主动监控解决方案，从而确保为用户提供更高的可靠性和改进的性能监控。

Azure’s Hyperscaler status ensures a unity of ecosystem – one doesn’t need to stream their data from elsewhere. Instead, it can be stored in Azure’s native Data Lake and Data Warehousing options. Further, renting long-term compute from Azure (or other Hyperscalers, for that matter) often comes with added ‘partnership’ benefits, with said Hyperscaler helping you sell your product to other Azure customers.  
Azure 的超大规模云服务状态确保了生态系统的统一——用户无需从其他地方流式传输数据。相反，数据可以存储在 Azure 的本地数据湖和数据仓库选项中。此外，从 Azure（或其他超大规模云服务提供商）租用长期计算资源通常会带来额外的“合作伙伴”福利，该超大规模云服务提供商会帮助您将产品销售给其他 Azure 客户。

## Together AI 一起人工智能

From our testing, Together AI stands out prominently in the GPU cloud provider market. While their cluster offering alone would typically qualify them as a ClusterMax™ Silver-level provider, what truly elevates them to ClusterMax™ Gold is their exceptional support and technical expertise. Together AI’s team, led by Tri Dao—the inventor of Flash Attention—and their Together Kernel Collection (TKC), significantly boost customer performance. We estimate that roughly 30-40% of their GPU cloud customers leverage TKC. We don’t believe the value created by Together can be replicated elsewhere without cloning Tri Dao. From our testing, we have verified that TKC boosts real-world performance for training and inference and that the Tri Dao kernels are genuinely a performance boost.  
根据我们的测试，Together AI 在 GPU 云服务提供商市场中脱颖而出。虽然他们的集群产品单独就足以使他们成为 ClusterMax™ 银级提供商，但真正将他们提升至 ClusterMax™ 金级的是他们卓越的支持和技术专长。Together AI 的团队由 Flash Attention 的发明者 Tri Dao 领导，他们的 Together Kernel Collection (TKC) 显著提升了客户的性能。我们估计大约 30-40% 的 GPU 云客户利用 TKC。我们认为，Together 创造的价值在没有克隆 Tri Dao 的情况下是无法复制的。根据我们的测试，我们已验证 TKC 提升了训练和推理的实际性能，并且 Tri Dao 内核确实是性能的提升。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-23.-Training-Gated-MLP-Perf-GIMP.png?resize=1024%2C548&ssl=1)

Source: Together AI 来源：Together AI

Even those not utilizing TKC greatly benefit from Tri Dao’s team’s consulting expertise in debugging, optimizing, and troubleshooting training workloads. This combination creates a genuinely full-service, supportive experience, going far beyond merely renting Kubernetes or Slurm-managed clusters. Their competitive pricing further enhances their appeal.  
即使是那些不使用 TKC 的人，也能从 Tri Dao 团队在调试、优化和故障排除训练工作负载方面的咨询专业知识中受益匪浅。这种组合创造了一个真正的全方位支持体验，远远超出了仅仅租用 Kubernetes 或 Slurm 管理的集群。他们具有竞争力的定价进一步增强了他们的吸引力。

Additionally, Together AI provides intuitive, user-friendly, managed Slurm and Kubernetes solutions directly accessible via their dashboard, [enabling deployment with just a few clicks](https://www.youtube.com/watch?v=J8vTTRi2GN4). As an NVIDIA portfolio company, Together AI also benefits from early access to new NVIDIA hardware, such as Blackwell GPUs, and collaborates closely with NVIDIA to develop optimized kernels tailored for next-generation GPUs.  
此外，Together AI 提供直观、用户友好的托管 Slurm 和 Kubernetes 解决方案，用户可以通过其仪表板直接访问，轻松实现几次点击即可部署。作为 NVIDIA 投资组合公司，Together AI 还受益于对新 NVIDIA 硬件（如 Blackwell GPU）的提前访问，并与 NVIDIA 紧密合作，开发针对下一代 GPU 优化的内核。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-24.-Review-Cluster-Details-GIMP.png?resize=1024%2C621&ssl=1)

Source: Together AI 来源：Together AI

However, there are areas for improvement. Together AI currently lacks the Pyxis plugin for container management in Slurm environments and does not offer robust passive health checks or weekly scheduled active health checks, leaving room for concerns regarding reliability. Their default Grafana dashboards are also basic compared to competitors.  
然而，仍有改进的空间。Together AI 目前缺乏在 Slurm 环境中用于容器管理的 Pyxis 插件，并且没有提供强大的被动健康检查或每周定期的主动健康检查，这使得可靠性方面存在一些担忧。他们的默认 Grafana 仪表板与竞争对手相比也显得基础。

We recommend that Together AI implement comprehensive health-check systems, similar to those offered by CoreWeave, along with richer, more detailed Grafana dashboards. Furthermore, since Together AI currently relies on infrastructure provided by other GPU cloud providers, such as Applied Digital or Crusoe, support resolution can be delayed due playing a game of broken telephone. Fortunately, this is set to improve significantly, as Together AI plans to deploy their hardware infrastructure within the year, eliminating the current reliance on external providers and streamlining issue resolution.  
我们建议 Together AI 实施全面的健康检查系统，类似于 CoreWeave 提供的系统，并提供更丰富、更详细的 Grafana 仪表板。此外，由于 Together AI 目前依赖于其他 GPU 云服务提供商（如 Applied Digital 或 Crusoe）提供的基础设施，支持问题的解决可能会因“打电话游戏”而延迟。幸运的是，这一情况预计将显著改善，因为 Together AI 计划在一年内部署其硬件基础设施，从而消除对外部提供商的当前依赖，并简化问题解决流程。

## LeptonAI

LeptonAI is the GPU cloud founded by the co-creators of PyTorch. LeptonAI does not own any GPUs but instead provides the ML Platform software layer for managing GPUs and health checks. They will claim to be your supercomputing team. You can either rent GPUs through them, where they rent GPUs from other providers, and LeptonAI adds their software + a couple of cents per GPU hour. Or you can rent your GPUs from Nebius, which offers great pricing, and then buy LeptonAI and support for a couple of cents per GPU hour to get the whole LeptonAI platform. LeptonAI bring big tech (Google, Meta, etc) ML platform experience to the broader world, making it accessible to everyday users. The engineers at LeptonAI clearly good at what they are doing and have a strong product sense for what their customers want.  
LeptonAI 是由 PyTorch 的共同创始人创立的 GPU 云。LeptonAI 不拥有任何 GPU，而是提供用于管理 GPU 和健康检查的 ML 平台软件层。他们声称是您的超级计算团队。您可以通过他们租用 GPU，他们从其他供应商那里租用 GPU，然后 LeptonAI 在每个 GPU 小时上加收几分钱的软件费用。或者您可以从 Nebius 租用 GPU，Nebius 提供很好的定价，然后以每个 GPU 小时几分钱的费用购买 LeptonAI 和支持，以获得整个 LeptonAI 平台。LeptonAI 将大型科技公司（如 Google、Meta 等）的 ML 平台经验带给更广泛的世界，使其对普通用户可访问。LeptonAI 的工程师显然擅长他们所做的事情，并对客户的需求有很强的产品敏感度。

For training, they offer a Slurm similar method of submitting jobs. For our testing, it took a couple minutes to patch our sbatch scripts to work on the LeptonAI platform. It was decently intuitive to switch to the LeptonAI ML Platform for training. LeptonAI should launch a fully sbatch superset API instead of just being similar to Slurm sbatch.  
在训练方面，他们提供类似 Slurm 的作业提交方法。在我们的测试中，修补我们的 sbatch 脚本以在 LeptonAI 平台上工作花了几分钟。切换到 LeptonAI ML 平台进行训练相当直观。LeptonAI 应该推出一个完全的 sbatch 超集 API，而不仅仅是类似于 Slurm sbatch。

In the LeptonAI platform, you can view the node lifecycle in their console dashboard and see what jobs and state each node is in. They have superior node lifecycle visualization, and the only company that has a better node lifecycle dashboard is CoreWeave.  
在 LeptonAI 平台上，您可以在其控制台仪表板中查看节点生命周期，并查看每个节点的作业和状态。他们具有卓越的节点生命周期可视化，唯一拥有更好节点生命周期仪表板的公司是 CoreWeave。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-25.-Lepton-AI-1-GIMP.png?resize=1024%2C423&ssl=1)

Source: LeptonAI 来源：LeptonAI

For passive health checks, LeptonAI runs gpud which is [their open sourced solution](https://github.com/leptonai/gpud/tree/main/pkg) for passive GPU health checks. It provides a comprehensive passive health check coverage for most of the passive health checks. This passive GPU check is still improving but it is a strong solution.  
对于被动健康检查，LeptonAI 运行 gpud，这是他们开源的被动 GPU 健康检查解决方案。它为大多数被动健康检查提供了全面的被动健康检查覆盖。这种被动 GPU 检查仍在改进中，但它是一个强大的解决方案。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-26.-Lepton-AI-2-GIMP.png?resize=1024%2C469&ssl=1)

Source: LeptonAI 来源：LeptonAI

LeptonAI also has manual active health checks such as DCGM diag and nccl-tests, but this is run manually through the UI dashboard, and it is not done automatically on a weekly scheduled basis like CoreWeave and LeptonAI do not provide reference numbers for what NCCL tests should be. We recommend that they implement an option for customers to opt-in to having automatically actively scheduled health checks. LeptonAI also does not have Megatron Loss convergence active health checks or have Nvidia TinyMeg2 SDC detector active health checks.  
LeptonAI 还具有手动主动健康检查，例如 DCGM diag 和 nccl-tests，但这是通过 UI 仪表板手动运行的，并不像 CoreWeave 那样每周定期自动进行，LeptonAI 也没有提供 NCCL 测试应该是什么的参考编号。我们建议他们实施一个选项，让客户选择自动主动安排健康检查。LeptonAI 也没有 Megatron Loss 收敛的主动健康检查或 Nvidia TinyMeg2 SDC 检测器的主动健康检查。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-27.-Lepton-AI-3-GIMP.png?resize=1024%2C503&ssl=1)

Source: LeptonAI 来源：LeptonAI

LeptonAI also has some beta features such as a box zero-impact NCCL profiler, which a customer can click a checkbox, and they can gain the full advantage of their custom in-house NCCL profiler to visualize collective bottlenecks and help their customers optimize network bottlenecks.  
LeptonAI 还具有一些测试功能，例如一个零影响的 NCCL 分析器，客户可以勾选一个复选框，从而充分利用他们自定义的内部 NCCL 分析器来可视化集体瓶颈，并帮助他们的客户优化网络瓶颈。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-28.-Lepton-AI-4-GIMP.png?resize=1024%2C488&ssl=1)

Source: LeptonAI 来源：LeptonAI

## ClusterMAX™ Sliver Tier GPU Providers

Providers rated at **ClusterMAX™ Silver** demonstrate adequate GPU cloud offerings with a satisfactory balance of performance, security, and value; however, they typically have more noticeable gaps compared to Gold- or Platinum-tier services. While these providers meet basic industry standards for reliability, security, and support, they may lack advanced orchestration integration, exhibit moderate networking performance, or have higher total cost of ownership (TCO) leading to higher prices for their customers. **ClusterMAX™ Silver** is receptive to customer and SemiAnalysis feedback and is actively seeking to improve their offerings to be competitive with ClusterMAX™ Platinum in the future.  
在 ClusterMAX™ Silver 级别的服务提供商展示了足够的 GPU 云服务，具有令人满意的性能、安全性和价值平衡；然而，与 Gold 或 Platinum 级别的服务相比，它们通常存在更明显的差距。虽然这些提供商满足可靠性、安全性和支持的基本行业标准，但它们可能缺乏高级编排集成，网络性能中等，或拥有更高的总拥有成本（TCO），导致客户价格更高。ClusterMAX™ Silver 对客户和 SemiAnalysis 的反馈持开放态度，并积极寻求改进其服务，以便在未来与 ClusterMAX™ Platinum 竞争。

## AWS

The chief complaint that we hear about AWS is that their networking is worse than InfiniBand and Spectrum-X Ethernet. This is true, and AWS has been working on it with their new p5en EFAv3 16x200GbE H200 instance, which they released in December 2024.  
我们听到的关于 AWS 的主要投诉是，他们的网络比 InfiniBand 和 Spectrum-X 以太网差。这是事实，AWS 一直在努力改善这一点，他们在 2024 年 12 月发布了新的 p5en EFAv3 16x200GbE H200 实例。

Their EFAv3 instances are much closer to InfiniBand/Spectrum-X performance on nccl-tests than were EFAv2 instances.  
他们的 EFAv3 实例在 nccl-tests 上的性能比 EFAv2 实例更接近 InfiniBand/Spectrum-X 的表现。

AWS’s P5 EFAv2 instance is 32x100GbE, which is worse than InfiniBand/Spectrum-X/RoCEv2 but better than the GCP a3-mega instance (8x200GbE) released in April 2024 from our nccl-tests testing. Our NCCL tests also show that their H100 p5 EFAv2 offering has better networking than GCP a3-mega, and their new H200 p5en EFAv3 (16x200GbE) offering has better networking than GCP a3-mega. GCP’s new h200 a3-ultra offering which was released to public in January 2025 which has 8x400GbE RoCEv2 ethernet has better networking performance than AWS’s new p5en EFAv3 offering. We will show the results and benchmarks we ran on real-world message sizes in our upcoming nccl/rccl networking deep dive article.  
AWS 的 P5 EFAv2 实例是 32x100GbE，这比 InfiniBand/Spectrum-X/RoCEv2 差，但比 2024 年 4 月发布的 GCP a3-mega 实例（8x200GbE）要好。我们的 NCCL 测试还显示，他们的 H100 p5 EFAv2 产品在网络性能上优于 GCP a3-mega，而他们的新 H200 p5en EFAv3（16x200GbE）产品在网络性能上也优于 GCP a3-mega。GCP 的新 h200 a3-ultra 产品于 2025 年 1 月向公众发布，具有 8x400GbE RoCEv2 以太网，其网络性能优于 AWS 的新 p5en EFAv3 产品。我们将在即将发布的 nccl/rccl 网络深度分析文章中展示我们在实际消息大小上运行的结果和基准测试。

AWS is not just a pure GPU cloud but also has all the other services of a cloud, such as Bigtable, databases, object storage, and parallel filesystem offering, which is needed for data proc and web scraping. By being a complete cloud, they mean you don’t need to copy (or stream) data from a “main Hyperscaler cloud,” where data processing is done, to a new cloud cluster; all your data is already there. Renting long-term computing from a Hyperscaler often comes with the added benefit of a “partnership” and partnering on Go to market, where AWS helps you sell to enterprises and other AWS customers. Whether the GTM partnership is effective really depends.  
AWS 不仅仅是一个纯 GPU 云，还拥有云的所有其他服务，如 Bigtable、数据库、对象存储和并行文件系统，这些都是数据处理和网络爬虫所需的。作为一个完整的云，他们的意思是您不需要将数据从“主 Hyperscaler 云”复制（或流式传输）到新的云集群；您的所有数据已经在那里。从 Hyperscaler 租用长期计算通常还带来了“合作伙伴关系”的额外好处，并在市场推广方面进行合作，AWS 帮助您向企业和其他 AWS 客户销售。GTM 合作伙伴关系的有效性真的取决于具体情况。

AWS also offers a managed Lustre parallel filesystem called FSX for posix cluster-wide networked storage. For object storage, they have their famous S3 object-managed storage services too.  
AWS 还提供了一种名为 FSX 的托管 Lustre 并行文件系统，用于 POSIX 集群范围的网络存储。对于对象存储，他们也有著名的 S3 对象管理存储服务。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-29.-AWS-Cluster-GIMP.png?resize=890%2C608&ssl=1)

Source: AWS 来源：AWS

AWS provides a managed Slurm and Kubernetes offering named Hyperpod, which significantly simplifies cluster setup. They offer an UI dashboard for setup and easy-to-follow instructions for setting up their managed offering.  
AWS 提供了一种名为 Hyperpod 的托管 Slurm 和 Kubernetes 解决方案，显著简化了集群设置。他们提供了一个用于设置的 UI 仪表板和易于遵循的说明，以便设置他们的托管服务。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-30.-AWS-SageMaker-GIMP.png?resize=1024%2C349&ssl=1)

Source: AWS 来源：AWS

Hyperpod includes basic passive and basic active health checks, and it also integrates straightforward Grafana dashboards for monitoring system health. Unfortunately, out of the box they are missing automated active health checks such as nccl-tests and Nvidia’s tinymeg2 SDC detector and running Megatron convergence tests weekly.  
Hyperpod 包含基本的被动和主动健康检查，并且它还集成了简单的 Grafana 仪表板用于监控系统健康。不幸的是，开箱即用时缺少自动化的主动健康检查，例如 nccl-tests 和 Nvidia 的 tinymeg2 SDC 检测器，以及每周运行 Megatron 收敛测试。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-31.-AWS-healthcheck-GIMP.png?resize=1024%2C355&ssl=1)

Source: AWS 来源：AWS

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-32.-AWS-SageMaker2-GIMP.png?resize=1024%2C543&ssl=1)

Source: AWS 来源：AWS

To enhance their service further, AWS should continue investing in networking improvements and consider having as a default for out-of-the-box or simple checkbox for end customers to opt into advanced passive and active automated weekly scheduled health check strategies akin to those utilized by CoreWeave.  
为了进一步提升服务，AWS 应继续投资于网络改进，并考虑将高级被动和主动自动每周定期健康检查策略作为默认选项，或为最终客户提供简单的复选框，以便选择类似于 CoreWeave 所采用的策略。

## Lambda Labs

Lambda Labs is highly regarded as a go-to provider for on-demand GPU instances, primarily due to their exceptional user interface and intuitive console experience, especially their seamless JupyterLab integration. Despite the availability of other providers, such as Nebius offering H100 SXM GPUs at half the price, Lambda remains popular for on-demand GPU instances due to other offerings having poor UX or security. Lambda Labs offers H100 SXM at $2.99/hr/GPU, and they typically set the market rate for on-demand offerings due to their high on-demand volume. When Lambda Labs lowers or raises its on-demand offering price, the rest typically do the same.  
Lambda Labs 被广泛认为是按需 GPU 实例的首选供应商，主要由于其卓越的用户界面和直观的控制台体验，尤其是其无缝的 JupyterLab 集成。尽管还有其他供应商，例如 Nebius 提供的 H100 SXM GPU 价格仅为一半，但由于其他供应商的用户体验或安全性较差，Lambda 仍然因按需 GPU 实例而受到欢迎。Lambda Labs 提供 H100 SXM 的价格为每小时每个 GPU 2.99 美元，通常由于其高按需量而设定按需产品的市场价格。当 Lambda Labs 降低或提高其按需产品价格时，其他供应商通常也会这样做。

Users have also expressed interest in broader base image choices beyond the standard Lambda stack base image for their on demand offering. Lots of users and SemiAnalysis’s own testing have shown that the on-demand instance boot times are excessively long, typically around 30 minutes. For comparison, Crusoe’s H100 SXM instance offers a boot up in less than 90 seconds. This should be the bar that Lambda Labs aims for. Additionally, Lambda’s default on-demand instances incorrectly set the CUDA toolkit and CLI tool paths to /usr/bin/nvcc instead of the industry-standard /usr/local/cuda/bin/nvcc, causing compatibility issues with many open-source repositories. We have spoken with the team at Lambda Labs, and they are committed to reducing the boot time of their on-demand instances.  
用户们还表示希望在其按需服务中有更广泛的基础镜像选择，而不仅限于标准的 Lambda 堆栈基础镜像。许多用户和 SemiAnalysis 自己的测试表明，按需实例的启动时间过长，通常约为 30 分钟。相比之下，Crusoe 的 H100 SXM 实例的启动时间不到 90 秒。这应该是 Lambda Labs 的目标。此外，Lambda 的默认按需实例错误地将 CUDA 工具包和 CLI 工具路径设置为/usr/bin/nvcc，而不是行业标准的/usr/local/cuda/bin/nvcc，导致与许多开源库的兼容性问题。我们与 Lambda Labs 的团队进行了沟通，他们致力于减少按需实例的启动时间。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-33.-Lambda-Labs-1-GIMP.png?resize=1024%2C462&ssl=1)

Source: Lambda Labs, SemiAnalysis  
来源：Lambda Labs，SemiAnalysis

Lambda Labs also provides managed Kubernetes services, greatly simplifying container orchestration for users. Their managed Kubernetes offering features an out-of-the-box console UI and Grafana monitoring dashboards for viewing node and GPU metrics. Furthermore, they provide out-of-the-box scripts for nccl-tests for end customers to verify their networking performance. They also offer Vast Data based high-speed parallel filesystem for networked storage.  
Lambda Labs 还提供托管的 Kubernetes 服务，极大简化了用户的容器编排。他们的托管 Kubernetes 解决方案具有开箱即用的控制台 UI 和 Grafana 监控仪表板，用于查看节点和 GPU 指标。此外，他们还提供开箱即用的 nccl-tests 脚本，供最终客户验证其网络性能。他们还提供基于 Vast Data 的高速并行文件系统，用于网络存储。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-33.-Lambda-Labs-2-GIMP.png?resize=1024%2C549&ssl=1)

Source: Lambda Labs 来源：Lambda Labs

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-33.-Lambda-Labs-3-GIMP.png?resize=1024%2C560&ssl=1)

Source: Lambda Labs 来源：Lambda Labs

However, their current Slurm offering is unmanaged and, from our testing, is not good. They lack the Pyxis Slurm plugin and a lot of other Slurm features. Fortunately, Lambda is actively developing a managed Slurm solution, which is expected to improve the user experience significantly.  
然而，他们目前的 Slurm 解决方案是未管理的，并且根据我们的测试，表现不佳。他们缺少 Pyxis Slurm 插件和许多其他 Slurm 功能。幸运的是，Lambda 正在积极开发一个托管的 Slurm 解决方案，预计将显著改善用户体验。

However, Lambda still lacks several essential features, such as automated passive and active health checks, and its metrics dashboard currently omits crucial GPU metrics that are found in competitor solutions, like CoreWeave. We recommend to Lambda Labs that they look into what CoreWeave has for passive and active health checks and implement a metrics dashboard comparable to CoreWeave’s fantastic out of the box Grafana dashboard.  
然而，Lambda 仍然缺乏几个重要功能，例如自动的被动和主动健康检查，并且其指标仪表板目前省略了在竞争对手解决方案（如 CoreWeave）中发现的关键 GPU 指标。我们建议 Lambda Labs 研究 CoreWeave 在被动和主动健康检查方面的做法，并实施一个与 CoreWeave 出色的开箱即用 Grafana 仪表板相当的指标仪表板。

## Firmus/Sustainable Metal CloudFirmus/可持续金属云

SMC is the AI cloud and GPU service provider of Australian-Singaporean sustainable AI Factory builder, Firmus Technologies. They offer Slurm and Kubernetes scheduling solutions, including Pyxis for containerized workloads, and utilize WEKA’s high-performance storage platform to support large-scale AI applications. From our testing, it’s a fairly decent offering.  
SMC 是澳大利亚-新加坡可持续 AI 工厂建设者 Firmus Technologies 的 AI 云和 GPU 服务提供商。他们提供 Slurm 和 Kubernetes 调度解决方案，包括用于容器化工作负载的 Pyxis，并利用 WEKA 的高性能存储平台来支持大规模 AI 应用。从我们的测试来看，这是一项相当不错的服务。

In the MLPerf Training v4.0 benchmarks, SMC demonstrated impressive performance by training the GPT-3 175B model. Additionally, SMC has submitted verified MLPerf power consumption results, confirming that H100 immersion cooling consumes less power than comparable air-cooled GPU solutions. They claim that this savings of power translates to lower TCO, and they claim that due to their lower TCO, it translates to lower prices for their customers.  
在 MLPerf Training v4.0 基准测试中，SMC 通过训练 GPT-3 175B 模型展示了令人印象深刻的性能。此外，SMC 还提交了经过验证的 MLPerf 功耗结果，确认 H100 浸没冷却的功耗低于可比的空气冷却 GPU 解决方案。他们声称，这种节能转化为更低的总拥有成本（TCO），并且由于他们的 TCO 较低，转化为客户更低的价格。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/04/SMC-new-image.jpg?resize=1600%2C1066&ssl=1)

Source: SMC 来源：SMC

They are one of the few clouds besides CoreWeave and Azure to have InfiniBand SHARP in network reductions enabled and have shown us through nccl-tests that their networking performance is superior. But none of their customers are technical experts, so their customers haven’t used it as SHARP requires tuning on the customer’s application level, too. They have shared nccl-tests without SHARP enabled and have shown competitive results for that too.  
他们是除了 CoreWeave 和 Azure 之外为数不多的启用 InfiniBand SHARP 网络缩减的云服务提供商，并通过 nccl-tests 向我们展示了他们的网络性能优越。但他们的客户都不是技术专家，因此他们的客户没有使用它，因为 SHARP 还需要在客户的应用层进行调优。他们分享了未启用 SHARP 的 nccl-tests，并且也展示了竞争力的结果。

A concern noted is that SMC’s GPUs operate approximately 10 degrees warmer under load than comparable properly deployed air-cooled offerings due to the use of air-cooled heatsinks in their immersion environment, leading to a 1-2% performance reduction. Despite this, SMC asserts that their pricing more than compensates for this minor performance loss, offering better performance per TCO. They are exploring the adoption of immersion-specific heatsinks to address this issue.  
一个注意到的问题是，SMC 的 GPU 在负载下的工作温度比可比的适当部署的空气冷却产品高出大约 10 度，这主要是由于在其浸没环境中使用了空气冷却散热器，导致性能降低 1-2%。尽管如此，SMC 仍然声称其定价足以弥补这一小幅性能损失，提供更好的每单位总拥有成本的性能。他们正在探索采用专门针对浸没环境的散热器来解决这个问题。

Currently, SMC lacks self-service deployment options for Slurm and Kubernetes, relying on SMC own engineers to assist with setup. It is recommended that they develop a user interface or command-line interface for streamlined deployment. Additionally, implementing automated passive health checks and automated weekly scheduled active health checks, similar to those used by CoreWeave, would enhance system reliability. The absence of basic Grafana dashboards for monitoring GPU temperatures and activity is another area for improvement, and adopting CoreWeave’s out-of-the-box monitoring solutions could be beneficial.  
目前，SMC 缺乏 Slurm 和 Kubernetes 的自助部署选项，依赖于 SMC 自己的工程师来协助设置。建议他们开发一个用户界面或命令行界面，以简化部署。此外，实施自动被动健康检查和每周定期的自动主动健康检查，类似于 CoreWeave 使用的方式，将增强系统的可靠性。缺乏用于监控 GPU 温度和活动的基本 Grafana 仪表板是另一个改进的领域，采用 CoreWeave 的现成监控解决方案可能会带来好处。

SMC has shown receptiveness to customer and SemiAnalysis feedback, actively considering these recommendations to enhance their offerings and remain competitive in the AI cloud services market.  
SMC 对客户和 SemiAnalysis 的反馈表现出开放态度，积极考虑这些建议以增强其产品并在 AI 云服务市场中保持竞争力。

## Scaleway

From our testing, Scaleway offers robust Slurm and Kubernetes solutions, complemented by a high-performance, managed file system powered by VAST Data. This integration ensures scalable and efficient data management for AI and HPC workloads. During our testing, we observed that Scaleway supports NVIDIA’s Pyxis plugin, which enables seamless container integration within Slurm. Their technical team demonstrates a strong understanding of these technologies.  
根据我们的测试，Scaleway 提供强大的 Slurm 和 Kubernetes 解决方案，并配备由 VAST Data 提供支持的高性能托管文件系统。此集成确保了 AI 和 HPC 工作负载的可扩展和高效的数据管理。在我们的测试中，我们观察到 Scaleway 支持 NVIDIA 的 Pyxis 插件，该插件实现了 Slurm 中无缝的容器集成。他们的技术团队对这些技术表现出深刻的理解。

As a GDPR-compliant provider and an NVIDIA NCP partner, Scaleway emphasizes data privacy and leverages cutting-edge GPU technology. However, their use of gold-plated DGX Hopper chassis results in a higher total cost of ownership (TCO). This increased cost is often passed on to customers. We recommend that Scaleway explore OEM alternatives, such as Dell or Supermicro HGX SKUs, or consider ODM chassis options, which can deliver the same performance at a reduced cost. Note that it is not recommended to buy gold-plated chassis to be an NVIDIA NCP partner.  
作为符合 GDPR 的供应商和 NVIDIA NCP 合作伙伴，Scaleway 强调数据隐私并利用尖端的 GPU 技术。然而，他们使用镀金的 DGX Hopper 机箱导致总拥有成本 (TCO) 较高。这一增加的成本通常会转嫁给客户。我们建议 Scaleway 探索 OEM 替代方案，如 Dell 或 Supermicro HGX SKU，或考虑 ODM 机箱选项，这可以以降低的成本提供相同的性能。请注意，不建议购买镀金机箱以成为 NVIDIA NCP 合作伙伴。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-35.-Scaleway-GIMP.png?resize=640%2C354&ssl=1)

Source: Scaleway 来源：Scaleway

Currently, Scaleway lacks self-service deployment options for Slurm and Kubernetes. Although their engineers assist with deployments, implementing a UI or CLI tool for self-service would enhance user experience. Additionally, the absence of automated passive health checks and automated weekly scheduled active health checks is unfortunate. We suggest that Scaleway examine CoreWeave’s approach to health checks and consider adopting similar practices.  
目前，Scaleway 缺乏 Slurm 和 Kubernetes 的自助部署选项。尽管他们的工程师会协助部署，但实施自助服务的 UI 或 CLI 工具将提升用户体验。此外，缺乏自动被动健康检查和自动每周定期主动健康检查是令人遗憾的。我们建议 Scaleway 研究 CoreWeave 的健康检查方法，并考虑采用类似的做法。

Furthermore, Scaleway does not provide basic Grafana dashboards for monitoring GPU metrics such as temperature and SM activity. Implementing these dashboards would offer valuable insights into system performance. Encouragingly, Scaleway has been receptive to customer and SemiAnalysis feedback, actively seeking to address these gaps and enhance their offerings.  
此外，Scaleway 并未提供用于监控 GPU 指标（如温度和 SM 活动）的基本 Grafana 仪表板。实施这些仪表板将为系统性能提供有价值的见解。令人鼓舞的是，Scaleway 对客户和 SemiAnalysis 的反馈持开放态度，积极寻求解决这些问题并增强其产品。

## ClusterMAX™ Bronze Tier GPU ProvidersClusterMAX™ 铜级 GPU 供应商

The **ClusterMAX™ Bronze** tier includes GPU cloud providers that fulfill minimum essential criteria but consistently exhibit significant shortcomings in key evaluation areas. Common issues may include inconsistent technical expertise or support, subpar networking performance, unclear SLAs, limited integration with popular tools like Kubernetes or Slurm, or less competitive pricing. Providers in this category typically need considerable improvements to enhance reliability and customer experience. Another reason that GPU providers land themselves in this tier is if they have provided subpar solutions for the past couple of years  
ClusterMAX™ 铜级包括满足最低基本标准但在关键评估领域持续表现出显著不足的 GPU 云服务提供商。常见问题可能包括技术专长或支持不一致、网络性能不佳、服务水平协议不明确、与 Kubernetes 或 Slurm 等流行工具的集成有限，或定价竞争力较差。此类别的提供商通常需要进行重大改进，以增强可靠性和客户体验。GPU 提供商落入此级别的另一个原因是他们在过去几年中提供了不合格的解决方案。

Some of the providers in this category are already making considerable effort to catch up. Google Cloud is one such example – and we believe GCP and some other providers are already on a fast path towards ClusterMAX™ Platinum/Gold by our next ClusterMAX™ exercise in 3-6 months.  
此类别中的一些提供商已经在努力追赶。谷歌云就是一个这样的例子——我们相信 GCP 和其他一些提供商在接下来的 3-6 个月内，已经在快速迈向 ClusterMAX™ 白金/黄金级别。

For the longest time, GCP has provided inferior GPU offerings with worse networking and worse out of the box features. It has been in “catchup” mode since April 2024. Many customers have complained about their GPU offerings, but Google Cloud Platform (GCP) is taking in feedback, rapidly improving, and trying to catch up to its competition.  
长期以来，GCP 提供的 GPU 产品质量较差，网络性能更差，开箱即用的功能也较差。自 2024 年 4 月以来，它一直处于“追赶”模式。许多客户对他们的 GPU 产品表示不满，但谷歌云平台（GCP）正在接受反馈，迅速改进，并努力赶上竞争对手。

To provide historical context, their first H100 offering, called “a3-high,” was [released in August 2023](https://cloud.google.com/blog/products/compute/announcing-cloud-tpu-v5e-and-a3-gpus-in-ga) and featured 800Gbit/s “Fastrak TCP” networking bandwidth per node. At that time, Oracle, Microsoft, all Neocloud giants, and most Emerging Neoclouds were offering 3200Gbit/s of on-paper networking speeds. This means GCP had 25% of the networking bandwidth compared to their competitors. Most of the GCP customers that used a3-high were not very happy. We will call this phase of GCP’s GPU journey the “not good at all phase.”  
为了提供历史背景，他们的第一款 H100 产品，名为“a3-high”，于 2023 年 8 月发布，每个节点的网络带宽为 800Gbit/s 的“Fastrak TCP”。当时，Oracle、Microsoft、所有 Neocloud 巨头以及大多数新兴 Neocloud 都提供 3200Gbit/s 的纸面网络速度。这意味着 GCP 的网络带宽仅为竞争对手的 25%。使用 a3-high 的 GCP 客户大多并不满意。我们将 GCP 的 GPU 旅程的这一阶段称为“完全不好的阶段”。

Google recognized this feedback from customers and [in April 2024](https://cloud.google.com/blog/products/compute/whats-new-with-google-clouds-ai-hypercomputer-architecture) they released their second and improved H100 offering called “a3-mega”, which doubles networking bandwidth per node from 800Gbit/s to 1600Gbit/s “Fastrak TCP”. While this was a significant improvement, it is still 50% slower than its competitors, such as Oracle, Microsoft, CoreWeave, and AWS.  
Google 认识到客户的反馈，并在 2024 年 4 月发布了第二款改进版 H100 产品，名为“a3-mega”，将每个节点的网络带宽从 800Gbit/s 提升至 1600Gbit/s 的“Fastrak TCP”。虽然这是一个显著的改进，但仍比 Oracle、Microsoft、CoreWeave 和 AWS 等竞争对手慢 50%。

According to our NCCL tests, they are twice as slow as their competitors on real-world message sizes. On end-to-end training performance, by being twice as slow on networking nccl performance, it translates to 10% worse MFU on O(Llama 70B) size training and 15-20% worse on MFU of O(8x7B) mixture of experts spare models. For the longest time, this offering did not have LL128 nccl protocol, leading to even worse training and nccl networking performance and required the end user to set complex env vars to get their NCCL net/tuner plugin to work. Furthermore, their Slurm recipe was buggy and hard to set up. We will refer to this as the “catch-up phase,” where GCP is clearly trying to improve, but it is still not yet on par with its competitors.  
根据我们的 NCCL 测试，它们在实际消息大小上比竞争对手慢两倍。在端到端训练性能方面，由于在网络 NCCL 性能上慢两倍，这导致 O(Llama 70B) 大小训练的 MFU 差 10%，而 O(8x7B) 专家稀疏模型的 MFU 差 15-20%。很长一段时间以来，这个产品没有 LL128 NCCL 协议，导致训练和 NCCL 网络性能更差，并且需要最终用户设置复杂的环境变量才能使他们的 NCCL net/tuner 插件正常工作。此外，他们的 Slurm 配方存在错误且难以设置。我们将把这称为“追赶阶段”，在这个阶段，GCP 显然在努力改进，但仍未达到与竞争对手的水平。

GCP continues to gather customer feedback, and in [January 2025](https://cloud.google.com/blog/products/compute/a3-ultra-with-nvidia-h200-gpus-are-ga-on-ai-hypercomputer), they launched their a3-ultra instance, which finally offers 3200Gbit/s of RDMA Ethernet networking with ConnectX-7 NICs per node, effectively increasing the networking bandwidth per node. This update brings GCP closer to matching the capabilities of its competitors, including Oracle, Microsoft, and CoreWeave.  
GCP 继续收集客户反馈，并在 2025 年 1 月推出了他们的 a3-ultra 实例，最终提供每个节点 3200Gbit/s 的 RDMA 以太网网络，配备 ConnectX-7 网卡，有效提高了每个节点的网络带宽。此更新使 GCP 更接近于匹配其竞争对手的能力，包括 Oracle、Microsoft 和 CoreWeave。

In practice, they are still not quite on par with real-world NCCL collective networking, which we will explain more about below. With this new a3-ultra SKU, they have moved from TCP to RDMA over Ethernet. As most people are aware, RDMA is often chosen as the collective network protocol over TCP due to its lower latency and higher AI collective performance. We are glad that GCP finally moved towards a more industry networking setup for GPUs, but this comes late and 18 months after their competitors launched their 3200Gbit/s RDMA networking offerings. We will refer to this as the “ **almost caught up”** phase. Note that currently the majority of their customers and their GPU fleet are A3-Mega, which means that the majority of their customers are still experiencing subpar networking and have anywhere from 10-20% worse performance when using A3-Mega.  
在实践中，它们仍然与现实世界的 NCCL 集体网络不完全相当，我们将在下面进一步解释。通过这个新的 a3-ultra SKU，它们已经从 TCP 转向了以太网上的 RDMA。正如大多数人所知，RDMA 通常被选择作为集体网络协议，而不是 TCP，因为它具有更低的延迟和更高的 AI 集体性能。我们很高兴 GCP 终于朝着更符合行业标准的 GPU 网络设置迈进，但这来得太晚，距离他们的竞争对手推出 3200Gbit/s RDMA 网络产品已经过去了 18 个月。我们将其称为“几乎赶上”阶段。请注意，目前他们的大多数客户和 GPU 队列都是 A3-Mega，这意味着他们的大多数客户仍然在经历不理想的网络，并且在使用 A3-Mega 时性能下降了 10-20%。

By mid-2025, GCP will be making their latest A4 B200 and A4X GB200 instances generally available, which will be competitive on paper with AWS, Azure, OCI, and the other Neoclouds that will offer 400Gbit/s per GPU. GCP will also continue to improve and launch new software features, which will be setting industry standards. We will call this **“setting the bar” phase**.  
到 2025 年中，GCP 将推出最新的 A4 B200 和 A4X GB200 实例，届时将普遍可用，这在纸面上将与 AWS、Azure、OCI 及其他提供每个 GPU 400Gbit/s 的 Neoclouds 竞争。GCP 还将继续改进并推出新的软件功能，这将设定行业标准。我们将称之为“设定标准”阶段。

Due to the subpar experience and performance of A3-High and A3-Mega, they have lost a significant amount of customer confidence in their product, which will take time to regain. We believe that by mid 2025 that GCP will finish “catching up” and will soon be raising the bar across the industry and regaining customer confidence. We believe that Google GPU offering could lead towards a ClusterMAX™ Gold or ClusterMAX™ Platinum tier GPU cloud.  
由于 A3-High 和 A3-Mega 的体验和性能不佳，他们在产品上的客户信任度大幅下降，这需要时间来恢复。我们相信到 2025 年中，GCP 将完成“追赶”，并很快将在整个行业中提升标准，恢复客户信任。我们认为 Google 的 GPU 产品可能会朝着 ClusterMAX™ Gold 或 ClusterMAX™ Platinum 级别的 GPU 云发展。

In January 2025, we reached out to Google, showing them our NCCL performance tests and a list of all the customer complaints and feedback GCP customers were telling us. The GCP team was quite receptive to the feedback and is working quickly to address it.  
在 2025 年 1 月，我们联系了谷歌，向他们展示了我们的 NCCL 性能测试以及 GCP 客户向我们反馈的所有客户投诉和意见。GCP 团队对这些反馈非常积极，并迅速采取措施进行解决。

The first feedback they acknowledge is the subpar networking performance of A3-High and A3-Mega, which comprise the majority of their GPU fleet. They are working on addressing this with the launch of a3-ultra, which comes with the industry-standard 3200Gbit/s of RDMA bandwidth per node. For their upcoming A4 B200 and A4X GB200 offerings, it will be competitive on paper in terms of speeds with other B200 and GB200 offerings in the industry.  
他们承认的第一个反馈是 A3-High 和 A3-Mega 的网络性能不佳，这两者占据了他们 GPU 机队的大部分。他们正在通过推出 a3-ultra 来解决这个问题，该产品每个节点提供行业标准的 3200Gbit/s RDMA 带宽。对于他们即将推出的 A4 B200 和 A4X GB200 产品，在速度方面将与行业内其他 B200 和 GB200 产品在纸面上具有竞争力。

A3-mega instances were also lacking LL128 protocol, which meant that their real-world NCCL performance for real-world message sizes was degraded. In January 2025, they released a fix to all of their customers enabling LL128 protocol on a3-mega. A3-ultra comes out of the box with LL128 NCCL protocol, so it was great to see the improvements in their newer SKUs. A3-ultra still has slightly worse performance than OCI Ethernet and Azure InfiniBand, but on end-to-end training performance, GCP is only 1-2% MFU less than a comparable InfiniBand reference offering. Note that each rail group size for GCP a3-ultra is still only 4 nodes, versus on OCI, Azure and most Neoclouds, it is 32 nodes. This means it will take more hops to do collectives leading to more congestion and slower performance. We will explain this more in our NCCL deep dive article. For a3-mega, they are currently still missing NVLSTree NCCL algorithm. NVLSTree NCCL algo allows for faster networking collective performance by utilizing the NVLS functions in the NVSwitch for multi-node performance. They are currently working on implementing it. For a3-ultra, they have NVLSTree & NVLS & RING & TREE & PAT algorithm support out of the box so it was good to see that GCP is shipping fully functioning products in their latest SKU. In our upcoming NCCL/RCCL deep dive article, we will show the performance benchmarks we conducted across GCP instances and how that compares to other offerings.  
A3-mega 实例也缺少 LL128 协议，这意味着它们在实际消息大小下的 NCCL 性能下降。2025 年 1 月，他们向所有客户发布了修复，使 a3-mega 启用 LL128 协议。A3-ultra 开箱即用 LL128 NCCL 协议，因此看到他们新 SKU 的改进非常好。A3-ultra 的性能仍然略逊于 OCI Ethernet 和 Azure InfiniBand，但在端到端训练性能上，GCP 仅比可比的 InfiniBand 参考产品低 1-2% MFU。请注意，GCP a3-ultra 的每个轨道组大小仍然只有 4 个节点，而在 OCI、Azure 和大多数 Neoclouds 上则为 32 个节点。这意味着进行集体操作需要更多的跳数，从而导致更多的拥堵和更慢的性能。我们将在我们的 NCCL 深度分析文章中对此进行更多解释。对于 a3-mega，他们目前仍然缺少 NVLSTree NCCL 算法。NVLSTree NCCL 算法通过利用 NVSwitch 中的 NVLS 函数来实现更快的网络集体性能，以支持多节点性能。他们目前正在努力实施它。 对于 a3-ultra，他们开箱即用地支持 NVLSTree、NVLS、RING、TREE 和 PAT 算法，因此看到 GCP 在其最新 SKU 中提供完全功能的产品是很好的。在我们即将发布的 NCCL/RCCL 深度分析文章中，我们将展示我们在 GCP 实例上进行的性能基准测试，以及这些测试与其他产品的比较。

From talking to GCP customers, all of them complained about the activation energy needed to properly set NCCL environment variables and correctly link the GCP network/tuner plugin and debug it to ensure it hours. This wastes expensive GPU time while their customers debug their NCCL env vars versus on Azure and OCI; NCCL works out of the box. GCP acknowledged this feedback and is looking into how they can make this experience smoother. The next thing that customers have complained about is that GCP does not automatically use [slurm topology.conf](https://slurm.schedmd.com/topology.html) for Slurm topology-aware scheduling but instead makes the user do the topology ordering in their sbatch script instead. GCP has addressed this feedback and implemented the fix this year.  
从与 GCP 客户的交谈中，所有人都抱怨需要激活能量来正确设置 NCCL 环境变量，并正确链接 GCP 网络/调谐器插件并调试，以确保其正常运行。这浪费了昂贵的 GPU 时间，而他们的客户在调试 NCCL 环境变量时与 Azure 和 OCI 相比，NCCL 是开箱即用的。GCP 认可了这一反馈，并正在研究如何使这一体验更加顺畅。客户抱怨的下一个问题是 GCP 不会自动使用 slurm topology.conf 进行 Slurm 拓扑感知调度，而是让用户在他们的 sbatch 脚本中进行拓扑排序。GCP 已经解决了这一反馈，并在今年实施了修复。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-36.-GCP-GIMP.png?resize=1024%2C537&ssl=1)

Source: GCP 来源：GCP

The third feedback from GCP customers is that they currently don’t have a fully managed Slurm offering. GCP acknowledged this feedback and are actively working on investigating this. GCP currently has Cluster Toolkit which many customers use for their clusters but it currently does not have a GUI based option for setting up and is not managed and does not have options for setting up out of the box scheduled automated weekly active health checks. While Cluster Toolkit is a massive improvement over what they had 6 months for unmanaged Slurm recipe, it is still missing many features such as being managed.  
GCP 客户的第三个反馈是，他们目前没有完全托管的 Slurm 服务。GCP 承认了这一反馈，并正在积极调查此事。GCP 目前有集群工具包，许多客户使用它来管理他们的集群，但它目前没有基于 GUI 的设置选项，并且不是托管的，也没有开箱即用的定期自动健康检查的设置选项。虽然集群工具包相比于 6 个月前的非托管 Slurm 配方有了巨大的改进，但仍然缺少许多功能，例如托管。

The fourth feedback from GCP customers, which GCP acknowledges, is that they are improving their customer technical support by assigning an engineer in charge to be responsible for the entire lifecycle of the customer and their tickets, from creation to resolution. Currently, GCP just sends a bunch of people to hop on a call, but what customers want is just one of their subject matter engineers to “own” the issue from triage to hotfix to long-term resolution. The issue of “having dozens of product managers and engineers” hopping on a call to customers is not just exclusive to GCP’s GPU offering but is a Google-wide issue that they need to address.  
GCP 客户的第四条反馈，GCP 认可这一点，即他们通过指派一名负责整个客户生命周期及其工单的工程师来改善客户技术支持，从创建到解决。目前，GCP 只是派一堆人参加电话会议，但客户希望的是他们的主题专家工程师能够“拥有”从初步筛选到热修复再到长期解决方案的问题。“让数十名产品经理和工程师”参加客户电话会议的问题不仅仅是 GCP 的 GPU 产品所独有，而是 Google 需要解决的一个全公司范围内的问题。

Note that most of Google’s internal teams are doing GenAI training and inferencing on TPUs; as such, the GCP GPU experience is not the same as the internal Google ML infra experience. One of the few internal Google teams that utilizes cloud GPUs is DeepMind’s Isomorphic Labs. Although there is a tight back loop between GCP’s customers and GCP’s solution architect team that does dogfooding, it is nowhere near the level of dogfooding as what happens in a company such as AWS, which famously dog foods everything.  
请注意，Google 大多数内部团队在 TPUs 上进行 GenAI 训练和推理；因此，GCP GPU 体验与内部 Google ML 基础设施体验并不相同。少数利用云 GPU 的内部 Google 团队之一是 DeepMind 的 Isomorphic Labs。尽管 GCP 的客户与进行自我测试的 GCP 解决方案架构师团队之间有紧密的反馈循环，但与 AWS 等公司发生的自我测试水平相比，仍然远远不够。

Unlike something like OCI, or CoreWeave, monitoring is not setup out of the box, although there an relatively easy to setup monitoring dashboard with [OpsAgent](https://cloud.google.com/ai-hypercomputer/docs/monitor), it is nowhere near as advanced as CoreWeave’s monitoring Grafana dashboard and metrics. Every single customer wants to monitor for GPUs; as such, we recommend this should be set up out of the box. In terms of health checks, GCP does run passive health checks on the VMs, but there is no out-of-the-box solution to run weekly scheduled active health checks on idle nodes, unlike CoreWeave and Nebius. GCP does have  [cluster-health-scanner](https://github.com/GoogleCloudPlatform/cluster-health-scanner) it is not weekly automatedly scheduled and not an out of the box solution. We recommend that GCP spends some time and money trying out Corewave SUNK’s offering for themselves and seeing how they perform health checks and monitoring.  
与 OCI 或 CoreWeave 不同，监控并不是开箱即用的，尽管有一个相对容易设置的 OpsAgent 监控仪表板，但它远不如 CoreWeave 的监控 Grafana 仪表板和指标先进。每个客户都希望监控 GPU；因此，我们建议这应该是开箱即用的。在健康检查方面，GCP 确实对虚拟机进行被动健康检查，但没有开箱即用的解决方案来对闲置节点进行每周计划的主动健康检查，这与 CoreWeave 和 Nebius 不同。GCP 确实有集群健康扫描器，但它不是每周自动调度的，也不是开箱即用的解决方案。我们建议 GCP 花一些时间和金钱尝试 Corewave SUNK 的产品，看看他们如何进行健康检查和监控。

GCP is not just a GPU cloud but also has all the other services of a cloud, such as Bigtable, databases, object storage, and parallel filesystem offering, which is needed for data proc and web scraping. By being a complete cloud, they mean you don’t need to copy (or stream) the data from a “main Hyperscaler cloud” where the data proc is done to a Neocloud cluster and all your data is just there.  
GCP 不仅仅是一个 GPU 云，还拥有云的所有其他服务，如 Bigtable、数据库、对象存储和并行文件系统，这些都是数据处理和网络爬虫所需的。作为一个完整的云，他们的意思是您不需要将数据从“主超大规模云”复制（或流式传输）到 Neocloud 集群，您的所有数据都在那里。

In terms of security, [GCP’s security](https://cloud.google.com/security/compliance/offerings#/countries=United_States)  is top-notch and world-class and including properly doing tenant  [networking isolation and encryption in transit](https://cloud.google.com/docs/security/encryption-in-transit). Any enterprises that have strict security requirements should probably go with a Hyperscaler.  
在安全性方面，GCP 的安全性一流且世界级，包括正确进行租户网络隔离和传输加密。任何有严格安全要求的企业可能应该选择超大规模云。

## Other Bronze Providers 其他铜级提供商

Other providers land themselves in the ClusterMAX™ Bronze tier by not having non-beta out-of-box Slurm and/or Kubernetes offering or having buggy Slurm and/or Kubernetes offerings that are not properly set up. We have given feedback to them, and most of them are receptive to the feedback and are currently building and launching Slurm and/or Kubernetes out-of-the-box offerings. Some of these providers in the ClusterMAX™ Bronze tier have been running GPU cloud services for ages now but only recently obtained SOC2 compliance within the last month. While we are grateful that they have SOC2 compliance, we cannot place them any higher for now since they only recently got SOC2 compliance.  
其他提供商通过没有非测试版的开箱即用的 Slurm 和/或 Kubernetes 产品，或拥有设置不当的有缺陷的 Slurm 和/或 Kubernetes 产品，进入 ClusterMAX™ 铜级。我们已向他们反馈，大多数人对反馈持开放态度，并正在构建和推出开箱即用的 Slurm 和/或 Kubernetes 产品。ClusterMAX™ 铜级中的一些提供商已经运营 GPU 云服务很长时间，但在上个月才获得 SOC2 合规性。虽然我们对他们获得 SOC2 合规性感到感激，但由于他们最近才获得 SOC2 合规性，我们暂时无法将他们评定得更高。

For what it’s worth, for some of these providers, such as DataCrunch’s on-demand single-node offering, it is quite suitable for development work. We evaluated the DataCrunch on-demand single-node offering, and we quite enjoyed it. But unfortunately, their production cluster is not suitable for inferencing or training.  
就其价值而言，对于一些提供商，例如 DataCrunch 的按需单节点产品，它非常适合开发工作。我们评估了 DataCrunch 的按需单节点产品，并且非常喜欢它。但不幸的是，他们的生产集群不适合推理或训练。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-37.-Datacrunch-GIMP.png?resize=1024%2C596&ssl=1)

Source: Datacrunch 来源：Datacrunch

TensorWave also has a beta managed Slurm and managed Kubernetes offering and are developing passive and active health checks. We believe that TensorWave’s offering has the potential to be ClusterMAX™ Sliver by the next time we evaluate them.  
TensorWave 还提供了一个测试版的托管 Slurm 和托管 Kubernetes 服务，并正在开发被动和主动健康检查。我们相信，TensorWave 的产品有潜力在下次评估时成为 ClusterMAX™ Sliver。

## ClusterMAX™ UnderPerform Tier GPU ProvidersClusterMAX™ 低效层 GPU 提供商

GPU providers placed in the **UnderPerform** category fail to meet critical basic industry and security requirements across multiple important evaluation metrics. Providers in this tier generally exhibit substantial issues, including inadequate security practices, poor reliability or uptime, unclear or misleading marketing, limited technical knowledge or customer support, and insufficient orchestration capabilities.  
被归类为表现不佳的 GPU 供应商未能满足多个重要评估指标的关键基本行业和安全要求。这个层级的供应商通常表现出显著的问题，包括安全实践不足、可靠性或正常运行时间差、营销不清晰或误导、技术知识或客户支持有限，以及编排能力不足。

Most providers land themselves in this category by not having even basic security certifications, such as SOC2 or ISO 27001. Some of these providers also fall into this category by hosting underlying GPU providers that are not SOC 2 compliant either.  
大多数提供商因未获得基本的安全认证（如 SOC2 或 ISO 27001）而被归入此类别。一些提供商也因托管不符合 SOC 2 标准的底层 GPU 提供商而落入此类别。

Security is a critical make-or-break factor for many GPU renters, as they store their proprietary model weights on GPU clouds, which have cost tens of thousands to tens of millions of dollars to train and are the core intellectual property of most genAI companies. Furthermore, training and/or inferencing these ML models can involve the use of proprietary or personally identifiable information or other user data involved. Customers of these companies that rent from GPU clouds do not want their data to be leaked from using an insecure GPU cloud. In EU countries, the stakes are higher as there are heavy fines for leaking user data as per GPDR law. This is similar to an airline having FAA certification – some people might want to fly on airlines that don’t have FAA certification, but most won’t.  
安全是许多 GPU 租赁者的关键因素，因为他们将自己的专有模型权重存储在 GPU 云上，这些模型的训练成本从数万美元到数百万美元不等，并且是大多数生成 AI 公司的核心知识产权。此外，训练和/或推理这些机器学习模型可能涉及使用专有或个人可识别信息或其他用户数据。这些从 GPU 云租赁的公司的客户不希望他们的数据因使用不安全的 GPU 云而泄露。在欧盟国家，风险更高，因为根据 GDPR 法律，泄露用户数据会面临重罚。这类似于航空公司拥有 FAA 认证——一些人可能想乘坐没有 FAA 认证的航空公司，但大多数人不会。

Some of these GPU providers even told us that they have lost potential sales due to not having SOC2 and are in the process of gaining SOC2 compliance. We welcome providers in this category to obtain SOC2 compliance.  
一些 GPU 提供商甚至告诉我们，由于没有 SOC2 认证，他们失去了潜在的销售机会，并且正在获得 SOC2 合规的过程中。我们欢迎这一类别的提供商获得 SOC2 合规。

Some GPU Providers in this category even admit on their public website that there may be security and privacy concerns, and traffic between the GPU servers and the internet may be heavily logged by a 3 <sup>rd</sup> parties networking equipment.  
这一类别中的一些 GPU 提供商甚至在其公共网站上承认，可能存在安全和隐私问题，并且 GPU 服务器与互联网之间的流量可能会被第三方网络设备大量记录。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-38.-SaladCloud-GIMP.png?resize=1024%2C235&ssl=1)

Source: SaladCloud 来源：SaladCloud

Some GPU providers such as Massed Compute land themselves in the **UnderPerform** by being unhelpful to the community by inundating the internet with a bunch of AI-generated SEO junk articles with incorrect information. This is harmful to the ML community as it adds a bunch of noise to an already noisy internet and actively leads people astray.  
一些 GPU 供应商，如 Massed Compute，通过在互联网上充斥大量 AI 生成的 SEO 垃圾文章和错误信息，使自己陷入了表现不佳的境地，这对社区并没有帮助。这对机器学习社区是有害的，因为它为已经嘈杂的互联网增加了更多噪音，并积极误导人们。

For example, when searching for “H100 vs A100 L2 Cache” on Google, the Massed Compute AI generated junk article with incorrect information shows up first. They actively are spreading misleading information, which is a horrible starting point for a GPU provider.  
例如，当在 Google 上搜索“H100 与 A100 L2 缓存”时，Massed Compute 生成的错误信息垃圾文章首先出现。他们积极传播误导性信息，这对一个 GPU 供应商来说是一个糟糕的起点。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-39.-Massed-Compute-1-GIMP.png?resize=1024%2C537&ssl=1)

Source: Google Search 来源：谷歌搜索

If you click into the link, it starts the H100 L2 cache size is 256MB which is completely wrong. We recommend that Massed Compute stop spamming the internet with AI-generated junk.  
如果您点击链接，它会显示 H100 L2 缓存大小为 256MB，这完全是错误的。我们建议大规模计算停止在互联网上发布 AI 生成的垃圾。

![](https://i0.wp.com/semianalysis.com/wp-content/uploads/2025/03/Fig-40.-Massed-Compute-2-GIMP.jpg?resize=703%2C1024&ssl=1)

Source: Massed Compute 来源：大规模计算

Some providers in this category also lack the correct networking drivers and GPU drivers, leading to worse NCCL performance. Additionally, some providers in this category have potential known security issues, such as failing to implement proper tenant isolation using VLANs and pKeys.  
该类别中的一些提供商也缺乏正确的网络驱动程序和 GPU 驱动程序，导致 NCCL 性能更差。此外，该类别中的一些提供商存在潜在的已知安全问题，例如未能使用 VLAN 和 pKeys 实施适当的租户隔离。

This is the conclusion of our first ever ClusterMAX™ Rating System update. Please stay tuned for further articles and additional ClusterMAX™ updates.  
这是我们首次更新 ClusterMAX™评级系统的结论。请继续关注后续文章和更多 ClusterMAX™更新。

## AI Neocloud GPU Rental Pricing Trends in 20242024 年 AI Neocloud GPU 租赁价格趋势

Although many observing trends in GPU pricing may characterize AI Neocloud GPU rental pricing for H100s as “collapsing,” – we have not been surprised at all – and see this as a reasonable and logical decline in the cost of computing as the supply of H100s has improved. Equally important is the increasing availability of the B200 and GB200, where we are already seeing term rental contracts being signed, which is starting to push down the market cost of computing and, therefore, the rental price for H100s.  
尽管许多观察 GPU 定价趋势的人可能会将 AI Neocloud H100 的 GPU 租赁定价描述为“崩溃”，但我们并没有感到惊讶——我们认为这是计算成本合理且合乎逻辑的下降，因为 H100 的供应有所改善。同样重要的是 B200 和 GB200 的可用性不断增加，我们已经看到租赁合同的签署，这开始推动市场计算成本的下降，因此也降低了 H100 的租赁价格。

In the following section, we will recap the GPU rental pricing trends seen in 2024, the outlook for 2025, and how to analyze the total cost of ownership and returns for AI Neoclouds. We will also discuss the upcoming CoreWeave IPO and how we apply our SemiAnalysis AI Total Cost of Ownership framework towards analyzing return on investment and unit economics for CoreWeave.  
在接下来的部分中，我们将回顾 2024 年 GPU 租赁定价趋势、2025 年的展望，以及如何分析 AI Neocloud 的总拥有成本和回报。我们还将讨论即将到来的 CoreWeave IPO，以及我们如何将 SemiAnalysis AI 总拥有成本框架应用于分析 CoreWeave 的投资回报和单位经济。