---
title: "Jquery Plugins"
permalink: /create-pages/javascript/
---
今はタグ打ちなんてしなくてもできるねーと思っていたら、まさかの[Tumblrのテーマカスタマイズ](/tumblr/custom-theme/)でのタグ打ち。
この機会にいろいろメモっておく。
{: .notice}

## まずはJquery
[JQuery][]を`<head>...</head>`の間で呼び出しておく。
<span><script src="https://gist.github.com/laureltreetop/59d30a038a01d98a7fe6bc1c7bcc2a91.js"></script></span>
最新は[Google Hosted Libraries](https://developers.google.com/speed/libraries/#jquery)で確認。  
プラグインの呼び出しはこの指定より下に。

## 画像などを拡大表示

画像だったりコンテンツだったりをにゅっと開く。LightBoxとか言いますねぇ。    
[![fancyBox-test](/assets/images/github-header.png)](/assets/images/github-header.png)

[JQuery][]を追加したあと、[fancyBox](http://fancyapps.com/fancybox/3/)も追加しておく。バージョンは[fancybox cdnjs](https://cdnjs.com/libraries/fancybox/)にて確認。  
<script src="https://gist.github.com/laureltreetop/5b77a8d4107f307f362c7a54b78702a2.js"></script>

でもって`<script>`内に追加。
<script src="https://gist.github.com/laureltreetop/20cd1eb92d5b1e9a83de7ba6ed867841.js"></script>
使うときはこんな感じで。  
<script src="https://gist.github.com/laureltreetop/7e6d97ed4adbd3b9309b6d8c803714b7.js"></script>
画像以外にも使えるので詳しくは[ドキュメント](http://fancyapps.com/fancybox/3/docs/)を参照。

## トップに戻る

上記の[JQuery][]とFont Awesome[^fontawesome]を追加し、判りやすいところ（ナビメニュー近辺とか）に追加。
<script src="https://gist.github.com/laureltreetop/c32c117a913668c6ef625aee525d7f8d.js"></script>

[^fontawesome]: [Fonts](create-pages/fonts/)参照。

CSSに追加。デザインはお好みで。
<script src="https://gist.github.com/laureltreetop/3201e4dfb093ef0cfecb1fe65d4d2c94.js"></script>

あとはスクリプトを追加で完了。
<script src="https://gist.github.com/laureltreetop/a2ad0f5f1adc4baa4364b03d09b98f59.js"></script>

## 無限スクロール
### Infinite Scroll

[JQuery][]のあとに、[Infinite Scroll][]を呼び出し
<script src="https://gist.github.com/laureltreetop/1a9dc2373991dc59d93270f752e3577b.js"></script>
~~[jquery-infinitescroll](https://cdnjs.com/libraries/jquery-infinitescroll)で最新を確認。~~[^cannotinfinite]  

[^cannotinfinite]: もしかして3.xでは動かない? あと、場合によっては最後にinfinitescrollを呼び出さないと、他の（なにかしらのプラグインとか）と干渉することがある。  

設定。
<script src="https://gist.github.com/laureltreetop/bf184996dadb4a4b7d059cf0f1239e68.js"></script>
ロード中や完了のメッセージを変えたり、アニメーションGIFを置き換えてみたり。  

### Infinite Scroll + Masonry

[Infinite Scroll][]と[Masonry][]と[imagesLoaded][]の相性が良いらしい。  
記事がグリッドに並んでいて、スクロールすると記事一覧の続きがぱらぱらっと表示されていく[^masonry]。  
参照 [その1](http://illbenet.jp/view/78) [その2](http://illbenet.jp/view/77)

[^masonry]: 説明ムズイ…

<script src="https://gist.github.com/laureltreetop/f85fc186dd2c122008ad6ab8566a472f.js"></script>

でもって設定。  
<script src="https://gist.github.com/laureltreetop/c0e3d27195fbc57054f139a65f2e6af2.js"></script>

## Popな見出し

<p data-height="344" data-theme-id="0" data-slug-hash="KybYme" data-default-tab="result" data-user="laurel-treetop" data-embed-version="2" data-pen-title="Pop Lettering" class="codepen">See the Pen <a href="https://codepen.io/laurel-treetop/pen/KybYme/">Pop Lettering</a> by Laurel (<a href="https://codepen.io/laurel-treetop">@laurel-treetop</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>


[JQuery]: https://jquery.com/
[Infinite Scroll]: https://infinite-scroll.com/
[Masonry]: https://masonry.desandro.com/
[imagesLoaded]: https://imagesloaded.desandro.com/