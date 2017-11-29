---
title: "はてブをカスタマイズ"
permalink: /hatebu/customize/
---
テーマ共通のカスタマイズ。
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

## シェアボタン

レスポンシブ仕様で追加していきます。    
まずは先述のJQueryとFont Awesomeを追加。  

次に`設定`→`詳細設定`→`検索エンジン最適化`→`headに要素を追加`に追加。  
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

## Amazon紹介リンク

参照・[はてなブログの Amazon 商品紹介をちょっぴり改善するカスタマイズ](http://moonnote.hateblo.jp/entry/2016/01/04/215503)  
[Innocent](http://blog.hatena.ne.jp/-/store/theme/6653586347149180725)には最初から右下のアイコンが設定されています。
{: .notice--info}

デフォルトだとこんな感じ[^amazonlink]。
[![Amazon Link default](/assets/images/hatebu-amazon-link-default.png)](/assets/images/hatebu-amazon-link-default.png)

`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`デザインCSS`に追加。
<script src="https://gist.github.com/laureltreetop/b0e9e9c85d05519256b32a9ef822bcc7.js"></script>

リンクの色はオレンジに、右下にAmazonアイコンが表示され、こういう感じに。
[![Amazon link](/assets/images/hatebu-amazon-link.png)](/assets/images/hatebu-amazon-link.png)

[^amazonlink]: [厚さ測定定規](http://amzn.to/2iUae5o)へのリンクです。

## 日付表示

### 記事の下にあるIDと日付を非表示に

`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`デザインCSS`に追加。
<script src="https://gist.github.com/laureltreetop/e9468b986da746fe7625d783928e47bf.js"></script>

### 指定した年の記事はアーカイブから除外

固定記事を過去日付や未来日付にしているときに便利。  
`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`デザインCSS`に追加。
<script src="https://gist.github.com/laureltreetop/003bfae833a5424f7987183d247fdbfc.js"></script>

### 指定した年の記事は投稿日時を表示しない

`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`デザインCSS`に追加[^postedtime]。
<script src="https://gist.github.com/laureltreetop/224100198431263f2b751473fabdf32a.js"></script>

[^postedtime]: 当方は固定記事の日付を2000年と2100年の1月1日にしているが、どうやら時差の関係で前年カウントされているらしい。

## 更新日付も表示

+ [更新日自動表示のカスタマイズをアップデートしました、レスポンシブデザインの方はご確認ください](http://www.tsubasa-note.blog/entry/last-modified-customize-fix)
+ [リライト好きな方へおススメしたい最終更新日を自動で表示するカスタマイズ](http://www.tsubasa-note.blog/entry/last-modified-customize)

コードは前者、スタイルは後者のほぼ記事通りでできます。