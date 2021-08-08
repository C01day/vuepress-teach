---
sidebar: auto
---

# 网站部署<Badge text="编写中" type="error"/>
有了初步的网站，就可以部署了。

部署之后别人可以直接通过网址访问，或者在搜索引擎中搜索关键字访问。

虽然部署是一件麻烦事，但由于只是静态网页，因此选择部署在 Github pages 或 vercel 上，能省下不少步骤。

::: tip 目录
部署的章节分为以下内容：
* 学会使用Github
  * 创建账号和仓库
  * 安装Git
  * 安装Github Desktop
* Github pages 部署
* vercel 部署
* 自定义域名
  * Github pages自定义域名
  * vercel自定义域名
* 如何让百度和Google搜索到？
  * 生成站点地图 sitemap
  * 百度站长
  * Google Search Console
:::

::: warning 提示
由于步骤有些多，可能更新不及时。

同时，部署只是锦上添花，并不是必要的事情。如果想部署，而我又没来得及更新的话，可以按照目录顺序搜索相应的关键字，网上都有相关的资料。
:::

## 使用Github

### 创建账号和仓库
部署要用到 Github pages 和 vercel ，我们将代码文件放在 Github 上。因此需要创建一个账号，并新建一个项目仓库(repositories)用来存储项目文件，名字建议为`<USERNAME>.github.io`，`<USERNAME>`为你的 Github 用户名，这样能免去设置`Base`的麻烦。

### 安装Git
要将文件上传到 Github ，需要用到 Git 工具，它是一个版本控制系统，能很好地管理代码。
可以在[Git官网](https://git-scm.com/downloads)下载它，下载完后具体的细节可以查看网上的教程。

### 安装 Github Desktop
GitHub Desktop 是一个可以与 GitHub 交互的应用程序，可以在[官网](https://desktop.github.com/)中下载。

具体的使用方法可以参考[GitHub Desktop 文档](https://docs.github.com/cn/desktop)。如果Github上有仓库，就克隆远程仓库到本地。如果没有的话也可以在 Github Desktop 中直接创建。具体的方法文档中都有详细的介绍。
<div align=center>
![windows-file-menu.png](https://i.loli.net/2021/08/08/t6eQ1Nx5bidBvcy.png)
</div>


顺带一提，第一次使用需要配置SSH密钥，来获得读取远程仓库的权限，相应方法可以参考官网提供的[生成SSH密钥教程](https://docs.github.com/cn/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)。
<div align=center>
![](https://i.loli.net/2021/08/08/HdM3ESgFB8G6Cvu.png)
</div>


### 相关名词解释

- Repository（版本库，仓库）：顾名思义，就是仓库

- Branch（分支）：主分支master，可以建立数个分支issue，进行功能添加或者bug修复，之后合并（merge）到master分支。

- Push（推送）：推送本地修改到远程服务器上对应的仓库。

- Pull（拉取）：拉取远程服务器上面对应仓库的修改到本地。

- Merge（合并）：分支合并，要留心分支合并的冲突。

- Revert（回退）：适合用于逐个版本回退，不能跨修改记录回退，也就是只能一步一步的往后回退。

### 提交更新

要提交代码的更新到远程仓库，首先需要点击左下角的 commit 按钮
<div align=center>
![click-commit-to-master.png](https://i.loli.net/2021/08/07/hDSAyJBC6Hb7tIL.png)
</div>

然后点击上面的 push ，即可提交更新。由于 Github 访问速度过慢，可能会超时报错，多试几次即可，或者用 VPN 加速。
<div align=center>
![push-to-origin.png](https://i.loli.net/2021/08/07/UbQZaCvpOMJoAnI.png)
</div>

## Github pages 部署
在部署之前，我们需要创建一个 gh-pages 分支，之后将打包以后的代码放在 gh-pages 分支中。
<div align=center>
![new-branch-button-mac.png](https://i.loli.net/2021/08/08/pRsED7tQ8WkSVqu.png)
</div>

然后在项目文件夹下新建文件`deploy.sh`作为打包命令的脚本，代码如下：

``` sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'c01day.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
            
cd -
```
<br/><br/>
::: tip 解释
- `npm run build`打包命令生成的静态文件在`docs/.vuepress/dist`中，之后将其上传到`gh-pages`分支上。可以在`config.js`中用dest指定打包路径。
- 将`git push`命令中的`<USERNAME>`替换为自己 Github 账号的用户名。
- 在VSCode菜单栏点击打开终端，或者用快捷键`` Ctrl+` ``（在键盘左上角），在命令行中用`sh`命令运行文件。
- 
``` sh
sh deploy.sh
```

:::

`gh-pages`代码上传完之后，点击项目的`Settings->Pages`，选择`gh-pages`作为资源
<div align=center>
![屏幕截图 2021-08-08 013408.png](https://i.loli.net/2021/08/08/A7bRWK5vEqwf4H6.png)
</div>

然后就会出现网址
<div align=center>
![屏幕截图 2021-08-08 013745.png](https://i.loli.net/2021/08/08/NMFbwlsng3TjC8p.png)
</div>

当然，上面的命令是将静态文件提交到`gh-pages`分支上，也别忘了将代码更新提交到主分支上。

## Vercel 部署

由于在 Github pages 上部署的网页不能被百度蜘蛛爬取到，因此我们迁移到 Vercel 。当然，要是不怎么在乎百度是否收录，可以跳过此节。

首先在[vercel官网](https://vercel.com/)注册账号。之后创建一个项目，导入 Github 上的仓库，步骤默认即可。

需要注意的是， vercel 上部署的项目默认是`main`分支，会在分支中寻找`public`文件，因此第一次导入

<br/><br/>
<Valine></Valine>