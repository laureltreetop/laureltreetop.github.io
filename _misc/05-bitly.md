---
title: "bitly"
description: "カスタムドメインで短縮URLを。"
permalink: /misc/bitly/
classes: wide
---
{{ page.description }}
{: .notice}

必要ないからと思っていたけど、設定で「画像ファイル指定のURLが長いんじゃー」と怒られる場面があったので、ちとアカウントを作ってみた。  
[Branded Short Domain (BSD)](https://support.bitly.com/hc/en-us/sections/206657428-Branded-Short-Domain-BSD-)ってのを設定すると、独自ドメインで短縮できるんですと。

## 設定

1. [bitly](https://bitly.com/)より登録
1. 先に、使いたいサブドメインのCNAMEに`cname.bitly.com`を設定
1. 右上のアカウント名が書いているところから`SELECT A GROUP`→`Manage`
1. `Branded Short Domains`→`Add Branded Short Domain`
1. サブドメインを登録
1. `Verified`になったら使えるようになってるかと