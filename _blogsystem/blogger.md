---
title: "Blogger"
description: 大幅なカスタマイズは難しいけど、やはり安定のBloggerなのかも?
permalink: /blogsystem/blogger/
---
{{ page.description }}
{: .notice}

## カスタマイズいろいろ

### 無限スクロール

フッターなどの適当なガジェットに、`HTML/JavaScript`ってことで設定。  
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type='text/javascript' src='//m-misc.appspot.com/js/blogger-infinite-scrolling.js'></script>
```
ただし、いわゆるSEO Friendlyではない。

### 背景画像を敷き詰める

`テーマ`→`カスタマイズ`→`上級者向け`→`CSSを追加`→`カスタムCSSを追加`
```css
body {
    background-size: cover;
    background-repeat:no-repeat;
    background-position: center center;
    background-attachment: fixed;
}
```

### ページナビ

[How To Add Numbered Page Navigation Widget For Blogger](https://helplogger.blogspot.jp/2014/04/how-to-add-numbered-page-navigation-widget-for-blogger.html)に方法が。  
この記事では直接テンプレートファイルをいじっているが、CSSを`テーマ`→`カスタマイズ`→`上級者向け`→`CSSを追加`→`カスタムCSSを追加`へ、スクリプトをウィジェットとして置くこともできる。


### 「前の投稿」「次の投稿」

「前の投稿」「次の投稿」リンクを、その記事のタイトルに変更。  
最初の行にあるJQueryは、他で設定している場合は不要。

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<style type="text/css"> 
#blog-pager-newer-link {font-size:100%;width:200px;text-align:left;} 
#blog-pager-older-link {font-size:100%;width:200px;text-align:right;} 
</style> 
<script type="text/javascript">
$(document).ready(function(){ 
var newerLink = $("a.blog-pager-newer-link").attr("href"); 
$("a.blog-pager-newer-link").load(newerLink+" .post-title:first", function() { 
var newerLinkTitle = $("a.blog-pager-newer-link").text(); 
$("a.blog-pager-newer-link").text("<< " + newerLinkTitle); 
}); 
var olderLink = $("a.blog-pager-older-link").attr("href"); 
$("a.blog-pager-older-link").load(olderLink+" .post-title:first", function() { 
var olderLinkTitle = $("a.blog-pager-older-link").text(); 
$("a.blog-pager-older-link").text(olderLinkTitle + " >>");//rgt 
}); 
}); 
</script>
```

### サイトマップ的なページ

[How To Add Stylish Sitemap For Blogger](https://techtspot.blogspot.jp/2017/10/how-to-add-stylish-sitemap-for-blogger.html)の通りに作ると、タグ毎にまとめられた記事一覧が。


## TumblrからBloggerへ

[TumblrからBloggerへの引っ越し](https://saggdi.blogspot.jp/2017/05/tumblrblogger.html)より。

1. Tumblrに独自ドメインを設定している場合、解除
1. [Tumblr2HatenaBlog](http://tumblr2hatenablog.herokuapp.com/)でWordPress形式でエクスポート
1. [Wordpress2Blogger](http://www.wordpress-to-blogger-converter.appspot.com/)でBlogger形式にエクスポート
1. あとはBlogger側でインポート
1. 実はこの方法、時差がおかしくなる…こだわるなら修正
1. 元の投稿タイプによってタグが付加されてるので、修正・削除はお好みで
 + テキスト: regular
 + リンク: link
 + 音声: audio
 + 引用: quote

## 独自ドメインを設定

Bloggerからも指定されるけど、とりあえずこういう値が必要、と。

|Name|Type|Value|
|---|---|---|
|@	|A	|216.239.32.21|
|@	|A	|216.239.34.21|
|@	|A	|216.239.36.21|
|@	|A	|216.239.38.21|
|www|CNAME	|ghs.googlehosted.com|
|固有の値|CNAME|固有の値|