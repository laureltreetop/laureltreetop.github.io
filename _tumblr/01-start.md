---
last_modified_at: 2017/08/03 15:48 +0900
title: "Tumblr start"
permalink: /tumblr/start/
---
{% include toc icon="tumblr-square" title="Start" %}
最初はTumblrの準備や設定やら。

## Tumblr登録
[tumblr.](https://www.tumblr.com/)より登録。   
[ダッシュボード](https://www.tumblr.com/dashboard)から作成やら投稿やらを行う。

## ブログを作成
[新しいブログを作る](https://www.tumblr.com/new/blog)にて作成。   
同じアカウントで複数のブログを作成可能。

## DNS設定
オレオレなので、さくっとカスタムドメインから。   
サブドメインのCNAMEレコードに**domains.tumblr.com**を登録。   
ちなみにこの値は固有。   
あと、時間がかかる。すごくかかる。なので先にDNSから設定しておく。

ちなみに、[Cloudflare](https://www.cloudflare.com)にて設定している場合には、ちょいコツあり。   
"DNS and HTTP proxy(CDN)"（オレンジ色の雲アイコン）ではなく、"DNS only"（グレーの雲アイコン）にしないといけない。   
[Cloudflare公式にもそう書いてある](https://support.cloudflare.com/hc/en-us/articles/200168566-How-do-I-add-a-Tumblr-custom-domain-)ので、当分はそのままかも。

## カスタムドメイン設定
「外観を編集」→「ユーザー名」→「独自ドメインを使用」よりカスタムドメインを登録。  
「ドメインのテスト」を通れば完了だが、前述の通り時間がかかる。  
座して待つ。

## 記事投稿
テキスト、写真（1枚でも複数でも可能）、オーディオ（[Spotify](https://www.spotify.com/jp/)など）、動画（[YouTube](https://www.youtube.com/)や直接投稿したり）、リンク、引用など、多数の投稿方法あり。

