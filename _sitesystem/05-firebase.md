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

[Firebase価格表](https://firebase.google.com/pricing/)

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

ただし、以降は個人的な趣味によりGit Bashで作業。

## プロジェクト

### 作成とか

[Firebase](https://firebase.google.com/)の[コンソール](https://console.firebase.google.com/?hl=ja)より、プロジェクトを作成
[![Firebase Console](/assets/images/firebase-console.png)](/assets/images/firebase-console.png)

既にインストール済みですね
[![Firebase Console Deploy](/assets/images/firebase-console-install.png)](/assets/images/firebase-console-install.png)

### ログイン

ホスティング設定
[![Firebase Console Deploy](/assets/images/firebase-console-deploy.png)](/assets/images/firebase-console-deploy.png)

怒られた  
```sh
$ firebase login

Error: Cannot run login in non-interactive mode. See login:ci to generate a token for use in non-interactive environments.
```

ヘルプを見てみる  
```sh
$ firebase --help
Usage: firebase [options] [command]

Options:
  -V, --version                              output the version number
  -P, --project <alias_or_project_id>        the Firebase project to use for this command
  -j, --json                                 output JSON instead of text, also triggers non-interactive mode
  --token <token>                            supply an auth token for this command
  --non-interactive                          error out of the command instead of waiting for prompts
  --interactive                              force interactive shell treatment even when not detected
  --debug                                    print verbose debug output and keep a debug log file
  -h, --help                                 output usage information

Commands:
（略）
  login [options]                            log the CLI into Firebase
  login:ci [options]                         generate an access token for use in non-interactive environments
（略）
```

login:ciのヘルプも見てみる  
```sh
$ firebase login:ci --help
Usage: login:ci [options]

generate an access token for use in non-interactive environments

Options:
  --no-localhost  copy and paste a code instead of starting a local server for authentication
  -h, --help      output usage information
```

こういうことか  
```sh
$ firebase --interactive login:ci

Visit this URL on any device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=（略）.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=5（略）&redirect_uri=http%3A%2F%2Flocalhost%3A9005

Waiting for authentication...
```

Googleさんが権限を要求してきた
[![Firebase Hosting Domain](/assets/images/firebase-login-ci.png)](/assets/images/firebase-login-ci.png)

許可した  
```sh
+  Success! Use this token to login on a CI server:
（略）
Example: firebase deploy --token "$FIREBASE_TOKEN"
```

### 確認

Git Bashで作業している場合、メニュー→Options→Text→LocaleとCharacter setを確認して、ja_JPとUTF-8になっているか確認しないとリストの枠線が「笏笏笏」だらけになる
```sh
$ firebase list
┌─────────────┬───────────────────────┬─────────────┐
│ Name        │ Project ID / Instance │ Permissions │
├─────────────┼───────────────────────┼─────────────┤
│ projectname │ project-id            │ Owner       │
└─────────────┴───────────────────────┴─────────────┘
```

### 開始

```sh
$ firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  （今いるディレクトリ）

? Are you ready to proceed? (Y/n)
```

作業を進めてみる  
```sh
? Are you ready to proceed? (Y/n) y
? Are you ready to proceed? Yes
? Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices. (Press <space> to select)
>( ) Database: Deploy Firebase Realtime Database Rules
 ( ) Firestore: Deploy rules and create indexes for Firestore
 ( ) Functions: Configure and deploy Cloud Functions
 ( ) Hosting: Configure and deploy Firebase Hosting sites
 ( ) Storage: Deploy Cloud Storage security rules
```

`Hosting: Configure deploy Firebase Hosting sites`を選択  
…したいのだが、Git Bashだと矢印キーで選択できない  
[Git Bashでfirebase loginする](https://qiita.com/musatarosu/items/27eecf963ced917dc74f)を参照し、4を選択  
```sh
=== Project SetupHosting sites

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, but for now we'll just set up a default project.

? Select a default Firebase project for this directory: (Use arrow keys)
> [don't setup a default project]
  （ブロジェクトがずらずらと）
  [create a new project]
```

さっきの要領で数字で選択  
あとはディレクトリ名指定やトップページを上書きするかとか
```sh
? Select a default Firebase project for this directory: (Use arrow keys)
? Select a default Firebase project for this directory: プロジェクトID (プロジェクト名)
i  Using project プロジェクトID (プロジェクト名)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that will contain Hosting assets to be uploaded with firebase deploy. If you have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? (public) ディレクトリ名指定
? What do you want to use as your public directory?  ディレクトリ名
? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
+  Wrote ディレクトリ名/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!
```

いろいろ作成されてる
```
firebase
 ├─ ディレクトリ名
 |   ├─ 404.html 
 |   └─ index.html
 ├─ .firebaserc
 └─ firebase.json
```

### 管理

切り替える
```sh
$ firebase use プロジェクトID
Now using project プロジェクトID
```

プロジェクトIDに対して名前をつける（プロジェクト名ではない）
```sh
$ firebase use --add プロジェクトID --alias 付けたい名前
Created alias 付けたい名前 for プロジェクトID.
Now using alias 元の名前 (プロジェクトID)
```

すると、プロジェクトIDではなく付けた名前で切り替えができる
```sh
$ firebase use 名前
Now using alias 名前 (プロジェクトID)
```

名前を全部消す
```sh
$ firebase use --clear
Cleared active project.

Project aliases for ディレクトリ:

  default (現在のプロジェクトID)

Run firebase use --add to define a new project alias.
```

## 見たい

### ローカルで確認

```sh
$ firebase serve

=== Serving from 'ディレクトリ名'...

i  hosting: Serving hosting files from: プロジェクト名
+  hosting: Local server: http://localhost:5000
```

こういう風になってた
[![Firebase init site](/assets/images/firebase_init-site.png)](/assets/images/firebase_init-site.png)

### 外から見えるように

deployしてみる
```sh
$ firebase deploy

=== Deploying to 'プロジェクトID'...

i  deploying hosting
i  hosting[プロジェクトID]: beginning deploy...
i  hosting[プロジェクトID]: found 1 files in プロジェクト名
i  hosting: uploading new files [0/1] (0%)
i  hosting: uploading new files [0/1] (0%)
+  hosting[プロジェクトID]: file upload complete
i  hosting[プロジェクトID]: finalizing version...
+  hosting[プロジェクトID]: version finalized
i  hosting[プロジェクトID]: releasing new version...
+  hosting[プロジェクトID]: release complete

+  Deploy complete!

Project Console: https://console.firebase.google.com/project/プロジェクトID/overview
Hosting URL: https://プロジェクトID.firebaseapp.com
```

とりあえず器だけはできた…  
さっそく無駄に背景やらファビコンやらを仕掛け済み。
[![Firebase hosting setup complete](/assets/images/firebase_hosting-setup-complete.png)](/assets/images/firebase_hosting-setup-complete.png)


## カスタムドメイン設定

1. プロジェクトを選んで開発→Hosting→ドメインを接続
[![Firebase Hosting Domain](/assets/images/firebase_hosting-default.png)](/assets/images/firebase_hosting-default.png)
1. ドメインの追加
[![Firebase Hosting Add Domain](/assets/images/firebase_hosting-domain-setting.png)](/assets/images/firebase_hosting-domain-setting.png)
1. DNSに指定された値をAレコードに追加
[![Firabase A record](/assets/images/firebase_hosting-domain-dns-setting.png)](/assets/images/firebase_hosting-domain-dns-setting.png)  
1. 既存のサイトから移行する場合は、詳細設定で提示されるTXTレコードを追加[^add-txt]
[![Firebase TXT record](/assets/images/firebase_hosting-domain-dns-setting-txt.png)](/assets/images/firebase_hosting-domain-dns-setting-txt.png)
1. 設定待ち
[![Firebase Hosting Waiting](/assets/images/firebase_hosting-waiting.png)](/assets/images/firebase_hosting-waiting.png) 
1. DNS確認待ち?
[![Firebase Hosting Waiting](/assets/images/firebase_hosting-pending.png)](/assets/images/firebase_hosting-pending.png) 
1. 完了
[![Firebase Hosting OK](/assets/images/firebase_hosting-done.png)](/assets/images/firebase_hosting-done.png) 
  
[^add-txt]: クイックセットアップでうまくいかないときにも。

[CloudFlare](https://www.cloudflare.com/)を使っている場合
  
認識されるまではDNS onlyにしておくこと。  
認識されたあとはFullかFull(Strict)にしないと、無限リダイレクトループに。  
[CloudFlareな記事](/misc/cloudflare/)も参照。  

{% comment %}
## その他?

カスタムドメインの場合、一部スクリプトを書き換え
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