---
last_modified_at: 2017-11-02
title: "Custom Theme"
permalink: /tumblr/custom-theme/
toc: true
toc_label: "Custom Theme"
toc_icon: "tumblr-square"
---
## カスタム前に
### JQuery
カスタマイズの多くはJQueryを使うことが前提なので、<head>...</head>の間で呼び出しておく。
<span><script src="https://gist.github.com/laureltreetop/59d30a038a01d98a7fe6bc1c7bcc2a91.js"></script></span>{: .blob-num style="display: none !important;"}
最新は[Google Hosted Libraries](https://developers.google.com/speed/libraries/)で確認。

### Tumblr APIキー
投稿記事などを取得するのにキーが必要になってくる。  
[Applications](https://www.tumblr.com/oauth/apps)（要・Tumblrログイン）よりアプリを登録して、APIキーを取得する。  
`デフォルトのコールバックURL:`にOAuth認証用のスクリプトを置いて登録するが、記事取得だけなら不要なので、てきとーな自分サイトのそれっぽいURLを入れておく。

## OPG(Open Graph protocol)設定
これを<head>...</head>内でやっておくと、FacebookやTwitterにシェアしてもらったときにいい感じに。
### Metaタグ・まとめて設定編
少し見づらくなりますが、こんな感じで。  
<script src="https://gist.github.com/laureltreetop/652b06062008c3585ad51dbbdadbc0a9.js"></script>

### Metaタグ・個別設定編
`og:image`がいちばんややこしい。  
<script src="https://gist.github.com/laureltreetop/05cb4864f65765bc4d7a5e190e679823.js"></script>

### 確認
[facebook for deveropers シェアデバッガー](https://developers.facebook.com/tools/debug/sharing/)で確認。  
エラーが出なくなるまで修正。
