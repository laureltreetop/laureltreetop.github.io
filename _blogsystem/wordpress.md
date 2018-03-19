---
title: "WordPress"
description: "カスタムドメインでも無料で作れるとは…"
permalink: /blogsystem/wordpress/
---
{{ page.description }}
{: .notice}

## XREAに登録など

1. [XREA](https://www.xrea.com/)への登録方法は端折りますよっと
1. DNS設定に必要な情報は右上のアカウントから`契約情報`→`サーバースペック`→`IP`  
[![XREA server spec](/assets/images/xrea-server-spec-ip.png)](/assets/images/xrea-server-spec-ip.png)
1. DNSサーバにAレコードを追加[^cloudflare]
1. ダッシュボードから`ドメイン設定`→`ドメイン設定の新規作成`  
[![XREA add new domain](/assets/images/xrea-add-new-domain.png)](/assets/images/xrea-add-new-domain.png)
1. で、ドメインを入力  
[![XREA add new domain](/assets/images/xrea-add-new-domain-setting.png)](/assets/images/xrea-add-new-domain-setting.png)
1. 登録できた  
[![XREA add new domain ok](/assets/images/xrea-add-new-domain-setting-ok.png)](/assets/images/xrea-add-new-domain-setting-ok.png)

[^cloudflare]: [CloudFlare](https://www.cloudflare.com/)を使っている場合、認識するまではDNS Onlyにしたほうがいいっぽい。

## WordPress導入

1. まずはMySqlでデータベースを作ってから…だと…?  
[![MySql](/assets/images/xrea-wordpress-mysql.png)](/assets/images/xrea-wordpress-mysql.png)
1. 本当にそうなの? と思いつつ作成  
[![MySql](/assets/images/xrea-wordpress-mysql-setting.png)](/assets/images/xrea-wordpress-mysql-setting.png)
1. `サイト設定`→`ツールセキュリティー`→`CMSインストール`→`WordPress`って本当にあった  
[![WordPress install](/assets/images/xrea-wordpress-install.png)](/assets/images/xrea-wordpress-install.png)
1. サイトの選択肢に無い…  
[![Site setting](/assets/images/xrea-wordpress-install-site-no-select.png)](/assets/images/xrea-wordpress-install-site-no-select.png)
1. サイトの新規作成もしないといけないっぽい  
[![Site setting](/assets/images/xrea-server-site-setting.png)](/assets/images/xrea-server-site-setting.png)
1. 選択できるようになったので、インストール  
[![WordPress install go](/assets/images/xrea-wordpress-install-go.png)](/assets/images/xrea-wordpress-install-go.png)
1. 座して待つ  
[![WordPress install waiting](/assets/images/xrea-wordpress-install-wait.png)](/assets/images/xrea-wordpress-install-wait.png)
1. 予定地を覗いてみたら、いた  
[![WordPress first](/assets/images/xrea-wordpress-first.png)](/assets/images/xrea-wordpress-first.png)
1. ここでデータベース設定が必要になってくるわけだねぇ  
[![MySql config](/assets/images/xrea-wordpress-mysql-list.png)](/assets/images/xrea-wordpress-mysql-list.png)
1. 情報を入力、と（これは入力前）  
[![WordPress config](/assets/images/xrea-wordpress-config.png)](/assets/images/xrea-wordpress-config.png)
1. 準備ができている、なら?  
[![WordPress step2](/assets/images/xrea-wordpress-config-step2.png)](/assets/images/xrea-wordpress-config-step2.png)
1. ここから「5分間」だったのか…  
[![WordPress install start](/assets/images/xrea-wordpress-install-start.png)](/assets/images/xrea-wordpress-install-start.png)
1. 終わってるし、始まってるし…「有名な5分間」って何だったんだ…?  
[![WordPress start](/assets/images/xrea-wordpress-start.png)](/assets/images/xrea-wordpress-start.png)

### 403 error

+ タイミング的に「http://」を「https://」に変えた直後
+ [CloudFlare](https://www.cloudflare.com/)でPage Rulesに`SSL: Full`に変更したら見えるように
+ 管理画面には入れない
+ [Sixcore（シックスコア）に「WordPress国外IPアクセス制限」機能が追加されていた！](https://gori.me/wordpress/29316)によると、`WordPressログイン制限`が怪しそう→OFFにしたら繋がった

## カスタマイズ

### Favicon設定

+ プラグイン追加? 直接テーマを弄る?
+ ダッシュボード→外観→カスタマイズ→サイト基本情報→サイトアイコン、で設定
+ 512x512以上の正方形画像って…準備してないので新しく作成

## プラグイン

実はWordPress.comにアカウント作成済みなので、まっさらな状態とはちょっと違ってくるかと。
{: .notice}

#### Jetpack by WordPress.com

[Jetpack](https://jetpack.com/?from=automattic)をインストールし、WordPress.comと連携、以上。

#### Akismet

1. [Akismet Anti-Spam](https://wordpress.org/plugins/akismet/)を入れようとしたら、[アカウントを設定](https://akismet.com/account/)しないといけないらしい
1. Jetpack経由で連携
1. [Account](https://akismet.com/account/)でAdd Subscription
1. Personalを選択が正解のなのだろうが、`Name your price`とはなんぞや[^name-your-price]
1. <i class="fas fa-yen-sign"></i>6,000/YEARだと…?  
[![WordPress Akismet 6000yen](/assets/images/wordpress_akismet-subscription-personal-6000yen.png)](/assets/images/wordpress_akismet-subscription-personal-6000yen.png)
1. 価格のスライダーを左端に寄せたら、無料設定になったっぽい  
[![WordPress Akismet 0yen](/assets/images/wordpress_akismet-subscription-personal-0yen.png)](/assets/images/wordpress_akismet-subscription-personal-0yen.png)

[^name-your-price]: これって自由価格設定という意味らしいね。
