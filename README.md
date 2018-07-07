hexo-theme-aria
===============

A Hexo theme inspired by Kalafina's song ARIA.
----------------------------------------------

[中文说明](README.zh_CN.md)

Live Demo: [喵's StackHarbor](https://sh.alynx.xyz/)

![Screenshot](ARIA.png)

# Donate:

I am a collage student and I don't have a job to get some income, I just code this theme in my spare time with my passion. If you like my theme or this theme and code helps you, you can donate me for my work via WeChatPay or AliPay or PayPal to support my develop, here are my qrcodes and links:

- WeChatPay:

	![WeChatPay](https://sh.alynx.xyz/images/WeChatPay.png)

- AliPay:

	![AliPay](https://sh.alynx.xyz/images/AliPay.png)

- PayPal: [Click Here](http://paypal.me/AlynxZhou)

# Feature:

- Elegant responsive double column layout with css animation.

- Comment system (currently supprt [Disqus](https://disqus.com/) and [commentjs](https://github.com/wzpan/comment.js)). (Removed HyperComments because it needs to pay now.)

- Busuanzi counting.

- Hexo local search support (need to install `hexo-generator-search` and set config as its [README](https://github.com/wzpan/hexo-generator-search)).

- Multi-languages support (currently zh_CN, zh_HK, zh_TW and en, PR welcome).

- Image display powered by [Lightgallery](https://sachinchoolur.github.io/lightgallery.js/).

- RSS supported (need to install `hexo-generator-feed` and set config as its [README](https://github.com/hexojs/hexo-generator-feed)).

# Before Using:

1. Using a static website generator needs some basic knowledge, if you know nothing, Hexo and ARIA are not your best choice. Please be sure you know Hexo, YAML, git, Markdown and Web before continuing.

2. ARIA uses [FlexBox layout](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) to place elements, and Internet Explorer before version 9 has no way to support it. So if you use IE, upgrade to IE 11 or later, or use a modern browser like [Google Chrome](https://www.google.com/chrome/) or [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/). Or if you know how to fallback FlexBox in elder IE, please send PRs, thanks.

# Usage:

1. Change to your Hexo website dir and install plugins:

	Use `hexo-renderer-njucks` instead of `hexo-renderer-nunjucks` or `hexo-renderer-njk` or `hexo-renderer-njks`, those three plugins are unmaintained and cannot support Nunjucks 3.

	```
	$ npm install --save hexo-renderer-njucks hexo-renderer-stylus hexo-generator-search hexo-generator-feed
	```

2. Clone this repo to `themes/aria`:

	```
	$ git clone https://github.com/AlynxZhou/hexo-theme-aria themes/aria
	```

3. Edit your site's `_config.yml`:

	1. Change theme to `aria`:

		```yaml
		theme: aria
		```

	2. Set language:

		Available values are `zh_CN`, `zh_HK`, `zh_TW` and `en`. If you are from other themes like old versions of NexT, please note there are no `zh-Hans` but `zh_CN`. `default` is an alias of `en`.

		```yaml
		language: zh_CN
		```

	3. Add config of Hexo search plugin:

		```yaml
		# Hexo localsearch
		search:
		  path: search.xml
		  field: all
		```

	4. Add config of Hexo RSS plugin:

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

	5. Change highlight config:

		Hexo's highlight doesn't add `hljs-` prefix to highlight class, but by default highlight.js project's CSS file uses this prefix. To keep compatibility with CSS files from highlight.js project, you need to add `hljs: true` like this:

		```yaml
		highlight:
		  enable: true
		  hljs: true # Add this line!
		  line_number: true
		  auto_detect: true
		  tab_replace:
		```

4. Copy ARIA's `_config.yml.example` to `_config.yml`:

	```
	$ cp themes/aria/_config.yml.example themes/aria/_config.yml
	```

5. Edit `_config.yml` in ARIA's dir, not all config needs customization, you just change what you need：

	1. Menu Settings:

		If you want to add "Categories" and "Tags" page, uncomment `categories` and `tags`, then run `hexo new page categories` and `hexo new page tags`, then add `layout: categories` and `layout: tags` to those pages' front-matter. If you want a about page, just `hexo new page about` and uncomment it:

		```yaml
		menu:
		  home: /
		  archives: archives/
		  categories: categories/
		  tags: tags/
		  about: about/
		```

	2. Generating Favicon：

		First prepare a image of your favicon then go to  <https://realfavicongenerator.net/> to generate favicons for different browsers, then download the zip file and extract it into website's `source/favicons` dir (create it first). ARIA will load them.

	3. Website Keywords:

		Set the value of `keywords` to a list of keywords.

	4. CreativeCommons Licenses：

		Set it in `creative_commons`. To keep it simple ARIA will show a link in footer. You can choose one of `by`, `by-sa`, `by-nd`, `by-nc`, `by-nc-sa`, `by-nc-nd`. Go to <https://creativecommons.org/licenses/> to learn more.

	5. Code Highlight:

		ARIA has 4 highlight theme. You can choose the value of `highlight` in one of `atom-one-dark`, `atom-one-light`, `solarized-dark`, `solarized-light`. ARIA uses Hexo's internal highlight.js, so if you want to add more highlight theme, go to [highlight.js' style repo](https://github.com/isagalaev/highlight.js/tree/master/src/styles) and download CSS file you need to theme's `source/css` dir, then set here to your downloaded file name.

	6. Custom Info:

		The value of `custom_info` will be shown in footer. You should not use a long string because it will break footer's format.

	7. Avatar:

		Set the value of `avatar` to your avatar's link, for example, you set `avatar: images/myavatar.png` then you needs to put you avatar to `source/images/myavatar.png`.

	8. Custom Logo:

		Set it like avatar, and your logo will be shown in header, which by default shows `ARIA`, or leave it blank to hide logo.

	9. Custom Theme Color And Tags Color:

		Theme color `color` will be used in header and footer background, and also in some browsers' title bar like Android Chrome, by default it's theme's dark. Tags Color `tags_color` is a list and post tags will use it in a loop. Because color starts with `#`, you need to use double quote to prevent YAML from making it a comment. If you are not sure, don't change here.

	10. Google Site Verification:

		If you want to let Google collect your website, you need to show that this is your website. When verifying, choose "Use <meta> tag" and copy the value of property `content` to `google_verification` then re-generate and re-deploy your website.

	11. Website start year:

		Set `since` to your start year，if blank or the same as current year, it will only show current year, else it will show `start - current`.

	12. Searching Settings:

		To enable search, first keep sure that you installed `hexo-generator-search` and add config like the 2nd step, then set `search` to `true`, it will be placed on the top of sidebar.

	13. Sidebar Settings:

		Choose between `left`, `right` and `false`, if false, sidebar will be hidden.

	14. Animation:

		Set `animate` to `true` will enable the flipping of cards (Not recommended because it's slow in some old browsers and computers).

	15. Busuanzi Counting

		If you want to disable Busuanzi, set `busuanzi` to `false`, or it will display `website visit counting`, `website visit persion counting`, `page visit counting`.

	16. MathJax:

		[MathJax](https://www.mathjax.org/) is a library of displaying math formula in webpage, because it is large, ARIA does not contain it. If you need it, first set `enable` of `mathjax` to `true` and **set `cdn` to your MathJax CDN**, then **add `mathjax: true` to the page's front-matter in which you has formula**. Set `global` to `true` can enable MathJax in all pages but it will let other pages slow.

	17. Library CDN:

		You can use cdn with ARIA's internal lib. First set `lib_cdn` to `enable: true`, then add CDN link to the library. If you don't know what you are doing, just skip it.

	18. Social Links:

		First set `enable` of `social` to `true`, then add your social links under `links` like following:

		```yaml
		social:
		  enable: true
		  links:
		    - name: Display Name
		      link: Link Address
		      icon: Class property of Font Awesome icon you want to use
		    - name: Display Name
		      link: Link Address
		      icon: Class property of Font Awesome icon you want to use
		```

		Get icons in [Font Awesome](https://fontawesome.com/).

	19. Blogrolls:

		First set `enable` of `blogroll` to `true`, then add links under `links` like following:

		```yaml
		blogroll:
		  enable: true
		  links:
		    - name: Display Name
		      link: Link Address
		    - name: Display Name
		      link: Link Address
		```

	20. Comment Support:

		First set `comment` to `enable: true` to enable comment in all pages (except Home, Archives, Categories, Tags), then fill your Disqus Shortname. If you want to disable comment in some pages, add front-matter `comment: false` (`comment` NOT `comments`!).

		If you use commentjs, first set `enable` to `true`, then set `type` according to your host service between `github` and `oschina`, `user` is your user name of the host, `repo` is your repo name, `client_id` and `client_secret` needs you go to [github](https://github.com/settings/applications/new) or [oschina](https://git.oschina.net/oauth/applications/new) to create an application, and copy your token.

		If you enable more than one comment services, only the one shows in front of the queue will be shown (queue: HyperComments, Disqus, commentjs).

		Tips：If you want to edit all new pages' front-matter, just edit files in your website's `scaffolds` dir, Hexo uses them as template when create new page or post.

	21. Reward:

		Set `enable` of `reward` to `true` to use it, then set your comment in `comment`, and set QRCode of WeChat Pay, AliPay, BitCoin like avatar. Leave blank to disable a QRCode.

	22. Auto Excerpt:

		If you want to generate post excerpt at homepage automatically, you can use this. For example, `auto_excerpt: 200` will use first 200 chars (HTML doc) as excerpt. However, if you want to get a better look, it is recommended to **place a `<!--more-->` tag to where you want, words before this tag will be used as except**.

	23. Custom Fonts:

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

6. Custom CSS and JavaScript：

	If you need to cover some CSS style of ARIA, just edit `themes/aria/source/css/custom.styl` which will be added last.

	If you need some custom JavaScript, just edit `themes/aria/source/js/custom.js` which will be added last.

7. Update Theme:

	If you use custom CSS or JavaScript, please use Git to commit them first. You can only pull when your workspace is clean.

	Then use `git pull` to get the newest commit, if there is a conflict, merge it manually.

	Don't forget to compare `_config.yml` and `_config.yml.example`, then apply changes in example to your own config manually.

# License:

Apache-2.0

# Note:

I created this theme with less configurations and beautiful styles. You can send PRs if you need some functions like custom colored text blocks, if those functions are helpful they will be added soon. But some themes says they are "simple/simpler/simplest" but infact they are ugly or other themes have so many functions and some of them in fact has little people using or just keep default, I don't want them.

For example, I will only add Hexo local search (it generates a xml of data and just use JavaScript code to query it without buying database service) to my theme because it works fine. Is there really someone paid to use Swift search or Algolia? So never send PR like *I added swift search and let some beginners use it and pay for it because they know little!* because I think local search is better for noob or beginners! if you dislike local search you can disable it (Really? You hate a simple search frame in your site?).

And refuse something like *I added a config to make avatar a square instead a circle!*, what will help if we make avatar available from TRIANGLE to HEPTADECAON? Do we really need six or more schemes in one theme? If you like, you can fork your own, but I will keep them six themes. This makes developers easy to find where to edit codes instead finding bug in some total unrelated scheme codes with `{% if schemeA %}{{ xxxxxxxxxblockxxxxxXXXXXxxxxx }}{% elif schemeB %}{{ xxxxxxxspanxxxxximgxxxxx }}{% endif %}` or `if (hexo-config(schemeA)) { .cls { a { &:hover { background: #333; } } } }`, I used to work with those codes and I know how they hurt your eyes while finding some code...

Plus, if you want add comment system, choose what people uses most like Gitment or Valine or LiveRe, no more Duoshuo or Changyan or Netease Cloud Comment because they are unstable and can make people confused or send your privacy to the government of "Other Country". I want ARIA to be easy to use, not a mess of needless choice. If only 15% or less users need a custom option, just write it into code instead of leaving a option in config file.
