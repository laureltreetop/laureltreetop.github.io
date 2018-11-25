---
title: "Node.js"
description: "なんでこれをメモっていたのかは謎。"
permalink: /misc/nodejs/
classes: wide
---
{{ page.description }}
{: .notice}

リンク集なサイトを潰す前に、とりあえずこっちにメモ。

+ [Node.js](https://nodejs.org/ja/)
+ [Node.js の Windows へのインストールと npm の使い方](http://yohshiy.blog.fc2.com/blog-entry-307.html)
+ [Windows(Win7)にNodistでNode.jsをインストール](https://qiita.com/siouxcitizen/items/63e17ccae386ffa17563)
+ [npm と Node.js 上で require を使ったモジュール読み込みの仕組みについてメモ](http://phiary.me/npm-node-js-require-module-memo/)

実際に作業をしたメモも移しておく。  
あるリンク先を見ながら作業してたのだが、無くなっているので元ネタが謎のまま。  
システムを入れ替えたりしたので今は環境が整ってない。

1. Node.jsをインストール
1. Windows7を使っているので、nodistを使うということなのですな
1. GitHub よりソースコードを取得
1. 作業ディレクトリ直下でコマンド実行
```sh
git clone https://github.com/marcelklehr/nodist.git
```
1. 環境変数の設定
```
setx /M NODIST_PREFIX "~\Node.js\nodist" setx /M PATH "%NODIST_PREFIX%\bin;%PATH%"
```
1. 「コマンドプロンプトを一旦閉じ再起動すると環境変数が適用されますので、その状態でNode.js のインストールを行います。」と書いてあるが、コマンドは`nodist update`
```sh
$ nodist update update Version spec, "update", didn't match any version. Sorry.
```
1. エラーになりますな。しかし、node updateでもエラーになったので、おそらく前にinstallしたからかも…保留。
1. 使えるようになったところで、楽しげな「モジュールの読み込み」「HTTP サーバを動かす」「Web API を利用する」「ファイルシステム にアクセスする」などで遊ぶ。
1. npm でサードパーティ製モジュールをインストールする、のはずが、下のコマンドでは-g有無問わずにエラー…
```sh
$ node install -g request module.js:471 throw err; ^ Error: Cannot find module 'C:\Users\treetop\Node.js\nodist\install' at Function.Module._resolveFilename (module.js:469:15) at Function.Module._load (module.js:417:25) at Module.runMain (module.js:604:10) at run (bootstrap_node.js:393:7) at startup (bootstrap_node.js:150:9) at bootstrap_node.js:508:3
```

以降、なんでここのジャンルにメモっていたか判らないリンク群。あとから確認。

+ [Google+ JavaScript](https://developers.google.com/+/web/api/javascript)
+ [GoogleAPIその0001 JavaScriptでデータを取得するための認証とか基礎](http://motomichi-works.hatenablog.com/entry/2016/10/23/203442)
+ [Google Apps Scriptの第一歩、初心者でもチャットワークにメッセージを送れる](https://tonari-it.com/google-apps-script-chatwork/)
+ [Google JavaScript スタイルガイド - 日本語訳](https://www38.atwiki.jp/aias-jsstyleguide2/)
+ [Closure Compiler](https://developers.google.com/closure/compiler/)
+ [独自WebサービスにGoogleアカウントを使った認証を実装する](http://hylom.net/how-to-use-google-openid-auth)
  + [Google Identity Platform](https://developers.google.com/identity/)
  + [Add Google Sign-In to Your Web App](https://developers.google.com/identity/sign-in/web/)
+ [Google アカウントの認証を OpenID から OpenID Connect に移行する方法](http://webos-goodies.jp/archives/how_to_migrate_from_openid_to_openid_connect.html)
