---
title: "Fonts"
description: "Webフォントとかアイコンフォントなどいろいろ。"
permalink: /create-pages/fonts/
classes: wide
header:
  teaser: /assets/images/material-icon-select.png
  og_image: /assets/images/material-icon-select.png
---
{{ page.description }}
{: .notice}

## アイコン

### [Font Awesome 5](https://fontawesome.com/)

いろいろ変わったようで…  
<i class="fab fa-line fa-3x"></i>とか使えるようになってますね。
{: .notice}

#### 使い方

新規で使い始める場合、この1行を`</body>`の直前や`<head>`内に追加。  
最新は[How to Use](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=svg-with-js)より確認。
```html
<script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" integrity="sha384-3LK/3kTpDE/Pkp8gTNp2gR/2gOiwQ6QaO7Td0zV76UFJVhqLl4Vl3KL1We6q6wR9" crossorigin="anonymous"></script>
```

あとは使いたいフォントを[Icons](https://fontawesome.com/icons)から探して、使いたいところにこんな感じで貼るだけ。  
classの`fa-2x`は大きさ指定。
```html
<i class="fab fa-2x fa-twitter"></i>
<i class="fab fa-2x fa-facebook"></i> 
<i class="fab fa-2x fa-google-plus"></i> 
<i class="fab fa-2x fa-pinterest"></i> 
<i class="fab fa-2x fa-get-pocket"></i>
```

<i class="fab fa-2x fa-twitter"></i>
<i class="fab fa-2x fa-facebook"></i> 
<i class="fab fa-2x fa-google-plus"></i> 
<i class="fab fa-2x fa-pinterest"></i> 
<i class="fab fa-2x fa-get-pocket"></i>

#### 色

TwitterとかFacebookのアイコンだと、やっぱり公式カラーにしたくなったり。[BrandColors](https://brandcolors.net/)のような資料もあるし。  
CSSで各色を設定。
```css
.twitter {
    background: #55acee;   
    color: #ffffff;
}
.facebook {
    background: #3b5998;
    color: #ffffff;
}
.google {
    background: #dd4b39;
    color: #ffffff;
}
.pinterest {
    background: #bd081c;
    color: #ffffff;
}
.tumblr {
    background: #36465d;
    color: #ffffff;
}
.rss {
    background: #ff8c00;
    color: #ffffff;
}
.pocket {
    background: #ef3f56;
    color: #ffffff;
}
```
で、それぞれにclass指定。
```html
<i class="fab fa-2x fa-twitter twitter"></i>
<i class="fab fa-2x fa-facebook facebook"></i> 
<i class="fab fa-2x fa-google-plus google"></i> 
<i class="fab fa-2x fa-pinterest pintest"></i> 
<i class="fab fa-2x fa-get-pocket pocket"></i>
```

あとはclassを付加すれば色も変わる[^brand-colors]。  
<i class="fab fa-2x fa-twitter twitter" style="color:#1da1f2;"></i>
<i class="fab fa-2x fa-facebook facebook" style="color:#3b5998;"></i> 
<i class="fab fa-2x fa-google-plus google" style="color:#dd4b39;"></i> 
<i class="fab fa-2x fa-pinterest pintest" style="color:#bd081c;"></i> 
<i class="fab fa-2x fa-get-pocket pocket" style="color:#ef4056;"></i>

[^brand-colors]:都合上、ここでの実際のソースでは直に`i class="fab fa-twitter" style="color:#1da1f2;"></i>`という感じで指定してます。

#### 文字幅を揃える

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

#### 合わせ技

```html
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
```
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

#### cssやscssで使う

下の方に古い記事も残しておくけど、こっちのほうが簡単に使えるので。  
[Getting Started on the Web](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css)にあるように、`<head>`に
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
```
と入れていおいて、[CSS Pseudo-elements](https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements)にあるように、
```scss
blockquote {
    &::before {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        content: '\f10d';
    }
    &::after {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        content: '\f10e';
    }
}
```
とcssなりscssに突っ込んでおけばいいかと。  
（<i class="far fa-hand-point-up"></i>はあとから出てくるblockquoteでのscssを端折ってあるやつ）  
ブランドロゴは`font-family: "Font Awesome 5 Brands";`だけでいいけど、矢印だったりの普通の(?)アイコンを使う時は、
```css
font-family: "Font Awesome 5 Free";
font-weight: 900;
```
というふうにfont-weightを900に設定するのが必須。  
そうじゃないとお豆腐になっちゃいます。

#### cssやscssで使う（古くなった）

引用に使えないかなーと思って苦労したが、下記の記事が参考になった。
+ [【保存版】Font Awesomeの使い方：Webアイコンフォントを使おう](https://saruwakakun.com/html-css/basic/font-awesome)
+ [Font Awesome 5 Freeで疑似要素(:after,:before)のcontent指定する場合](https://qiita.com/Garyuten/items/6d68da5cdac6dab9ba26)
+ [アイコン読み込みがJavaScript+SVG描画に変わった「Font Awesome 5」に変更してみた](https://creatorclip.info/2018/02/fontawesome-5-change/)

まずはhead内に少し追加。  
SGV描画を推奨しているらしく、それに沿ってやってみる。
```html
<script>
    FontAwesomeConfig = { searchPseudoElements: true };
</script>
<script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" integrity="sha384-3LK/3kTpDE/Pkp8gTNp2gR/2gOiwQ6QaO7Td0zV76UFJVhqLl4Vl3KL1We6q6wR9" crossorigin="anonymous"></script>
```
で、引用に使いたい場合は、scssやcssではこんな感じで[^mm-blockquote]。  
TwitterやWikipediaからの引用だったら右上にアイコンを入れたりしてます。

[^mm-blockquote]: 当方が使っているテーマ[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)の依存部分を上書きしたり、変数がそのまま使われているので、そのあたりは読み替えてください。

cssバージョン。
<script src="https://gist.github.com/laureltreetop/85655027ff1846841ec8e8d48e1ec37f.js?file=SassMeister-output.css"></script>
sassだと少しすっきり書けるかな。
<script src="https://gist.github.com/laureltreetop/85655027ff1846841ec8e8d48e1ec37f.js?file=SassMeister-input.scss"></script>

> We’ve seen a lot of examples where adding markup like &lt;i class=&quot;fas fa-user&quot; /&gt; allows you to easily add icons to any site. But what if changing the markup or HTML is not possible?  

右下にも記号を入れるのに苦労した…  

> display: none;で消すのは、先ほど説明したようにSVGに置換されるため疑似要素があると2重でアイコンが表示されるため。SVGとセットで`<i>`タグも生成されるため、一緒に消しておくことを忘れずに！
>
> スタイルを当てるときはSVGタグ（.svg-inline--fa）に色なりマージンなり追加して下さい。  
> <cite><a href="https://creatorclip.info/2018/02/fontawesome-5-change/">アイコン読み込みがJavaScript+SVG描画に変わった「Font Awesome 5」に変更してみた</a></cite>  

…というのがキーポイントに。

### [Material Icon](https://material.io/icons/)

Font Awesomeに無いアイコンもいろいろ。  
<i class="material-icons">cast</i>
<i class="material-icons purple500">fingerprint</i>
<i class="material-icons">phonelink_lock</i>
<i class="material-icons">g_translate</i>
{: .notice}

[Material Icon Guide](http://google.github.io/material-design-icons/)にある通り、画像としても使えたりする。  
とりあえず今回はWebで使いたいので、`<head>～</head>`内で呼び出し。
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

あとは使いたいアイコンを選んで、ニョキッと出てくるIcon Fontコードをコピーし、使いたいところに貼るだけ。
[![Material Icon Select](/assets/images/material-icon-select.png)](/assets/images/material-icon-select.png)
```html
<i class="material-icons">cast</i>
<i class="material-icons">fingerprint</i>
<i class="material-icons">phonelink_lock</i>
<i class="material-icons">g_translate</i>
```

### [IcoMoon](https://icomoon.io/)

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
```html
<link rel="stylesheet" href="/assets/icomoon/style.css">
```

使いたいところに貼るだけ。
```html
<span class="icon-hatebu"></span>
<span class="icon-line"></span>
<span class="icon-auth0"></span>
<span class="icon-playstation"></span>
```

## Webフォント

前述のMaterial Iconと、Google Fonts, Google Font + 日本語早期アクセスと全てGoogle系なので、要領は一緒かと。
{: .notice}

### [Google Fonts](https://fonts.google.com/)

一覧からフォントを選ぶ（複数可）。  
数がかなり多いので、右側のCategoriesで絞っていくと吉。
[![Google Fonts list](/assets/images/fonts_google-list.png)](/assets/images/fonts_google-list.png)

選んだら下の方にこういうのが出てくる。
[![Google Fonts list](/assets/images/fonts_google-pickup.png)](/assets/images/fonts_google-pickup.png)

引っ張り出して、スタンダードなやり方で使ったりとか。
[![Google Fonts standard](/assets/images/fonts_google-standard.png)](/assets/images/fonts_google-standard.png)

@importなやり方で埋め込んでみたり。
[![Google Fonts import](/assets/images/fonts_google-import.png)](/assets/images/fonts_google-import.png)

### [Google Fonts + 日本語 早期アクセス](https://googlefonts.github.io/japanese/)

一覧からフォントを選ぶ。
[![Google Fonts japanese list](/assets/images/fonts_google-japanese-list.png)](/assets/images/fonts_google-japanese-list.png)

さわらび明朝を選んでみた。右側にちょこんと埋め込み方が。  
説明画像はちょこんなんて感じじゃないけど。
[![Google Fonts sawarabo](/assets/images/fonts_google-japanese-sawarabi.png)](/assets/images/fonts_google-japanese-sawarabi.png)

他にもいろいろあるけど、条件付きで無料とか、レンタルサーバで使えるやつとか、ちょっとめんどい。