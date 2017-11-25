---
title: "CSS and misc."
permalink: /misc/create-pages/
---
今はタグ打ちなんてしなくてもできるねーと思っていたら、まさかの[Tumblrのテーマカスタマイズ](/tumblr/custom-theme/)でのタグ打ち。
この機会にいろいろメモっておく。
{: .notice}

## まずはfavicon

「[半透過マルチアイコンfavicon.icoを作ろう!](https://ao-system.net/alphaicon/)」「[様々なファビコンを一括生成。favicon generator](https://ao-system.net/favicongenerator/)」というのがあったので、この機会に画像も作成。  
他にも「[Favicon Generator](http://realfavicongenerator.net/)」もありますな。

## メタタグを設定

サイト管理に重要なメタタグを設定してみる。必要なの、けっこうあるので忘れがち。  
### 基本形
…結構あった(=_=;)そりゃ、覚えきれるわけがない。  
<script src="https://gist.github.com/laureltreetop/f030be7a688c151ce0d377001bb6e071.js"></script>

「シェアされたときのサムネイル」は[OGP画像シミュレータ](http://ogimage.tsmallfield.com/)で確認しつつ作成。  
その他の情報も[facebook for deveropers シェアデバッガー](https://developers.facebook.com/tools/debug/sharing/)で確認。
{: .notice}

### 最低必要源  
Facebookアプリ要らないなぁ。面倒だし。  
自分のTwitterとかFacebookとリンクさせるわけでなければ[^minimal-opg]、これくらいでいいのかな。    
<script src="https://gist.github.com/laureltreetop/46e35bc34a0511019c8be263acc1e627.js"></script>  

[^minimal-opg]: リンクさせるわけじゃないのにOGPってのは矛盾しているけど。  

## CSS小技系  

### 上下左右ど真ん中
<script src="https://gist.github.com/laureltreetop/7ad147e484ee34ae98e33846f5c7ef1f.js"></script>

### サムネイル画像などをトリミング

かなり簡単にできる。調べるのが難しかったくらい(=_=;)  
[1行追加でOK！CSSだけで画像をトリミングできる「object-fit」プロパティー](https://www.webcreatorbox.com/tech/object-fit)  
[![image clipping](/assets/images/pages-image-clippings.png)](/assets/images/pages-image-clippings.png)
<script src="https://gist.github.com/laureltreetop/fb356054c993e94f974e02ff5bd9922c.js"></script>

## [Font Awesome](http://fontawesome.io/)

こういうのとか。  
<i class="fa fa-twitter"></i>
<i class="fa fa-facebook-official"></i>
<i class="fa fa-pinterest"></i>
<i class="fa fa-get-pocket"></i>
{: .notice}

### 使い方

[Font Awesome](http://fontawesome.io/)から必要なファイルをダウンロードするとか、[Bootstrap CDN Font Awesome](https://www.bootstrapcdn.com/fontawesome/)を呼び出すとかいろいろ方法があるけど、[Get Started](http://fontawesome.io/get-started/)からさくっと登録して埋め込みコードを手に入れるのが楽。
<script src="https://gist.github.com/laureltreetop/e8c228e14ccb0ee000be506947bf969e.js"></script>

あとは使いたいフォントを[The Icons](http://fontawesome.io/icons/)から探して、使いたいところにこんな感じで貼るだけ。  
<script src="https://gist.github.com/laureltreetop/0a6ea6e1beacd67032e6306f2248fcff.js"></script>

### 色

TwitterとかFacebookのアイコンだと、やっぱり公式カラーにしたくなったり。[BrandColors](https://brandcolors.net/)のような資料もあるし。  
CSSで各色を設定。
<script src="https://gist.github.com/laureltreetop/3757401d0268c747415fb55c94fa1dad.js"></script>
で、それぞれにクラス指定。
<script src="https://gist.github.com/laureltreetop/5af3aca1371f8467834b0a9d25cfee86.js"></script>

あとはクラスを付加すれば色も変わる[^brand-colors]。  
<i class="fa fa-twitter" style="color:#1da1f2;"></i> 
<i class="fa fa-facebook-official facebook" style="color:#3b5998;"></i> 
<i class="fa fa-google-plus google" style="color:#dd4b39;"></i> 
<i class="fa fa-pinterest pintest" style="color:#bd081c;"></i> 
<i class="fa fa-get-pocket pocket" style="color:#ef4056;"></i>

[^brand-colors]:都合上、ここでの実際のソースでは直に`<i class="fa fa-twitter" style="color:#1da1f2;"></i>`という感じで指定してます。

### 文字幅を揃える

アイコンによって幅が違う。  
<i class="fa fa-twitter" style="color:#1da1f2;"></i> Twitter  
<i class="fa fa-facebook-official facebook" style="color:#3b5998;"></i> Facebook  
<i class="fa fa-google-plus google" style="color:#dd4b39;"></i> Google+  
<i class="fa fa-pinterest pintest" style="color:#bd081c;"></i> Pintest  
<i class="fa fa-get-pocket pocket" style="color:#ef4056;"></i> Pocket  

揃えるにはクラスに`fa-fw`を追加するだけ。  
<i class="fa fa-fw fa-twitter" style="color:#1da1f2;"></i> Twitter  
<i class="fa fa-fw fa-facebook-official facebook" style="color:#3b5998;"></i> Facebook  
<i class="fa fa-fw fa-google-plus google" style="color:#dd4b39;"></i> Google+  
<i class="fa fa-fw fa-pinterest pintest" style="color:#bd081c;"></i> Pintest  
<i class="fa fa-fw fa-get-pocket pocket" style="color:#ef4056;"></i> Pocket  

### 合わせ技

<span class="fa-stack fa-lg">
  <i class="fa fa-comment-o fa-stack-2x"></i>
  <i class="fa fa-car fa-stack-1x"></i>
</span>
fa-car on fa-comment<br>

<span class="fa-stack fa-lg">
  <i class="fa fa-square fa-stack-2x"></i>
  <i class="fa fa-refresh fa-spin fa-stack-1x fa-inverse"></i>
</span>
fa-terminal on fa-square<br>

<script src="https://gist.github.com/laureltreetop/97e0a548f23b1c0d60c3e0a51d9348e8.js"></script>

## [Material Icon](https://material.io/icons/)

Font Awesomeに無いアイコンもいろいろ。  
<i class="material-icons">cast</i>
<i class="material-icons purple500">fingerprint</i>
<i class="material-icons">phonelink_lock</i>
<i class="material-icons">g_translate</i>
{: .notice}

[Material Icon Guide](http://google.github.io/material-design-icons/)にある通り、画像としても使えたりする。  
とりあえず今回はWebで使いたいので、`<head>～</head>`内で呼び出し。
<script src="https://gist.github.com/laureltreetop/b4526e7bc9b02bf97d01985de2c5af09.js"></script>

あとは使いたいアイコンを選んで、ニョキッと出てくるIcon Fontコードをコピーし、使いたいところに貼るだけ。
[![Material Icon Select](/assets/images/material-icon-select.png)](/assets/images/material-icon-select.png)

<script src="https://gist.github.com/laureltreetop/d22e06acc4b3df3f276fbfd3fe96685d.js"></script>

## [IcoMoon](https://icomoon.io/)

Font Awesome, Material Iconにもないブランドフォントが、[IcoMoon](https://icomoon.io/)の[IcoMoon Library](https://icomoon.io/app/#/select/library)にあったりする。しかも色付き。  
<span class="icon-hatena"></span>
<span class="icon-line"></span>
<span class="icon-auth0"></span>
<span class="icon-playstation"></span>
{: .notice}

[IcoMoon Library](https://icomoon.io/app/#/select/library)から、Blandsを追加。
[![IcoMoon Library](/assets/images/icomoon-library.png)](/assets/images/icomoon-library.png)

欲しいアイコンを選択。
[![IcoMoon Brands Select](/assets/images/icomoon-brands-select.png)](/assets/images/icomoon-brands-select.png)

Generate Fontから、判りやすいようにラベルを変更してダウンロード。
[![IcoMoon label](/assets/images/icomoon-set-icon-label.png)](/assets/images/icomoon-set-icon-label.png)

解凍したファイル群を、階層を維持したままで移動。でもって`<head>～</head>`内で`icomoon/style.css`を呼び出し。
<script src="https://gist.github.com/laureltreetop/65876d3d2cab91fa8d90fe0bceed4426.js"></script>

使いたいところに貼るだけ。
<script src="https://gist.github.com/laureltreetop/83b59e657e93eeb0ee48ecb3b69bad94.js"></script>