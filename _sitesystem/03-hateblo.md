---
title: "はてなブログ"
description: とりあえずはメモりつつ作業。
permalink: /sitesystem/hateblo/
classes: wide
header:
  teaser: /assets/images/hatebu-share-icons.png
  og_image: /assets/images/hatebu-share-icons.png
---
{{ page.description }}
{: .notice}

## まず作ってみる

### テーマ

+ [CONTENTS](http://blog.hatena.ne.jp/-/store/theme/6653812171397613909)
+ [Brooklyn](http://blog.hatena.ne.jp/-/store/theme/6653586347155924442)
+ [Innocent](http://blog.hatena.ne.jp/-/store/theme/6653586347149180725)
+ [Material](http://blog.hatena.ne.jp/-/store/theme/8454420450093337097)

### Favicon

`設定`→`基本設定`→`ブログアイコン`でFaviconを設定。

### OPGイメージ

`設定`→`詳細設定`→`アイキャッチ画像`でOPGイメージを設定。  
ちゃんと設定されているか、[Facebookシェアデバッガー](https://developers.facebook.com/tools/debug/)で確認。

### その他

+ [はてなブログで使えるアイコンフォント（Webフォント）117種類](http://www.foxism.jp/entry/2017/01/19/023536)

## カスタマイズ CSS編

CSSだけでできるカスタマイズ集。  
`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`デザインCSS`に追加していきます。
{: .notice}

### Amazon紹介リンク

参照・[はてなブログの Amazon 商品紹介をちょっぴり改善するカスタマイズ](http://moonnote.hateblo.jp/entry/2016/01/04/215503)  
[Innocent](http://blog.hatena.ne.jp/-/store/theme/6653586347149180725)には最初から右下のアイコンが設定されています。
{: .notice--info}

デフォルトだとこんな感じ[^amazonlink]。
[![Amazon Link default](/assets/images/hatebu-amazon-link-default.png)](/assets/images/hatebu-amazon-link-default.png)

<script src="https://gist.github.com/laureltreetop/b0e9e9c85d05519256b32a9ef822bcc7.js"></script>

リンクの色はオレンジに、右下にAmazonアイコンが表示され、こういう感じに。
[![Amazon link](/assets/images/hatebu-amazon-link.png)](/assets/images/hatebu-amazon-link.png)

[^amazonlink]: [厚さ測定定規](http://amzn.to/2iUae5o)へのリンクです。

### 記事の下にあるIDと日付を非表示に

<script src="https://gist.github.com/laureltreetop/e9468b986da746fe7625d783928e47bf.js"></script>

### 指定した年の記事はアーカイブから除外

固定記事を過去日付や未来日付にしているときに便利。
<script src="https://gist.github.com/laureltreetop/003bfae833a5424f7987183d247fdbfc.js"></script>

### 指定した年の記事は投稿日時を表示しない

当方は固定記事の日付を2000年と2100年の1月1日にしているが、どうやら時差の関係で前年カウントされているらしい。
<script src="https://gist.github.com/laureltreetop/224100198431263f2b751473fabdf32a.js"></script>

## カスタマイズ がっつり編

### 事前準備

[JQuery](https://jquery.com/)を追加。  
最新は[Google Hosted Libraries](https://developers.google.com/speed/libraries/#jquery)で確認。  
`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`フッタ`に追加。
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

[Font Awesome](https://fontawesome.com/)も追加。  

はてなブログ標準でもいろんなアイコンフォントが使えるが、後述のシェアボタンなどのようにFont Awesome前提のカスタマイズも多い。
{: .notice}

[Get Started](https://fontawesome.com/get-started)からさくっと埋め込みコードを入手。  
`設定`→`詳細設定`→`検索エンジン最適化`→`headに要素を追加`に追加。
```html
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
```
5.0からいろいろ変更になりました。[Fonts](/create-pages/fonts/)（当サイト記事）も参考にどうぞ。

### トップに戻る

上記のJQueryとFont Awesomeを追加し、`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`ヘッダ`に追加。
```html
<p id="page-top"><a href="#wrap"><i class="fas fa-angle-double-up fa-3x"></i></a></p>
```

`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`デザインCSS`に追加。デザインはお好みで。
<script src="https://gist.github.com/laureltreetop/3201e4dfb093ef0cfecb1fe65d4d2c94.js"></script>

あとはスクリプトを`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`フッタ`に追加で完了。
<script src="https://gist.github.com/laureltreetop/a2ad0f5f1adc4baa4364b03d09b98f59.js"></script>

### シェアボタン

レスポンシブ仕様で追加していきます。    
まずは先述のJQueryとFont Awesomeを追加。  

次に`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`フッタ`に追加。  
<script src="https://gist.github.com/laureltreetop/6cc3c83b1f1268fc29ebc98b90a74f6e.js"></script>

`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`デザインCSS`に追加。
<script src="https://gist.github.com/laureltreetop/895a30fcfff69189140de5d5f3be4792.js"></script>

最後に`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`記事`→`記事上`または`記事下`に追加。  
各ソーシャルパーツは全部チェックを外しちゃってください。
<script src="https://gist.github.com/laureltreetop/2c3c2b5852c139bb65b8251ab2daabb1.js"></script>

元ネタにはないシェアボタンも追加してあります。
[![HateBu Share](/assets/images/hatebu-share-icons.png)](/assets/images/hatebu-share-icons.png)

[CodePen](https://codepen.io/)バージョンも載せとく。  
FontAwesomeは[Bootstrap](https://www.bootstrapcdn.com/fontawesome/)より。追加の仕方も@importにしてあります。  
はてブとEvernoteのアイコンは、はてブ用アイコンなので表示されてません。
<p data-height="336" data-theme-id="0" data-slug-hash="ZawGMW" data-default-tab="result" data-user="laurel-treetop" data-embed-version="2" data-pen-title="Share button for Hatebu" class="codepen">See the Pen <a href="https://codepen.io/laurel-treetop/pen/ZawGMW/">Share button for Hatebu</a> by Laurel (<a href="https://codepen.io/laurel-treetop">@laurel-treetop</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

参考
+ [【変更お願い!】コピペのみではてなブログのソーシャルボタンをシェア数付きでおしゃれにするカスタマイズvol.2](http://www.yukihy.com/entry/vol2-hatenablog-share-btn-custom)
+ [サイトの高速化に！Twitter、Facebook、Google＋、はてブのシェア数をJavaScriptで非同期に取得する方法まとめ](https://nelog.jp/sns-buttons-on-ajax)
+ [【はてなブログ高速化】自作ソーシャルボタン・シェアボタンで軽量化、ブログを高速に読み込む（完成）](http://www.imuza.com/entry/2016/09/05/134417)

### 更新日付も表示

+ [更新日自動表示のカスタマイズをアップデートしました、レスポンシブデザインの方はご確認ください](http://www.tsubasa-note.blog/entry/last-modified-customize-fix)
+ [リライト好きな方へおススメしたい最終更新日を自動で表示するカスタマイズ](http://www.tsubasa-note.blog/entry/last-modified-customize)

コードは前者、スタイルは後者のほぼ記事通りでできます。

### オートページャー

無限スクロールとかInfinity Scrollとか言われてるやつ。  
[はてなブログの記事一覧を無限スクロールさせる(オートページャー)](http://psn.hatenablog.jp/entry/2015/12/11/090001)に少しだけ手を加えて、次のページを表示したら「次へ」的なリンクを削除と言うか隠す。  
元ネタではInfinite Scrollの記述はなかったけど、当方の環境では必須っぽい。  
`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`フッタ`に追加。
<script src="https://gist.github.com/laureltreetop/158c07a10742f269b0695b96e19c2b80.js"></script>

## Innocent限定のカスタマイズ

[Innocent](http://blog.hatena.ne.jp/-/store/theme/6653586347149180725)をカスタマイズ。
{: .notice}

### ナビゲーションバー

参照・[はてなブログテーマ「Innocent」のカスタマイズ（ナビゲーションバー編）](http://moonnote.hateblo.jp/entry/customize-innocent-navigation-bar)
{: .notice--info}

[JQuery](https://jquery.com/)を追加。すでに追加している場合は、次の工程に。

次に、`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`フッタ`にスクリプトを追加。
<script src="https://gist.github.com/laureltreetop/125855bb2fb7ed829836e2671be6851c.js"></script>

ヘッダもスクリプト追加を。  
`デザイン`→<i class="fas fa-wrench" aria-hidden="true"></i>→`ヘッダ`→`タイトル下`。
<script src="https://gist.github.com/laureltreetop/d7a56677d7ea34c877d570af60e8f2e6.js"></script>

