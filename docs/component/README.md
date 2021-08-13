---
# layout: Links
# title: Links
links:
  - title: 链接测试
    items:
      - sitename: Flint
        url: https://github.com/Renovamen/flint
        # img: /img/links/flint.svg
        desc: 山寨版 PyTorch
      - sitename: Metallic
        url: https://github.com/Renovamen/metallic
        # img: /img/links/meta.svg
        desc: 准元学习工具包
      - sitename: Alkaid
        url: https://github.com/Renovamen/alkaid
        # img: /img/links/rl.svg
        desc: 准强化学习工具包
      - sitename: Oh, Vue Icons!
        url: https://oh-vue-icons.netlify.app
        # img: /img/links/icon.svg
        desc: Vue 图标组件
      - sitename: Gungnir
        url: https://vuepress-theme-gungnir.vercel.app/
        # img: /img/links/gungnir.svg
        desc: VuePress 主题
  - title: 链接测试
    items:
      - sitename: What If?
        url: https://note.zxh.io
        desc: 乱七八糟的笔记
      - sitename: Portfolio-macOS
        url: https://portfolio.zxh.io/
        desc: 仿 masOS 的个人主页
      - sitename: OI & ACM
        url: https://oi.zxh.io
        desc: 退役蒟蒻的人生回顾
      - sitename: Leetcode
        url: https://leetcode.zxh.io
        desc: 失学失业少年的忧虑
      - sitename: Midgard
        url: https://resume.zxh.io
        desc: 来找简历吗勇士！
      - sitename: Fishmail
        url: https://fishmail.vercel.app
        desc: 上班摸鱼！
      - sitename: 荒野之息
        url: https://zelda.zxh.io
        desc: 仿 Ori 的荒野之息主页
      - sitename: 小游戏合集
        url: https://galaxy.zxh.io
        desc: 虽然其实也就俩游戏
      - sitename: Cube
        url: https://cube.zxh.io
        desc: 玩魔方吗朋友

sidebar: auto
---
<el-alert
    title="Vuepress框架基于Vue，自然也可以使用Vue。试着添加一些 Element UI 组件"
    type="success"
    show-icon>
</el-alert>

按钮：
<Button/>


输入框：
<div align=center>
<el-input v-model="input" placeholder="" style="width:98px"></el-input>
<el-badge :value="input" class="item">
  <el-button size="small" :plain="true" style="height:40px">显示</el-button>
</el-badge>
</div>

## 环境配置
### Element UI
先安装 Element UI 组件库
``` sh
npm install -D element-ui
# yarn add -D element-ui
```

### enhanceApp.js
找到`docs/.vuepress/enhanceApp.js`文件，添加如下内容
``` js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
  }) => {
    Vue.use(ElementUI)
    // ...做一些其他的应用级别的优化
  }
```

试着运行一下，如果提示了`core-js`的版本问题，可以参考[issue #2275](https://github.com/vuejs/vuepress/issues/2275)，安装
``` sh
npm install -D async-validator@1.11.5
# yarn add -D async-validator@1.11.5
```
## 使用方法

### 直接使用
在`.md`文件中直接使用
``` vue
<el-button type="primary" style="width:98px" >按钮</el-button>
```
### 注册为全局组件
按官方文档所示，所有在`.vuepress/components`中找到的`*.vue`文件将会自动地被注册为全局的异步组件。

例如，将`Test.vue`放在`.vuepress/components`路径下，然后在`.md`文件中调用

``` md
<Test/>
```

::: tip
同样，在`.md`文件中也可以写`<script>`、`<style>`、`YAML front matter`，`frontmatter`可以用`$page.frontmatter.XXX`获取到。
:::
<br/>
<br/>
<Valine/>
<script>
export default {
    data() {
        return {
            input: ''
        }
    },
};
</script>
