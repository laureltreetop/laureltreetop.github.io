---
title: "Customize Base"
description: Baseもいろいろカスタマイズしてみる。
permalink: /githubpages/theme-base/
# categories:
#   - GitHub Pages
# tags:
#   - Jekyll
#   - Theme Customize
#   - Base
---
{{ page.description }}
{: .notice}

## Base

シンプルで、ブログというよりはジャンル毎に記事をまとめてる感じ。  
実は記事を全部_posts/に放り込んでおけば、ジャンルごとに整えて表示してくれている。  
[Base | CloudCannon Academy](https://learn.cloudcannon.com/templates/base/)
[![Jekyll theme Base](/assets/images/theme-base-prev.png)](/assets/images/theme-base-prev.png)

## サイトのタイトルと説明を表示

`_layouts/default.html`のこの部分を、
<script src="https://gist.github.com/laureltreetop/3ddead83b3e4c61913231ccee8d5f78c.js?file=theme-base-default.html"></script>
こうしてみる。
<script src="https://gist.github.com/laureltreetop/3ddead83b3e4c61913231ccee8d5f78c.js?file=theme-base-default-custom.html"></script>

## 記事タイトルのアイコンを追加

SVGとやらのアイコンなのだが、せっかくだから[Font Awesome 5](https://fontawesome.com/)のを使ってみたい。  
まずは`_layouts/default.html`の`<head>…</head>`内に、Font Awesome 5を呼び出すように追加。
```html
<script defer src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"></script>
```
最新バージョンは[Font Awesome - Get started - SVG with JA](https://fontawesome.com/get-started/svg-with-js)で確認。  
使いたいアイコンを[Icons](https://fontawesome.com/icons?d=gallery)で探して、名前を確認。  
今回使ったのは無料で使える[mobile-alt](https://fontawesome.com/icons/mobile-alt?style=solid)アイコン。

`_include/document-icon.html`に、こういうのを追加。
<script src="https://gist.github.com/laureltreetop/28ad8724fe729dcf920cab5443d63d0e.js"></script>
あとは記事のYAMLヘッダに、
```
type: Mobile
```
と記述すればOKです。  
どういうものを追加するかというと、まず`when`に書かれているのがtypeオプションになり、調べておいたアイコンのclassで`<i class=...</i>`と定義しておいて、`<svg class=...</svg>`では定義しておいた`data-fa-symbol`を指定すればいいみたい。
[![Base Custom Icon](/assets/images/theme-base-custom-article-icon.png)](/assets/images/theme-base-custom-article-icon.png)

## ロゴ

実はロゴがSVG画像? データというの? そういう形式になっている。  
_includes/logo.html
```html
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="68.375px" height="24px" viewBox="0 0 68.375 24" enable-background="new 0 0 68.375 24" xml:space="preserve">
<path d="M4.59,6.89c0.7-0.71,
...
```

そこに.pngを放り込むのも無粋なので、.svg画像を作って置いてみた。  
[GimpでSVG出力](https://buildinginblender.blogspot.jp/2015/04/tipsgimpsvggimp.html)のようにテキスト→パス→.svgにエクスポート。  
要領が判ってきたので、画像のアウトラインもパスに変換して、同じくエクスポート。

オリジナルのlogo.htmlでは、マークとb, a, s, eをそれぞれの文字でpathを書いてあったけど、面倒なので画像1枚で。  
アイコンとタイトルをそれぞれパスに変換したあと、可視パスを統合。  
エクスポートした.svgファイルをテキストエディタで開き、`<svg>`の中身のサイズを調整したり、`<path d=...`の部分に貼り付けたり。