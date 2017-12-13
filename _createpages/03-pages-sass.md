---
title: "Sass"
permalink: /create-pages/sass/
update : 2017-12-12
toc_icon: "fab fa-sass"
---
CSS書いていると頭が渋滞しがちだけど、これなら便利なのかも。
{: .notice}

## <i class="fab fa-sass"></i>SASSとは

[Sass - Wikipedia](https://ja.wikipedia.org/wiki/Sass)というものらしい。  
公式サイトは[Sass: Syntactically Awesome Style Sheets](http://sass-lang.com/)ですな。  

### 利点
なぜSass推しなのかというと、[CSS3 Patterns Gallery](http://lea.verou.me/css3patterns/)で見つけた模様を小さくしようとしたのですよ。

<p data-height="400" data-theme-id="31931" data-slug-hash="LOwqYr" data-default-tab="css,result" data-user="laurel-treetop" data-embed-version="2" data-pen-title="Plaid  without Sass" class="codepen">See the Pen <a href="https://codepen.io/laurel-treetop/pen/LOwqYr/">Plaid  without Sass</a> by Laurel (<a href="https://codepen.io/laurel-treetop">@laurel-treetop</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

数字指定が細かすぎて、直すのが面倒。  
これをSassで変数設定して書いてあげると…
<p data-height="400" data-theme-id="31931" data-slug-hash="vWovov" data-default-tab="css,result" data-user="laurel-treetop" data-embed-version="2" data-pen-title="Plaid with Sass" class="codepen">See the Pen <a href="https://codepen.io/laurel-treetop/pen/vWovov/">Plaid with Sass</a> by Laurel (<a href="https://codepen.io/laurel-treetop">@laurel-treetop</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

`$size`の値を直せば、模様の伸縮自在になるわけです[^css2sass]。  
SCSS表示のときに右下の`VIEW COMPILED`でScssとCssの切り替えができます。  
今回はサンプルを持ってきたからややこしいのですが、自分で作るときに最初からSassで作っておけば便利かと。

[^css2sass]: もっときれいにまとめられると思うけど、本題から逸れるので勘弁して下さい。

色指定が楽になる、というのもあったり。
<p data-height="500" data-theme-id="31931" data-slug-hash="LeYGXL" data-default-tab="css,result" data-user="laurel-treetop" data-embed-version="2" data-pen-title="SlimMenu Color Change" class="codepen">See the Pen <a href="https://codepen.io/laurel-treetop/pen/LeYGXL/">SlimMenu Color Change</a> by Laurel (<a href="https://codepen.io/laurel-treetop">@laurel-treetop</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
ちょっと見るのに苦労すると思いますが、実はこれ、色を指定しているのは2箇所、メニューバーの基本になっている色と、テキストの色だけ。  
あとは基本の色を明るくしたり彩度を上げ下げしたりで調整してある。

### 欠点

ブラウザがサクッと読んでくれるわけではなく、コンパイルが必要。  
ということはコンパイラが必要。  
コンパイラの環境構築が面倒。  

## 環境構築

### コンパイラをインストールする

…ってのは面倒くさい。なので次の方法で[^sasscompiler]。  

[^sasscompiler]: といいつつ、そのうち整えるんでしょうねぇ。  

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
<p class="sassmeister" data-gist-id="a5eb8ea45ea8da208e9b8836f3105b69" data-height="480" data-theme="tomorrow"><a href="https://www.sassmeister.com/gist/a5eb8ea45ea8da208e9b8836f3105b69">Play with this gist on SassMeister.</a></p><script src="https://cdn.sassmeister.com/js/embed.js" async></script>

なので、Gist側からも貼っておく。  
変換前のSass
<script src="https://gist.github.com/a5eb8ea45ea8da208e9b8836f3105b69.js?file=SassMeister-input.scss"></script>

変換後のCss
<script src="https://gist.github.com/a5eb8ea45ea8da208e9b8836f3105b69.js?file=SassMeister-output.css"></script>

## リンク

 + [Sass](http://sass-lang.com/)
 : 公式
 + [Sass Documentation](http://sass-lang.com/documentation/file.README.html)
 : 公式のドキュメント
 + [Sass Meister](https://www.sassmeister.com/)
 : お試しだったり、Jekyllとかで環境が整っているところに追記するのに便利
 + [Sassってなに？だった私がSassの使い方を解説してみた](http://creator.dwango.co.jp/9668.html)
 : 判りやすい
 + [CSS To SCSS Converter](http://beautifytools.com/css-to-scss-converter.php)
 : 名前の通り
 + [css2scss](http://sebastianpontow.de/css2compass/)
 : [汚いcssを整形するWebアプリ「css2scss」でリファクタリングした際、「ヤバい」と感じた３つの機能と３つの点](https://qiita.com/koh-taka@github/items/bf638dd64c7c09e93557)
 + [sassでコーディング効率化！意外と知らなかった？関数いろいろ](http://satohmsys.info/sass-coding-tips-1/)
 + [sass×compassでコーディング効率化！意外と知らなかった？関数いろいろ](http://satohmsys.info/sass-coding-tips-with-compass/)
 + [sass×compassでコーディング効率化！僕がよく使う自作mixin ※デモ付き](http://satohmsys.info/ssass-coding-tips-with-mixin/)
 : この3つ、具体例がたくさんあったり、実用性があったり