# 快速搭建一个项目
1. 新建一个文件夹`vuepress-starter`（可以是自己喜欢的名字）。
2. 进入文件夹，按住`shift+鼠标右键`选择`在此处打开Powershell窗口`，从而打开此文件夹的命令行。
3. 使用 npm 进行初始化
   ``` sh
   npm init
   ```
   之后会出现`package.json`文件。

4. 将 VuePress 安装为本地依赖
   ``` sh
   npm install -D vuepress
   ```
   之后会出现`node_modules`文件夹，里面是第三方库。

5. 在`package.json`中添加一些 scripts
   ``` json
   {
      "scripts": {
         "docs:dev": "vuepress dev docs",
         "docs:build": "vuepress build docs"
      }
   }
   ```
6. 为了快速配置目录，可以到我的[Github仓库](https://github.com/Wang-Si-Tu/vuepress-starter)中将代码下载下来，然后将文件夹里面的东西复制粘贴到`vuepress-starter`文件夹中，且重复的文件都覆盖掉。<Badge text="参考目录结构" type="tip" vertical="top"/>
   <div align=center>
   <img :src="$withBase('/屏幕截图 2021-07-28 120409.png')" style="zoom:80%;" />
   </div>

7. 最后打开文件夹的命令行，输入以下命令，开始编译并调试
   ``` sh
   npm run dev
   ```
   就可以看到一个简单的网页了。

:::tip 提示
调试的时候，除了导航栏和侧边栏的修改，其他文字类型的修改会实时反应到网页上，例如添加一段文字等等。因此，不必每次修改的时候都重新编译。
:::

如果觉得编译的时候每次都需要输入`npm run dev`很麻烦，可以点开左边的`运行和调试`按钮（第四个），在上面找到下拉框，选择`node.js`。

<div align=center>
<img :src="$withBase('/屏幕截图 2021-07-30 151510.png')" style="zoom:80%;" />
</div>

然后在弹出的框中选择`run script:dev`。之后编译的时候就点击那个绿色三角形就行。

<div align=center>
<img :src="$withBase('/屏幕截图 2021-07-30 151652.png')" style="zoom:80%;" />
</div>

<br/><br/>
<Valine></Valine>
