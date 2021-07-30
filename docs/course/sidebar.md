# 侧边栏<Badge text="重要" type="error"/>

侧边栏处在页面左边，作为目录使用，点击目录可以跳转到相应的标题下。

导航栏菜单相当于给文章分类，每个分类下都有不同的侧边栏（或者说目录）。

::: warning 提示
当然，要是为了简洁，不弄侧边栏也是可以的。但就需要把所有的文章放导航栏的下拉列表里，显得比较拥挤。
:::

## 侧边栏配置

下面介绍如何配置侧边栏，以`基础教程`(`/course/`)栏目为例：

``` js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        sidebar: {
          '/course/': [
            {
              title: '基础教程',   // 一级菜单名称
              collapsable: false,
              sidebarDepth: 2,
              children: [
                ['','主要内容'],
                ['directory_structure.md','项目框架'],
                ['navigation_bar.md','导航栏'],
                ['sidebar.md','侧边栏'],
                ['grammar.md',' markdown 基础语法'],
              ]
            }
          ],
        },
    }
}
```

侧边栏在`themeConfig.sidebar`中配置。以`基础教程`(`/course/`)为例（上述代码第5-18行），当在导航栏中点击`基础教程`时，跳转到我们之前所配置的`/course/`路径。而在侧边栏中，我们将配置`/course/`路径下的文件。

第5行中，用`/course/`表示我们要配置的侧边栏的路径。之后的`title`表示侧边栏目录的大标题。`collapsable`表示是否折叠，默认为`true`表示折叠。`sidebarDepth`表示侧边栏目录的深度，不用深入了解。

之后在`children`中配置子文件，代表这些文件的标题将会被配置为`/course/`下的侧边栏目录，点击侧边栏相应的标题会跳转到对应的文章。

首先是入口文件`README.md`，之前讲过，它不需要显式地指定，因此用`''`表示便可（代码第11行），然后用方括号括起来，再在后面指定这篇文章的标题。

再比如本篇文章`sidebar.md`，路径为`/course/sidebar.md`，只需把它放在`/course/`下面，然后指定文章的标题便可。

:::tip 提示
配置的标题都是文章的大标题，文章中的小标题不用我们自己在侧边栏中配置，系统会帮我们自动生成。
:::

<br/><br/>
<Valine></Valine>