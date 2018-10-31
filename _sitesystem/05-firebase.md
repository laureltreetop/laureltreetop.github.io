---
title: "Firebase with Windows"
description: "無料で認証やらデータベースやらが揃ったサイトが作れる。 
デザインこそ一から作らないとだが、そこさえどうにかすれば認証だのリアルタイムデータ表示だの、そういう楽しそうなサイトを作る受け皿を、目の前に準備してくれるというね。"
permalink: /sitesystem/firebase/
classes: wide
header:
  teaser: /assets/images/firebase_hosting-setup-complete.png
  og_image: /assets/images/firebase_hosting-setup-complete.png
---
{{ page.description }}
{: .notice}

## インストール

1. [Node.js](https://nodejs.org/ja/)をここからダウンロードして、インストール
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

1. [Firebase](https://firebase.google.com/)の[コンソール](https://console.firebase.google.com/?hl=ja)より、プロジェクトを作成

## カスタムドメイン設定

1. プロジェクトを選んで開発→Hosting→ドメインを接続
[![Cloud Flare Hosting default](/assets/images/firebase_hosting-default.png)](/assets/images/firebase_hosting-default.png)
1. ドメインの追加
[![Cloud Flare Hosting default](/assets/images/firebase_hosting-domain-setting.png)](/assets/images/firebase_hosting-domain-setting.png)
1. DNSに指定された値をAレコードに追加
[![Cloud Flare Hosting dns setting](/assets/images/firebase_hosting-domain-dns-setting.png)](/assets/images/firebase_hosting-domain-dns-setting.png)  
1. 既存のサイトから移行する場合は、詳細設定で提示されるTXTレコードを追加[^add-txt]
[![Cloud Flare Hosting dns setting](/assets/images/firebase_hosting-domain-dns-setting-txt.png)](/assets/images/firebase_hosting-domain-dns-setting-txt.png)
1. 設定待ち
[![Cloud Flare Hosting dns setting](/assets/images/firebase_hosting-waiting.png)](/assets/images/firebase_hosting-waiting.png) 
1. DNS確認待ち?
[![Cloud Flare Hosting dns setting](/assets/images/firebase_hosting-pending.png)](/assets/images/firebase_hosting-pending.png) 
1. 完了
[![Cloud Flare Hosting dns setting](/assets/images/firebase_hosting-done.png)](/assets/images/firebase_hosting-done.png) 
  
[^add-txt]: クイックセットアップでうまくいかないときにも。

### [CloudFlare](https://www.cloudflare.com/)を使っている場合
  
DNS onlyにしておくこと。 [CloudFlareな記事](/misc/cloudflare/)も参照。  
[![Cloud Flare Orange](/assets/images/tumblr-cloudflare-orange.png)](/assets/images/tumblr-cloudflare-orange.png)  
`DNS and HTTP proxy(CDN)`（オレンジ色の雲アイコン）ではなく、    
[![Cloud Flare Gray](/assets/images/tumblr-cloudflare-gray.png)](/assets/images/tumblr-cloudflare-gray.png)
`DNS only`（グレーの雲アイコン）にするべし。  
（説明画像は過去にTumblrの記事にて使っていたやつ）

## 作成

1. Git Bashでloginしようとすると、エラーが出る
```sh
$ firebase login
Error: Cannot run login in non-interactive mode. See login:ci to generate a token for use in non-interactive environments.
```
1. [Git Bashでfirebase loginする](https://qiita.com/musatarosu/items/27eecf963ced917dc74f)を参照にする  
コマンドを実行するとGoogleさんから認証画面が出てくる  
認証後に **Success!** が出てくる
```sh
$ firebase login --interactive
? Allow Firebase to collect anonymous CLI usage and error reporting information
? Yes
Visit this URL on any device to log in:
（略）
Waiting for authentication...
+  Success! Logged in as my@mail.address
```
[![Firebase CLI login success](/assets/images/firebase_cli-login-success.png)](/assets/images/firebase_cli-login-success.png)
1. プロジェクトの確認
```sh
$ firebase list
┌─────────────┬───────────────────────┬─────────────┐
│ Name        │ Project ID / Instance │ Permissions │
├─────────────┼───────────────────────┼─────────────┤
│ projectname │ project-id            │ Owner       │
└─────────────┴───────────────────────┴─────────────┘
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
 |   ├─ 404.html 
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

とりあえず器だけはできた…  
さっそく無駄に背景やらファビコンやらを仕掛け済み。
[![Firebase hosting setup complete](/assets/images/firebase_hosting-setup-complete.png)](/assets/images/firebase_hosting-setup-complete.png)

## 複数のプロジェクトを切り替える

1. 開発環境と切り替えながら使う
1. 開発用プロジェクトを作成
1. 切り替えて使えるように設定を追加
```sh
$ firebase use --add
```
1. 一覧が出るので、選択
1. ショートカット的な名前に
1. 元のプロジェクトも同じように--addで名前を付けておく
1. 確認
```sh
$ firebase list
┌─────────────┬───────────────────────┬─────────────┐
│ Name        │ Project ID / Instance │ Permissions │
├─────────────┼───────────────────────┼─────────────┤
│ projectname │ project-id            │ Owner       │
├─────────────┼───────────────────────┼─────────────┤
│ subproject  │ sub-project-id        │ Owner       │
└─────────────┴───────────────────────┴─────────────┘
```
1. 切り替えて使える
```sh
$ firebase use <付けておいた名前>
```
1. そのあとに立ち上げたり、サーバへ放り込んだり

{% comment %}
1. カスタムドメインの場合、一部スクリプトを書き換え
```html
<script src="https://www.gstatic.com/firebasejs/4.11.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "【カスタムドメイン】",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<DATABASE_ID>",
    storageBucket: "<DATABASE_NAME>.appspot.com",
    messagingSenderId: "<SENDER_ID>"
  };
  firebase.initializeApp(config);
</script>
```
{% endcomment %}
