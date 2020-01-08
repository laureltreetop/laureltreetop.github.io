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

そしてログイン
```sh
$ firebase login --interactive
```
### 確認
{% comment %}
Git Bashで作業している場合、メニュー→Options→Text→LocaleとCharacter setを確認して、ja_JPとUTF-8になっているか確認しないとリストの枠線が「笏笏笏」だらけになる
{% endcomment %}
```sh
$ firebase projects:list
┌──────────────────────┬────────────────────┬──────────────────────┐
│ Project Display Name │ Project ID         │ Resource Location ID │
├──────────────────────┼────────────────────┼──────────────────────┤
│ projectname          │ project-id         │ [Not specified]      │
└──────────────────────┴────────────────────┴──────────────────────┘
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

## カスタムドメイン設定

1. プロジェクトを選んで開発→Hosting→ドメインを接続
[![Firebase Hosting Domain](/assets/images/firebase_hosting-default.png)](/assets/images/firebase_hosting-default.png)
1. ドメインの追加
[![Firebase Hosting Add Domain](/assets/images/firebase_hosting-domain-setting.png)](/assets/images/firebase_hosting-domain-setting.png)
1. DNSに指定された値をAレコードに追加
[![Firabase A record](/assets/images/firebase_hosting-domain-dns-setting.png)](/assets/images/firebase_hosting-domain-dns-setting.png)
1. 既存のサイトから移行する場合は、詳細設定で提示されるTXTレコードを追加
[![Firebase TXT record](/assets/images/firebase_hosting-domain-dns-setting-txt.png)](/assets/images/firebase_hosting-domain-dns-setting-txt.png)
1. 設定待ち
[![Firebase Hosting Waiting](/assets/images/firebase_hosting-waiting.png)](/assets/images/firebase_hosting-waiting.png)
1. DNS確認待ち?
[![Firebase Hosting Waiting](/assets/images/firebase_hosting-pending.png)](/assets/images/firebase_hosting-pending.png)
1. 完了
[![Firebase Hosting OK](/assets/images/firebase_hosting-done.png)](/assets/images/firebase_hosting-done.png)

## 作る

### アプリを作成

左上にある<i class="fas fa-cog"></i>からプロジェクトの設定→全般にいろいろ情報が。
[![Firebase settings general](/assets/images/firebase-settings-general.png)](/assets/images/firebase-settings-general.png)

下にある`マイアプリ`から<i class="fas fa-code"></i>を選ぶとWebアプリ作成画面が。
[![Firebase settings general add web app](/assets/images/firebase-settings-general-add-app.png)](/assets/images/firebase-settings-general-add-app.png)

いろいろ入力して`アプリを登録`を押すと、作成に必要な情報が。
[![Firebase settings general add web app](/assets/images/firebase-settings-general-add-app-code.png)](/assets/images/firebase-settings-general-add-app-code.png)

このコードはマイアプリから確認できるし、変更できるし、追加できるし。
[![Firebase settings general add web app](/assets/images/firebase-settings-web-app.png)](/assets/images/firebase-settings-web-app.png)

これを貼り付ければ使えるように。
```html
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/6.2.4/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#reserved-urls -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
```
上記のやつだと認証もデータベース弄りもできないので、使うものだけ呼び出すと良いかなと。
```html
<!-- update the version number as needed -->
<script defer src="/__/firebase/7.6.1/firebase-app.js"></script>
<!-- include only the Firebase features as you need -->
<script defer src="/__/firebase/7.6.1/firebase-auth.js"></script>
<script defer src="/__/firebase/7.6.1/firebase-database.js"></script>
<script defer src="/__/firebase/7.6.1/firebase-messaging.js"></script>
<script defer src="/__/firebase/7.6.1/firebase-storage.js"></script>

<!-- initialize the SDK after all desired features are loaded -->
<script defer src="/__/firebase/init.js"></script>
```
トッピングの情報は[Firebase を JavaScript プロジェクトに追加する](https://firebase.google.com/docs/web/setup?hl=ja)を参照に。

## 見たい

### ローカルで確認

どのプロジェクトを有効にするか選択して、立ち上げ
```sh
$ firebase use
Now using alias <name> (<projectID>)
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

## 立ち上げるとエラーが出る

ローカルで確認しようとしたら、こんなエラーが。
```sh
$ firebase serve

Error: HTTP Error: 401, Request had invalid authentication credentials. Expected OAuth 2 access token, login cookie or other valid authentication credential. See https://developers.google.com/identity/sign-in/web/devconsole-project.
```
認証してみた。
```sh
$ firebase login:ci --no-localhost

Error: Cannot run login:ci in non-interactive mode.
```
`non-interactive`がダメなら、オプションを追加してみた。
```sh
$ firebase login:ci --no-localhost --interactive

Visit this URL on any device to log in:
（やたらと長いURLが出てくる）
```

