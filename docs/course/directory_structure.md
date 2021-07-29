# 目录结构<Badge text="基于本篇博客" type="error"/>
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

`docs/.vuepress`: 用于存放全局的配置文件、静态资源等。

`docs/.vuepress/dist`: 打包后生成的文件，用于发布。

`docs/.vuepress/public`: 静态资源目录，将图片等资源放在里面。

`docs/.vuepress/config.js`: 项目的全局配置文件，在文件中配置导航栏、侧边栏等。

`docs/README.md`: 进去看到的网站封面。

`docs/environment`、`docs/guide`等: 每一个文件夹里面存放相应的文章。本篇博客中，`docs/guide`代表[教程介绍](/guide/)栏目，`docs/environment`代表[环境配置](/environment/)栏目，`docs/course`代表[基础教程](/course/)栏目，`docs/deployment`代表[网站部署](/deployment/)栏目。
::: tip 注意
每个文件夹里面都需要有一个`README.md`文件，作为文件夹的入口。
::: 

<br/>
<Valine></Valine>