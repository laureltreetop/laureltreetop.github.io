---
title: "はてブをカスタマイズ CSS編"
permalink: /hatebu/customize-css/
---
CSSだけでできるカスタマイズ集。  
`デザイン`→<i class="fa fa-wrench" aria-hidden="true"></i>→`デザインCSS`に追加していきます。
{: .notice}

## Amazon紹介リンク

参照・[はてなブログの Amazon 商品紹介をちょっぴり改善するカスタマイズ](http://moonnote.hateblo.jp/entry/2016/01/04/215503)  
[Innocent](http://blog.hatena.ne.jp/-/store/theme/6653586347149180725)には最初から右下のアイコンが設定されています。
{: .notice--info}

デフォルトだとこんな感じ[^amazonlink]。
[![Amazon Link default](/assets/images/hatebu-amazon-link-default.png)](/assets/images/hatebu-amazon-link-default.png)

<script src="https://gist.github.com/laureltreetop/b0e9e9c85d05519256b32a9ef822bcc7.js"></script>

リンクの色はオレンジに、右下にAmazonアイコンが表示され、こういう感じに。
[![Amazon link](/assets/images/hatebu-amazon-link.png)](/assets/images/hatebu-amazon-link.png)

[^amazonlink]: [厚さ測定定規](http://amzn.to/2iUae5o)へのリンクです。

## 記事の下にあるIDと日付を非表示に

<script src="https://gist.github.com/laureltreetop/e9468b986da746fe7625d783928e47bf.js"></script>

## 指定した年の記事はアーカイブから除外

固定記事を過去日付や未来日付にしているときに便利。
<script src="https://gist.github.com/laureltreetop/003bfae833a5424f7987183d247fdbfc.js"></script>

## 指定した年の記事は投稿日時を表示しない

当方は固定記事の日付を2000年と2100年の1月1日にしているが、どうやら時差の関係で前年カウントされているらしい。
<script src="https://gist.github.com/laureltreetop/224100198431263f2b751473fabdf32a.js"></script>