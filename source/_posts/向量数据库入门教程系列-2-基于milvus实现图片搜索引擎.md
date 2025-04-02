> 世界纷纷扰扰喧喧闹闹，什么是真实  -- 最重要的小事

拖延了一个多月的向量数据库系列终于来啦。这次分享的向量数据库是milvus，基于它我们构建一个以图搜图的搜索引擎。
# 1.  以图搜图技术流程简介

**以图搜图** 是一种帮助你在给定输入图像的情况下搜索相似或相关图像的技术。以图搜图是一种基于内容的图像检索（[CBIR](https://en.wikipedia.org/wiki/Content-based_image_retrieval))）查询技术，它涉及提供一个查询图像给CBIR系统，系统将根据此查询进行搜索。

整个系统简化下来，基本上可以认为是下图的流程：
* 输入一张图片 -->  转化成 向量 --> 写入向量数据库
* 输入待查询图片 --> 转化成向量 ---> 查询向量数据库 --> 返回最符合结果 --> 展示
![image.png](https://s.zhangguiyi.cn/vent/202309111235417.png)

为了构建这样一个图像相似性搜索系统，我们需要下载包含17125张图像的PASCAL VOC图像集，其中包含20个类别。本教程使用YOLOv3进行目标检测和ResNet-50进行图像特征提取。经过这两个机器学习模型处理后，图像将被转换为256维的向量。
然后将这些向量存储在Milvus中，并由Milvus自动生成每个向量的唯一ID。然后使用MySQL将向量ID映射到数据集中的图像上。
每当您上传一个新的图像到图像搜索系统时，它将被转换为一个新的向量，并与之前存储在Milvus中的向量进行比较。然后Milvus返回最相似向量的ID，并且您可以在MySQL中查询相应的图像。

![image.png](https://s.zhangguiyi.cn/vent/20230915220554.png)

# 2. milvus和towhee简介
## 2.1 **milvus -- 又一个向量数据库**
Milvus是一个开源的向量数据库，用于支持嵌入式相似性搜索和人工智能应用程序。Milvus使非结构化数据搜索更加便捷，并提供了一致的用户体验。
Milvus 2.0是一个云原生的向量数据库，通过设计将存储和计算分离。它具有毫秒级搜索、简化的非结构化数据管理、可靠的向量数据库等特点。Milvus还支持混合搜索、统一的Lambda结构、社区支持和业界认可等。用户可以通过Zilliz Cloud进行快速部署，也可以根据文档自行安装和使用Milvus。

和Pinecone不同的是，Milvus不但支持云原生，还是可以私有化部署的开源项目。被互联网大厂广泛采用。

![image.png](https://s.zhangguiyi.cn/vent/20230915221603.png)

## 2.2 **towhee -- 万物皆向量**
![image.png](https://s.zhangguiyi.cn/vent/towhee.png)

Towhee是一个开源的机器学习流水线，可以帮助您将非结构化数据编码为嵌入向量。它具有易于使用的Python API，支持多种数据转换模式，并提供了快速的执行速度。此外，Towhee还提供了700多个预训练的嵌入模型，覆盖了5个领域、15个任务和140多种模型架构。它还与各种生态系统进行了完全集成，支持自定义数据处理流水线

### 2.2.1 核心概念

Towhee 由四个主要模块组成：“算子（Operators）”、“流水线（Pipelines）”、“数据处理 API（DataCollection API）”和“执行引擎（Engine）”。

- **算子（Operator）**：算子是构成神经网络数据处理水流线(neural data processing pipeline)的“积木块”（基础组件）。这些基础组件按照任务类型进行组织，每种任务类型都具有标准的调用接口。一个算子可以是某种神经网络模型，某种数据处理方法，或是某个 Python 函数。
    
- **流水线（Pipeline）**：流水线是由若干个算子组成的 DAG（有向无环图）。流水线可以实现比单个算子更复杂的功能，诸如特征向量提取、数据标记、跨模态数据理解等。
    
- **数据处理 API（DataCollection）**: DataCollection API 是用于描述流水线的编程接口。提供多种数据转换接口：map, filter, flat_map, concat, window, time_window以及window_all，通过这些接口，可以快速构建复杂的数据处理管道，处理视频，音频，文本，图像等非结构化数据。
    
- **执行引擎（Engine）**: 执行引擎负责实例化流水线、任务调度、资源管理，以及运行期性能优化。面向快速原型构建，Towhee 提供了轻量级的本地执行引擎；面向生产环境需求，Towhee 提供了基于 Nvidia Triton 的高性能执行引擎。

我们将学习如何使用Towhee构建图像搜索引擎。Towhee提供了用于非结构化数据的ETL（抽取、转换和加载）功能，同时集成了各种SOTA机器学习模型。它允许创建数据处理流水线，并提供了用于不同目的的内置算子，例如生成图像嵌入向量、将数据插入到Milvus集合中以及在Milvus集合上进行查询。
**接下来进入实战：**

# 3. [图片搜索实战](https://github.com/ultralytics/ultralytics/blob/main/README.zh-CN.md)


## 3.1 准备


**安装依赖库**
构建这个图片搜索引擎，我们需要先安装一些python包，下来一下样例数据，然后启动Milvus数据库。
```python
!pip install towhee==0.5.0 opencv-python==4.5.3.56 pillow==8.2.0

```

**下载样例数据**
接下来，我们需要一些样例的图片数据来做这个实验。通过下列命令下载
```python
!wget https://github.com/tencent/towhee/releases/download/v0.5.0/towhee_example_data.tar.gz
!tar -zxvf towhee_example_data.tar.gz
```

**启动Milvus向量数据库docker**
我们用docker来构建我们的服务，这样无论是构建、可持续部署上都更便利。命令如下：

```python
!docker run -d --name milvus_cpu_0.11.0 \
-p 19530:19530 \
-p 19121:19121 \
-v /tmp/milvus/db:/var/lib/milvus/db \
-v /tmp/milvus/conf:/var/lib/milvus/conf \
-v /tmp/milvus/logs:/var/lib/milvus/logs \
-v /tmp/milvus/wal:/var/lib/milvus/wal \
milvusdb/milvus:0.11.0-cpu-d030521-6f9e4a

```

> 可能需要先安装docker


通过上述命令，我们能够把数据库实例启动，接下来我们开始配置数据库，开始代码开发工作。

## 3.2 配置


为了后续使用，我们在开始时导入包并设置参数。您可以根据您的需求和环境更改参数。请注意，嵌入维度`DIM`应与选择的模型名称`MODEL`匹配。

```python
import csv

from glob import glob

from pathlib import Path

from statistics import mean

  

from towhee import pipe, ops, DataCollection

from pymilvus import connections, FieldSchema, CollectionSchema, DataType, Collection, utility


# 模型参数，选用Resnet50

MODEL = 'resnet50'

DEVICE = None # None，使用默认设备(有GPU的话会用CUDA)

  

# 向量数据库默认参数

HOST = '127.0.0.1'

PORT = '19530'

TOPK = 10

DIM = 2048 # 

COLLECTION_NAME = 'reverse_image_search'

INDEX_TYPE = 'IVF_FLAT'

METRIC_TYPE = 'L2'

  

# 搜索路径

INSERT_SRC = 'reverse_image_search.csv'

QUERY_SRC = './test/*/*.JPEG'
```
  
默认情况下，本教程选择预训练模型'resnet50'来提取图像嵌入向量。它将['IVF_FLAT'](https://milvus.io/docs/v2.0.x/index.md#IVF_FLAT)作为索引，并将['L2'](https://milvus.io/docs/v2.0.x/metric.md#Euclidean-distance-L2)作为Milvus配置的距离度量。`TOPK`确定返回多少个搜索结果，默认为10个。
L2距离的公式，其实就是很简单的欧氏距离：
![image.png](https://s.zhangguiyi.cn/vent/202309210932993.png)


## 3.3 Embedding 流水线

如前文所述，相似性搜索实际上是针对向量进行的。我们通过使用一个流式读取函数来读取图像所在的路径，将每张图片转换为embeddings向量。

```python
# 导入数据

def load_image(x):

if x.endswith('csv'):

with open(x) as f:

	reader = csv.reader(f)

next(reader)

for item in reader:
	yield item[1]

else:
	for item in glob(x):

yield item

# 生成Embeding的工作流

p_embed = (pipe.input('src').flat_map('src', 'img_path', load_image)

.map('img_path', 'img', ops.image_decode())

.map('img', 'vec', ops.image_embedding.timm(model_name=MODEL, device=DEVICE)))

```

### 核心步骤

在完成上述工作后，我们准备构建并尝试图像搜索引擎的核心步骤。核心步骤包括3个步骤：
1. 创建Milvus集合
2. 将数据插入到集合中
3. 在数据库中查询图像
  
### 3.3.1 创建 Milvus集合 (collection) 
如同在传统关系数据库里面一样，我们需要新建一个数据库。在Mivus里面对应数据库(DataBase)概念的是集合(Collection)。在风爷前面的教程，[[向量数据库入门教程系列-1-基于pinecone实现语义搜索]]中提及到。
  
在插入或搜索数据之前，我们需要先创建一个集合。这一步使用上述的配置信息创建一个新的集合。请注意，如果集合已经存在，下面代码会先删除该集合。

```python
import milvus

# 创建Milvus集合
def create_milvus_collection(collection_name, dim):
    # 如果集合存在，先删除
    if utility.has_collection(collection_name):
        utility.drop_collection(collection_name)

    # 定义集合的字段
    fields = [
        FieldSchema(name='path', dtype=DataType.VARCHAR, description='图片路径', max_length=500,
                    is_primary=True, auto_id=False),
        FieldSchema(name='embedding', dtype=DataType.FLOAT_VECTOR, description='图片嵌入向量', dim=dim)
    ]

    # 定义集合的schema
    schema = CollectionSchema(fields=fields, description='反向图像搜索')

    # 创建集合
    collection = Collection(name=collection_name, schema=schema)

    # 定义索引参数
    index_params = {
        'metric_type': METRIC_TYPE,
        'index_type': INDEX_TYPE,
        'params': {"nlist": 2048}
    }

    # 在embedding字段上创建索引
    collection.create_index(field_name='embedding', index_params=index_params)

    return collection

```



### 3.3.2 数据插入到集合中
#### * 连接向量数据库

指定数据库地址和端口，还需要指定 集合名 和向量维度。

```python
# 连接到Milvus服务

connections.connect(host=HOST, port=PORT)

# 创建集合

collection = create_milvus_collection(COLLECTION_NAME, DIM)

print(f'创建了一个新的集合: {COLLECTION_NAME}')
```

#### * 数据写入流水线
这段代码是一个写入图片数据的流水线，主要用于将数据插入到Milvus集合中。具体实现是通过`p_embed`流水线中的`map`算子，将输入的图像路径和嵌入向量传递给`ops.ann_insert.milvus_client`算子，并指定Milvus数据库的主机、端口和集合名称。最后，通过`.output('mr')`将结果输出为一个标记为'mr'的数据流。


```python
# 写入数据

p_insert = (
    p_embed
    .map(('img_path', 'vec'), 'mr', ops.ann_insert.milvus_client(
        host=HOST,
        port=PORT,
        collection_name=COLLECTION_NAME
    ))
    .output('mr')
)
```

把所有图片写入这个集合--`INSERT_SRC`:
```python
# 写入数据
p_insert(INSERT_SRC)

# 看看写了多少条数据

print('Number of data inserted:', collection.num_entities)
```


### 3.3.3 以图搜图


通过muilvus和Towhee实现以图搜图是非常简单的，只需要构建一个 搜索的流水线(pipeline)即可。本质上是通过对Embeding向量的邻近搜索。下面的代码实现了一个简单的搜索功能，返回查询图像和搜索结果的路径。你可以修改`output()`函数来返回不同项的值。


```python
# 搜索流水线

p_search_pre = (
    p_embed.map('vec', ('search_res'), ops.ann_search.milvus_client(
        host=HOST, port=PORT, limit=TOPK, collection_name=COLLECTION_NAME))
    .map('search_res', 'pred', lambda x: [str(Path(y[0]).resolve()) for y in x])
    # .output('img_path', 'pred')
)

p_search = p_search_pre.output('img_path', 'pred')
```



* **找条小金鱼： 'test/goldfish/*.JPEG':**

```python
# 导入所需的库
from towhee import collection, p_search, DataCollection

# 加载数据集合
collection.load()

# 搜索示例查询图像
dc = p_search('test/goldfish/*.JPEG')

# 显示搜索结果的图像路径
DataCollection(dc).show()
```

这段代码使用Towhee进行图像搜索。首先，加载数据集合。然后，使用`p_search`函数来搜索指定路径下的金鱼图像。最后，使用`DataCollection(dc).show()`来显示搜索结果的图像路径。

* **展示** 
```python
import cv2  # 导入OpenCV库
from towhee.types.image import Image  # 导入Towhee中的Image类型

def read_images(img_paths):
    imgs = []  # 存储读取的图片
    for p in img_paths:
        imgs.append(Image(cv2.imread(p), 'BGR'))  # 使用OpenCV读取图片，并创建Towhee中的Image对象
    return imgs

# 创建一个数据处理流水线，将'pred'列的值映射为'pred_images'列的图像对象
p_search_img = (
    p_search_pre.map('pred', 'pred_images', read_images)
    .output('img', 'pred_images')
)

# 创建一个DataCollection，将路径为'test/goldfish/*.JPEG'的图片数据作为输入，并显示结果
DataCollection(p_search_img('test/goldfish/*.JPEG')).show()
```

具体流程如下：

1. 导入所需的库和模块。

2. 定义一个函数`read_images`，用于读取指定路径下的图像文件并返回图像对象列表。

3. 创建一个数据处理流水线`p_search_img`，使用`map`算子将'pred'列的值映射为'pred_images'列的图像对象。调用之前定义的`read_images`函数来实现图像读取和转换。

4. 创建一个DataCollection对象，并将路径为'test/goldfish/*.JPEG'的图像数据作为输入。最后调用`.show()`方法显示结果。

## 4.评估系统

我们通过上面的代码一个图像搜索引擎，实现了图像的写入和检索功能。然而，任何的机器学习相关系统，除了关注其可用性，也需要评估模型本身的性能，比如准确率、召回率等。不同的AI领域有着不同的评估指标，当然评估本身也是比较复杂的一个环节，尤其是大模型时代。本文则采用较为简单的[mAP](https://www.educative.io/answers/what-is-the-mean-average-precision-in-information-retrieval)指标，即所有查询的平均精确度，来大致评估图像搜索引擎的效果。

  
### 4.1 评估函数
对于每个查询图像，我们希望从数据库中得到与之属于同一类别的图像。因此，我们定义了一个函数，根据查询图像的路径返回候选图像路径列表作为基准答案。基准答案应与查询图像具有相同的类别或类别。
此外，我们手动定义了一个函数来计算给定预测和期望结果的平均精度。

```python
from pathlib import Path
import glob

# 通过查询图像的路径获取真实结果
def ground_truth(path):
    # 获取训练集路径，将'test'替换为'train'
    train_path = str(Path(path).parent).replace('test', 'train')
    # 使用glob函数获取训练集中所有图像的路径，并返回一个包含所有路径的列表
    return [str(Path(x).resolve()) for x in glob.glob(train_path + '/*.JPEG')]

# 根据预测结果和真实结果计算平均准确率
def get_ap(pred: list, gt: list):
    ct = 0  # 计数器，记录预测结果中与真实结果相同的数量
    score = 0.0  # 得分，用于计算平均准确率
    
    for i, n in enumerate(pred):
        if n in gt:
            ct += 1
        score += (ct / (i + 1))
        
    if ct == 0:
        ap = 0.0
    else:
        ap = score / ct
        
    return ap
```

代码中定义了两个函数：`ground_truth`和`get_ap`。

- `ground_truth`函数通过查询图像的路径，返回与之对应的训练集图像路径列表。首先，使用`Path`将查询图像的路径转换为`Path`对象，并获取其父目录。然后，将父目录中的'test'替换为'train'，得到训练集图像所在目录。最后，使用`glob.glob`函数获取训练集目录下所有以'.JPEG'结尾的文件，并将其路径转换为绝对路径，并将所有路径存储在列表中返回。

- `get_ap`函数根据预测结果和真实结果计算平均准确率。首先，定义一个计数器`ct`和得分`score`，分别用于记录预测结果中与真实结果相同的数量和计算得分。然后，使用`enumerate`遍历预测结果列表，获取每个预测结果及其索引。如果当前预测结果在真实结果列表中，则将计数器加1。然后，计算得分并累加到总得分中。最后，根据计数器的值判断是否存在相同的预测结果和真实结果，并计算平均准确率。


通过上述定义的函数，我们能够基于搜索流水线构建一个评估流水线。它对每个查询图片进行搜索，并将搜索结果与真实结果进行比较。然后，该流水线输出每个查询的平均精确度（AP）。


```python
# 评估流水线返回平均精确率（Average Precision）

p_eval = (
    # 通过映射操作获取预测结果、真实标签和基准数据
    p_search_pre.map('img_path', 'gt', ground_truth)
    
    # 通过映射操作计算平均精确率
    .map(('pred', 'gt'), 'ap', get_ap)
    
    # 输出平均精确率
    .output('ap')
)
```

### 4.3 搜索性能

现在我们可以对所有测试数据运行评估流水线。然后，我们计算所有查询的平均AP值，以获得mAP的最终性能。
最后，一张表记录了在我们的环境中测试的一些热门模型的性能和每秒查询率。您可以尝试使用不同的模型和配置。请注意，mAP和qps会受依赖项和设备版本的影响。

```python
import time
# 导入时间模块

# 运行评估流水线，用于所有测试数据
start = time.time()  # 记录开始时间

bm = p_eval('test/*/*.JPEG')  # 调用评估算子，传入测试数据路径

end = time.time()  # 记录结束时间

# 将AP值存储在列表中
res = DataCollection(bm).to_list()  # 将评估结果转换为列表

# 计算mAP值
mAP = mean([x.ap for x in res])  # 计算平均准确率（mean average precision）

print(f'mAP@{TOPK}: {mAP}')  # 打印mAP@TOPK值
print(f'qps: {len(res) / (end - start)}')  # 打印查询每秒请求数（query per second）
```

上述代码是一个简单的示例，运行了一个评估流水线，并计算了平均准确率（mAP）和查询每秒请求数（qps）。其中使用了`time`模块记录了开始和结束时间，通过调用`p_eval`函数运行评估算子并传入测试数据路径。然后将评估结果转换为列表，并计算出平均准确率。最后打印出mAP@TOPK值和查询每秒请求数。

#### 性能表格如下:


| model | dim | mAP@10 | qps |
| -- | -- | -- | -- |
| resnet50 | 2048 | 0.886 | 35 |
| vgg16 | 512 | 0.658 | 53 |
| vit_base_patch16_224 | 768 | 0.962 | 40 |
| tf_efficientnet_b7 | 2560 | 0.983 | 16 |
# 5. 总结
整个教程虽然比较简单，但是已经比较完整的构建了以图搜图引擎的全过程。通过Towhee和Milvus构建的从数据预处理到搜索再到评估的机器学习流程，核心的组件就是向量数据库Milvus，当然Towhee封装了很多机器学习过程中的繁琐处理过程，使得构建类似的AI系统变得简单高效。本示例覆盖了图像搜索引擎的主要组成部分,为构建实际生产系统奠定了基础。下期风爷和大家一起探索如何将这个图片搜索引擎部署上线，提供公共服务。


#blog #vectordb #ai 