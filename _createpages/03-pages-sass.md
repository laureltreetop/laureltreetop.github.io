---
title: "Sass"
permalink: /create-pages/sass/
date :
update : 
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
作ったやつは[Gist](https://gist.github.com/)に保存しておけます。
<p class="sassmeister" data-gist-id="cb7966a209028677bb3ce4c4d8212ecf" data-height="480" data-theme="tomorrow"><a <script src="https://gist.github.com/laureltreetop/cb7966a209028677bb3ce4c4d8212ecf.js"></script>
コードを貼り付けることもできますねぇ。