## 目录结构<Badge text="基于本篇博客" type="error"/>
vuepress-teach 中的 docs 文件夹是项目中最重要的部分，所有页面文件和配置文件都放在这里，所以我们重点关注docs文件夹的目录结构。
```
.docs
├─ README.md
│  
├─.vuepress
│  ├─ config.js
│  │  
│  ├─components
│  │      Valine.vue
│  │      
│  ├─dist
│  │
│  └─public
│        
├─course
│      directory_structure.md
│      grammar.md
│      navigation_bar.md
│      README.md
│      sidebar.md
│
├─deployment
│
├─environment
│      nodejs_config.md
│      quick_start.md
│      README.md
│      vscode_config.md
│      
└─guide
       README.md
```
`.md`文件表示的是 markdown 文件，代表一个网页页面的原型。<Badge text="下节介绍" type="tip"/>

`.js`文件表示的是 JavaScript 文件，这里充当配置文件使用，涉及的语法非常简单，不用太过担心。<Badge text="下节介绍" type="tip"/>

`.vue`文件不用考虑。

`docs/.vuepress`: 用于存放全局的配置文件、静态资源等。

`docs/.vuepress/dist`: 打包后生成的文件，用于发布。

`docs/.vuepress/public`: 静态资源目录，将图片等资源放在里面。

`docs/.vuepress/config.js`: 项目的全局配置文件，在文件中配置导航栏、侧边栏等。

`docs/README.md`: 进去看到的网站封面。

`docs/environment`、`docs/guide`等: 每一个文件夹里面存放相应的文章。本篇博客中，`docs/guide`代表[教程介绍](/guide/)栏目，`docs/environment`代表[环境配置](/environment/)栏目，`docs/course`代表[基础教程](/course/)栏目，`docs/deployment`代表[网站部署](/deployment/)栏目。
::: tip 注意
每个文件夹里面都需要有一个`README.md`文件，作为文件夹的入口。
::: 

## 文件路径<Badge text="重要" type="error"/>

之前说到过， docs 文件夹是项目的主要内容所在，所有操作的路径都在 docs 文件夹下。

|        |使用的路径                      |代表的路径                     | 
|:------:|:-----------------------------|:----------------------------|
|跳转页面时|**`/`**                       |**`/docs/README.md`**       |
|进入文件夹|**`/XXX/`**                   |**`/docs/XXX/README.md`**   |
|插入图片时|**`"$withBase('/XXX.png')"`**|**`/docs/.vuepress/public/XXX.png`**|

当我们了解清楚所写的路径代表的真实位置时，就能知道什么文件应该放在哪个位置。

在上表中，分别说明了三种情况下所使用的路径和代表的实际路径，之后也会更加详细地提及。

我们注意到，除了`.vuepress`文件夹外，其他文件夹都有一个`README.md`文件。如同上面所说，它作为文件夹的入口文件，当我们访问某个文件夹时，首先访问的就是其中的`README.md`文件。换言之，当路径为`/XXX/`时，其实代表着`/XXX/README.md`（XXX为文件夹名称）。

<br/><br/>
<Valine></Valine>
