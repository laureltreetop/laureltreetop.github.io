---
title: "Theme Customize"
description: テーマ共通のカスタマイズなど。
permalink: /githubpages/theme-custom/
classes: wide
# categories:
#   - GitHub Pages
# tags:
#   - GitHub
#   - Jekyll
#   - Theme Customize
---
{{ page.description }}
{: .notice}
## Gistの表示を変える
+ フッターを消してみた  
: [CUSTOMIZING GITHUB GISTS](http://codersblock.com/blog/customizing-github-gists/)
+ 色を変えた  
: [gist-syntax-themes/monokai.css](https://github.com/lonekorean/gist-syntax-themes/blob/master/stylesheets/monokai.css)
+ 高さを固定した  
: [ブログに貼りつけたGitHub/Gistのソース埋め込みの高さ設定が簡単だった](http://pineplanter.moo.jp/non-it-salaryman/2016/08/24/blog-source-gist-height/)
+ カーソルを当てるとふわっと浮かぶように
: [Webデザインにシャドウを取り入れる時のポイントいろいろ](https://www.webcreatorbox.com/tech/shadow)


[Gist stylesheet full list](https://github.com/StylishThemes/GitHub-Dark/issues/197#issuecomment-63717143)

/assets/css/main.scss
<script src="https://gist.github.com/laureltreetop/cd7ddbf84905fde3d997a96dfb246d94.js"></script>
…と、がりがりカスタマイズしてこういうふうにしていたのだが、
[![Gist custm old](/assets/images/github-custom-gist-old.png)](/assets/images/github-custom-gist-old.png)

一転してさっくりとシンプルに。
```css
/* https://github.com/lonekorean/gist-syntax-themes */
@import url('https://cdn.rawgit.com/lonekorean/gist-syntax-themes/848d6580/stylesheets/monokai.css');

@import url('https://fonts.googleapis.com/css?family=Open+Sans');
```

## Collection一覧

[Base](https://learn.cloudcannon.com/templates/base/)のトップページにある記事一覧が欲しいなー、と。
[![Jekyll theme Base](/assets/images/theme-base-prev.png)](/assets/images/theme-base-prev.png)

[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)に組み込んでみたけど、共通で使えるんじゃないかなーと。
<script src="https://gist.github.com/laureltreetop/f343294a35d9df506546b0180d8269d6.js"></script>
リストアイコンに[Font Awesome 5](https://fontawesome.com/)も組み込んであるので、そのあたりはてきとーに。  

できあがったのが[これ](/collections.html)。