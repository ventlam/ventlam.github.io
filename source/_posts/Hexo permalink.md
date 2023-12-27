---
title: "Hexo固定超链接"
categories: hexo
date: 2023-12-27
tags:
    - hexo
---
在 Hexo 中，文章的 URL 通常是基于文章的文件名或者 front matter 中的 `slug` 字段生成的。如果文章 URL 每次修改时都发生变化，可能是因为Hexo 配置文件中设置了根据修改日期生成 URL。要解决这个问题，您可以按照以下步骤操作：

### 1. 检查 Hexo 配置文件

打开您的 Hexo 站点根目录下的 `_config.yml` 配置文件，并检查有关 URL 生成的设置。确保 `permalink` 设置不是基于日期的。通常，您可能会看到类似这样的设置：

```yaml
permalink: :year/:month/:day/:title/
```

如果您希望 URL 固定不变，可以更改为：

```yaml
permalink: :title/
```

或者使用 `slug` 字段：

```yaml
permalink: :slug/
```

### 2. 使用 Front Matter 中的 `slug` 字段

在您的文章的 front matter 中设置 `slug` 字段，可以确保 URL 固定且不会因为修改而变化。例如：

```markdown
---
title: 我的文章标题
slug: my-fixed-url
---
```

在这个例子中，无论文章内容如何修改，其 URL 都将保持为 `http://your-blog.com/my-fixed-url/`。


在 Hexo 和许多其他博客系统或内容管理系统（CMS）中，`slug` 字段是用于定义文章或页面的简短、易读的部分 URL。这个字段通常用于生成最终的网页地址（URL），使其更易于理解和记忆。

### Slug 的作用和特点：

1. **易读性**：Slug 提供了一个比自动生成的数字或日期更易读的方式来标识文章或页面。例如，对于一个标题为 "如何学习编程" 的文章，相应的 slug 可能是 "how-to-learn-programming"。

2. **SEO 友好**：一个好的 slug 可以增强页面的搜索引擎优化（SEO），因为它通常包含关键词，这些关键词有助于搜索引擎了解页面的内容。

3. **永久链接**：Slug 作为 URL 的一部分，通常被视为一种永久链接。这意味着一旦定义，它就不应该改变，以避免打破指向该页面的链接。

### 在 Hexo 中使用 Slug：

在 Hexo 的 front matter 中，您可以手动为每篇文章指定一个 slug。例如：

```yaml
---
title: 如何学习编程
slug: how-to-learn-programming
---
```

在这种情况下，即使文章的标题发生变化，通过指定的 slug 生成的 URL（例如 `yourdomain.com/how-to-learn-programming`）将保持不变。

如果不指定 slug，Hexo 默认会使用文章标题（通常去除特殊字符和空格）来生成 URL。通过手动设置 slug，您可以获得对 URL 结构的更精确控制。


如果您在 `_config.yml` 文件中设置了 `permalink` 的格式为 `:year/:month/:day/:title/`，那么在文章的 front matter 中单独设置 `slug` 字段的确是**不会生效**的，至少不会影响最终生成的 URL。这是因为您的 `permalink` 配置没有包含 `:slug` 参数。

在您的 `permalink` 配置中，URL 是基于文章的发布年、月、日以及标题来生成的。例如，如果您有一篇标题为 “我的文章”、发布日期为 2023 年 3 月 15 日的文章，那么它的 URL 将会是类似于 `http://your-blog-domain.com/2023/03/15/我的文章/`。

### 如何让 `slug` 生效：

如果您希望通过在文章的 front matter 中设置 `slug` 来影响 URL，您需要在 `_config.yml` 文件中的 `permalink` 配置中包含 `:slug` 参数。例如：

```yaml
permalink: :year/:month/:day/:slug/
```

这样配置后，您就可以在文章的 front matter 中通过 `slug` 字段来定义该文章的 URL 的一部分了。

### 示例

假设有以下文章 front matter 配置：

```yaml
---
title: 我的文章
slug: my-article
date: 2023-03-15
---
```

并且 `_config.yml` 中的 `permalink` 设置为 `:year/:month/:day/:slug/`，那么这篇文章的 URL 将会是 `http://your-blog-domain.com/2023/03/15/my-article/`。


您遇到的情况是由于在 Hexo 中，文章的 URL 是根据 `permalink` 设置和文章 front matter 中的信息（如 `date` 和 `title` 或 `slug`）生成的。当您更改文章的标题，URL 也会相应变化。而且，如果您在文章 front matter 中没有显式设置 `date` 字段，Hexo 默认使用文件的创建日期或最后修改日期作为文章日期。

根据您的描述，您希望将文章的 URL 改回原来的形式，但遇到了因日期改变而导致的问题。要解决这个问题，请按照以下步骤操作：

### 1. 明确设置文章日期

在文章的 front matter 中显式设置 `date` 字段为您希望的日期。例如：

```yaml
---
title: title1
date: 2023-12-26
---
```

即使今天是 2023-12-27，只要在 front matter 中指定了日期，Hexo 就会使用这个日期生成 URL。

### 2. 调整 `permalink` 设置

确保 `_config.yml` 中的 `permalink` 设置符合您的需求。例如：

```yaml
permalink: :year/:month/:day/:title/
```

这样配置后，URL 将基于 front matter 中的 `date` 和 `title` 字段生成。

### 3. 重新生成站点

修改文章并保存后，重新生成您的站点：

```bash
hexo clean
hexo generate
```

### 4. 注意事项

- 如果您在不同天对同一篇文章进行了编辑，而且希望保持原有的 URL 不变，最好在文章的 front matter 中显式指定 `date` 字段。
- 在更改标题时，请记住 URL 也会随之改变。如果您希望 URL 保持不变，可以考虑使用 `slug` 字段，这样即使标题变化，URL 也可以保持一致。
