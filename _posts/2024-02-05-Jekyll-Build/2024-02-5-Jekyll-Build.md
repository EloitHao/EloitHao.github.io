---
title: Build Your Blog with GitHub Pages
tags: Jekyll
edit: 2019-03-26
categories: Jekyll
status: Paused
mathjax: true
highlight: true
mermaid: true
描述：用 GitHub Pages 构建你的博客。这是如何使用我的主题 "PointingToTheMoon"来撰写博客的草图。这个主题非常适合学术用途，因为它具有支持数学jax的简单帖子页面和带toc的侧边栏。而主页面则有些花哨。---

# 我能提供什么

这里有很多主题，但没有一个适合我的需要。

1. 我希望我的帖子页面的宽度至少为 80%，以便读者可以简单地阅读帖子。我不想要带有博客所有者大图的持久侧边栏
2. 我希望我的文章具有超强的可读性。字体必须足够清晰和大。不要用康索拉斯字体或无衬线体。
3. 我希望我的博客具有与 typora 相同的功能，即
   1. 我需要 mathjax。其他主题似乎很少支持它。
   2. [mermaid diagram](https://mermaidjs.github.io/) 总是一件好事。 
   3. ==highlight==. 该功能必须由 js 实现。
4. I don't want to build my blog locally and push the entire website to GitHub. After I have done styling, I write in markdown (using typora) and push it, that should be **all** it needed. 
5. I want my assets in the same folder as my posts. I use the workaround as direct link it to the `raw.github` page, like this `<img src="https://raw.githubusercontent.com/EloitHao/PointingToTheMoon/master/_posts/2018-12-11-Jekyll-Build/assets/GitHub-desktop.png" width="80%">`. I consulted GitHub, and they said it's okay to do so.
6. I want cool things, such as visitor map, tag clouds, and category clouds, commenting. I want Chinese readers to be able to comment as well. Disqus is blocked, and other sources are poorly maintained. So I chose commentit. All you need is a GitHub account or Facebook or Twitter.
7. I have ZERO experience with front end stuff. The JavaScript is exhausting, so I avoided using JS as much as possible. It turns out a hidden sidebar can be down in pure CSS.

Now I ended up with this theme. I know it's not perfect, but I will settle it for now. I will consider any suggestions you guys make, you can comment it in this page.

About the extended markdown syntaxes, you can see it [here]().

# Why GitHub Pages?

1. It's simple.

   1. The Domain is just `username.github.io`. You don't need to buy your own domain. PS, All domains must be registered by the owner using a personal ID. So that saves you a ton of trouble. But GitHub pages also allows you to 
   2. GitHub pages build the website for you. This means you don't need to install `Jekyll` or `ruby`; you don't need you locally build your website and publish it. You simply commit your source code and that's all. 
   3. After properly configured, you can write in `markdown`, and `push` (a fancy name for upload) to GitHub.  Things like equations, lists, tables, mermaid-diagrams, images, or videos are automated supported. This means all you'll need is a text editor as simple as good old notepad.exe to write your post, yet I strongly recommend [`typora`](https://www.typora.io/). As the time of writing, it is free.

2. You have absolute control over anything.

   1. The look. WordPress, blogspace, as well as other services,  do provide beautiful templates. But some of them have unnecessary constraints of where to put what. While on GitHub, you get to control what your pages look like. Still, there are thousands of readily-made themes at your disposal if you are lazy. With a few modifications, you can tailor your website the way you want.
   2. Functions. RSS feed, search, table of contents, pagination, visitor analysis, commenting, *etc*. Anything you can think of it out there. GitHub is a static site generator, which means there are no server-side calculations. However, you can always trick the users with a few walkarounds and CDNs.

3. There is a nice touch. GitHub's famous for being used by techies.

   Having your own website built entirely by yourself.

4. Limitations

   GitHub Pages source repositories have a recommended limit of 1GB. Published GitHub Pages sites may be no larger than 1 GB. GitHub Pages sites have a soft bandwidth limit of 100GB per month.    GitHub Pages sites have a soft limit of 10 builds per hour. See [here](https://help.github.com/articles/what-is-github-pages/#usage-limits)

# About Git

I am going to assume that you know the basic operations of git. If not, download the [GitHub Desktop](https://desktop.github.com/), and do everything in GUI. For the majority of bloggers, only commit and push is required. For you to publish your work, save your file in your editor, go to GitHub Desktop, commit your changes, and push.

<img src="https://raw.githubusercontent.com/EloitHao/PointingToTheMoon/master/_posts/2018-12-11-Jekyll-Build/assets/GitHub-desktop.png" alt="GitHub desktop screen shot" width="60%">

# Clone The Repo

Clone this [repo](https://github.com/EloitHao/PointingToTheMoon) and publish it!

# What Should I Modify

Here is a list of files you need to modify

1. **FIRST: If you are using the "EloitHao.github.io" repo, REMOVE ALL INFO ABOUT EloitHao.** If you are using "/PointingToTheMoon" repo, you can ignore this step. Including personal description in `/index.html`, `/google8e731c6ab620fd34`, `/about/index.md` and my CV at `/about/CV-of-Liu-Yingkai.pdf`.

2. License.md: add your version of license at the beginning of the file.

3. Readme.md: add your description.

4. config.yml: fill in as much as you can. Also see step 7.

5. index.html: fill in the description and (if any) proposed posts.

6. register at [commentit.io](https://commentit.io/). This enables your website's comment feature.

7. register at [clustermap.com](clustermap.com). Choose your widget as "Map widget", and you will see something like

   ```html
   <script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?d=MlqUzlcZFdHetSQtyml5oHyt9RwVjZrsGbvyaRpMwgU&cl=ffffff&w=a"></script>
   ```

   copy the string from "d=" to "&cl=", namely "MlqUzlcZFdHetSQtyml5oHyt9RwVjZrsGbvyaRpMwgU" in this case to config.yml.

8. secret/index.html: decrypt the page use password `ykliu` and save the page locally. Choose your password, copy and paste the HTML into the input textbox, and download the page. Replace secret/index.html with the HTML file you downloaded. Now you have an encrypted page only you can use to encrypt your other pages!

9. Better google discovery: Google site authentication. Just go to [webmaster](https://search.google.com/search-console?hl=en) and click `add property` and download the google authentication file, put in under the root of your repo. A few days later, you should be able to see your website in google search by searching `site:your-site-name.github.io` (no space in between).

After that, you should be able to enjoy your blogging!
