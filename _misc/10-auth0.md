---
title: "Auth0"
description: "Node.jsとかMilkcocoaを調べてたら通過したような記憶が。"
permalink: /misc/auth0/
classes: wide
---
{{ page.description }}
{: .notice}

リンク集なサイトを潰す前に、とりあえずこっちにメモ。

[自分のアプリやWebサービスにAuth0で簡単にユーザ認証を追加する方法](https://qiita.com/devalon/items/0546a6f00adce9fca82d)より。

1. Postmanで作業
1. Signup API で認証するユーザを作成  
youraccount.auth0.com/dbconnections/signup
```
{
 "client_id":"client_id_with_your_apps_made",
 "email":"test@mail.domain",
 "password":"testpassword",
 "connection":"Username-Password-Authentication"
}
```
1. Login API でトークンを取得する。上と似ているけど、"email"を"username"として登録してあるので、↓のようにしてテスト  
youraccount.auth0.com/oauth/ro
```
{
 "client_id":"client_id_with_your_apps_made",
 "username":"test@mail.domain",
 "password":"testpassword",
 "connection":"Username-Password-Authentication",
 "scope":"openid"
}
```
1. [webtask](https://webtask.io/)登録
1. [webtaskからslack登録](https://webtask.io/slack)
1. [slack](https://slack.com/intl/ja-jp/)
1. `Shared interest group`→`1-10 people`というグループにあたるんだろね
1. `Connect your (自分のドメイン) Google account to easily invite people to join your new team.`と出るが、接続しておく
1. （見間違えたところがなければ）問題なく完了

って、何が完了したんだったかな…