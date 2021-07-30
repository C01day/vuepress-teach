# 导航栏<Badge text="重要" type="error"/>
导航栏就是处在页面上方的组件，通过点击不同的按钮来进入不同的栏目。

关于导航栏和侧边栏的配置，都在`docs/.vuepress/config.js`文件中进行，它是一个全局配置文件，项目的很多相关设置都写在里面。

## 导航栏配置

``` js
// .vuepress/config.js
module.exports = {
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '教程介绍', link: '/guide/' },
          { text: '环境配置', link: '/environment/' },
          { text: '基础教程', link: '/course/' },
          { text: '网站部署', link: '/deployment/' },
          { text: 'Github', link: 'https://github.com/C01day/vuepress-teach' }
        ],
    }
}
```

这是本篇博客的导航栏配置，都写在`themeConfig.nav`里。`text`代表显示的文字，`link`表示跳转的路径。

上节内容中提到过，路径为`/`时表示的真实路径为 docs 文件夹里的`README.md`。因此点击`首页`时，跳转到的页面是 docs 下的`README.md`文件。

::: danger 提示
**<font color=red>之后所提到的路径都在 docs 文件夹下，不再重复说明。</font>**
:::

知道这个知识点以后，可以举一反三。我们可以看到，`教程介绍`的`link`为`/guide/`，可以推断出真实路径为`/guide/README.md`。因此点击教程介绍时，跳转到的页面是`guide`文件夹中的 **`README.md`** 文件。

## 导航栏下拉列表

当我们提供一个`items`数组时，可以将导航栏中的按钮设置为下拉列表：
``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: '语言',
        ariaLabel: '语言菜单',
        items: [
          { text: '中文', link: '/language/chinese/' },
          { text: '日语', link: '/language/japanese/' }
        ]
      }
    ],
  }
}
```

也就是说，点开`语言`按钮，出现`中文`和`日语`两个选项。

<div align=center>
<img :src="$withBase('/屏幕截图 2021-07-30 110528.png')" style="zoom:80%;" />
</div>

::: tip 提示
`ariaLabel`是标签的描述，可以不要。
:::

## 下拉列表分组
同时，也可以在下拉列表中分组，让下拉列表更加符合逻辑。方法就是在`items`里面嵌套`items`。

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: '语言',
        ariaLabel: '语言菜单',
        items: [
            {
                text: '亚洲', 
                items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: '日语', link: '/language/japanese/' }
                ]
            },
            {
                text: '欧洲',
                items: [
                    { text: '英语', link: '/language/english/' },
                    { text: '法语', link: '/language/french/' }
                ]
            },
        ]
      }
    ],
  }
}
```
点开语言按钮，出现四个选项，其中`中文` `日语`按钮分在`亚洲`组，`英语` `法语`按钮分在`欧洲`组。
<div align=center>
<img :src="$withBase('/屏幕截图 2021-07-30 111700.png')" style="zoom:80%;" />
</div>



<br/><br/>
<Valine></Valine>