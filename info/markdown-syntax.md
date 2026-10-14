---
layout: info
title: Markdown 语法
edit: 2024-02-05
mathjax: true
mermaid: true
highlight: true
---

`# Markdown 语法基础
`GitHub 使用 [kramdown](https://kramdown.gettalong.org/syntax.html) 作为 GitHub Flavored Markdown (GFM)。以下列出了部分语法。

## 排版

```md
*这是斜体。* **这是粗体**。 * 如果星号两侧被空格包围，则不会被解析。 *

_这也是斜体。_ __这也是粗体__。 _ 如果下划线两侧被空格包围，则不会被解析。 _

[这是一个外部链接](https://bit.ly)。`"https://"` 很重要。[这是一个内部链接](#排版)。内部链接全部小写，空格用连字符 "-" 替换。

你可以混合使用，比如 [*这样*](https://bit.ly)、[`这样`](https://bit.ly)、**[这样](https://bit.ly)**，但不能像 `[这样](https://bit.ly)` 这样。

==高亮不被 GFM 支持，但我在这个主题中实现了它。==

```

*这是斜体。* **这是粗体**。 * 如果星号两侧被空格包围，则不会被解析。 *

_这也是斜体。_ __这也是粗体__。 _ 如果下划线两侧被空格包围，则不会被解析。 _

[这是一个外部链接](https://bit.ly)。`"https://"` 很重要。[这是一个内部链接](#排版)。内部链接全部小写，空格用连字符 "-" 替换。

你可以混合使用，比如 [*这样*](https://bit.ly)、[`这样`](https://bit.ly)、**[这样](https://bit.ly)**，但不能像 `[这样](https://bit.ly)` 这样。

==高亮不被 GFM 支持，但我在这个主题中实现了它。==

## 列表

```markdown
- 这是无序列表
  - 子项
    - 子子项
      - 子子子项
        - 可以一直延续下去 ...
- 列表可以有多行

  就像这样。
- > 或者引用块
- ```markdown
  或者代码块
​```

---

1. 这是有序列表
   1. 子项
2. 这个也是
3. 可以一直延续

---

1. 你可以像这样避免手动编号
   1. 子项
1. 它会自动延续
1. 等等等等
```

- 这是无序列表
  - 子项
    - 子子项
      - 子子子项
        - 可以一直延续下去 ...
- 列表可以有多行

  就像这样。
- > 或者引用块
- ```markdown
  或者代码块
  ```

---

1. 这是有序列表
   1. 子项
2. 这个也是
3. 可以一直延续

---

1. 你可以像这样避免手动编号

   1. 子项

1. 它会自动延续

1. 等等等等

## 图片

```markdown
Markdown 使用 `![caption](link)` 来引用图片，题注是可选的。你无法控制图片大小。

![caption](https://raw.githubusercontent.com/EloitHao/EloitHao.github.io/master/_posts/2018-11-01-Introduction-to-Homology/assets/triangles.png)

所以我更喜欢像这样使用 HTML 标签：

<img src="https://raw.githubusercontent.com/EloitHao/EloitHao.github.io/master/_posts/2018-11-01-Introduction-to-Homology/assets/triangles.png" width="30%">
```

Markdown 使用 `![caption](link)` 来引用图片，题注是可选的。你无法控制图片大小。

![caption](https://raw.githubusercontent.com/EloitHao/EloitHao.github.io/master/_posts/2018-11-01-Introduction-to-Homology/assets/triangles.png)

所以我更喜欢像这样使用 HTML 标签：

<img src="https://raw.githubusercontent.com/EloitHao/EloitHao.github.io/master/_posts/2018-11-01-Introduction-to-Homology/assets/triangles.png" width="30%">

> 注意：我曾就使用 `raw.github` 链接显示图片的事咨询过 GitHub 支持，他们说这样做没问题：
>
> > **我可以在博客中使用 raw 链接来显示图片吗？**
> >
> > 我知道这不是 Jekyll 推荐的做法。但我仍然想知道，如果我的网站变得更受欢迎、流量变得更大，你们是否不鼓励这种做法。我想知道 raw 链接是否有流量限制，以及是否有办法保留我的目录结构？
>
> 他们回复说：
>
> > 你好，Yingkai，
> >
> > 感谢你的来信。
> >
> > 我们通常不推荐这种结构，但它似乎没有在我们这边造成任何问题。
> >
> > 另外，raw 链接没有已记录的流量限制，我们也不清楚有什么变通方案（虽然可能存在）。
> >
> > 如果流量对我们的系统造成过大负载，我们一定会联系你。若你对此还有其他问题，我们随时乐意解答。祝好！
> >
> > 一切顺利，
> > GitHub 支持团队

## 块级元素：引用、代码块

```markdown
> 这是一个引用块
>
> > 这是嵌套在另一个引用块中的引用块

​```python
# 这是一个 Python 代码块
import numpy as np
print("""这是一个 Python 代码块""")
​```

​```fortran
! 这是一个 Fortran 代码块
implicit none
​```

​```
这是一个简单代码块。你可以用它以等宽字体显示文本。
​```

你也可以混合使用，比如

>```
>这样。
>```
```

> 这是一个引用块
>
> > 这是嵌套在另一个引用块中的引用块

```python
# 这是一个 Python 代码块
import numpy as np
print("""这是一个 Python 代码块""")
```

```fortran
! 这是一个 Fortran 代码块
implicit none
```

```
这是一个简单代码块。你可以用它以等宽字体显示文本。
```

也可以混合使用，比如
>```
>这样。
>```

## 表格

```markdown
| 此列左对齐 | 此列居中对齐 | 此列右对齐 |
| :-------------------------- | :---------------------: | ---------------------------: |
| 1                           |            4            |                            7 |
| 2                           |            5            |                            8 |
| 3                           |            6            |                            9 |

| 表格中可以使用 `![caption](link)`。                    | 表格中可以使用数学公式。 | 表格中可以使用 `<img src="" width="">`。               |
| ------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------ |
| ![caption](https://raw.githubusercontent.com/EloitHao/EloitHao.github.io/master/_posts/2018-11-01-Introduction-to-Homology/assets/triangles.png) | $1+1=2$                     | <img src="https://raw.githubusercontent.com/EloitHao/EloitHao.github.io/master/_posts/2018-11-01-Introduction-to-Homology/assets/triangles.png" width="30%"> |
```

| 此列左对齐 | 此列居中对齐 | 此列右对齐 |
| :-------------------------- | :---------------------: | ---------------------------: |
| 1                           |            4            |                            7 |
| 2                           |            5            |                            8 |
| 3                           |            6            |                            9 |

| 表格中可以使用 `![caption](link)`。                    | 表格中可以使用数学公式。 | 表格中可以使用 `<img src="" width="">`。               |
| ------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------ |
| ![caption](https://raw.githubusercontent.com/EloitHao/EloitHao.github.io/master/_posts/2018-11-01-Introduction-to-Homology/assets/triangles.png) | $1+1=2$                     | <img src="https://raw.githubusercontent.com/EloitHao/EloitHao.github.io/master/_posts/2018-11-01-Introduction-to-Homology/assets/triangles.png" width="30%"> |

## Mathjax 数学公式

```markdown
这是行内公式 $\sum_{i=1}^{N} i $。这是独立公式。

$$
\sum_{i=1}^{N} i 
$$

[Mathjax](http://docs.mathjax.org/en/latest/tex.html) 语法类似 latex。你不能使用 `\usepackge`，但可以像这样使用 `\newcommand`

$$
\newcommand{\NewOp}[2]{\lbrace{#1}\mid \otimes{#2}\rbrace}
$$

之后 `\NewOp` 将在后续所有公式块中可用，无论是行内 $\NewOp{x}{y}$ 还是独立公式

$$
\NewOp{x}{y}
$$

在公式中要**格外小心**竖线符号和下划线。如果像 $|x|\ge 0$、$|0|=0$ 或 $\lbrace x | x\gt 0\rbrace$ 这样使用，会得到一堆乱码。

在 $\vert x\vert\ge 0$、$\vert 0\vert=0$ 中使用 `\vert`。在 $\lbrace x \mid x\gt 0$ 中改用 `\mid`。

另外，像这样使用下划线 $x_1$、$x_2$、$x_{c_2}^{c_3}$，以及 $y_{c_2}^{c_3}$，会被处理成 _这样_。

像这样用空格包裹下划线 $x _ 1$、$x _ 2$、$x _ {c _ 2}^{c _ 3}$，以及 $y _ {c _ 2}^{c _ 3 }$。$.
```

这是行内公式 $\sum_{i=1}^{N} i $。这是独立公式。

$$
\sum_{i=1}^{N} i 
$$

多余的空行很重要，否则你会得到
$$
\sum_{i=1}^{N} i
$$

[Mathjax](http://docs.mathjax.org/en/latest/tex.html) 语法类似 latex。你不能使用 `\usepackge`，但可以像这样使用 `\newcommand`

$$
\newcommand{\NewOp}[2]{\lbrace{#1}\mid \otimes{#2}\rbrace}
$$

之后 `\NewOp` 将在后续所有公式块中可用，无论是行内 $\NewOp{x}{y}$ 还是独立公式

$$
\NewOp{x}{y}
$$


## Mermaid 图表

 GFM 不支持，使用 JavaScript 实现。

```
​```mermaid
  graph LR;
    
  A[你好！] --> B{这是}
  B --> C(一个)
  C --> D((流程图！))
​```
```

```mermaid
  graph LR;
   A[你好！] --> B{这是}
  B --> C(一个)
  C --> D((流程图！))
```

## 标题

```
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

# 给博主的温馨提示

## Mathjax 注意事项

1. {% raw %}

   不要在公式中的任何地方使用 `{{`。比如 `\bra{{-2}^\psi}` 应改用 `{ {`。Jekyll 会将其解析为 liquid 标签。可以通过替换来完成。

   {% endraw %}

2. 不要在行内公式中使用 `x_1`，应写成 `x _ 1`。Jekyll 会将其解析为斜体。可以通过替换来完成，但要注意有些链接包含 `_`，替换后请确保修正这些链接。

```
   像这样使用下划线 $x_1$、$x_2$、$x_{c_2}^{c_3}$，以及 $y_{c_2}^{c_3}$，会被处理成 _斜体_。

   像这样用空格包裹下划线 $x _ 1$、$x _ 2$、$x _ {c _ 2}^{c _ 3}$，以及 $y _ {c _ 2}^{c _ 3 }$。
```

   像这样使用下划线 $x_1$、$x_2$、$x_{c_2}^{c_3}$，以及 $y_{c_2}^{c_3}$，会被处理成 _斜体_。

   像这样用空格包裹下划线 $x _ 1$、$x _ 2$、$x _ {c _ 2}^{c _ 3}$，以及 $y _ {c _ 2}^{c _ 3 }$。$.

3. ```
   在公式中要**格外小心**竖线符号和下划线。如果像 $|x|\ge 0$、$|0|=0$ 或 $\lbrace x | x\gt 0\rbrace$ 这样使用，会得到一堆乱码。
   
   在 $\vert x\vert\ge 0$、$\vert 0\vert=0$ 中使用 `\vert`。在 $\lbrace x \mid x\gt 0$ 中改用 `\mid`。
   ```

   在公式中要**格外小心**竖线符号和下划线。如果像 $|x|\ge 0$、$|0|=0$ 或 $\lbrace x | x\gt 0\rbrace$ 这样使用，会得到一堆乱码。

   在 $\vert x\vert\ge 0$、$\vert 0\vert=0$ 中使用 `\vert`。在 $\lbrace x \mid x\gt 0$ 中改用 `\mid`。

4. 在行内公式中使用 `\newline` 代替 `\\`。`\substack` 是一个非常有用的命令。

5. ```markdown
   独立公式多余的空行很重要，否则你会得到
   $$
   \sum_{i=1}^{N} i
   $$
   ```

   多余的空行很重要，否则你会得到
   $$
   \sum_{i=1}^{N} i
   $$

## YAML 前置元数据注意事项

不要在 YAML 前置元数据中使用 `[ ]`。

不要在 YAML 前置元数据中使用 `:`。如果必须使用，请用竖线语法：

```
title: >
   黑客帝国 2：重装上阵
```

## Typora 相关

`<img src="" width=80%>` 可以被 typora 渲染，但 Jekyll 只渲染 `<img src="" width="80%">`


## 脚注

这是一个脚注[^1]。脚注可以带有题注，比如[^this]。你可以多次引用同一个脚注，比如[^this]。脚注还有很多其他选项，比如[^this-one]。或者就像 [^that] 这样。这是一个指向页面的[引用式链接][linkid]。[这个][linkid] 也是一个链接。[这个][] 和 [那个] 也是。

# 脚注

脚注就像这样


[^1]: https://EloitHao.github.io
[^this]: https://EloitHao.github.io

[^this-one]: 
    > 引用块可以放在脚注中。

```
    代码块也可以
```

[^that]: 或者，当然，也可以是简单的段落。

[^linkid]: https://EloitHao.github.io "可选标题"

