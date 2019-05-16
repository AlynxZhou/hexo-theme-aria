hexo-theme-aria
===============

A Hexo theme inspired by Kalafina's song ARIA.
----------------------------------------------

[中文说明](README.zh_CN.md)

Live Demo: [喵's StackHarbor](http://aria.ismyonly.one/)

![Screenshot](ARIA.png)

# Donate

I am a collage student and I don't have a job, I just code this theme in my spare time with my passion. If you like my theme or this theme and code help you, you can donate me for my work via WeChatPay or AliPay or PayPal to support my development, here are my qrcodes and links:

- WeChatPay

	![WeChatPay](https://sh.alynx.xyz/images/WeChatPay.png)

- AliPay

	![AliPay](https://sh.alynx.xyz/images/AliPay.png)

- PayPal:

	[Click Here](http://paypal.me/AlynxZhou)

# Feature

- Elegant responsive double column layout with css animation.

- Comment system (currently supprt [Disqus](https://disqus.com/), [commentjs](https://github.com/wzpan/comment.js) and [Valine](https://valine.js.org/)). (Removed HyperComments because it needs to pay now.)

- Busuanzi counting.

- Hexo local search support (need to install `hexo-generator-search` and set config as its [README](https://github.com/wzpan/hexo-generator-search)).

- Multi-languages support (currently zh_CN, zh_HK, zh_TW and en, PR welcome).

- Image display powered by [Lightgallery](https://sachinchoolur.github.io/lightgallery.js/).

- RSS supported (need to install `hexo-generator-feed` and set config as its [README](https://github.com/hexojs/hexo-generator-feed)).

- Automatically convert Markdown asset folder links and images to absolute path. (No need for `hexo-asset-image` plugin.)

# Before Using

- Using a static website generator needs some basic knowledge, if you know nothing, Hexo and ARIA are not your best choice. Please be sure you know Hexo, YAML, git, Markdown and Web before continuing.

- ARIA uses [FlexBox layout](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) to place elements, and Internet Explorer before version 9 has no way to support it. So if you use IE, upgrade to IE 11 or later, or use a modern browser like [Google Chrome](https://www.google.com/chrome/) or [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/). Or if you know how to fallback FlexBox in elder IE, please send PRs, thanks.

# Usage

## Install Plugins

First change to your Hexo website dir. Use `hexo-renderer-njucks` instead of `hexo-renderer-nunjucks` or `hexo-renderer-njk` or `hexo-renderer-njks`, those three plugins are not maintained and cannot support Nunjucks 3.

```
$ npm install --save hexo-renderer-njucks hexo-renderer-stylus hexo-generator-search hexo-generator-feed
```

## Clone This Repo

Clone it to `themes/aria`:

```
$ git clone https://github.com/AlynxZhou/hexo-theme-aria themes/aria
```

## Edit Site Config

Following needs to be changed in your **site's** `_config.yml`.

### Change Theme to `aria`

```yaml
theme: aria
```

### Language Settings

Available values are `zh_CN`, `zh_HK`, `zh_TW` and `en`. If you are from other themes like old versions of NexT, please note there are no `zh-Hans` but `zh_CN`. `default` is an alias of `en`.

```yaml
language: zh_CN
```

### Hexo Search Plugin Settings

```yaml
# Hexo local search
search:
  path: search.xml
  field: all
```

### Hexo RSS Plugin Settings

```yaml
# Hexo feed
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
  content_limit: 140
  content_limit_delim: ' '
```

### Highlight Settings

Hexo's highlight doesn't add `hljs-` prefix to highlight class, but by default highlight.js project's CSS file uses this prefix. To keep compatibility with CSS files from highlight.js project, you need to add `hljs: true` like this:

```yaml
highlight:
  enable: true
  hljs: true # Add this line!
  line_number: true
  auto_detect: true
  tab_replace:
```

## Copy ARIA's Config

Copy `_config.yml.example` to `_config.yml`:

```
$ cp themes/aria/_config.yml.example themes/aria/_config.yml
```

## Edit Theme Config

Following needs to be changed in **theme's** `_config.yml` in ARIA's dir, not all config needs customization, you just change what you need：

### Menu Settings

If you want to add "Categories" and "Tags" page, uncomment `categories` and `tags`, then run `hexo new page categories` and `hexo new page tags`, then add `layout: categories` and `layout: tags` to those pages' front-matter. If you want a about page, just `hexo new page about` and uncomment it:

```yaml
menu:
  - name: home
    link: /
    icon: <i class="fas fa-home"></i>
  - name: archives
    link: archives/
    icon: <i class="fas fa-archive"></i>
  - name: categories
    link: categories/
    icon: <i class="fas fa-th-list"></i>
  - name: tags
    link: tags/
    icon: <i class="fas fa-tags"></i>
  - name: about
    link: about/
    icon: <i class="fas fa-user-edit"></i>
```

### Generating Favicon

First prepare a image of your favicon then go to  <https://realfavicongenerator.net/> to generate favicons for different browsers, then download the zip file and extract it into website's `source/favicons` dir (create it first). ARIA will load them.

### Website Keywords

Set the value of `keywords` to a list of keywords.

### CreativeCommons Licenses

Set it in `creative_commons`. To keep it simple ARIA will show a link in footer. You can choose one of `by`, `by-sa`, `by-nd`, `by-nc`, `by-nc-sa`, `by-nc-nd`. Go to <https://creativecommons.org/licenses/> to learn more.

### Code Highlight

ARIA has 4 highlight theme. You can choose the value of `highlight` in one of `atom-one-dark`, `atom-one-light`, `solarized-dark`, `solarized-light`. ARIA uses Hexo's internal highlight.js, so if you want to add more highlight theme, go to [highlight.js' style repo](https://github.com/isagalaev/highlight.js/tree/master/src/styles) and download CSS file you need to your site's `source/css/` dir (just create a `css/` dir in `source/` that you store Markdown files, you can also put it into theme's `source/css/` but it will make git workspace dirty), then set here to your downloaded file name (without `.css` suffix, it will be add automatically).

### Custom Info

The value of `custom_info` will be shown in footer. You should not use a long string because it will break footer's format.

### Avatar

Set the value of `avatar` to your avatar's link, for example, you set `avatar: images/myavatar.png` then you needs to put you avatar to `source/images/myavatar.png`.

### Custom Logo

Set it like avatar, and your logo will be shown in header, which by default shows `ARIA`, or leave it blank to hide logo.

### Custom Theme Color

Theme color `color` will be used in header and footer background, and also in some browsers' title bar like Android Chrome, by default it's theme's dark. Because color starts with `#`, you need to use double quote to prevent YAML from making it a comment. If you are not sure, don't change here.

### Google Site Verification

If you want to let Google collect your website, you need to show that this is your website. When verifying, choose "Use <meta> tag" and copy the value of property `content` to `google_verification` then re-generate and re-deploy your website.

### Website Start Year

Set `since` to your start year，if blank or the same as current year, it will only show current year, else it will show `start - current`.

### Searching Settings

To enable search, first keep sure that you installed `hexo-generator-search` and add config like the 2nd step, then set `search` to `true`, it will be placed on the top of sidebar.

### Sidebar Settings

Choose between `left`, `right` and `false`, if false, sidebar will be hidden.

### Animation

Set `animate` to `true` will enable the flipping of cards (Not recommended because it's slow in some old browsers and computers).

### Busuanzi Counting

If you want to disable Busuanzi, set `busuanzi` to `false`, or it will display `website visit counting`, `website visit persion counting`, `page visit counting`.

### MathJax

[MathJax](https://www.mathjax.org/) is a library of displaying math formula in webpage, because it is large, ARIA does not contain it. If you need it, first set `enable` of `mathjax` to `true` and **set `cdn` to your MathJax CDN**, then **add `mathjax: true` to the page's front-matter in which you has formula**. Set `global` to `true` can enable MathJax in all pages but it will let other pages slow.

### Library CDN

You can use CDN with ARIA's internal lib. First set `lib_cdn` to `enable: true`, then add CDN link to the library. If you don't know what you are doing, just skip it.

### Social Links

First set `enable` of `social` to `true`, then add your social links under `links` like following:

```yaml
social:
  enable: true
  links:
    - name: Display Name
      link: Link Address
      icon: Font Awesome icon tag you want to use
    - name: Display Name
      link: Link Address
      icon: Font Awesome icon tag you want to use
```

Get icons in [Font Awesome](https://fontawesome.com/).

### Blogrolls

First set `enable` of `blogroll` to `true`, then add links under `links` like following:

```yaml
blogroll:
  enable: true
  links:
    - name: Display Name
      link: Link Address
      icon: Font Awesome icon tag you want to use
    - name: Display Name
      link: Link Address
      icon: Font Awesome icon tag you want to use
```

Get icons in [Font Awesome](https://fontawesome.com/).

### Comment Support

First set `comment` to `enable: true` to enable comment in all pages (except Home, Archives, Categories, Tags), then fill your Disqus Shortname. If you want to disable comment in some pages, add front-matter `comment: false` (`comment` NOT `comments`!).

If you use commentjs, first set `enable` to `true`, then set `type` according to your host service between `github` and `oschina`, `user` is your user name of the host, `repo` is your repo name, `client_id` and `client_secret` needs you go to [github](https://github.com/settings/applications/new) or [oschina](https://git.oschina.net/oauth/applications/new) to create an application, and copy your token.

If you use Valine, read its docs and fill options `apiID`, `apiKey`, set `enable` to `true` and custom other options.

If you enable more than one comment services, only the one shows in front of the queue will be shown (queue: Disqus, commentjs, Valine).

Tips：If you want to edit all new pages' front-matter, just edit files in your website's `scaffolds` dir, Hexo uses them as template when create new page or post.

### Reward

Set `enable` of `reward` to `true` to use it, then set your comment in `comment`, and set QRCode of WeChat Pay, AliPay, BitCoin like avatar. Leave blank to disable a QRCode.

### Auto Excerpt

If you want to generate post excerpt at homepage automatically, you can use this. For example, `auto_excerpt: 200` will use first 200 chars (without HTML tags) as excerpt. However, if you want to get a better look, it is recommended to **place a `<!--more-->` tag to where you want, words before this tag will be used as except**.

### Custom Fonts

Set `enable` of `custom_font` to `true`, then go to a webfont server like [Google Fonts](https://fonts.google.com/) (If you cannot open it, choose another), select all fonts you need, then copy the `href` property of generated `<link>` tag to `link` option. Then set different fonts to different parts.

Example like:

```yaml
custom_font:
  enable: true
  link: //fonts.googleapis.com/css?family=Lato|Roboto+Condensed|Skranji|Ubuntu|Ubuntu+Mono
  all: Ubuntu # Font of <body>.
  title: Roboto Condensed # Font of title.
  subtitle: Roboto Condensed # Font of subtitle.
  main: Ubuntu # Font of main part (after the menu and before the footer).
  code: Ubuntu Mono # Font of code.
```

## Internal Style for Writing

Markdown will be compiled to HTML, and you can write HTML in a valid Markdown file. In order to help you organize your article better, here are some internal custom style class that you can use while writing.

### Centerquote

Just add `.centerquote` class to your HTML code, you will get a center-aligned quote with top and bottom border. Recommended for `<blockquote></blockquote>` tag:

```HTML
<blockquote class="centerquote">Centerquote Example</blockquote>
```

It looks like:

![Centerquote Example][centerquote-example]

### Colorful Alert

Just add `.alert-red`, `.alert-green` or `.alert-blue` to your HTML code:

```HTML
<div class="alert-red">Alert Red Example</div>
<div class="alert-green">Alert Green Example</div>
<div class="alert-blue">Alert Blue Example</div>
```

It looks like:

![Alert Example][alert-example]

### Google Analytics

Add `google_analytics` with tracking ID to config.

```yaml
google_analytics:
```

## Custom CSS and JavaScript

If you need to cover some CSS style of ARIA, just edit `themes/aria/source/css/custom.styl` which will be added last.

If you need some custom JavaScript, just edit `themes/aria/source/js/custom.js` which will be added last.

## Update Theme

If you use custom CSS or JavaScript, please use Git to commit them first. You can only pull when your workspace is clean.

Then use `git pull` to get the newest commit, if there is a conflict, merge it manually.

Don't forget to compare `_config.yml` and `_config.yml.example`, then apply changes in example to your own config manually.

# License

Apache-2.0

# Note

I created this theme with less configurations and beautiful styles. You can send PRs if you want to add some functions, if those functions are useful they will be merged soon.However, some themes say they are simple, simpler, or even the simplest, but in fact they are ugly. Some themes claim that they are equipped with many functions, but most of them will not be used by the users. They just remain in default values. I do not want to add them into my theme.

Like what I say, I will only add Hexo local search, which generates a xml of data and just use JavaScript code to query it without buying database service, to my theme because it works fine. Are there any people pay to use Swift search or Algolia? So never send PR like *I added swift search and let some beginners use it and pay for it because they know little!* because I think local search is better for noobs or beginners! if you dislike local search you can disable it (Really? You hate a simple search frame in your site?).

And also,do not bother me with something like *I added a config to make avatar a square instead of a circle!*, even if we make avatar available to choose from TRIANGLE to HEPTADECAON, where can it help? Do we really need six or more schemes in one theme? If you wish, you can fork your own, but I would rather separate them into six themes. This will make developers to find where to edit codes more easier rather than finding bug in some totally unrelated schemes codes with `{% if schemeA %}{{ xxxxxxxxxblockxxxxxXXXXXxxxxx }}{% elif schemeB %}{{ xxxxxxxspanxxxxximgxxxxx }}{% endif %}` or `if (hexo-config(schemeA)) { .cls { a { &:hover { background: #333; } } } }`, I used to work with those codes and I know how they will hurt your eyes while finding somewhere to edit...

Finally, if you want add comment system, choose what people use most like Gitment or Valine or LiveRe, no more Duoshuo or Changyan or Netease Cloud Comment because they are unstable and can make people confused or send your privacy to the government of "Other Country". I want ARIA to be easy to use, not a mess of needless choices. If only 15% or less users need a custom option, just write it into code instead of leaving a option in config file.

[centerquote-example]: data:image/png;base64,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vVd1dXV67733dOLECUlSSkqKbrvttmbXVFRU6KOPPtL+/ftlt9ubjTVlyhQlJSVp0aJFqq2tVUJCgu6+++5m169evVp79+6VJN1zzz0aNGhQi3k13dOLL74oSRo2bJjmzZvntp0k7du3T5s3b262H2/TnFJSUjRu3LgWgdeaNWu0e/duSWp2H6tWrdKaNWskSRMnTtS1117bYrzKykqtW7dOmZmZstlsxvtBQUFKTEzU1KlTPQbTXa24uFhLly6Vw+GQt7e3Fi5cqKioqBbt6uvrtXjxYpWVlUmSbrzxRo0ePbpFu+zsbG3dulU5OTnNnq3evXtr1KhRmj59usdw/fnnn9eJEyfUp08fPf300/r++++1bt065ebmyul0SpK8vLx06aWX6ne/+52io6ONe/jkk0/09ddfq76+3ugvLCxMkydPVmpqqtvx/vWvf6mwsFD9+vXTo48+qqysLK1fv175+flGm169eunyyy/XzJkzFRoa2san2br6+npt3bpVW7du1enTp433/fz8NHz4cF1//fWUeAYAAABw3ghYAQAAAJy3w4cPG8cJCQny8/MzdV1CQoLGjx8vSR5XwmVmZmrFihXNgqQmRUVFWrlypbKzs3XPPfeoV69ezc7bbDZVVlZKkvLz8/Xyyy8b4ZWr06dPa8WKFaqoqNC0adMkSQ0NDca1rpxOZ7P3m0KprphzVlaWMjIy3I7RpLCwUC+88IKqqqrcjvX222/r4MGDRth09uzZFu1cx3QNz87lcDiMdq4Btav6+nqtXLlSu3btcnu+qKhIa9eu1a5du/SXv/yl2ffuOo9z59ekpqamxfn8/Hylp6eroqKixbmKigpt3LhRWVlZWrhwocLCwjzeX1eJiIhQSkqK1q1bJ0l699139eCDD7Zot2HDBiN4HDBgQIs/VKivr9fy5cuNUtznqq6u1rZt25SVlaUHH3xQkZGRLdpUVVWpsrJSNTU1+uijj7R+/foWbZxOpw4cOKDnnntOjzzyiMrKyvT666+rtra2RdvTp09r1apVKioq0i233OJxvPr6eq1Zs0abN29u0aaurk779u3T999/rwceeEAXXXSR2/trS1VVlV555RUdOXKkxTm73a69e/cqOztb9913n4YMGdKhMQAAAABAImAFAAAA0AmKioqM49jYWNPXhYSEKC0tzeP5PXv26K233pLUuAJt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Nem6AtB1Zem5SktLPZ7r37+/QkNDJTWGXIWFhR7b2u127dq1S1LjZzty5MgWbcx85pdddplxvGnTpjbbtzb/7rJ27VpjxfGkSZMUGxurOXPmGOffeecdt9+XzWZze3yun376qRNn27la21f12LFjxjPTt29fRUVFme7X9Tn44osv2nzefw7PAQAAAIBfNgJWAAAAAJ1i7NixxqqzgoICLV++XHV1dW7b1tXV6a233lJ1dbUkacSIES1WrE2ZMsU4fv/995WXl+e2L7vdrtdff13PPPOMjh492hm30oLFYtEFF1wgSaqsrFRDQ4Pbdt05Zx8fH6MMsdPp1IoVK9yG2na7Xe+9916rfQ0YMMA43rlzp9v7Ky0t1Zo1azz24e3trcmTJxuvly9f7jYIdDqdWrVqlSoqKiRJo0aNclsiODAw0Dhuanuu0aNHy9/fX1Lj3qPbtm3zOL9169bpiSee0JdffumxTVdzLQ0cFham6667TlJjie3Ro0dLklEq+Fzh4eHG8fbt2932n5mZqY0bNxqvPf3+esq7777r8RlduXKl8To5Obld5Z4HDBigSy65RFLjc7pixQo5HA63bQ8cOKC///3vWrly5S9iZTwAAACAnyf2YAUAAADQKSwWi+688049//zzqq6u1v79+/XTTz9p3Lhxslqt8vf3V2VlpfLy8rR9+3ZjpWRISIhmz57dor9BgwYpNTVV27Ztk91u19KlSzVhwgRdddVVCgkJ0dmzZ5WTk6ONGzequLhYkpSXl6eLL764S+4vIiJC+fn5qqmp0dq1a5WYmCi73a64uDijNHB3z3nq1KnatWuXKisrdeTIES1evFgzZsyQ1WpVXV2dcnNz9dlnn6moqKjVfoYOHarevXururpaJ06c0AsvvKApU6YoLCxMlZWV+uGHH/TFF1/o7NmzrfaTmpqqrKws5eTkqKCgQM8++6xmzJihhIQEWSwWFRQUaMOGDfrhhx8kNYaos2bNcttXRESEcbx161ZFRUUpJCRE3t7eio6OltS4f+ltt92m1157TZK0atUqHTlyRNdcc42ioqJUW1urgoICbdmyxRjz22+/1ejRozu8X+vOnTtN7w/av39/XXrppZKalwaWpFtuuUW+vr7G65kzZ+qbb75RVVWVMjIydOWVV2rQoEHG+cTERO3evVuStGPHDlVWVioxMVGBgYE6deqU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

[alert-example]: data:image/png;base64,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
