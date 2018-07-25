---
title: "Tumblr"
description: "現在はAPIが使えなくなったりしているようだが、いろいろと興味が失せたので、SSL証明書がついてくること以外の検証は未定。こういう事をしてたという回顧録、的な。"
permalink: /sitesystem/tumblr/
classes: wide
header:
  teaser: /assets/images/Tumblr-to-custom-domain.png
  og_image: /assets/images/Tumblr-to-custom-domain.png
---
{{ page.description }}
{: .notice--danger}

## Tumblr Start
[tumblr.](https://www.tumblr.com/)より登録。   
[ダッシュボード](https://www.tumblr.com/dashboard)から作成やら投稿やらを行う。

### ブログを作成
[新しいブログを作る](https://www.tumblr.com/new/blog)にて作成。   
同じアカウントで複数のブログを作成可能。

### DNS設定
オレオレなので、さくっとカスタムドメインから。  
サブドメインのCNAMEレコードに`domains.tumblr.com`を登録。  
ちなみにこの値は固有。  
あと、時間がかかる。すごくかかる。なので先にDNSから設定しておく。  
[カスタムドメイン](https://tumblr.zendesk.com/hc/ja/articles/231256548-Custom-domains)な記事も参照。

かつては…
> ちなみに、[Cloudflare](https://www.cloudflare.com)にて設定している場合には、ちょいコツあり。  
> [![Cloud Flare Orange](/assets/images/tumblr-cloudflare-orange.png)](/assets/images/tumblr-cloudflare-orange.png)
> `DNS and HTTP proxy(CDN)`（オレンジ色の雲アイコン）ではなく、  
> [![Cloud Flare Gray](/assets/images/tumblr-cloudflare-gray.png)](/assets/images/tumblr-cloudflare-gray.png)
> `DNS only`（グレーの雲アイコン）にしないといけない。  
> [Cloudflare公式にもそう書いてある](https://support.cloudflare.com/hc/en-us/articles/200168566-How-do-I-add-a-Tumblr-custom-domain-)ので、当分はそのままかも。

…としていたけど、現在はグレーのアイコンにしたままにしておけば、独自ドメインのSSL証明書があるという。

### カスタムドメイン設定
`外を編集`→`ユーザー名`→`独自ドメインを使用`よりカスタムドメインを登録。 
[![Tumblr custom dmain](/assets/images/Tumblr-to-custom-domain.png)](/assets/images/tumblr-Tumblr-to-custom-domain.png)
「ドメインのテスト」を通れば完了だが、前述の通り時間がかかる。  
座して待つ。

### テーマ
無料で、カスタマイズしやすいテーマをいくつか。
+ [Accent](https://www.tumblr.com/theme/29816)
+ [Sandy](https://www.tumblr.com/theme/39616)
+ [Anchor](https://www.tumblr.com/theme/28631)
+ [ZEN](https://www.tumblr.com/theme/38954)

#### 記事投稿
テキスト、写真（1枚でも複数でも可能）、オーディオ（[Spotify](https://www.spotify.com/jp/)など）、動画（[YouTube](https://www.youtube.com/)や直接投稿したり）、リンク、引用などの投稿方法がある。

## OPG

OPG(Open Graph protocol)設定。これをやっておくと、FacebookやTwitterにシェアしてもらったときにいい感じに。
{: .notice}

### Metaタグ・まとめて設定編
少し見づらくなりますが、こんな感じで。  
<script src="https://gist.github.com/laureltreetop/652b06062008c3585ad51dbbdadbc0a9.js"></script>

### Metaタグ・個別設定編
`og:image`がいちばんややこしい。  
<script src="https://gist.github.com/laureltreetop/05cb4864f65765bc4d7a5e190e679823.js"></script>

### 確認
[facebook for deveropers シェアデバッガー](https://developers.facebook.com/tools/debug/sharing/)で確認。  
エラーが出なくなるまで修正。

## カスタマイズCSS編

簡単なカスタマイズを先にぱぱっと。
{: .notice}

### 右上などににある「Edit Theme」などを非表示に
Tumblr利用者以外には知ったこっちゃないので。  
`テーマの編集`→一番下の`詳細設定`→`カスタムCSSを追加`に以下を記述。
```css
#tumblr_controls, .tmblr-iframe{display:none !important;}
```
あとから大掛かりなカスタマイズをするときにCSSに記述しがちだが、ここに書いておくとデフォルトのモバイルテーマにも適用される。他のテーマへの乗り換えも楽。

### Spotifyのプレイヤーをすっきりと表示
同じく`カスタムCSSを追加`に。
```css
.spotify_audio_player { height: 80px !important; }
```
<script src="https://gist.github.com/laureltreetop/c37a8dbf3f34c79a1904639e1512a62e.js"></script>

## カスタマイズがっつり編

「無料のテーマを参考にしつつ、オリジナルデザインに」という方向でカスタマイズしてみる。
{: .notice}

…のはずが、2018/02/08現在でAPIが使えなくなっているので、仕様変更の可能性あり。というか使えない。  
下記は当時の参考として置いておく。
{: .notice--warning}

### カスタム前に

カスタマイズの多くはJQueryを使うことが前提なので、`<head>...</head>`の間で呼び出しておく。
<span><script src="https://gist.github.com/laureltreetop/59d30a038a01d98a7fe6bc1c7bcc2a91.js"></script></span>{: .blob-num style="display: none !important;"}
最新は[Google Hosted Libraries](https://developers.google.com/speed/libraries/)で確認。

投稿記事などを取得するのにTumblr APIキーが必要になってくる。  
[Applications](https://www.tumblr.com/oauth/apps)（要・Tumblrログイン）よりアプリを登録して、APIキーを取得する。  
`デフォルトのコールバックURL:`にOAuth認証用のスクリプトを置いて登録するが、記事取得だけなら不要なので、てきとーな自分サイトのそれっぽいURLを入れておく。

### タグ一覧

「[Tumblr APIを通してタグクラウドを表示させてみた](http://chips-tips.tumblr.com/post/8642077808/tagcloud-tumblrapi)」「[使用中のタグクラウドのCSSとか(2011年12月現在)](http://chips-tips.tumblr.com/post/14672475892/%E4%BD%BF%E7%94%A8%E4%B8%AD%E3%81%AE%E3%82%BF%E3%82%B0%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89%E3%81%AEcss%E3%81%A8%E3%81%8B2011%E5%B9%B412%E6%9C%88%E7%8F%BE%E5%9C%A8)」に沿って設置してみた。  
前者を見つつ設置、後者を見つつ表示のカスタマイズしてみた。元記事の方はカスタマイズ半端ないっす…  
元記事から少し手を入れてみたのを晒しておく。
{: .notice--info}

Jqueryはすでに使用中という前提。  
tumblrposts.jsはJs-tumblrposts.jsからダウンロード & テーマアセットからアップロード。  
カスタムの`HTML編集画面`、左上の&nbsp;<i class="fa fa-cog"></i>&nbsp;歯車アイコン→`テーマアセット`、でtumblrposts.jsを送信、`<head>`内にて呼び出し。  

~~参照記事ではclass.jsをアップロードして、となっているが、CDNで呼び出す。~~[^classjs]  

[^classjs]: 2017/06/27追記・どうやらclass.jsがなくてもいいっぽい。  

Script  
元ネタからだいぶいじってある。  
<script src="https://gist.github.com/laureltreetop/dfd5a854f3244eee66d99e0fca476f16.js"></script>

`getTags("desc")`とすることで、投稿数の多い順にソートされる（[TumblrPosts.js が新しくなりました](https://blog.mach3.jp/2012/11/26/tumblrposts-js-1-3.html)）。  
タグ一覧全部だと多いかな、と思い「投稿数が6つ以上のタグ」をデフォで、**"more tags"をクリックで「投稿数5つ以下のタグ」を表示**するように細工。  
[![Tags Off](/assets/images/Tumblr-toggle-switch-off.png)](/assets/images/Tumblr-toggle-switch-off.png) <i class="fa fa-arrows-h"></i> [![Tags On](/assets/images/Tumblr-toggle-switch-on.png)](/assets/images/Tumblr-toggle-switch-on.png)

HTML 
<script src="https://gist.github.com/laureltreetop/88da79c52453f7a7e0e870535895e322.js"></script>  
`<span>`で囲ってあるのが「投稿数5つ以下のタグ」を見るためのリンク。

CSS
<script src="https://gist.github.com/laureltreetop/9081cabd74291eb4f43423368fbf7927.js"></script>  
付箋紙やテープで貼り付けたような「紙感」のために、いろいろ突っ込んである。  
.btn-moreの設定は、ちょっとしたお遊びでFont Awesomeを使ったトグルスイッチになっている。

### 新着記事一覧

[新着記事リストをTumblrに設置してみた](http://chips-tips.tumblr.com/post/9624310150/recent-post)を参考に。  
デザインは「[CSS3だけでつくる付箋紙(Post it)風Box](https://himpotan.net/2016/05/17/css3_fusen_technic/)」を元に、こういう感じの見た目になるようにカスタマイズ。  
[![RecentPosts](/assets/images/Tumblr-RecentPosts.png)](/assets/images/Tumblr-RecentPosts.png)
{: .notice}

CSS
<script src="https://gist.github.com/laureltreetop/42b2ccb6a3885d17ace893c178555066.js"></script>

Script  
テキスト投稿のみを拾うようになっている
<script src="https://gist.github.com/laureltreetop/a6fa854722bd0cf43a012de501b25112.js"></script>

HTML
<script src="https://gist.github.com/laureltreetop/cbd85bf844332afd5153e6ec003b3bd6.js"></script>
"Recent posts"の前にFont Awesomeな文字を入れているので、このあたりは好みで変更を。

### 関連記事一覧

こういう感じの見た目になるようにカスタマイズ。デザインは「[コピペで使えるリストデザイン例34選：CSSでおしゃれな箇条書きを作ろう](https://saruwakakun.com/html-css/reference/ul-ol-li-design)」より。  
[![Related Posts](/assets/images/Tumblr-RelatedPosts.png)](/assets/images/Tumblr-RelatedPosts.png)
{: .notice}

CSS  
Font Awesomeが使える前提なので、環境を整えるか文字部分を変更するかが必要。
<script src="https://gist.github.com/laureltreetop/295360b3e06fca1df7cbb62a6b7276a9.js"></script>

Script & HTML  
タグを参照する都合上、スクリプトは<body>の中に。  
取得する投稿はテキストとリンク。`{block:Permalink}…{/block:Permalink}`内に置く。
<script src="https://gist.github.com/laureltreetop/e7c6c629a687c2f2c394dff526381a25.js"></script>

### PhotosetページをLightboxに
[こういう感じの記事](http://blog.treetop.to/post/161598628627/%E6%87%90%E3%81%8B%E3%81%97%E3%81%84-%E3%81%97%E3%81%8B%E3%82%82%E8%A8%80%E3%82%8F%E3%82%8C%E3%81%A6%E6%B0%97%E3%81%A5%E3%81%84%E3%81%9F%E3%81%91%E3%81%A9%E3%82%82%E3%81%8620%E5%B9%B4%E4%BB%A5%E4%B8%8A%E3%82%82%E5%89%8D%E3%81%AE%E3%82%A2%E3%82%A4%E3%83%86%E3%83%A0)に。  
+ [fancyBox3](http://fancyapps.com/fancybox/3/)
+ [Photoset Postsをスライドショーにしてみた](http://chips-tips.tumblr.com/post/15285874609/photoset-posts%E3%82%92%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%89%E3%82%B7%E3%83%A7%E3%83%BC%E3%81%AB%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F)
+ [TumblrSlider](https://github.com/Baires/Tumblrslider)

上記リンクのようにJQueryを追加したあと、fancyBox3も追加しておく。バージョンは[fancybox cdnjs](https://cdnjs.com/libraries/fancybox/)にて確認[^fancyboxcdnjs]。

[^fancyboxcdnjs]: 元ネタ執筆時よりバージョン上がってました。今後も要確認。
<script src="https://gist.github.com/laureltreetop/5b77a8d4107f307f362c7a54b78702a2.js"></script>

オリジナルの`TumblrSlider.js`を変更。ってか、かなり変えたので**自分のメモ用**（←なので要注意）として晒しておく。  
アセットにアップロードではなく、テーマHTMLに直書きしてある。
<script src="https://gist.github.com/laureltreetop/8b4e90258134bc7f96d89437ae5e84e1.js"></script>