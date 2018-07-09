---
title: "CloudFlare"
description: "元々はGitHub Pagesを独自ドメインでHTTPS化ってことで知った[CloudFlare](https://www.cloudflare.com/)なのだが、いろいろできる子。  
今では（自分的に）最後の難関だったBloggerが[Blogger Draft](https://draft.blogger.com/)によってHTTPS対応になったり、[GitHub Pages](https://pages.github.com/)も対応してくれたが、もうすっかり他に乗り換えられない環境になってしまった気が。"
permalink: /misc/cloudflare/
classes: wide
---
{{ page.description }}
{: .notice}

## 設定とか

CloudFlareの設定としては、以下が必須。
+ SSL: Flexible
: [Error 525: SSL handshake failed](https://support.cloudflare.com/hc/en-us/articles/200278659-Error-525-SSL-handshake-failed)的なのを吐き出す。
: いや、なんだか環境によってはSSL: Fullでも大丈夫そうな気が?
+ Automatic HTTPS Rewrites: On
: レイアウトが悲惨なことに（Googleサイトの古い方とか）
+ DNS and HTTP proxy(CDN)
: CNAMEやらAやらのDNSレコードを参照してカスタムドメインの認証をするような場合は、  
[![Cloud Flare Orange](/assets/images/tumblr-cloudflare-orange.png)](/assets/images/tumblr-cloudflare-orange.png)  
**DNS and HTTP proxy(CDN)**（オレンジ色の雲アイコン）ではなく、    
[![Cloud Flare Gray](/assets/images/tumblr-cloudflare-gray.png)](/assets/images/tumblr-cloudflare-gray.png)
**DNS only**（グレーの雲アイコン）にするべし。  
（説明画像は過去にTumblrの記事にて使っていたやつ）  
認識してもらったあとは、オレンジに戻しても大丈夫。  
以降、これを**お作法**と略すような。

あとはお好みで設定したり、**Page Rules**で個別に設定も。  
一通りHTTPSに移行できたら、**Crypto→Always use HTTPS**をONにしちゃっても良いかと。

## 当方で遭遇したやつ

+ Googleサイト（古い方）
+ [StarSerever](https://www.star.ne.jp/)（フリー、フリーWP）
  + フリーWPプランの場合、StarServerのサーバー管理ツールで**管理ツール（ダッシュボード）のSSL設定**を**無効**に
  + 同じく、**ダッシュボードの国外IPアクセス制限→ダッシュボードアクセス権限**を**無効**に（他は有効のまま）
+ [000webhost](https://www.000webhost.com/)
  + ネイキッドドメインとサブドメインのCNAMEを参照するので、**お作法**が必要
  + どうも**SSL: Full**必須な模様?
+ Webcrow（新規募集終了）

## 番外編

調べてみると、CloudFlareの力を借りずに独自SSL証明書有りになっているサービスが。  
これらは**DNS only**（グレーの雲アイコン）にすべし。

+ [GitHub Pages](https://pages.github.com/)
  + とうとうカスタムドメインでhttps化できるように
  + [algolia](https://www.algolia.com/)を使うなら[Netlify](https://www.netlify.com/)に移行しちゃってもいいかも?
  + 詳しくは[Algolia](/githubpages/algolia-github/)のNetlifyを参照
+ Googleサイト（新しい方）
+ [Tumblr](https://www.tumblr.com/)
+ [Blogger draft](https://draft.blogger.com/) 
+ [Firebase](https://firebase.google.com/)
+ [XREA](https://www.xrea.com/)(WordPressも含む)

CloudFlareからの恩恵を受けるのはスピード改善とかそのあたりになるのかな。
{: .notice}
