---
last_modified_at: 2017-11-11
title: "OPG"
permalink: /tumblr/ogp/
---
OPG(Open Graph protocol)設定。  
これを<head>...</head>内でやっておくと、FacebookやTwitterにシェアしてもらったときにいい感じに。
{: .notice}

## Metaタグ・まとめて設定編
少し見づらくなりますが、こんな感じで。  
<script src="https://gist.github.com/laureltreetop/652b06062008c3585ad51dbbdadbc0a9.js"></script>

## Metaタグ・個別設定編
`og:image`がいちばんややこしい。  
<script src="https://gist.github.com/laureltreetop/05cb4864f65765bc4d7a5e190e679823.js"></script>

## 確認
[facebook for deveropers シェアデバッガー](https://developers.facebook.com/tools/debug/sharing/)で確認。  
エラーが出なくなるまで修正。
