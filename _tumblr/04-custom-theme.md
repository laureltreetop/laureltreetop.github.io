---
last_modified_at: 2017-11-02
title: "Custom Theme"
permalink: /tumblr/custom-theme/
toc: true
toc_label: "Custom Theme"
toc_icon: "tumblr-square"
---
大掛かりなカスタマイズをする前に準備が必要・したほうがいい。
## カスタム前に
### JQuery
カスタマイズの多くはJQueryを使うことが前提なので、<head>...</head>の間で呼び出しておく。
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```
最新は[Google Hosted Libraries](https://developers.google.com/speed/libraries/)で確認。

### Tumblr APIキー
投稿記事などを取得するのにキーが必要になってくる。  
[Applications](https://www.tumblr.com/oauth/apps)（要・Tumblrログイン）よりアプリを登録して、APIキーを取得する。  
`デフォルトのコールバックURL:`にOAuth認証用のスクリプトを置いて登録するが、記事取得だけなら不要なので、てきとーな自分サイトのそれっぽいURLを入れておく。

## OPG(Open Graph protocol)設定
これを<head>...</head>内でやっておくと、FacebookやTwitterにシェアしてもらったときにいい感じに。
### Metaタグ・まとめて設定編
少し見づらくなりますが、こんな感じで。  

<code data-gist-id="652b06062008c3585ad51dbbdadbc0a9" data-gist-hide-footer="true" data-gist-line="1-5"></code> 

### Metaタグ・個別設定編
`og:image`がいちばんややこしい。  

<code data-gist-id="652b06062008c3585ad51dbbdadbc0a9" data-gist-hide-footer="true" data-gist-line="7-75"></code>  

### 確認
[facebook for deveropers シェアデバッガー](https://developers.facebook.com/tools/debug/sharing/)で確認。  
エラーが出なくなるまで修正。