Googleさんから認証が出るので、貼り付けた。
```sh
? Paste authorization code here: （出てきた文字列を貼り付け）
```

認証ができたはずなのに、やっぱり立ち上げられない。
```sh
$ firebase serve

Error: HTTP Error: 401, Request had invalid authentication credentials. Expected OAuth 2 access token, login cookie or other valid authentication credential. See https://developers.google.com/identity/sign-in/web/devconsole-project.
```
いろいろ調べてコマンドを叩く。
ただ、また`non-interactive`と怒られたので、こちらにも`--interactive`オプションを追加。
```sh
$ firebase login --reauth --interactive
? Allow Firebase to collect anonymous CLI usage and error reporting information?
 Yes
Visit this URL on any device to log in:
（略）

Waiting for authentication...

+  Success! Logged in as メールアドレス
```

そしたら、できるようになったみたい。
```sh
$ firebase serve

=== Serving from 'ファイルのパス'...

i  hosting: Serving hosting files from: アプリ名
+  hosting: Local server: http://localhost:5000
```
参考
+ [firebase initしたらError: HTTP Error: 401が出た](https://haayaaa.hatenablog.com/entry/2019/05/04/180633)
+ [firebase deploy時に起きたエラー](https://qiita.com/camomile_cafe/items/7420a88db56e266dd05e)

## 認証

さて、ここからが本題。
{: .notice}

ブロジェクトのAuthenticasin→ログイン方法に、ログイン方法一覧が。

[![Firebase auth sign in list](/assets/images/firebase-auth-sign-in-list.png)](/assets/images/firebase-auth-sign-in-list.png)

### メール・パスワード認証
[JavaScript でパスワード ベースのアカウントを使用して Firebase 認証を行う](https://firebase.google.com/docs/auth/web/password-auth?authuser=0)

`メール / パスワード`を設定。
今回の目的はメール確認までさせたいので、メールリンクは無効に。
[![Firebase auth sign in list](/assets/images/firebase-auth-mail-password.png)](/assets/images/firebase-auth-mail-password.png)


### Google認証

ログイン方法としてGoogleを追加
[![Google new OAuth app](/assets/images/firebase-auth-google.png)](/assets/images/firebase-auth-google.png)

`ウェブSDK設定`の横にある疑問符から設定画面に飛べる
[![Google how-to-OAuth app](/assets/images/firebase-auth-google-web-sdk.png)](/assets/images/firebase-auth-google-web-sdk.png)

`認証情報`→`認証情報を作成`→`OAuthクライアントID`→`OAuthクライアントIDの作成`→`ウェブアプリケーション`でOAuthクライアントのIDとシークレットキーを作成
[![Google how-to-OAuth](/assets/images/firebase_google-new-oauth-id.png)](/assets/images/firebase_google-new-oauth-id.png)

`認証情報`→`ドメインの確認`でドメインを追加
[![Google how-to-OAuth](/assets/images/firebase_google-new-oauth-domain.png)](/assets/images/firebase_google-new-oauth-domain.png)

`認証情報`→`OAuth同意画面`→`承認済みドメイン`に必要なやつを追加

保存すると`認証情報`の`OAuth 2.0 クライアント ID`に追加されてる
追加したやつの名前を選ぶと、`ウェブアプリケーションのクライアントID`が確認できるので、Firebaseのログイン方法に追加
[![Google how-to-OAuth](/assets/images/firebase_google-oauth-cliant-id.png)](/assets/images/firebase_google-oauth-cliant-id.png)

下の方にある`承認済みのJavascript生成元`や`承認済みのリダイレクトURI`にドメインを追加

アプリを実際に使ってみると、Unverified appsと怒られた。
[Unverified apps](https://support.google.com/cloud/answer/7454865)
[アカウントにアクセスできるサードパーティのサイトやアプリ](https://support.google.com/accounts/answer/3466521?p=app_notverified&visit_id=636983520673087657-4115966372&rd=2)
個人的に使いたいだけなので、プロジェクトをGsuiteのドメインの組織として登録したら使えるように[^gafyd]。
[組織へのプロジェクトの移行](https://cloud.google.com/resource-manager/docs/migrating-projects-billing?hl=ja)

[^gafyd]:Google Apps for Your Domain万歳。

### Facebook認証

[facebook for developers](https://developers.facebook.com/apps/)にてアプリを作成
[JavaScript で Facebook ログインを使用して認証する](https://firebase.google.com/docs/auth/web/facebook-login)
`アプリのプロダクト`→`Facebookログイン`→`設定`→`クライアントOAuth設定`→`有効なOAuthリダイレクトURI`を取得し、Firebaseに貼り付ける
[![Facebook OAuth app](/assets/images/firebase_auth-facebook.png)](/assets/images/firebase_auth-facebook.png)

Firebase側から取得した`https://プロジェクト名.firebaseapp.com/__/auth/handler`なOAuthリダイレクトURIを貼り付ける
[![Facebook OAuth app](/assets/images/facebook_auth-login_settings.png)](/assets/images/facebook_auth-login_settings.png)

だいぶ前にアプリを作っていて放置してたけど、その間に権限が一部削除されてたり（ただし承認やOGPに関係ないやつ）、個人認証ってことで証明証を送らないと作業が進められなかったり…

### Twitter認証

まずはログイン方法一覧から設定を。
[![Firebase auth sign in Twitter](/assets/images/firebase_auth-twitter.png)](/assets/images/firebase_auth-twitter.png)

[Twitter Developer](https://developer.twitter.com/en/apps)からアプリ作成
（すでに作ってあって、複数作るには開発者アカウントを申請しないといけないみたいので割愛）

`App details`のCallbackURLsに、Firebaseから取得した`https://プロジェクト名.firebaseapp.com/__/auth/handler`を追加
`Tell us how this app will be used`も必須だけど、短すぎるとエラーになるのでどうやって埋めようかと…
[![Twitter app App details](/assets/images/twitter_auth-login_settings.png)](/assets/images/twitter_auth-login_settings.png)

`Keys and tokens`から取得したキーをFirebase側に貼り付ける
[![Twitter app Keys and tokens](/assets/images/twitter_auth-keys-and-tokens.png)](/assets/images/twitter_auth-keys-and-tokens.png)

### GitHub認証

ログイン方法一覧からGitHubを選んで有効にすると、こういう画面に。

[![Firebase auth sign in GitHub](/assets/images/firebase-auth-sign-in-github.png)](/assets/images/firebase-auth-sign-in-github.png)

[JavaScript による GitHub を使用した認証](https://firebase.google.com/docs/auth/web/github-auth?authuser=0)
[FirebaseUI でウェブアプリに簡単にログイン機能を追加する](https://firebase.google.com/docs/auth/web/firebaseui)
[Firebase | Authenticationで複数の認証プロバイダへ同時対応する (Web編)](https://blog.katsubemakito.net/firebase/firebase-authentication-multi-web1)

Setting→Developer setting→OAuth Appsへ。
平たく言えば下記リンクを。
[OAuth Apps](https://github.com/settings/developers)（要・GitHubログイン）から登録

[![GitHub new OAuth app](/assets/images/github-new-oauth-app.png)](/assets/images/github-new-oauth-app.png)

`Authorization callback URL`に、Firebaseから取得した`https://プロジェクト名.firebaseapp.com/__/auth/handler`を追加。
あとはアプリ名やサイトURLとか。

作成したアプリを開くとClient IDとClient Secretが表示されているので、それをFirebase側に登録。


### 認証画面を作ってみる

元ネタは[Firebase Auth Quickstarts](https://github.com/firebase/quickstart-js/tree/7d514fb4700d3a1681c47bf3e0ff0fa3d7c91910/auth)。
サインインしたあとは別ページに飛ばしたいので、そのあたりを変えてみた。

{% comment %}
#### 同じ画面で遷移

まずはこういうページを。
<script src="https://gist.github.com/laureltreetop/0600ebaad0a3b88fb45981291dc72c2f.js"></script>

そしてスクリプト。
<script src="https://gist.github.com/laureltreetop/a61d450456044babb13d966720ee77db.js"></script>
{% endcomment %}

まずはサインインのページを。
認証しか使わないなら、呼び出すのは`firebase-app.js`と`firebase-auth.js`と`init.js`だけでいい。
画面を整えるために[Materialize](https://materializecss.com/)や[Material Design Lite](https://getmdl.io/)も使ってみた。
<script src="https://gist.github.com/laureltreetop/5ba0786dd680d310b0a853252fb9ac52.js"></script>

そしてスクリプト。
サインイン・サインアップ周りは元ネタから取ってきたコードほぼそのまま。
<script src="https://gist.github.com/laureltreetop/b9c2f5401b588feb826dd99b416e5ef6.js"></script>

サインイン後のページ。
<script src="https://gist.github.com/laureltreetop/325b231e157682ad806564b687d4c5aa.js"></script>

そしてスクリプト。
<script src="https://gist.github.com/laureltreetop/00bf783e762aa9c8cb63b33a23bfff3a.js"></script>

ログイン画面の初期状態はSNS認証用の画面。
各種SNSの設定をしてあれば使える。
[![Firebase sign in](/assets/images/firebase_no-ui-sns.png)](/assets/images/firebase_no-ui-sns.png)

GitHub認証をするとこんな感じに。
Algoliaの検索フォームを出してる。
[![Firebase sign in with GitHub](/assets/images/firebase_no-ui-sns-login.png)](/assets/images/firebase_no-ui-sns-login.png)

Email/Passwordボタンでメール認証モードに。
登録もパスワード再設定もできる。
SNS Buttonsで、さっきのSNS認証モードに戻れる。
[![Firebase mail sign](/assets/images/firebase_no-ui-mail-login.png)](/assets/images/firebase_no-ui-mail-login.png)

サインインでパスワードリセットボタンとAlgoliaの検索画面を。
[![Firebase mail done](/assets/images/firebase_no-ui-mail-sign-in.png)](/assets/images/firebase_no-ui-mail-sign-in.png)

ポイントとしては、

+ サインインページから認証後`location.href`で飛ばす
+ 飛び先のページで`onAuthStateChanged`を使って情報を受け取る
+ サインインせずに飛び先のページを直接開いても`location.replace`で追い出す

というところかな。

{% comment %}
+ メールアドレスとパスワードを登録すると未認証でも画面が見えるので、それは避けたい
+ メール認証が済むまでは登録画面へ追い出す
+ ログインしていない状態で飛び先のURLを直接開いた場合も追い出す

[FirebaseUI](https://github.com/firebase/firebaseui-web)が手間なく作れるらしくて手を出したけど、認証後のほうが大変だったという…
かなり大量のサイトを参照にしたので、何がどこでどうなったのやら。

まずは手元の環境設定を。
```sh
$ npm install firebaseui -g
```

そして認証用ページ。
`<div id="firebaseui-auth-container"></div>`は必須。
<script src="https://gist.github.com/laureltreetop/084eb3b8c3c85fb5418921194b86e260.js"></script>
`firebase-ui-auth__ja.js`の部分を変えると言語を選べるので、下記リストを参考に`ja`の部分を書き換え。
[Supported Languages](https://github.com/firebase/firebaseui-web/blob/master/LANGUAGES.md)

さらに認証画面のスクリプト。
<script src="https://gist.github.com/laureltreetop/25040ce60d8bf81e0ea894023400bc22.js"></script>

こういう感じに。
[![FirebaseUI sign](/assets/images/firebaseui-sign.png)](/assets/images/firebaseui-sign.png)

次に認証後のページ。
FirebaseUIっぽいボタンが欲しかったので、こちらでもcssを呼び出す。
<script src="https://gist.github.com/laureltreetop/ed37ed2b35c4e1263aefc9dd9574a7b4.js"></script>

認証後のスクリプト。
<script src="https://gist.github.com/laureltreetop/b6b15ec0a87308f8c6a5027a72de6fc9.js"></script>
認証後に表示されるやつは別スクリプトにしたかったので、こういうやつ↓を呼び出して、
```js
function appendScript(URL) {
    var el = document.createElement('script');
    el.src = URL;
    document.body.appendChild(el);
};
```
処理をしたいところで呼び出して、その中にある関数を呼び出している。
```js
appendScript(外部ファイル名);
（外部ファイルでの関数名）
```

あとはCSSを頑張って書くと、こんな感じに。
[![FirebaseUI done](/assets/images/firebaseui-done.png)](/assets/images/firebaseui-done.png)
{% endcomment %}

### メールテンプレート

そのままだとfirebase丸出しのメールアドレスになるので、メールテンプレートのカスタムドメインを。
[![Firebase custom mail](/assets/images/firebase-custom-mail-domain.png)](/assets/images/firebase-custom-mail-domain.png)

|ホスト|タイプ |値|
|----------------|----------------|----------------|
|ドメイン|TXT|v=spf1 include:_spf.firebasemail.com ~all|
|ドメイン|TXT|firebase=プロジェクト名|
|firebase1._domainkey.ドメイン|CNAME|mail-ドメイン.dkim1._domainkey.firebasemail.com.|
|firebase2._domainkey.ドメイン|CNAME|mail-ドメイン.dkim2._domainkey.firebasemail.com.|

ドメインの所有権を確認するまで、最大48時間かかるんだそうな。
