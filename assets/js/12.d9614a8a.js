(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{469:function(t,s,a){"use strict";a.r(s);var e=a(34),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("el-alert",{attrs:{title:"Vuepress框架基于Vue，自然也可以使用Vue。试着添加一些 Element UI 组件",type:"success","show-icon":""}}),t._v(" "),a("p",[t._v("按钮：\n"),a("Button")],1),t._v(" "),a("p",[t._v("输入框：\n")]),a("div",{attrs:{align:"center"}},[a("el-input",{staticStyle:{width:"98px"},attrs:{placeholder:""},model:{value:t.input,callback:function(s){t.input=s},expression:"input"}}),t._v(" "),a("el-badge",{staticClass:"item",attrs:{value:t.input}},[a("el-button",{staticStyle:{height:"40px"},attrs:{size:"small",plain:!0}},[t._v("显示")])],1)],1),a("p"),t._v(" "),a("h2",{attrs:{id:"环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[t._v("#")]),t._v(" 环境配置")]),t._v(" "),a("h3",{attrs:{id:"element-ui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-ui"}},[t._v("#")]),t._v(" Element UI")]),t._v(" "),a("p",[t._v("先安装 Element UI 组件库")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D element-ui\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yarn add -D element-ui")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"enhanceapp-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enhanceapp-js"}},[t._v("#")]),t._v(" enhanceApp.js")]),t._v(" "),a("p",[t._v("找到"),a("code",[t._v("docs/.vuepress/enhanceApp.js")]),t._v("文件，添加如下内容")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ElementUI "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui/lib/theme-chalk/index.css'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// VuePress 正在使用的 Vue 构造函数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ElementUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...做一些其他的应用级别的优化")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("试着运行一下，如果提示了"),a("code",[t._v("core-js")]),t._v("的版本问题，可以参考"),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/issues/2275",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue #2275"),a("OutboundLink")],1),t._v("，安装")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D async-validator@1.11.5\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yarn add -D async-validator@1.11.5")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("h3",{attrs:{id:"直接使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接使用"}},[t._v("#")]),t._v(" 直接使用")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v(".md")]),t._v("文件中直接使用")]),t._v(" "),a("div",{staticClass:"language-vue line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("98px")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("按钮"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("el-button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"注册为全局组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册为全局组件"}},[t._v("#")]),t._v(" 注册为全局组件")]),t._v(" "),a("p",[t._v("按官方文档所示，所有在"),a("code",[t._v(".vuepress/components")]),t._v("中找到的"),a("code",[t._v("*.vue")]),t._v("文件将会自动地被注册为全局的异步组件。")]),t._v(" "),a("p",[t._v("例如，将"),a("code",[t._v("Test.vue")]),t._v("放在"),a("code",[t._v(".vuepress/components")]),t._v("路径下，然后在"),a("code",[t._v(".md")]),t._v("文件中调用")]),t._v(" "),a("div",{staticClass:"language-md line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("同样，在"),a("code",[t._v(".md")]),t._v("文件中也可以写"),a("code",[t._v("<script>")]),t._v("、"),a("code",[t._v("<style>")]),t._v("、"),a("code",[t._v("YAML front matter")]),t._v("，"),a("code",[t._v("frontmatter")]),t._v("可以用"),a("code",[t._v("$page.frontmatter.XXX")]),t._v("获取到。")])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("Valine"),t._v(" "),a("script",[t._v("\nexport default {\n    data() {\n        return {\n            input: ''\n        }\n    },\n};\n")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);