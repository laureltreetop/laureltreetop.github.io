---
title: "Fonts"
description: Webフォントとかいろいろ。
permalink: /create-pages/fonts/
---
{{ page.description }}
{: .notice}

## [Font Awesome 5](https://fontawesome.com/)

いろいろ変わったようで…  
<i class="fab fa-line fa-3x"></i>とか使えるようになってますね。
{: .notice}

### 使い方

新規で使い始める場合、この1行を`</body>`の直前や`<head>`内に追加。
<script src="https://gist.github.com/laureltreetop/046ebf0e1096784c96aef89e32df2b8a.js"></script>

すでにVersion 4を使っていて、混在させて使う場合はさらに1行、計2行を追加。
<script src="https://gist.github.com/laureltreetop/8925ccb05768a84dca0f234f5102b8c4.js"></script>

あとは使いたいフォントを[Icons](https://fontawesome.com/icons)から探して、使いたいところにこんな感じで貼るだけ。  
classの`fa-2x`は大きさ指定。
<script src="https://gist.github.com/laureltreetop/5b3e0c533253c73c4fc56561b05f87ac.js"></script>

<i class="fab fa-2x fa-twitter"></i>
<i class="fab fa-2x fa-facebook"></i> 
<i class="fab fa-2x fa-google-plus"></i> 
<i class="fab fa-2x fa-pinterest"></i> 
<i class="fab fa-2x fa-get-pocket"></i>

### 色

TwitterとかFacebookのアイコンだと、やっぱり公式カラーにしたくなったり。[BrandColors](https://brandcolors.net/)のような資料もあるし。  
CSSで各色を設定。
<script src="https://gist.github.com/laureltreetop/3757401d0268c747415fb55c94fa1dad.js"></script>
で、それぞれにclass指定。
<script src="https://gist.github.com/laureltreetop/b0b8f628248ed3aa2906467a1446d3c3.js"></script>

あとはclassを付加すれば色も変わる[^brand-colors]。  
<i class="fab fa-2x fa-twitter twitter" style="color:#1da1f2;"></i>
<i class="fab fa-2x fa-facebook facebook" style="color:#3b5998;"></i> 
<i class="fab fa-2x fa-google-plus google" style="color:#dd4b39;"></i> 
<i class="fab fa-2x fa-pinterest pintest" style="color:#bd081c;"></i> 
<i class="fab fa-2x fa-get-pocket pocket" style="color:#ef4056;"></i>

[^brand-colors]:都合上、ここでの実際のソースでは直に`i class="fab fa-twitter" style="color:#1da1f2;"></i>`という感じで指定してます。

### 文字幅を揃える

アイコンによって幅が違う。  
<i class="fab fa-2x fa-twitter twitter" style="color:#1da1f2;"></i> Twitter  
<i class="fab fa-2x fa-facebook facebook" style="color:#3b5998;"></i> Facebook  
<i class="fab fa-2x fa-google-plus google" style="color:#dd4b39;"></i> Google+  
<i class="fab fa-2x fa-pinterest pintest" style="color:#bd081c;"></i> Pintest  
<i class="fab fa-2x fa-get-pocket pocket" style="color:#ef4056;"></i> Pocket  

揃えるにはclassに`fa-fw`を追加するだけ。  
<i class="fab fa-2x fa-fw fa-twitter" style="color:#1da1f2;"></i> Twitter  
<i class="fab fa-2x fa-fw fa-facebook facebook" style="color:#3b5998;"></i> Facebook  
<i class="fab fa-2x fa-fw fa-google-plus google" style="color:#dd4b39;"></i> Google+  
<i class="fab fa-2x fa-fw fa-pinterest pintest" style="color:#bd081c;"></i> Pintest  
<i class="fab fa-2x fa-fw fa-get-pocket pocket" style="color:#ef4056;"></i> Pocket  

### 合わせ技

<script src="https://gist.github.com/laureltreetop/d0f20c5d203a2da7d7af94a6dc0eda71.js"></script>
<div class="fa-layers fa-fw fa-4x">
    <i class="far fa-thumbs-down" data-fa-transform="shrink-6"></i>
    <span class="fas fa-ban" style="color:red"></span>
</div>

<div class="fa-layers fa-fw fa-4x">
    <i class="fab fa-line" style="color:#00c300;"></i>
    <span class="fa-layers-counter" style="background:orange">1,024</span>
</div>

<div class="fa-layers fa-fw fa-4x">
    <i class="far fa-envelope" style="color:darkgray"></i>
    <span class="fa-layers-counter" style="background:orange">256</span>
</div>

<div class="fa-layers fa-fw fa-4x">
    <i class="fas fa-phone-volume" data-fa-transform="rotate-210 shrink-3 flip-v flip-h" data-fa-mask="fas fa-circle" style="color:dodgerblue;"></i>
    <span class="fa-layers-counter" style="background:orange">13</span>
</div>

…なんか嫌ですなぁ。

### CSSで使う

[【保存版】Font Awesomeの使い方：Webアイコンフォントを使おう](https://saruwakakun.com/html-css/basic/font-awesome)が、マジに保存版な件。

```css
.article-date:before {
	font-family: "Font Awesome 5 Free";
	content: '\f017';
}
```
…とかやると、日付の前にアイコンを入れられたり。

## [Font Awesome 4.7.0](http://fontawesome.io/)

[Font Awesome 5](https://fontawesome.com/)が出たため、情報が一気に古くなってしまった…  
使い始めの説明だけ残しておく。
{: .notice--danger}

### 使い方

[Font Awesome](http://fontawesome.io/)から必要なファイルをダウンロードするとか、[Bootstrap CDN Font Awesome](https://www.bootstrapcdn.com/fontawesome/)を呼び出すとかいろいろ方法があるけど、[Get Started](http://fontawesome.io/get-started/)からさくっと登録して埋め込みコードを手に入れるのが楽。
<script src="https://gist.github.com/laureltreetop/e8c228e14ccb0ee000be506947bf969e.js"></script>

あとは使いたいフォントを[The Icons](http://fontawesome.io/icons/)から探して、使いたいところにこんな感じで貼るだけ。  
<script src="https://gist.github.com/laureltreetop/0a6ea6e1beacd67032e6306f2248fcff.js"></script>

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

Font Awesome, Material Iconにもないブランドフォントがあったりする。しかも色付き。  
<span class="icon-hatebu"></span>
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