---
title: "Blogger"
description: 大幅なカスタマイズは難しいけど、やはり安定のBloggerなのかも?
permalink: /blogsystem/blogger/
---
{{ page.description }}
{: .notice}

## スタイルシートでカスタマイズ

スタイルシートは`テーマ`→`カスタマイズ`→`上級者向け`→`CSSを追加`→`カスタムCSSを追加`で追加。

### 「登録: 投稿 (Atom)」を非表示に

```css
.feed-links {display:none !important;}
```

### 「Powered by Blogger」を非表示に

```css
#Attribution1{display: none;}
```

## ガジェットでカスタマイズ

JQueryは、他で設定している場合は不要。
{: .notice}

### サイドバーをタブに

元ネタは「[はてなブログで複数のサイドバーモジュールをタブメニューにして回遊率アップを狙うカスタマイズ](http://www.yukihy.com/entry/tab-menu-custom)」。  

ガジェットの一番上に
```html
<div class="module-title2">
<span class="tab active">人気記事</span>
<span class="tab">投稿記事</span>
<span class="tab">タグ</span>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
// サイドバータブメニュー
$(function(){
$("#PopularPosts1,#BlogArchive1,#Label1").addClass("module");
    $(".module-title2").parents("#sidebar-section").css("margin-bottom",0);
    var Module = $(".module");
    Module.hide();
    Module.first().show();
	Module.find('h2').hide();
    
    $(".tab").click(function(){
        var index = $(this).index();
        $(".tab").removeClass("active");
        $(this).addClass("active");
        $(Module).hide();
        $(Module).eq(index).show();
    });
});
</script>
```

スタイルシート
```css
/*サイドバータブメニュー*/
.tab{
    display: inline-block;
    padding: 8px 15px 5px 15px;/*横に入りきらない場合はこの２番目と４番目の数字を小さく*/
    background: #f0f0f0;/*反応していないタブの背景色*/
    border-radius: 5px 5px 0 0;
    font-size: 12px;/*横に入りきらない場合はここの数字を小さく*/
    cursor: pointer;
}
.active{
    background: $(button.background);/*反応しているタブの背景色*/
    border-radius: 5px 5px 0 0;
}
.module-title2{
    border-bottom: 3px solid $(button.background);/*タブの下線*/
}
```

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

## テンプレートを直接変更

#### テンプレートを初期化

テーマを入れ替えたりしていると、中身がおかしくなってくることがあるので。  
いったんバックアップを取った上で、HTMLをまるっと書き換える。

```html
<?xml version="1.0" encoding="UTF-8" ?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<b:skin></b:skin>
</head>
<body>
<b:section id='mainSection'>
<b:widget id="Blog1" type="Blog">
<b:includable id="main">
</b:includable>
</b:widget>
</b:section>
</body></html>
```

#### タイトル

SEO的にタイトルを変更。

```html
<b:if cond='data:blog.pageType == &quot;item&quot;'>
  <title><data:blog.pageName/> | <data:blog.title/></title>
<b:else/>
  <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
    <title><data:blog.pageName/> | <data:blog.title/></title>
  <b:else/>
    <title><data:blog.pageTitle/></title>
  </b:if>
</b:if>
```

## カスタマイズ保留中や削除など

保留とか削除とか不要になったのとか、いろいろ。
{: .notice}

#### ラベルサーチ

元ネタは[Bloggerの絞り込み検索ブログパーツ「ラベルサーチ」公開！複数のラベルを使ってAND・OR・NOT検索が出来る！](http://kakukaku.crosgre.com/2016/10/LabelSearch-Download.html)より。  
サイドバータブは既に導入してあるので、ラベルサーチ部分だけ追加したいけど、どうにか自動でできないかなぁ。

#### 無限スクロール

フッターなどの適当なガジェットに、`HTML/JavaScript`ってことで設定。

```html
<script type='text/javascript' src='//m-misc.appspot.com/js/blogger-infinite-scrolling.js'></script>
```
ただし、いわゆるSEO Friendlyではない。

#### レスポンシブデザインに

モバイル判定な場合はコンテンツを幅いっぱいに表示。
```html
<b:if cond='data:blog.isMobile'>
  <meta content='width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0' name='viewport'/>
</b:if>
```

#### ?m=1問題

?m=1（モバイル用オプション）を?m=0（PC用オプション）に。

```html
<script type='text/javascript'>//<![CDATA[
var curl = window.location.href;if (curl.indexOf('m=1') != -1) {curl = curl.replace('m=1', 'm=0');window.location.href = curl;}
//]]></script>
```

URLをカノニカルURLに。
```html
<link expr:href='data:blog.canonicalUrl' rel='canonical'/>
```

```html
<b:if cond='data:blog.isMobile'>
<style>
.limit-width{margin:0 auto;width:100%;overflow:hidden;}
#outer{padding:0;}
#main-outer{float:none;margin:0;}
#main{margin:0;}
#forcus-category-outer{display:none;}
#header-inner{padding:10px 0;}
#header-inner h1{font-size:150%;}
.post-header h2{font-size:130%;}
#upper-nav-outer{display:none;}
.index-pager .newer a, .index-pager .older a{padding:20px 20px;}
#related-post span.label{display:none;}
#footer-inner{padding:30px 0 15px 0;}
#sidebar-outer{float:none;margin:10px 0 0 0;width:100%;}
</style>
</b:if>
```

## Vaster2をカスタマイズ

カスタマイズに疲れてきたので、シンプルなレスポンシブテンプレートを導入。  
でもカスタマイズは止めないのよね。
{: .notice}

#### 記事の上にあるラベル

[Vaster2のラベルのデザインを変えてみよう！コピペでOK！](https://papanohibilog.blogspot.com/2017/08/vaster2-label2.html)を参考にしたけど、色指定が固定だったので、変数で設定してみる。  
CSSの部分だけ、こういう変更に。

```css
.post-tag{
font-size:14px !important;
padding:1px 4px !important;
color:$(articlelist.posttag.color);
margin-top:0;
display:inline-block;
}
.taglink {
    display: inline-block;
    position: relative;
    height: 20px;/*高さ*/
    line-height: 20px;/*高さ*/
    vertical-align: middle;
    text-align: center;
    padding: 0px 10px 0 10px;/*文字の余白*/
    background: $(articlelist.posttag.color);/*背景色*/
    color: $(articlelist.posttag.font);/*文字色*/
    box-sizing: border-box;
    font-size:14px !important;
    margin: 1px;
}
a.taglink:link{color:$(articlelist.posttag.font);}
a.taglink:visited{color:$(articlelist.posttag.font);}
a.taglink:active{color:$(articlelist.posttag.font);}
a.taglink:hover{color:$(articlelist.posttag.font);background:$(articlelist.posttag.color);
}
```
#### ページナビ

[Vaster2に番号付きページナビゲーションを導入する](http://ssbsblg.blogspot.jp/2017/10/26.html)とか[How To Add Next & Previous Numbered Pagination in Blogger](http://mrbloggertricks.blogspot.jp/2015/09/how-to-add-next-previous-numbered.html)に方法が。  
ラベルや検索での挙動が変だったのでハマったが、[bloggerテンプレートのラベル一覧でページング利用](http://namidameweb.repop.jp/2015/12/blogger.html)で原因が判ったので、数か所ほどある
```html
<a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;?max-results=10&quot;'>
```
の部分を、
```html
<a expr:dir='data:blog.languageDirection' expr:href='data:label.url + &quot;?&amp;max-results=10&quot;'>
```
に修正。  
`?`のあとに`&amp;`を追加。


#### SNSシェアボタン

[Vaster2のSNSボタンのサイズ変更　Blogger·Vaster2カスタマイズ#13](https://pooh2roh.blogspot.jp/2017/10/vaster213-sns.html)

#### タブレットでの表示を整える

画面が崩れていたので、[サイトがタブレットの幅に合わない！レスポンシブデザインの設定をしよう！](https://papanohibilog.blogspot.com/2017/09/vaster2-responsive.html)を参考に追加。

```css
*   レスポンシブデザイン
--------------------------------------------------- */
@media only screen and (max-width:1024px)
{
.content-wrapper{
   width:auto;
   margin:0 auto;
}
#header-inner{
   width:auto;
   margin:0 auto;
}
.grobal-navi{width:auto;}
.main-outer{width:694px;}
.sidebar {width:330px;}
}
```

#### ページ一覧

```html
              <nav class='grobal-navi'>
                <ul class='header-nav'>
                  <b:loop values='data:links' var='link'>
                    <li>
                      <!--a expr:href='data:link.href + &quot;?max-results=10&quot;'-->
                      <a expr:href='data:link.href'>
                        <data:link.title/>
                      </a>
                    </li>
                  </b:loop>
                </ul>
                </nav>
```

#### 404 error

Vaster2は後述のカスタム404ページに対応してないらしい。  
[Bloggerテンプレート「Vaster2」で記事っぽい404ページの作り方](http://kakukaku.crosgre.com/2016/11/Blogger-404PageNotFound.html)

## 他にもカスタマイズ

### 404 Not Found.

検索ができるように。  
`設定`→`検索設定`→`エラーとリダイレクト`→`カスタム404ページ`に設定。

```html
<div class='error-custom'>
<h2>404 Not Found</h2>
<p class='error-body'>ページが見つかりません。<br/>
トップページに戻るか、検索をお試しください。</p>
<form action='/search' id='searchform' method='get'>
<input id='s' name='q' onblur='if (this.value == &quot;&quot;) {this.value = &quot;Search...&quot;;}' onfocus='if (this.value == &quot;Search...&quot;) {this.value = &quot;&quot;;}' type='text' value='Search...'/>
<input id='searchsubmit' type='submit' value='Go'/>
</form>
</div>
```

### タグごとの記事一覧

[How To Add Stylish Sitemap For Blogger](https://techtspot.blogspot.jp/2017/10/how-to-add-stylish-sitemap-for-blogger.html)の通りに作ると、タグ毎にまとめられた記事一覧が。

### 検索で記事一覧

[Blogger記事を一覧表示するページの作成方法](https://garafu.blogspot.jp/2013/07/blogger.html)の方法でも。

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