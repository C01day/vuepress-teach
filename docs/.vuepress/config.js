module.exports = {
    title: '如何搭建博客',
    description: '基于vuepress',
    base: "/vuepress-teach/",
    themeConfig: {
        // sidebar: 'auto',
        sidebarDepth: 2,
        smoothScroll: true,
        lastUpdated: '上次更新',
        // displayAllHeaders: true,
        nav: [
          { text: '首页', link: '/' },
          { text: '测试', link: '/test/' },
          { text: '教程介绍', link: '/guide/' },
          { text: '环境配置', link: '/environment/' },
          { text: '基础教程', link: '/course/' },
          { text: '网站部署', link: '/deployment/' },
          { text: 'Github', link: 'https://github.com/C01day/vuepress-teach' }
        ],
        sidebar: {
          '/test/': [
            {
              title: 'vue的入门',   // 一级菜单名称
              collapsable: false, // false为默认展开菜单, 默认值true是折叠,
              sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
              children: [
                ['','VSCode安装'],
                ['vue_introduction.md','vue入门'],
                ['environment_config.md','环境配置'],
              ]
            }
          ],
          '/guide/': [
            {
              collapsable: false, // false为默认展开菜单, 默认值true是折叠,
              sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
              children: [
                '',
              ]
            }
          ],
          '/environment/': [
            {
              title: '环境配置',   // 一级菜单名称
              collapsable: false,
              sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
              children: [
                ['','主要内容'],
                ['nodejs_config.md','nodejs配置'],
                ['vscode_config.md','VSCode配置'],
                ['quick_start.md','快速搭建一个项目'],
              ]
            }
          ],
          '/course/': [
            {
              title: '基础教程',   // 一级菜单名称
              collapsable: true,
              sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
              children: [
                ['','主要内容'],
                ['directory_structure.md','目录结构'],
                ['navigation_bar.md','导航栏'],
                ['sidebar.md','侧边栏'],
                ['grammar.md',' markdown 基础语法'],
              ]
            }
          ],
        },
        // algolia: {
        //   apiKey: '<API_KEY>',
        //   indexName: '<INDEX_NAME>'
        // },
      },
      // plugins: [
      //   [
      //     'vuepress-plugin-comment',
      //     {
      //       choosen: 'valine', 
      //       // options选项中的所有参数，会传给Valine的配置
      //       options: {
      //         el: '#valine-vuepress-comment',
      //         appId: 'AeJrrFpeevG1UiXFy0RufFhV-gzGzoHsz',
      //         appKey: 'RFxdGsbQTJynqfAbQLh5Nzop',
      //         placeholder: '留下你想说的话吧~',
      //         avatar: 'mp',           // 评论用户的头像类型
      //       }
      //     }
      //   ]
      // ]
  }