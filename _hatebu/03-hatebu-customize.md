---
title: "はてブをカスタマイズ がっつり編"
permalink: /hatebu/customize/
---
デザインなど簡単なものは[CSS編](/hatebu/customize-css/)に。
{: .notice}

## [JQuery](https://jquery.com/)

`設定`→`詳細設定`→`検索エンジン最適化`→`headに要素を追加`に追加。
<span><script src="https://gist.github.com/laureltreetop/59d30a038a01d98a7fe6bc1c7bcc2a91.js"></script></span>
最新は[Google Hosted Libraries](https://developers.google.com/speed/libraries/#jquery)で確認。

## [Font Awesome](http://fontawesome.io/)

はてなブログ標準でもいろんなアイコンフォントが使えますが、後述のシェアボタンなどのようにFont Awesome前提のカスタマイズも多い。
{: .notice--info}

[Get Started](http://fontawesome.io/get-started/)からさくっと登録して埋め込みコードを手に入れるのが楽[^fontawesome] 。

[^fontawesome]: [Fonts](/create-pages/fonts/)（当サイト記事）も参考にどうぞ。

`設定`→`詳細設定`→`検索エンジン最適化`→`headに要素を追加`に追加。  
<script src="https://gist.github.com/laureltreetop/e8c228e14ccb0ee000be506947bf969e.js"></script>

## トップに戻る

上記のJQueryとFont Awesomeを追加し、`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`ヘッダ`に追加。
<script src="https://gist.github.com/laureltreetop/c32c117a913668c6ef625aee525d7f8d.js"></script>

`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`デザインCSS`に追加。デザインはお好みで。
<script src="https://gist.github.com/laureltreetop/3201e4dfb093ef0cfecb1fe65d4d2c94.js"></script>

あとはスクリプトを`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`フッタ`に追加で完了。
<script src="https://gist.github.com/laureltreetop/a2ad0f5f1adc4baa4364b03d09b98f59.js"></script>

## シェアボタン

レスポンシブ仕様で追加していきます。    
まずは先述のJQueryとFont Awesomeを追加。  

次に`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`フッタ`に追加。  
<script src="https://gist.github.com/laureltreetop/6cc3c83b1f1268fc29ebc98b90a74f6e.js"></script>

`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`デザインCSS`に追加。
<script src="https://gist.github.com/laureltreetop/895a30fcfff69189140de5d5f3be4792.js"></script>

最後に`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`記事`→`記事上`または`記事下`に追加。  
各ソーシャルパーツは全部チェックを外しちゃってください。
<script src="https://gist.github.com/laureltreetop/2c3c2b5852c139bb65b8251ab2daabb1.js"></script>

元ネタにはないシェアボタンも追加してあります。
[![HateBu Share](/assets/images/hatebu-share-icons.png)](/assets/images/hatebu-share-icons.png)

参考
+ [【変更お願い!】コピペのみではてなブログのソーシャルボタンをシェア数付きでおしゃれにするカスタマイズvol.2](http://www.yukihy.com/entry/vol2-hatenablog-share-btn-custom)
+ [サイトの高速化に！Twitter、Facebook、Google＋、はてブのシェア数をJavaScriptで非同期に取得する方法まとめ](https://nelog.jp/sns-buttons-on-ajax)
+ [【はてなブログ高速化】自作ソーシャルボタン・シェアボタンで軽量化、ブログを高速に読み込む（完成）](http://www.imuza.com/entry/2016/09/05/134417)

## 更新日付も表示

+ [更新日自動表示のカスタマイズをアップデートしました、レスポンシブデザインの方はご確認ください](http://www.tsubasa-note.blog/entry/last-modified-customize-fix)
+ [リライト好きな方へおススメしたい最終更新日を自動で表示するカスタマイズ](http://www.tsubasa-note.blog/entry/last-modified-customize)

コードは前者、スタイルは後者のほぼ記事通りでできます。