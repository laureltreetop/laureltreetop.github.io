---
title: "Freenom & e.t.c."
description: "無料でカスタムドメインを作成したり、サイト作ったり、メールアドレス作ったり。ただ、あまりよろしくないことをあちこちで書かれているみたいなので、やっぱりお遊び用、テスト用なのかな、と。"
permalink: /misc/freenom/
classes: wide
header:
  teaser: /assets/images/freenom-new-domains.png
  og_image: /assets/images/freenom-new-domains.png
---
{{ page.description }}
{: .notice}

## Freenom

+ なぜ無料でカスタムドメインが?→ [日本語の説明](http://www.freenom.com/ja/aboutfreenom.html)
+ 取得可能なトップレベルドメイン
  + .tk（トケラウ）
  + .ml（マリ）
  + .cf（中央アフリカ）
  + .ga（ガボン）
  + .gq（ギニア）

### 登録

1. [Freenom](http://www.freenom.com/ja/index.html?lang=ja)へ  
[![Freenom Jp site](/assets/images/freenom-top.png)](/assets/images/freenom-top.png)
1. 欲しいドメインがあるか確認（treetopで探してみた）  
[![Freenom new domain list](/assets/images/freenom-new-domains.png)](/assets/images/freenom-new-domains.png)
1. 2つあったので選択してチェックアウト  
[![Freenom new domain list](/assets/images/freenom-checkout.png)](/assets/images/freenom-checkout.png)
1. それぞれに`Use DNS`を選びーの、適当なIPアドレスを入れーの、プランを`12 Months @ FREE`（1年ではない）に設定しーの、で`Continue`  
[![Freenom select plan](/assets/images/freenom-select-plan.png)](/assets/images/freenom-select-plan.png)
1. 金額の確認と、登録orログインが出るので、メールアドレスで登録（GoogleでもFacebookでも可）  
[![Freenom review](/assets/images/freenom-review.png)](/assets/images/freenom-review.png)
1. 登録は…まぁ自己責任ということで（投げた[^register]）

### DNS設定

1. [Freenom](http://www.freenom.com/ja/index.html?lang=ja)にログイン→`Seevices`→`My Domains`
1. `My Domains`からドメインを選んで`Manage Domain`<i class="fas fa-cog"></i>
1. `Management Tools`→`Nameservers`→<input type="radio" name="nameservers" value="true" checked="checked">`Use default nameservers (Freenom Nameservers)`
1. `Manage Freenom DNS`

[^register]: 実験中に作った`.ml`なアドレスだと、"a user already exists with that email address"と怒られた。

## メールも使いたいよね

長くなったので、詳細は[無料でカスタムドメインメール](/misc/xrea-mail/)にて。
 
## WordPressを導入

最初は無料でどこまでできるかの一環で作っていたが、なんだかちゃんとしたサイトが作れるようなので、ふざけたドメインじゃないやつに作り直す。  
なので、詳細は[WordPress](/sitesystem/wordpress/)なページにて。  
無料でここまでできた、ってことで。

## 注意点

あちこちに書かれていることですが、あくまでもテストとかお遊び程度に使う方が。

+ ある程度のアクセス数がないとドメインが抹消される
+ 契約時に12か月（1年ではないことに注意）で取得できるが、14日前からしか更新できない[^renew]
+ ある日突然ドメイン管理が**SUSPENDED**になったり
+ 自分が使用中のドメインも販売中になっているんですけど?
+ 特に.tkドメインはあちこちで使えなかったり
+ やっぱり少し抵抗があったり?
  + [.tk ドメインが乗っ取られたっぽい](https://blog.kksg.net/posts/tk-domain-fraud)
  + [FREENOM is a scam and thiefs](https://www.namepros.com/threads/freenom-is-a-scam-and-thiefs.938824/)
+ ドメインを抱えすぎたせいか怒られた
> At this moment we are unable to register any domains or other services in this account.  
> Please contact support for more information. Error code 0x08823.  
+ [Error code 0x08823](https://my.freenom.com/knowledgebase.php?action=displayarticle&id=9)ということらしい  
（*too many domain names without actively using them*に心当たりありすぎ）
  
[^renew]: [Domain Renewals](https://my.freenom.com/domains.php?a=renewals)（要ログイン）でチェックすべし。
