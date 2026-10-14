---
title: 用 GitHub Pages 搭建你的博客
tags: Jekyll
edit: 2019-03-26
categories: Jekyll
status: Paused
mathjax: true
highlight: true
mermaid: true
description: 用 GitHub Pages 构建你的博客。这是如何使用我的主题 "PointingToTheMoon" 来撰写博客的草图。这个主题非常适合学术用途，因为它具有支持 MathJax 的简洁文章页面和带目录的侧边栏。而主页面则有些花哨。
---

# 我能提供什么

这里有很多主题，但没有一个适合我的需要。

1. 我希望我的帖子页面的宽度至少为 80%，以便读者可以简单地阅读帖子。我不想要带有博客所有者大图的持久侧边栏
2. 我希望我的文章具有超强的可读性。字体必须足够清晰和大。不要用康索拉斯字体或无衬线体。
3. 我希望我的博客具有与 typora 相同的功能，即
   1. 我需要 mathjax。其他主题似乎很少支持它。
   2. [mermaid diagram](https://mermaidjs.github.io/) 总是一件好事。 
   3. ==highlight==. 该功能必须由 js 实现。
4. 我不想在本地构建博客再把整个网站推送到 GitHub。完成样式设计之后，我只需用 markdown（使用 typora）写作并推送，这就应该是所需的**全部**操作。
5. 我希望资源文件和文章放在同一个文件夹里。我的变通办法是直接链接到 `raw.github` 页面，像这样 `<img src="https://raw.githubusercontent.com/EloitHao/PointingToTheMoon/master/_posts/2018-12-11-Jekyll-Build/assets/GitHub-desktop.png" width="80%">`。我咨询过 GitHub，他们说这样做没问题。
6. 我想要一些酷炫的东西，比如访客地图、标签云、分类云和评论功能。我希望中文读者也能评论。Disqus 被墙了，其他评论服务又维护不善，所以我选择了 commentit。你只需要一个 GitHub、Facebook 或 Twitter 账号。
7. 我对前端**零**经验。JavaScript 太累人了，所以我尽量避免使用 JS。事实证明，隐藏侧边栏完全可以用纯 CSS 实现。

最终我做出了这个主题。我知道它并不完美，但目前就先用它了。你们提出的任何建议我都会考虑，可以直接在本页评论。

关于扩展的 markdown 语法，可以看[这里]()。

# 为什么选择 GitHub Pages？

1. 它很简单。

   1. 域名就是 `username.github.io`，你不需要购买自己的域名。另外，所有域名都必须由所有者用个人身份证件注册，所以这帮你省去了一大堆麻烦。当然 GitHub Pages 也允许你绑定自己的域名。
   2. GitHub Pages 会替你构建网站。这意味着你不需要安装 `Jekyll` 或 `ruby`，也不需要在本地构建网站再发布。你只需提交源代码，就这样。
   3. 正确配置之后，你就可以用 `markdown` 写作并 `push`（上传的花哨说法）到 GitHub。公式、列表、表格、mermaid 图表、图片、视频之类的东西都会自动支持。这意味着你只需要一个像老牌记事本 notepad.exe 那样简单的文本编辑器就能写文章，不过我强烈推荐 [`typora`](https://www.typora.io/)。截至写作时，它是免费的。

2. 你对一切拥有绝对的控制权。

   1. 外观。WordPress、blogspace 以及其他服务确实提供了漂亮的模板，但其中一些对"什么东西放在哪里"有着不必要的限制。而在 GitHub 上，你可以完全控制页面的样子。当然，如果你懒得折腾，还有成千上万的现成主题可供使用。稍加修改，你就能把网站打造成你想要的样子。
   2. 功能。RSS 订阅、搜索、目录、分页、访客分析、评论等*等*。你能想到的都实现了。GitHub Pages 是静态站点，这意味着没有服务器端计算。不过，你总可以通过一些变通方法和 CDN 来"糊弄"过去。

3. 还有一点小乐趣。GitHub 以被技术人使用而闻名。

   拥有一个完全由自己搭建的网站。

4. 限制

   GitHub Pages 源仓库的建议上限为 1GB。已发布的 GitHub Pages 站点不得超过 1 GB。GitHub Pages 站点每月有 100GB 的软性带宽限制，每小时有 10 次构建的软性限制。参见[这里](https://help.github.com/articles/what-is-github-pages/#usage-limits)。

# 关于 Git

我假设你已经了解 git 的基本操作。如果没有，请下载 [GitHub Desktop](https://desktop.github.com/)，在图形界面里完成所有操作。对大多数博主来说，只需要 commit 和 push 就够了。要发布你的作品，只需在编辑器中保存文件，打开 GitHub Desktop，提交更改并推送即可。

<img src="https://raw.githubusercontent.com/EloitHao/PointingToTheMoon/master/_posts/2018-12-11-Jekyll-Build/assets/GitHub-desktop.png" alt="GitHub desktop 截图" width="60%">

# 克隆仓库

克隆这个[仓库](https://github.com/EloitHao/PointingToTheMoon)并开始发布吧！

# 我需要修改什么

以下是你需要修改的文件列表

1. **首先：如果你使用的是 "EloitHao.github.io" 仓库，请删除所有关于 EloitHao 的信息。** 如果你使用的是 "/PointingToTheMoon" 仓库，可以忽略这一步。包括 `/index.html` 中的个人描述、`/google8e731c6ab620fd34`、`/about/index.md` 以及我的简历 `/about/CV-of-Liu-Yingkai.pdf`。

2. License.md：在文件开头添加你的许可证版本。

3. Readme.md：添加你的描述。

4. config.yml：尽可能填写完整。另见第 7 步。

5. index.html：填写描述以及（如果有的话）预计要写的文章。

6. 在 [commentit.io](https://commentit.io/) 注册。这会启用你网站的评论功能。

7. 在 [clustermap.com](clustermap.com) 注册。将小部件类型选择为 "Map widget"，你会看到类似这样的内容：

   ```html
   <script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?d=MlqUzlcZFdHetSQtyml5oHyt9RwVjZrsGbvyaRpMwgU&cl=ffffff&w=a"></script>
   ```

   把从 "d=" 到 "&cl=" 之间的字符串（本例中即 "MlqUzlcZFdHetSQtyml5oHyt9RwVjZrsGbvyaRpMwgU"）复制到 config.yml 中。

8. secret/index.html：用密码 `ykliu` 解密该页面并在本地保存。选择你自己的密码，把 HTML 复制粘贴到输入框中，然后下载页面。用下载的 HTML 文件替换 secret/index.html。现在你就有了一个加密页面，只有你能用它来加密其他页面！

9. 更好的谷歌收录：Google 站点验证。只需前往[搜索控制台](https://search.google.com/search-console?hl=en)，点击 `add property`，下载谷歌验证文件并放到仓库根目录下。几天之后，你就可以在谷歌搜索中通过搜索 `site:your-site-name.github.io`（中间无空格）找到你的网站。

之后，你就可以尽情享受写博客的乐趣了！
