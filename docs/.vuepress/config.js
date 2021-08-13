module.exports = {
    // theme: 'reco',
    title: '搭建博客 by 豆姆',
    description: '豆姆智能科技',
    // base: "/vuepress-teach/",
    dest: 'public',
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
        // sidebar: 'auto',
        // type: 'blog',
        sidebarDepth: 2,
        smoothScroll: true,
        lastUpdated: '上次更新时间',
        // displayAllHeaders: true,

        head: [
          ['link', { rel: 'icon', href: '/favicon.ico' }],
        ],

        nav: [
          { text: '首页', link: '/' },
          { text: 'vue组件', link: '/component/' },
          { text: '教程介绍', link: '/guide/' },
          { text: '环境配置', link: '/environment/' },
          { text: '基础教程', link: '/course/' },
          { text: '网站部署', link: '/deployment/' },
          { text: 'Github', link: 'https://github.com/C01day/vuepress-teach' },

          // {
          //   text: '语言',
          //   ariaLabel: '语言菜单',
          //   items: [
          //     {
          //         text: '亚洲', 
          //         items: [
          //             { text: '中文', link: '/language/chinese/' },
          //             { text: '日语', link: '/language/japanese/' }
          //         ]
          //     },
          //     {
          //         text: '欧洲',
          //         items: [
          //             { text: '英语', link: '/language/english/' },
          //             { text: '法语', link: '/language/french/' }
          //         ]
          //     },
          //   ]
          // }

        ],
        sidebar: {
          // '/test/': [
          //   {
          //     title: 'vue组件',   // 一级菜单名称
          //     collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          //     sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          //     children: [
          //       ['','vue组件'],
          //       // ['vue_introduction.md','vue入门'],
          //       // ['environment_config.md','环境配置'],
          //     ]
          //   }
          // ],
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
              collapsable: false,
              sidebarDepth: 2,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
              children: [
                ['','主要内容'],
                ['directory_structure.md','项目框架'],
                ['grammar.md','基础语法'],
                ['navigation_bar.md','导航栏'],
                ['sidebar.md','侧边栏'],
              ]
            }
          ],

          

        },
        // algolia: {
        //   apiKey: '<API_KEY>',
        //   indexName: '<INDEX_NAME>'
        // },
      },
      plugins: [
        [
          'one-click-copy', // 复制
          {
            copySelector: [
              'div[class*="language-"] pre',
              'div[class*="aside-code"] aside',
            ],
            copyMessage: '复制成功',
            duration: 1000,
            showInMobile: true,
          },
        ],

        // [
        //   'go-top'
        // ],

        // [
        //   '@vuepress/medium-zoom', 
        //   {
        //     selector: ".medium-zoom",
        //     options: {
        //       margin: 24,
        //       scrollOffset: 0
        //       // container: '#zoom-container',
        //       // template: '#zoom-template',
        //     }
        //   },
        // ],

        // [
        //   '@vuepress/blog'
        // ],

        // [
        //   'cursor-effects',
        //   {
        //      size: 2, // 粒子大小
        //      shape: 'star', // 粒子形状（可选 'star' 和 'circle'）
        //      zIndex: 999999999,
        //   },
        // ],

        // [
        //   'vuepress-plugin-comment',
        //   {
        //     choosen: 'valine', 
        //     // options选项中的所有参数，会传给Valine的配置
        //     options: {
        //       el: '#valine-vuepress-comment',
        //       appId: 'AeJrrFpeevG1UiXFy0RufFhV-gzGzoHsz',
        //       appKey: 'RFxdGsbQTJynqfAbQLh5Nzop',
        //       placeholder: '留下你想说的话吧~',
        //       avatar: 'mp',           // 评论用户的头像类型
        //     }
        //   }
        // ]
        [
          '@vuepress/back-to-top'
        ],
        [
          'sitemap', 
          {
            hostname: 'https://www.c01day.top/',
            dateFormatter: val => {
              return new Date().toISOString()
            }
          },
        ],
        [
          '@vuepress/last-updated', 
          {
            transformer: (timestamp, lang) => {
              const moment = require("moment");
              moment.locale(lang);
              return moment(timestamp).fromNow();
            }
          }
        ],
      ]
  }