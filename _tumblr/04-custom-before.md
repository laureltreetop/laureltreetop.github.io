---
last_modified_at: 2017/08/09 14:58 +0900
title: "Before Custom"
permalink: /tumblr/custom-before/
---
{% include toc icon="tumblr-square" title="Before Custom" %}
大掛かりなカスタマイズをする前に準備が必要・したほうがいい。

### JQuery
カスタマイズの多くはJQueryを使うことが前提なので、呼び出しておく。  
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```
最新は[Google Hosted Libraries](https://developers.google.com/speed/libraries/)で確認。

### Tumblr APIキー
投稿記事などを取得するのにキーが必要になってくる。  
[Applications](https://www.tumblr.com/oauth/apps)（要・Tumblrログイン）よりアプリを登録して、APIキーを取得する。  
`デフォルトのコールバックURL:`にOAuth認証用のスクリプトを置いて登録するが、記事取得だけなら不要なので、てきとーな自分サイトのそれっぽいURLを入れておく。
