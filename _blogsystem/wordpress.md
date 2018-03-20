---
title: "WordPress"
description: "カスタムドメインでも無料で作れるとは…"
permalink: /blogsystem/wordpress/
---
{{ page.description }}
{: .notice}

## XREA編

### サーバ設定

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

### WordPress導入

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

+ タイミング的に一般設定の「http://」を「https://」に変えた直後
+ [CloudFlare](https://www.cloudflare.com/)でPage Rulesに`SSL: Full`に変更したら見えるように
+ 管理画面には入れない
+ [Sixcore（シックスコア）に「WordPress国外IPアクセス制限」機能が追加されていた！](https://gori.me/wordpress/29316)によると、`WordPressログイン制限`が怪しそう→OFFにしたら繋がった

## StarServer編

### 登録→設定

1. [ネットオウル](https://www.netowl.jp/)にユーザ登録
1. 一見、StarServerは有料のように見える
1. [サイトマップ](https://www.star.ne.jp/sitemap.php)に無料プランの存在があったり
1. フリーWPプランでWordPressが使えるようになるという
1. 申し込む
1. アプリ名（=ユーザアカウント?）などを登録
1. なんだかんだの設定で10分くらい待つ
1. もうできてるし…

あっさりすぎて、XREA編のように画像を残す間も無かったという。  
データベース登録とか「有名な5分間」などを一気にやってくれてた模様。

### カスタムドメインに

1. `サイトアドレスの変更`→`他社管理のドメインを利用`
1. …あとなんだったっけ

とにかく、サクッと完了。

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

#### Automatic Post Thumbnail

記事の最初にある記事をアイキャッチとして設定してくれるのが[Automatic Post Thumbnail](http://www.sanisoft.com/blog/2010/04/19/wordpress-plugin-automatic-post-thumbnail/)なのだが、お引越しにも普段遣いにも便利。  
`設定`→`Automatic Post Thumbnail`で一括設定してくれる。

#### Batch Cat

カテゴリをまとめて編集したり。  
特にカテゴリがない記事をインポートしたときに便利。

## 他から引っ越し

### ライブドアより

#### ライブドア側

1. `ブログ設定`→`バックアップ`
1. `改行`だけは`改行をそのまま出力`に変更
1. `ブログのデータを書き出す`をクリック
1. 一呼吸する（一定時間が経過したら、なのだそうで）
1. `こちらのリンクをクリック`をクリック
1. 画像を[GetHTMLW](http://www.vector.co.jp/soft/win95/net/se077067.html)などのツールで収集
1. 必要なのは`livedoor.blogimg.jp`→`【ライブドアアカウント】`→`imgs`のみ

#### WordPress側

1. 画像が入っている`imgs`フォルダの中身を、WordPressの`public_html`→`wp-content`→`uploads`へ
1. `【引越し先URL】/wp-content/uploads/imgs/【ディレクトリのいくつか下にあるファイル名】`で画像が見えるか確認
1. backup.txtを開いて全置換
: 置換前 `http://livedoor.blogimg.jp/【ライブドアアカウント】/imgs/`
: 置換後 `【引越し先URL】/wp-content/uploads/imgs/`
1. 別名で保存しておく
1. ダッシュボード→設定→パーマリンク設定を変更
: `カスタム構造`を選択して`/archives/%postname%.html`に書き換え
1. `ツール`→`インポート`→`Movable Type と TypePad`をインストール
1. インポーターを実行して、全置換後のファイルを読み込ませる

…で完了だったかな。  
あとはライブドア側からの転送設定とかいろいろ。

### Tumblrより

1. カスタムドメインを設定している場合は解除
1. `ツール`→`インポート`→`Tumblr`をインストール
1. インポーターを実行

#### 認証設定

1. `https://www.tumblr.com/oauth/apps`へ飛ぶ
1. `アプリを登録する`をクリック
1. いろいろ記入  
  + アプリケーション名（適当に）
  + アプリケーションの説明（適当に）
  + 管理用の連絡先メール（これは既に入っているかと）
  + アプリケーションウェブサイト（引越し先のURLとか）
  + デフォルトのコールバックURL（同上）

#### インポート

1. `アプリを登録する`ボタンの上にいろいろ書いてある
1. それぞれインポーターへ入力
  + OAuth Consumer Keyをインポーター画面へ
  + `Show secret key`をクリックすると表示されるKeyも入力
1. `Authorize the Application`をクリック
1. さきほどのアプリケーション名で確認が出てくるので、許可
1. 認証ができたら`このブログをインポート`というボタンがあるのでクリック

これでインポート終了。

#### カテゴリの仕分け

Tumblrの記事に「カテゴリ」という概念がない。  
「未分類」になっているのを整理する。

1. 先に移動先のカテゴリを作っておく
1. Batch Catプラグインをインストール
1. ツール→Batch Cat
1. カテゴリ「未分類」を選んでSearch
1. カテゴリを選んで`Set categories to posts`

#### その他

今回作業したブログに動画記事が。  
1. 記事を編集
1. メディアを追加
1. 動画がある記事のURLを入力

…以上でインポートとその後の作業終了。
