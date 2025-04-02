#ai 
# 摘要
本期和大家一起读篇论文，由Google DeepMind 和普林斯顿大学联合提出的「[思维树](https://arxiv.org/pdf/2305.10601.pdf)」框架。该框架是COT(思维链)的泛化模型，它基于人类认知学理论，思维的快慢系统，提出了一种基于树模型的Prompt提示方法。
> 整体感受，论文思路很好。首先 LLM的COT是激发LLM能力的最重要的策略方法（模型）之一。这篇文章提出了一种创新型的策略叫做TOT，实际上是COT的泛化(从数学上来讲这种泛化工作非常重要）。其次，它证明了这种TOT能够带来LLM模型能力的大幅提升。而且这个TOT有很好的认知科学的理论基础。 整个工作是solid 和 creative的。这篇文章其实很有用，对于做应用层来说，设计好的Prompt框架，能够使得GPT模型发挥更强大的能力。 -- 拖延症拉满的小林

文章宣称让思维树框架可以让GPT-4可以自己生成、评估和决策，推理能力最高可提升1750%。论文实验结果显示，ToT显著提高了LLM在三个新任务（24点游戏，创意写作，迷你填字游戏）中的问题解决能力。比如，在24点游戏中，GPT-4只解决了4％的任务，但ToT方法的成功率达到了74％。
> 实际上，小林跑了下文章附带的代码，无法稳定复现文章宣称的效果，同时对比发现，在24点游戏里面，GPT-4不使用思维树可能效果更好。在GPT-3.5前提下，无论是否使用思维树，都很难求解24点游戏。 -- 拖延症拉满的小林

# 论文精读

## 引文
LLM，如GPT 和PaLM等大模型已经被证明在需要数学、符号、常识和知识推理的各种任务领域能够具备很好的性能和效果。但是，目前这些模型的所有进展的基础仍然是用于**生成文本的原始自回归机制**，这使得**决策**逐一在左到右的方式下进行。这样简单的机制是否足以构建一个通用问题求解器？如果不是，会有哪些问题挑战当前的范例，应该有哪些替代机制？

> 这段拗口的话，其实也是杨尚昆怀疑的理论基础。目前所有大模型的基础是 自回归的Transformer，都是从左到右的预测（下一个词/向量）。如果不了解从左到右，需要看一下Transformer的原理。 -- 拖延症拉满的小林


人类认知的文献提供了一些线索来回答这些问题。对“双过程”模型的研究表明，人们有两种模式来处理决策——快速、自动、无意识模式（“系统1”）和缓慢、深思熟虑、有意识模式（“系统2”）。这两种模式以前已经与机器学习中使用的各种数学模型联系起来。例如，对人类和其他动物进行的强化学习研究探讨了他们进行联想式“无模型”学习或更深思熟虑的“基于模型”的规划的情况。大模型的简单联想令牌级别选择也让人想起了“系统1”，因此可能会从一个更深思熟虑的“系统2”规划过程中获益，该过程（1）维护并探索当前选择的多种不同选择而不只是选择一个，并且（2）评估其当前状态并积极地向前或向后追溯以做出更全局性决策。

![](https://s.zhangguiyi.cn/vent/Pasted%20image%2020230608220400.png)



图1：示意图展示了使用LLMs解决问题的各种方法。每个矩形框代表一个思考过程，它是一个连贯的语言序列，作为解决问题的中间步骤。

> 从数据结构的角度来看，实际上Tree结构是 COT的泛化版本。在大模型的Prompt工程，主要基于COT和统计采样两种方法来提升大模型输出质量。TOT确实是一个不错的创新。  -- 拖延症拉满的小林

为了设计这样一个规划过程，我们回到了人工智能和认知科学的起源，Newell和同事将问题解决描述为对组合问题空间的搜索，该空间表示为一棵树。因此，我们提出了Tree of Thoughts（ToT）框架，用于使用语言模型进行通用问题解决。

正如图1所示，虽然现有方法（详见下文）会对问题解决进行连续语言序列采样，但ToT则积极维护着一棵思想树，在其中每个思想都是一个连贯的语言序列，作为通向问题解决的中间步骤。这样的高级语义单元允许LM通过一个推理过程来自我评估不同中间思想在解决问题方面所取得的进展，这种通过LM自我评估和思考实现搜索启发式是新颖的，因为以前的搜索启发式要么是编程或学习得到。

最后，我们将这种基于语言生成和评估多样化思想能力与搜索算法相结合，例如广度优先搜索（BFS）或深度优先搜索（DFS），这些算法通过前瞻和回溯的方式允许系统地探索思想树。
> 树结构给Prompt工程更灵活的实现路径，但是设计难度也提升了。 -- 拖延症拉满的小林

现有方法在使用语言模型解决一般问题时存在的两个主要缺点：1）在局部上，它们不探索思维过程中不同的延续——树的分支。2）在全局上，它们不包括任何类型的规划、向前看或回溯来帮助评估这些不同选项——看起来具有人类问题解决特征的启发式搜索。

为了解决这些不足，我们引入了“思维树”（Tree of Thoughts，ToT）的范式，使语言模型能够在思想上探索多条推理路径（图1(c)）。ToT将任何问题框架化为在树上进行搜索，其中每个节点都是一个状态 s = [x, z1···i]，表示具有输入和迄今为止的思考序列的部分解决方案。ToT的特定实例包括回答四个问题：
1.如何将中间过程分解成思考步骤；
2.如何从每个状态生成潜在的思想；
3.如何启发式地评估状态；
4.使用什么搜索算法。

**具体算法实现可以参考原文，这里就不赘述。**

## 实验

![三种实验](https://s.zhangguiyi.cn/vent/Pasted%20image%2020230612231644.png)

我们只看关于创意写作部分。

接下来，我们设计了一个创意写作任务，其中输入为4个随机句子，输出应为4个段落的连贯文章，分别以这4个输入句子结尾。这样的任务是开放性和探索性的，挑战了创造性思维和高层次的规划能力。

**任务设置**：我们从randomwordgenerator.com中随机选取句子来形成100个输入，对于每个输入限制没有真实的文章参考。由于我们发现GPT-4大多数情况下可以遵循输入限制，因此我们专注于通过两种方式评估文章连贯性：使用GPT-4零-shot提示提供1-10标量分数或使用人类评判比较不同方法生成的输出对。对于前者，我们采样5个分数并对每个任务输出进行平均，并发现这5个分数通常一致，在所有输出中平均标准差约为0.56。对于后者，我们在盲目研究中采用作者子集来比较CoT与ToT生成的文章段落连贯性，其中段落顺序在100个输入上被随机颠倒。

**基线**：鉴于该任务具有创意性质，IO和CoT提示都是zero-shot的。虽然前者提示LM直接根据输入限制生成连贯的文章，而后者提示LM首先制定简要计划，然后编写文章，即计划作为中间思考步骤。我们为每个任务生成10个IO和CoT样本。我们还考虑在每个任务的随机IO样本之上采用迭代细化（k≤5）方法，其中LM受到输入限制和最后生成的段落的影响来决定段落是否已经“完全连贯”，如果没有，则生成一个精细的段落。

**ToT设置**：我们构建了一个深度为2（仅有1个中间思考步骤）的ToT——LM首先生成k=5个计划，并投票选出最佳计划（下图的图4），然后类似地基于最佳计划生成k=5个段落，然后投票选出最佳段落。这里广度限制b=1，因为每一步只保留一个选择。使用简单的零-shot投票提示（“分析下面的选择，然后得出哪一个对指导最有前途”）在两个步骤中采样5个投票。

**结果**。下图的图5（a）显示了100个任务中平均GPT-4分数，其中ToT（7.56）被认为比IO（6.19）和CoT（6.93）平均生成更连贯的段落。虽然这样的自动度量可能存在噪声，但下图的图5（b）通过显示人类在100个段落对中更喜欢ToT而不是CoT来证实这一发现，其中41个对中只有21个对首选CoT（其他38个对被发现“同样连贯”）。最后，迭代细化在这种自然语言任务上更有效，在其中将IO连贯性得分从6.19提高到7.67，并将ToT连贯性得分从7.56提高到7.91。我们认为它可以被视为ToT框架中的第三种思维生成方法，在该方法中，新思想可以从精炼旧思想而不是i.i.d或顺序生成中产生。

![](https://s.zhangguiyi.cn/vent/Pasted%20image%2020230613153106.png)

![[Pasted image 20230613153106.png]]

## 展望

**限制和未来方向**。像ToT这样的有意识搜索可能对于GPT-4已经擅长的许多现有任务并不必要，而作为一个初始步骤，这项工作只探索了三个相对简单的任务，挑战了GPT-4，并呼吁更好的搜索和规划能力与LM结合。然而，随着我们开始将LM用于更多实际的决策应用（例如编码、数据分析、机器人等），可能会出现更复杂的任务，并提供研究这些研究问题的新机会。此外，像ToT这样的搜索方法需要比采样方法更多的资源（例如GPT-4 API成本）才能提高任务性能，但是ToT的模块化灵活性允许用户自定义这种性能成本权衡，并且正在进行的开源努力[29]应该可以在不久的将来降低这些成本。最后，本文聚焦于使用现成LM，并使用类似ToT风格的高级反事实决策制定微调LM可能提供增强LM问题解决能力的机会。

**更广泛的影响**。ToT是一个框架，使LM能够更自主、更智能地做出决策和解决问题。虽然当前任务局限于推理和搜索问题，但涉及与外部环境或人类互动的未来应用可能会带来潜在的危险，例如促进有害的LM使用。另一方面，ToT也提高了模型决策的可解释性和人类对齐的机会，因为所得到的表示是可读的、高级语言推理，而不是隐含的、低级别的令牌值。

**结论**。LM的联想“系统1”可以通过基于搜索可能解决问题路径树的“系统2”进行有益增强。思维树框架提供了一种将经典问题解决见解转化为当代LM可行方法的方式。同时，LM解决了这些经典方法的一个弱点，提供了一种解决不容易形式化的复杂问题（例如创意写作）的方法。我们认为，LM与AI传统方法相交融是未来工作中令人兴奋的方向。

# 代码与实现
坦诚讲，核心代码很少，其实实现的内容也比较简单。
Model.py，主要是调用GPT API。
```python
def chatgpt(messages, model="gpt-4", temperature=0.7, max_tokens=1000, n=1, stop=None) -> list:

global completion_tokens, prompt_tokens

outputs = []

while n > 0:

cnt = min(n, 20)

n -= cnt

res = completions_with_backoff(model=model, messages=messages, temperature=temperature, max_tokens=max_tokens, n=cnt, stop=stop)

outputs.extend([choice["message"]["content"] for choice in res["choices"]])

# log completion tokens

completion_tokens += res["usage"]["completion_tokens"]

prompt_tokens += res["usage"]["prompt_tokens"]

return outputs
```

Run.py，主要是定义了 生成、评估 和选择的过程。关键部分其实在Prompt 文本里面。
```python
def solve(args, task, idx, to_print=True):

print(gpt)

x = task.get_input(idx) # input

ys = [''] # current output candidates

infos = []

for step in range(task.steps):

# generation

if args.method_generate == 'sample':

new_ys = [get_samples(task, x, y, args.n_generate_sample, prompt_sample=args.prompt_sample, stop=task.stops[step]) for y in ys]

elif args.method_generate == 'propose':

new_ys = [get_proposals(task, x, y) for y in ys]

new_ys = list(itertools.chain(*new_ys))

ids = list(range(len(new_ys)))

# evaluation

if args.method_evaluate == 'vote':

values = get_votes(task, x, new_ys, args.n_evaluate_sample)

elif args.method_evaluate == 'value':

values = get_values(task, x, new_ys, args.n_evaluate_sample)

  

# selection

if args.method_select == 'sample':

ps = np.array(values) / sum(values)

select_ids = np.random.choice(ids, size=args.n_select_sample, p=ps).tolist()

elif args.method_select == 'greedy':

select_ids = sorted(ids, key=lambda x: values[x], reverse=True)[:args.n_select_sample]

select_new_ys = [new_ys[select_id] for select_id in select_ids]

  


```

# 读后感
* 思路很好，大模型有巨大的潜力未被人挖掘，Prompt Engineering 是发掘大模型能力以及理解大模型机理的重要路径之一。
* 论文有较好的认知理论基础，通过模仿人类认知的快慢系统（# 思考，快与慢）
	* 我们的大脑有快与慢两种作决定的方式。常用的无意识的“系统1”依赖情感、记忆和经验迅速作出判断，它见闻广博，使我们能够迅速对眼前的情况作出反应。但系统1也很容易上当，它固守“眼见即为事实”的原则，任由损失厌恶和乐观偏见之类的错觉引导我们作出错误的选择。有意识的“系统2”通过调动注意力来分析和解决问题，并作出决定，它比较慢，不容易出错，但它很懒惰，经常走捷径，直接采纳系统1的直觉型判断结果。
* TOT是COT的泛化模式，复杂问题可以通过TOT来提升大模型答案质量。但是按照目前的代码效果测试来看，大模型本身输出有不稳定性，暂时没有稳定复现。
* 原文的[Github](https://github.com/princeton-nlp/tree-of-thought-llm) 项目被李代桃僵
  ![有瓜吃](https://s.zhangguiyi.cn/vent/gua.png)
* 值得大家回味的原文一段话，关于什么是认知。 A genuine problem-solving process involves the repeated use of available information to initiate exploration, which discloses, in turn, more information until a way to attain the solution is finally discovered.—— Newell et al.
	> 一个真正的问题解决过程涉及重复使用可用信息来启动探索，进而揭示更多信息，直到最终发现达到解决方案的方法。
