---
title: "Firebase with Windows"
description: 無料で認証やらデータベースやらが揃ったサイトが作れるが、放置したりまた弄りだしたり。
permalink: /misc/firebase/
---
{{ page.description }}
{: .notice}

## 設定

1. [Firebase](https://firebase.google.com/)の[コンソール](https://console.firebase.google.com/?hl=ja)より、プロジェクトを作成したりドメイン設定をしたり（謎の優先順位）

1. [Node.js](https://nodejs.org/ja/)をここからダウンロード
1. （WindowsメニューのNode.jsではなく）`Node.js command prompt`があるので、開く

1. インストールされているか確認
```sh
$ node --version
$ npm --version
```

1. インストール
```sh
$ npm install -g firebase-tools
```

1. ログイン（前に設定したのが残ってたのか、それともそのままいけたのか）
```sh
$ firebase login
```
1. プロジェクトの確認
```sh
$ firebase list
```
1. 初期化
```sh
$ firebase init
```

1. 作成先を聞かれたり
  1. 5択の中から上下キーで選び、まずSpaceキーで選択
  1. `Hosting: Configure deploy Firebase Hosting sites`を選択
  1. Enterキーで決定

1. publicフォルダを聞かれるので、そのままenter
1. いろいろ作成されてる
```
firebase
 ├─ public
 |   └─ index.html
 ├─ .firebaserc
 └─ firebase.json
```
1. `http://localhost:5000/`で確認
```sh
$ firebase serve
```
1. できた  
[![Firebase init site](/assets/images/firebase_init-site.png)](/assets/images/firebase_init-site.png)

1. そのままアップしてみる
```sh
$ firebase deploy
```
