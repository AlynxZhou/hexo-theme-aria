hexo-theme-aria
===============

A Hexo theme inspired by Kalafina's song ARIA.
----------------------------------------------

主题预览：[喵's StackHarbor](https://sh.alynx.xyz/)

# 主题特色：

  - 优雅的响应式双栏设计和 CSS 动画。

  - 内置评论系统（目前支持 [HyperComments](https://www.hypercomments.com/) 和 [Disqus](https://disqus.com/)）。

  - 不蒜子访问量计数。

  - Hexo 搜索支持（通过安装 `hexo-generator-search` 并参照其 [说明文件](https://github.com/PaicHyperionDev/hexo-generator-search) 进行配置来生成搜索索引）。

  - 多语言支持（目前支持简体中文，繁体中文和英文，欢迎添加翻译）。

  - [Lightgallery](https://sachinchoolur.github.io/lightgallery.js/) 实现的图片浏览。

  - RSS 支持（安装 `hexo-generator-feed` 并参照其 [说明文件](https://github.com/hexojs/hexo-generator-feed) 进行配置来生成所需文件）。

# 使用说明：

注意：使用静态网站生成器需要有一定的相关知识，如果您对这方面毫无了解，不建议使用 Hexo 和 ARIA 建站。请您确定您有基础的 Hexo、YAML、Markdown 和 Web 知识再向下进行。

  1. 进入你的 Hexo 站点目录，安装所需的插件：

```
$ npm install --save hexo-renderer-nunjucks hexo-generator-search hexo-generator-feed
```

  2. 克隆此仓库到 Hexo 站点下的 `themes/aria` 目录，如下：

```
$ git clone https://github.com/AlynxZhou/hexo-theme-aria themes/aria
```

  3. 修改你 Hexo 站点的 `_config.yml`：

    1. 把主题修改为 `aria`：

```yaml
theme: aria
```

    2. 添加 Hexo 搜索插件的配置：

```yaml
# Hexo localsearch
search:
  path: search.xml
  field: all
```

    3. 添加 Hexo RSS 插件的配置：

```yaml
# Hexo generator feed
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
```

  4. 复制 ARIA 目录中的 `_config.yml.example` 为 `_config.yml`：

```
$ cp themes/aria/_config.yml.example themes/aria/_config.yml
```

  5. 修改 ARIA 目录下的 `_config.yml`：

    1. 菜单设置：

      如果你想要启用“分类”和“标签”页面，取消注释 `categories` 和 `tags`：

```yaml
menu:
  home: /
  archives: archives/
  categories: categories/
  tags: tags/
  about: about/
```

    2. 生成 Favicon：

      首先准备好一张图片作为你想要的 favicon 的原图，然后访问 <https://realfavicongenerator.net/> 生成各种不同浏览器的 favicon，然后下载压缩包，解压到你站点目录下 `source/favicons` 目录里（没有则创建一个）。ARIA 会自动加载这些图标。

    3. 网站关键词：

      将 `keywords` 项设置为关键词列表。

    4. CreativeCommons 许可证：

      为了保证美观，ARIA 会将链接显示在网站底部。可选的许可证有 `by`、`by-sa`、`by-nd`、`by-nc`、`by-nc-sa`、`by-nc-nd`，有关它们的区别参见 <https://creativecommons.org/licenses/>。

    5. 代码高亮主题：

      ARIA 内置了四种常见代码高亮主题，分别是 `atom-one-dark`、`atom-one-light`、`solarized-dark`、`solarized-light`。

    6. 自定义信息：

      `custom_info` 项的值会显示在网站底部，出于格式考虑请不要设置过长的字符串。

    7. 头像：

      设置 `avatar` 项为你头像的链接，例如设置 `avatar: images/myavatar.png`，则你需要把自己的头像放置到站点根目录下的 `source/images/myavatar.png`。

    8. 自定义 Logo：

      设置方法类似于头像，`logo` 项的值将会被显示在默认顶部 `ARIA` 的位置。

    9. 自定义主题色和标签色：

      主题色 `color` 会被用于一些浏览器的辅助变色，例如 Android 版 Chrome 的标题栏颜色，默认为网站的深色。标签色 `tags_color` 为一个列表，文章的标签会循环使用这个列表的颜色，由于颜色以 `#` 开头，需要加双引号以防止被作为 YAML 的注释。如果你没有特殊需求，最好不要修改这里的颜色。

    10. Google 页面验证：

      如果想把你的网站提交给 Google，需要证明你是此网站的所有者，当 Google 要求你验证时，选择“使用 <meta> 元标签”，复制 `content` 属性的值，填写到 `google_verification` 项，然后重新生成发布网站。

    11. 网站创建年份：

      将 `since` 值设为你网站的创建年份，如果留空或者填写年份与当前年份一致，网站底部只会显示当前年份，否则显示 `创建年份 - 当前年份`。

    12. 搜索设置：

      如果需要启用搜索，首先确保第一步中安装了 `hexo-generator-search`，并且按照第二步配置过了，然后将 `search` 设置为 `true`，搜索框会显示在侧边栏的上部。

    13. 侧边栏设置：

      有 `left`、`right` 和 `false` 三种选择，设置为 `false` 则不会显示侧边栏。

    14. 动画：

      将 `animate` 设置为 `true` 则会启用卡片的翻转动画效果（不建议启用，在某些浏览器和较低配置电脑上可能会导致卡顿）。

    15. 不蒜子计数：

      如果需要关闭不蒜子计数，将 `busuanzi` 设置为 `false`，否则在页面底部会显示 `站点访问次数`、`站点访问人数`、`页面访问次数`。

    16. MathJax 设置：

      [MathJax](https://www.mathjax.org/) 是一套用于在网页上显示数学公式和符号的 JavaScript 排版库，由于其体积较大，ARIA 没有内置，如果你有数学写作需要，首先建议将 `mathjax` 下的 `cdn` 项设置为你要使用的 MathJax CDN，然后在需要使用的页面添加文件头 `mathjax: true`。设置 `global` 为 `true` 可以在全部页面启用 MathJax，但可能会拖慢非数学页面的显示速度。

    17. 常用库 CDN：

      可以对 ARIA 内置的库使用 CDN 加速，首先将 `lib_cdn` 下的 `enable` 设置为 `true`，然后将 CDN 地址添加到配置中即可，如果你不了解自己在做什么，请直接跳过这部份。

    18. 社交链接：

      在 `social` 下添加你的个人社交链接，格式如下：

```yaml
social:
  显示名称:
    link: 链接地址
    icon: 显示的 Font Awesome 图标 class 属性
```

      前往 [Font Awesome](https://fontawesome.com/) 获取你想要的图标。

    19. 友情链接：

      在 `blogroll` 下添加友情链接，格式如下：

```yaml
blogroll:
  显示名称: 链接地址
```

    20. 评论系统：

      首先将 `comment` 下 `enable` 设成 `true` 以全局启用评论（首页、归档、分类、标签页面除外），然后填入你的 HyperComments ID 或者 Disqus Shortname。如果你有哪个页面想单独关闭评论，添加文件头 `comment: false` （`comment` 不是 `comments`！）。

      Tips：如果想批量更改新生成的文件的文件头，编辑站点目录下 `scaffolds` 目录里的文件，Hexo 会把这个目录内的文件作为生成新文件时的模板。

    21. 打赏：

      将 `reward` 下 `enable` 设置为 `true` 启用打赏，然后在 `comment` 项设置你的打赏提示语，然后按需设置三种打赏方式的二维码（微信支付，支付宝，比特币），设置方式同头像，如果想关闭某一项注释即可。

  6. 自定义 CSS 和 JavaScript：

    如果你需要用自定义的 CSS 覆盖 ARIA 内置的 CSS 样式，可以编辑 `themes/aria/source/css/custom.styl`，这个文件会被最后加载，同时不会影响版本控制。

    如果你需要使用自定义的 JavaScript，可以编辑 `themes/aria/source/js/custom.js`，这个文件会被最后加载，同时不会影响版本控制。

# 开源许可证：

  Apache-2.0

# 特别注意：

  我给这个主题定下的目标是精简的配置和优雅的样式。如果你需要比如说自定义的彩色文字块的话你可以修改它然后提一个 Pull Request，如果这些功能很有用我会很快合并。但是有些主题走了极端，它们要么号称自己“简洁/更简洁/最简洁”但实际上是简陋，要么是给自己塞了一大堆功能和乱七八糟的配置，其中有些是大部分用户不会用到或者使用默认值的，我不想要这样的功能。

  例如说我只打算给这个主题添加 Hexo 本地搜索（这个插件生成一个索引文件然后用主题内部的 JavaScript 就可以查询而不需要购买数据库服务）因为它很容易就能工作。真的有人会去付费使用 Swift 搜索或者 Algolia 嘛？所以最好不要给我提比如 *我添加了 Swift 搜索然后就让一些新来的用这个然后去掏钱吧反正他们什么都不懂！* 因为我还觉得本地搜索更容易用呢！如果你不喜欢本地搜索关了它就得了（你就这么痛恨一个不需要额外代价的网页上的搜索框？）。

  哦对了也别给我提类似 *我添加了一个配置项让用户选择他们的头像显示成方形而不是圆形！*，就算我们能把头像设置成从 **三角形** 到 **正十七边形** 又能有什么用？我们真的需要在一个主题里塞进去六个或者更多个不同的方案？如果你想，你可以 fork 一个你自己的，但我更愿意把他们拆成六个单独的主题。这能让开发者更容易知道该在哪修改代码而不是在一堆毫无关系的方案代码比如说 `{% if schemeA %}{{ xxxxxxxxxblockxxxxxXXXXXxxxxx }}{% elif schemeB %}{{xxxxxxxspanxxxxximgxxxxx}}{%% endif %}` or `if (hexo-config(schemeA)) { .cls { a { &:hover { background: #333 } } } }` 中寻找 bug，我曾经在这里面找过所以我知道这玩意有多么辣眼睛……

  最后，如果你想添加评论系统，尽量选用户多的比如 Gitment 或者 Valine 或 LiveRe，别再添加 多说 或者 畅言 或者 网易云跟帖 之类的因为它们有的已经倒闭了有的配置起来能迷倒一头大象或者要你把你的隐私备案到某些“其他国家”的政府。我想让 ARIA 变的很容易使用，而不是成为一堆没必要的选择的组合体。如果 85% 以上的用户都不需要一个自定义设置，那就把它写进代码里而不是配置文件里。
