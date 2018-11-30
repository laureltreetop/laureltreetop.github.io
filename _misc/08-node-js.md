---
title: "Node.js"
description: "Firebaseをインストールする際に出てきたNode.jsだけど、他にもあちこちで出てきたような。"
permalink: /misc/nodejs/
classes: wide
---
{{ page.description }}
{: .notice}

+ [Node.js](https://nodejs.org/ja/)
+ [Node.js の Windows へのインストールと npm の使い方](http://yohshiy.blog.fc2.com/blog-entry-307.html)
+ [Windows(Win7)にNodistでNode.jsをインストール](https://qiita.com/siouxcitizen/items/63e17ccae386ffa17563)
+ [npm と Node.js 上で require を使ったモジュール読み込みの仕組みについてメモ](http://phiary.me/npm-node-js-require-module-memo/)

実際に作業をしたメモも移しておく。

## 普通にインストール

[Firebaseな記事](/sitesystem/firebase/)からコピっただけ。
{: .notice}

1. [Node.js](https://nodejs.org/ja/)をここからダウンロードして、インストール
1. （WindowsメニューのNode.jsではなく）`Node.js command prompt`があるので、開く

1. インストールされているか確認
```sh
$ node --version
$ npm --version
```

## nodistでインストール

あるリンク先を見ながら作業してたのだが、無くなっているので元ネタが謎のまま。  
今は前述の方法で環境を整えてますが。
{: .notice}

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