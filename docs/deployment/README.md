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
* Vercel 部署
* 自定义域名
  * Github pages自定义域名
  * Vercel自定义域名
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
部署要用到 Github pages 和 Vercel ，我们将代码文件放在 Github 上。因此需要创建一个账号，并新建一个项目仓库(repositories)用来存储项目文件，名字建议为`<USERNAME>.github.io`，`<USERNAME>`为你的 Github 用户名，这样能免去设置`Base`的麻烦。

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
在部署之前，我们需要创建一个 gh-pages 分支，之后将打包以后的静态文件放在 gh-pages 分支中。
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
![](https://i.loli.net/2021/08/08/A7bRWK5vEqwf4H6.png)
</div>

然后就会出现网址
<div align=center>
![](https://i.loli.net/2021/08/08/NMFbwlsng3TjC8p.png)
</div>

当然，上面的命令是将静态文件提交到`gh-pages`分支上，也别忘了将代码更新提交到主分支上。

## Vercel 部署

由于在 Github pages 上部署的网页不能被百度蜘蛛爬取到，因此我们迁移到 Vercel 。当然，要是不怎么在乎百度是否收录，可以跳过此节。

### 更改 dest
之前打包的路径为`docs/.vuepress/dist`，由于 Vercel 上部署项目的`Preview Branches`会在分支中打包并寻找`public`文件，因此需要在`config.js`中设置 dest ，将打包文件路径改为`public`：

``` js
// .vuepress/config.js
module.exports = {
  dest: 'public',
}
```
并将之前`deploy.sh`中的`cd docs/.vuepress/dist`改为
``` sh
# deploy.sh
# 原来是 cd docs/.vuepress/dist
cd public
```

然后将之前`docs/.vuepress/dist`路径下的文件删除，并尝试`build`一次。

### 导入项目

首先在[vercel官网](https://vercel.com/)注册账号。之后创建一个项目，导入 Github 上的仓库，步骤默认即可。

不论有没有部署成功，先跳到下一步把`Production Branch`改了。

### 更改`Production Branch`
我们需要将`Production Branch`更改为`gh-pages`分支，让`main`分支作为`Preview Branches`。

其实就和之前 Github pages 的部署一样，将`gh-pages`分支的静态文件作为网页源代码。

步骤很简单，到项目的`Settings->Git`，找到`Production Branch`，把分支从`main`改为`gh-pages`就行。
<div align=center>
![](https://i.loli.net/2021/08/08/ykie23LXMzKZqvu.png)
</div>

之后任意提交一次更新到`gh-pages`分支上，Vercel 就会自动部署了，可以点击查看部署的网站。
<div align=center>
![](https://i.loli.net/2021/08/08/Xx62VvJ7UqBfzFg.png)
</div>

## 自定义域名
要自定义域名，首先需要买一个域名，服务商随意，我用的是阿里云。之后实名认证等步骤不再赘述。
### Github pages 自定义域名
#### 配置域名解析

转到域名服务商后台的域名解析，添加如下两条记录：
<div align=center>
![](https://i.loli.net/2021/08/08/IKlnEGsAwpxHVQ3.png)
</div>

::: tip 提示
- 记录值为`<USERNAME>.github.io`，`<USERNAME>`为你的 Github 用户名。
- 记录类型选择 CNAME 。
- 主机记录分别为`www`和`@`，`@`也就是不填主机记录的默认值。
- 如果项目在其他仓库，记录值同样为`<USERNAME>.github.io`。
:::

#### 配置 CNAME
首先在`<USERNAME>.github.io`仓库首页新建一个文件`CNAME`（如果项目在其他仓库，也是在`<USERNAME>.github.io`仓库中配置域名），内容为你的域名，例如
``` CNAME
c01day.com
``` 
并将`deploy.sh`文件中的以下内容去掉注释，同样换为自己的域名
``` sh
# 如果是发布到自定义域名
# echo 'c01day.com' > CNAME
```

之后在仓库中的`Settings->Pages`下，可以看到`Custom domain`会变为自己的域名。
<div align=center>
![](https://i.loli.net/2021/08/08/rBHfhzLJVqZKl2C.png)
</div>

在上面会出现网址，为`https://www.XXX.com/`，例如`https://www.c01day.com/`。

#### 如果是自定义仓库应该怎么做
**<font color=red>以上所提到的仓库默认为`<USERNAME>.github.io`，如果项目在其他自定义仓库中，请看下面提示（以仓库名`blog`为例）</font>**

::: tip 如果项目在自定义仓库
- 域名解析配置不变，和上面一样。
- CNAME 文件依然放到`<USERNAME>.github.io`中，也就是说，最好有一个`<USERNAME>.github.io`仓库。
- `deploy.sh`文件中的`echo 'XXX.com' > CNAME`就不用了。
- 在代码的`config.js`中，添加`base: "/<REPO>/",`，`<REPO>`为自定义仓库名，例如`blog`
``` js
// .vuepress/config.js
module.exports = {
  base: "/<REPO>/",
  // 例如 base: "/blog/",
}
```
- 在`.md`文件中，图片的引用路径要加上`$withBase`，注意`src`是`v-bind`语法，前面有个`:`。
``` html
<img :src="$withBase('/XXX.png')"/>
```
:::

之后，到自定义仓库的`Settings->Pages`中可以看到，部署的网址为`https://www.XXX.com/<REPO>/`，例如`https://www.c01day.com/blog/`。

### Vercel 自定义域名
::: danger 注意
同一个域名不能同时用在 Github pages 和 Vercel 上。
:::
在 Vercel 刚刚部署项目的`Settings->Domains`中，添加自己的域名
<div align=center>
![](https://i.loli.net/2021/08/08/kFftuxGcmKzw3XN.png)
</div>

按照给的提示，添加两条解析
<div align=center>
![](https://i.loli.net/2021/08/08/W6KMcksqv7FhdD8.png)
</div>

::: tip 提示
- 注意要将之前 Github pages 中设置的域名解析删除，因为是互斥的。
- 并不清楚其他人的IP是不是也为76.76.21.21，据说有些IP被墙了。
:::

然后就配置完成了，并且签发了证书
<div align=center>
![](https://i.loli.net/2021/08/08/yrW29GHwPmscolQ.png)
</div>

## 如何让百度和Google搜索到？

### 生成站点地图 sitemap
站点地图`sitemap.xml`是为了让蜘蛛更好地爬取到我们的网页。我们需要安装生成站点地图的插件
``` sh
npm install vuepress-plugin-sitemap
```
然后在plugins中导入
``` js
// .vuepress/config.js
module.exports = {
  plugins: {
    'sitemap': {
      hostname: 'https://www.c01day.com/' //为你的自定义域名
    }
  }
}
```
之后每次`build`后都会在静态资源文件夹中生成`sitemap.xml`文件，用来上传到百度站长和 Google Search Console 。

### 百度站长
登录百度站长，添加自己的网址，会有三种方式验证你对网站的所属权，下面都有具体的操作步骤
<div align=center>
![](https://i.loli.net/2021/08/08/OCLGjJ4vd27A6yl.png)
</div>

验证完后提交自己的`sitemap.xml`，例如
<div align=center>
![](https://i.loli.net/2021/08/08/1HFt37JVdyRQCsc.png)
</div>

### Google Search Console
同样，到[Google Search Console](https://search.google.com/search-console/about)中添加网址
<div align=center>
![](https://i.loli.net/2021/08/08/uI5Ta9yNxg7iPBH.png)
</div>

我一般选择右边的。

同样，有几种方式验证所属权
<div align=center>
![](https://i.loli.net/2021/08/08/G6T3NMHgelmoF4a.png)
</div>

之后同样提交站点地图就行。

可以选择请求编入索引
<div align=center>
![](https://i.loli.net/2021/08/08/6SGp7harcekRPo9.png)
</div>

网站收录后会变成这样
<div align=center>
![](https://i.loli.net/2021/08/08/duPNOK9HMfm83Tj.png)
</div>

OK，现在所有的都已经讲完了，可能有很多细节没有涉及到，也可能有很多错误和不完善的地方，我也正在尝试着去解决。😇

顺带一提，百度收录得是真的慢诶🙃


<br/><br/>
<Valine></Valine>