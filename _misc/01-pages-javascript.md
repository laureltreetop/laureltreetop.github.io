---
last_modified_at: 2017-11-12
title: "Jquery Plugins"
permalink: /misc/javascript/
---
今はタグ打ちなんてしなくてもできるねーと思っていたら、まさかの[Tumblrのテーマカスタマイズ](/tumblr/custom-theme/)でのタグ打ち。
この機会にいろいろメモっておく。
{: .notice}

## まずはJquery
[JQuery][]を`<head>...</head>`の間で呼び出しておく。
<span><script src="https://gist.github.com/laureltreetop/59d30a038a01d98a7fe6bc1c7bcc2a91.js"></script></span>
最新は[Google Hosted Libraries](https://developers.google.com/speed/libraries/)で確認。  
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


[JQuery]: https://jquery.com/
[Infinite Scroll]: https://infinite-scroll.com/
[Masonry]: https://masonry.desandro.com/
[imagesLoaded]: https://imagesloaded.desandro.com/