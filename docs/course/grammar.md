# 基础语法<Badge text="重要" type="error"/>

## JavaScript 语法

项目中只有`config.js`文件用到了js语法，并且仅涉及到对象和数组，内容较为简单。

可以粗略地浏览`config.js`文件，可以发现，其结构是由大括号`{}`和中括号`[]`嵌套组成的。
### js 对象
用通俗易懂的话讲，对象就是用大括号`{}`括起来的。某个人是一个对象，包括很多属性：姓名、性别、身高、体重、家庭成员等等。
``` js
// 假如某个人是一个对象
{
    name: XXX, //姓名
    gender: XXX, //性别
    height: XXX, //身高
    weight: XXX, //体重
    family_member: [ //家庭成员
        mother: XXX,
        father: XXX,
    ],
}
```
其中的冒号`:`是键值对，可以理解为等于号`=`。

我们可以看到，对象里面的东西不但可以是属性，也可以是数组，同样也可以在里面嵌套对象，并没有严格的规则。

### js 数组
数组用中括号`[]`括起来，以导航栏 nav 的配置代码为例：
``` js
nav: [
    { text: '首页', link: '/' },
    { text: '教程介绍', link: '/guide/' },
    { text: '环境配置', link: '/environment/' },
    { text: '基础教程', link: '/course/' },
    { text: '网站部署', link: '/deployment/' },
    { text: 'Github', link: 'https://github.com/C01day/vuepress-teach' },
]
```
上述导航栏的代码中，数组`[]`里包含了多个对象`{}`，相当于`[ { 对象1 } { 对象2 } { 对象3 } ]`，每个对象中都有多种属性，用`:`键值对表示。当然，数组同样没有严格的规则，里面可以嵌套属性、数组、对象等多种多样的组合。

前面说到过，`config.js`是由大括号`{}`和中括号`[]`嵌套组成的。介绍这两个括号的目的，并不是说要自己去设计嵌套结构，而是为了在拓展时不至于无从下手。其实，不同功能的结构相对固定，只需要照着结构模仿就行。

::: tip 提示
最好在每个右括号`}` `]`或属性后面加一个逗号`,`，因为可能之后还有内容。
:::

## markdown 语法
我们可以用简单的纯文本格式来编写文档，但需要遵守一定的规则，这就是 markdown 语法，文件后缀为`.md`。在本博客的页面中，除了导航栏和侧边栏外，其他的部分都是用 markdown 写的。

在VSCode中，当编辑 md 文件时，点击右上角的预览按钮，可以实时看到它的效果。

<div align=center>
<img :src="$withBase('/屏幕截图 2021-08-03 133636.png')" style="zoom:80%;" />
</div>

想要了解详细的 markdown 语法，可以参考[ markdown 教程](https://www.runoob.com/markdown/md-tutorial.html)。下面介绍常用的 markdown 语法。

### 标题

要创建一个标题，需要在标题前面添加井号`#`，井号的数量代表了标题的级别。

例如本节标题的写法为`### 标题`，注意`#`和标题之间由一个空格隔开。

``` markdown
### 标题
```

::: danger 提示
只有二级及以下的标题会被系统自动录入侧边栏目录，即大于等于两个`#`的标题。

因此，一个 md 文件最好只有一个一级标题，即只有一个`#`的标题。
:::

### 列表
``` markdown
<!-- 无序列表 -->
* First item
* Second item
* Third item
* Fourth item

<!-- 有序列表 -->
1. First item
2. Second item
3. Third item
4. Fourth item

<!-- 和标题一样，注意中间需要有一个空格。 -->
```

### 代码

如果只要插入代码片段的话，可以用两个反引号`` ` ``包裹起来（在键盘左上角）。
``` markdown
`print()`
```
如果想插入整段代码的话，可以用两个`` ``` ``（三个反引号）将代码块包裹起来，并且可以在下面`markdown`的位置指定其他语言类型。
```` markdown
``` markdown
<!-- 源代码 -->
```
````

### 链接

要想插入一个链接，例如本网站的[首页](https://c01day.top)，可以使用如下代码：

``` markdown
[文字](链接)
```

### 图片

由于原来的 markdown 插入图片的语法在这里不适用，所以我们介绍另外一种用HTML插入图片的方法：

``` html
<div align=center>
<img :src="$withBase('/XXX.png')" style="zoom:80%;" />
</div>
```
`XXX.png`图片只需要将其放入`/docs/.vuepress/public/`路径下即可。

### 目录

输入

``` markdown
[[toc]]
```

输出

[[toc]]

### Emoji
Emoji 由两个`:`组成。

输入

``` markdown
:tada: :100:
```

输出

:tada: :100:

可以在[这里](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的Emoji。

### 提示框
提示框由两个`:::`组成，并在第一个`:::`后指定类型`tip/warning/danger/details`，代表提示框的颜色，并在类型后指定标题（可选）。

输入

``` markdown
::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险警告
:::

::: details 点击展开详情
这是一个详情块，在 IE / Edge 中不生效
:::
```
输出

::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger 危险
这是一个危险警告
:::

::: details 点击展开详情
这是一个详情块，在 IE / Edge 中不生效
:::

<br/><br/>

学习了 markdown 语法之后，就能够编写页面了，但在此之前，为了页面的完善，还需要配置[导航栏](/course/navigation_bar.md)和[侧边栏](/course/sidebar.md)。

<br/><br/>
<Valine></Valine>