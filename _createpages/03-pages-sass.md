---
title: "Sass"
permalink: /create-pages/sass/
date : 2017-12-10
update : 2017-12-10
---
CSS書いていると頭が渋滞しがちだけど、これなら便利なのかも。
{: .notice}

## SASSとは

[Sass - Wikipedia](https://ja.wikipedia.org/wiki/Sass)というものらしい。  
公式サイトは[Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/)ですな。  
で、ブラウザがサクッと読んでくれるわけではなく、コンパイルが必要。  

### 利点
なぜSass推しなのかというと、[CSS3 Patterns Gallery](http://lea.verou.me/css3patterns/)で見つけた模様を小さくしようとしたのですよ。

<p data-height="400" data-theme-id="31931" data-slug-hash="LOwqYr" data-default-tab="css,result" data-user="laurel-treetop" data-embed-version="2" data-pen-title="Plaid  without Sass" class="codepen">See the Pen <a href="https://codepen.io/laurel-treetop/pen/LOwqYr/">Plaid  without Sass</a> by Laurel (<a href="https://codepen.io/laurel-treetop">@laurel-treetop</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

数字指定が細かすぎて、直すのが面倒。  
これをSassで変数設定して書いてあげると…
<p data-height="400" data-theme-id="31931" data-slug-hash="vWovov" data-default-tab="css,result" data-user="laurel-treetop" data-embed-version="2" data-pen-title="Plaid with Sass" class="codepen">See the Pen <a href="https://codepen.io/laurel-treetop/pen/vWovov/">Plaid with Sass</a> by Laurel (<a href="https://codepen.io/laurel-treetop">@laurel-treetop</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

`$size`の値を直せば、模様の伸縮自在になるわけです[^css2sass]。  
今回はサンプルを持ってきたからややこしいのですが、自分で作るときに最初からSassで作っておけば便利かと。

[^css2sass]: もっときれいにまとめられると思うけど、本題から逸れるので勘弁して下さい。

## 環境構築

### ソフトをインストールする

…ってのは面倒くさい。なので次の方法で。

### オンラインエディタで編集

[SassMeister](https://www.sassmeister.com/)というのが便利。プレビューもあるし。  
試しにさきほどのSassを突っ込んでみると、サイズが変更できるかと。  
作ったやつは[Gist](https://gist.github.com/)にSecret Gistとして保存しておけます。  
`https://www.sassmeister.com/gist/`+gistのIDで開けます。  
コードを貼り付けることもできますね。  
<p class="sassmeister" data-gist-id="d9f98cddaaf413b1a655f04d0b1c8ba9" data-height="480" data-theme="tomorrow"><a href="https://www.sassmeister.com/gist/d9f98cddaaf413b1a655f04d0b1c8ba9">Play with this gist on SassMeister.</a></p><script src="https://cdn.sassmeister.com/js/embed.js" async></script>
ただ、かなりの確率で404 errorになるのですが、なんなんでしょ…?

## 書式

いろいろ便利みたいだけど、とりあえず使ってみた範囲で。
{: .notice}

### とりあえずメモ

便利だなと思ったのを放り込んでおく。  
たぶん見えない可能性が高いと思うが…
<p class="sassmeister" data-gist-id="0f6dbe8c3f2e25dfdfab11a9b8a9213c" data-height="480" data-theme="tomorrow"><a href="https://www.sassmeister.com/gist/0f6dbe8c3f2e25dfdfab11a9b8a9213c">Play with this gist on SassMeister.</a></p><script src="https://cdn.sassmeister.com/js/embed.js" async></script>
