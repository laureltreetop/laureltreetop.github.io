---
title: "WordPress"
description: "今までWordPress.comしか知らなかった。カスタムドメインでも無料で作れるとは…"
permalink: /blogsystem/wordpress/
classes: wide
header:
  teaser: /assets/images/xrea-wordpress-config.png
  og_image: /assets/images/xrea-wordpress-config.png
---
{{ page.description }}
{: .notice}

[WordPress Codex 日本語版](https://wpdocs.osdn.jp/Main_Page)というのもあるけど、自分で試したのをいろいろメモ。

## WordPressが使えるサービス

### XREA編

#### サーバ設定

1. [XREA](https://www.xrea.com/)への登録方法は端折りますよっと
1. DNS設定に必要な情報は右上のアカウントから**契約情報→サーバースペック→IP**  
[![XREA server spec](/assets/images/xrea-server-spec-ip.png)](/assets/images/xrea-server-spec-ip.png)
1. DNSサーバにAレコードを追加[^cloudflare]
1. **ダッシュボード→ドメイン設定→ドメイン設定の新規作成**  
[![XREA add new domain](/assets/images/xrea-add-new-domain.png)](/assets/images/xrea-add-new-domain.png)
1. で、ドメインを入力  
[![XREA add new domain](/assets/images/xrea-add-new-domain-setting.png)](/assets/images/xrea-add-new-domain-setting.png)
1. 登録できた  
[![XREA add new domain ok](/assets/images/xrea-add-new-domain-setting-ok.png)](/assets/images/xrea-add-new-domain-setting-ok.png)

[^cloudflare]: [CloudFlare](https://www.cloudflare.com/)を使っている場合、認識するまではDNS Onlyにしたほうがいいっぽい。

#### WordPress導入

1. まずはMySqlでデータベースを作ってから…だと…?  
[![MySql](/assets/images/xrea-wordpress-mysql.png)](/assets/images/xrea-wordpress-mysql.png)
1. 本当にそうなの? と思いつつ作成  
[![MySql](/assets/images/xrea-wordpress-mysql-setting.png)](/assets/images/xrea-wordpress-mysql-setting.png)
1. **サイト設定→ツールセキュリティー→CMSインストール→WordPress**って本当にあった  
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

#### 403 error

+ タイミング的に一般設定の「http://」を「https://」に変えた直後
+ [CloudFlare](https://www.cloudflare.com/)でPage Rulesに**SSL: Full**に変更したら見えるように
+ 管理画面には入れない
+ [Sixcore（シックスコア）に「WordPress国外IPアクセス制限」機能が追加されていた！](https://gori.me/wordpress/29316)によると、**WordPressログイン制限**が怪しそう→OFFにしたら繋がった

### StarServer編

.tkドメインは登録できない。.mlはできたし.gaや.cfも可能かと。
{: .notice--warning}

#### 登録→設定

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

#### カスタムドメインに

1. **サイトアドレスの変更→他社管理のドメインを利用**
1. …あとなんだったっけ

とにかく、サクッと完了。

### Xdomain編

.tkドメインは登録できない。.mlはできたし.gaや.cfも可能かと。  
[CloudFlare](https://www.cloudflare.com/)を噛ませてSSL Flexibleにしてあると、ビジュアルエディタが使えなかったり、プラグインの組み合わせによってはテキストエディタすら使えない状態に。対策方法は今のところ謎。
{: .notice--warning}

1. [Xdomain](https://www.xdomain.ne.jp/)ユーザ登録
1. 無料レンタルサーバより登録
1. WordPress登録
1. カスタムドメイン追加（サブドメインは後から）
1. WordPress新規インストール（ここでサブドメインを指定可能）

### 000webhost

海外サイトで[000webhost](https://www.000webhost.com/)というのもある。

1. 例のごとくユーザ登録略
1. website登録へ
[![000webhost add site](/assets/images/000webhost-add-website.png)](/assets/images/000webhost-add-website.png)
1. パスワード設定
[![000webhost password](/assets/images/000webhost-add-website-password.png)](/assets/images/000webhost-add-website-password.png)
1. 今のうちにカスタムドメインを登録
[![000webhost custom domain](/assets/images/000webhost-custom-domain.png)](/assets/images/000webhost-custom-domain.png)
1. **My domains→Add domain**から設定
[![000webhost custom domain](/assets/images/000webhost-add-domain.png)](/assets/images/000webhost-add-domain.png)
1. Point Domainを選択
[![000webhost point domain](/assets/images/000webhost-point-domain.png)](/assets/images/000webhost-point-domain.png)
1. カスタムドメインの設定、DNSにも指示通りにCNAMEを追加  
[![000webhost custom domain](/assets/images/000webhost-point-domain-setting.png)](/assets/images/000webhost-point-domain-setting.png)
1. どうもwww有り無し両方のレコードが必要?
[![000webhost domain 2 cname](/assets/images/000webhost-add-domain-2-record.png)](/assets/images/000webhost-add-domain-2-record.png)
1. **Build website**よりサイトを作成
[![000webhost build website](/assets/images/000webhost-build-website.png)](/assets/images/000webhost-build-website.png)
1. WordPressをインストール
[![000webhost build wordpress](/assets/images/000webhost-build-wordpress.png)](/assets/images/000webhost-build-wordpress.png)
1. 実はここでハマった。パスワードは**15文字以内**（usernameも変更可）
[![000webhost install wordpress](/assets/images/000webhost-wordpress-install.png)](/assets/images/000webhost-wordpress-install.png)
1. しばらく待つと設定画面に行くボタンが
[![000webhost install wordpress](/assets/images/000webhost-wordpress-conf-start.png)](/assets/images/000webhost-wordpress-conf-start.png)

{% comment %}
1. うまくいかないので**Park domain**も試してみる
[![000webhost park domain](/assets/images/000webhost-park-domain.png)](/assets/images/000webhost-park-domain.png)
1. カスタムドメインを設定、ネームサーパを**ns01.000webhost.com**と**ns02.000webhost.com**に変更
[![000webhost park domain](/assets/images/000webhost-park-domain-setting.png)](/assets/images/000webhost-park-domain-setting.png)
1. ネームサーバ待ち
[![000webhost park domain](/assets/images/000webhost-park-domain-wait-nameserver.png)](/assets/images/000webhost-park-domain-wait-nameserver.png)
1. できた
[![000webhost park domain](/assets/images/000webhost-park-domain-ok.png)](/assets/images/000webhost-park-domain-ok.png)
1. WordPressインストール待ち
[![000webhost install wordpress](/assets/images/000webhost-wordpress-install-wait.png)](/assets/images/000webhost-wordpress-install-wait.png)
1. なんで設定画面に行かないんだろう…?
1. **Manage→SET MX RECORSD**からMXレコードを設定してみる
1. Googleの設定はサクッとできるっぽい?
[![000webhost park domain](/assets/images/000webhost-set-mx-record.png)](/assets/images/000webhost-set-mx-record.png)

1. 悔しいが、自分でアップロードしてみる
[![000webhost build upload](/assets/images/000webhost-build-upload-own-website.png)](/assets/images/000webhost-build-upload-own-website.png)
1. その間にデータベース設定
[![000webhost database](/assets/images/000webhost-database.png)](/assets/images/000webhost-database.png)
1. こんな感じで
[![000webhost new database](/assets/images/000webhost-new-database.png)](/assets/images/000webhost-new-database.png)
[![000webhost new database](/assets/images/000webhost-database-config.png)](/assets/images/000webhost-database-config.png)
{% endcomment %}


### BIZ.NF

[BIZ.NF](/misc/biz-nf/)にまとめておきます。

{% comment %}
## その他試したやつ

1. [WordPress.org 日本語](https://ja.wordpress.org/)よりダウンロード
1. FTPでアップロード
1. その間にMySQLの設定

アップロードが終了すると、**【サイトURL】/wp-admin/setup-config.php**から**有名な5分間**を開始できるように  
[![WordPress Pre-setting](/assets/images/wordpress_pre-setting.png)](/assets/images/wordpress_pre-setting.png)
{% endcomment %}

## プラグイン

実はWordPress.comにアカウント作成済みなので、まっさらな状態とはちょっと違ってくるかと。
{: .notice}

### 常備してるやつ

+ [Jetpack](https://jetpack.com/?from=automattic)
: インストールし、WordPress.comと連携、以上。

+ [Akismet Anti-Spam](https://wordpress.org/plugins/akismet/)
  1. [Akismet Anti-Spam](https://wordpress.org/plugins/akismet/)を入れようとしたら、[アカウントを設定](https://akismet.com/account/)しないといけないらしい
  1. Jetpack経由で連携
  1. [Account](https://akismet.com/account/)で**Add Subscription**
  1. Personalを選択が正解のなのだろうが、**Name your price**とはなんぞや[^name-your-price]
  1. <i class="fas fa-yen-sign"></i>6,000/YEARだと…?  
[![WordPress Akismet 6000yen](/assets/images/wordpress_akismet-subscription-personal-6000yen.png)](/assets/images/wordpress_akismet-subscription-personal-6000yen.png)
  1. 価格のスライダーを左端に寄せたら、無料設定になったっぽい  
[![WordPress Akismet 0yen](/assets/images/wordpress_akismet-subscription-personal-0yen.png)](/assets/images/wordpress_akismet-subscription-personal-0yen.png)

[^name-your-price]: これって自由価格設定という意味らしいね。

+ [Pz-LinkCard](https://wordpress.org/plugins/pz-linkcard/)
: 使い方は[WordPressでリンクをカード形式で表示する Pz-LinkCard](https://popozure.info/pz-linkcard)

+ [CSS & JavaScript Toolbox](https://ja.wordpress.org/plugins/css-javascript-toolbox/)
: テーマをグリグリカスタマイズするときに便利。
  1. インストールすると、プラグイン一覧にこういうのが出てくる
> CJT Plugin has been installed throught Wordpress Plugins manager page. In order for CJT Plugin to work correctly you must install it throught	CJT-Instalaltion page.
> Please or you can go to the installation page directly through the	CSS & Javascript Toolbox page.
> Dismiss
  1. **CJT-Instalaltion page**リンクから確認画面が出るのでインストール
  1. さっそくスクリプトを追加しようと**New Code Block**から作成しようとしたら、カスペルさんがフィッシングサイトへのポップアップということでブロックされた…  
  1. と思いきや、設定の下にメニューが追加されてて、先ほど名前をつけたCode Blockもあった
  1. 以降、使い方は[WordPressの記事に、個別にCSSやJSを追加する高機能プラグイン](http://beginnersdomain.net/plugin/css-javascript-toolbox/)を参照

+ [Infinite-Scroll](https://wordpress.org/plugins/infinite-scroll/)
: 無限インストールプラグインは何種類かあるけど、JQueryで仕込んだことがある人には、こっちのほうが判りやすいかも。

  + [Coldbox](https://coldbox.miruc.co/)  
  
    | item               | value                            |
    |--------------------|----------------------------------|
    | Content Selector   | .content-inner                   |
    | Navigation Selector| .page-numbers                    |
    | Next Selector      | .page-numbers a.next.page-numbers|
    | Item Selector      | article                          |
    | Behavior           | Masonry/Isotope                  |
    
    [Jetpack](https://jetpack.com/?from=automattic)を入れている場合、OFFにする箇所あり  

    + **Jetpack→ダッシュボード→パフォーマンス→画像のパフォーマンス**をOFFに  
    （ONにすると後述の**Serve images from our global CDN**もONになるため）
    
    [![Jetpack & Infinite Scroll](/assets/images/wordpress_infinite-scroll_jetpack-dashboard.png)](/assets/images/wordpress_infinite-scroll_jetpack-dashboard.png)

    + **Jetpack→設定→Performance & speed**
      + Serve images from our global CDN  
      + Enable Lazy Loading for images
      
    [![Jetpack & Infinite Scroll](/assets/images/wordpress_infinite-scroll_jetpack-setting.png)](/assets/images/wordpress_infinite-scroll_jetpack-setting.png)
    
   （無限インストールの話のついでに）[Baskerville 2](https://wordpress.com/theme/baskerville-2)だと、プラグインで[Jetpack by WordPress.com](https://ja.wordpress.org/plugins/jetpack/)を入れておくと、**ダッシュボード→Jetpack→執筆→テーマの拡張→無限スクロール→読者のスクロールに合わせて投稿をさらに読み込む**（長い…）で無限スクロールに。
    {: .notice--info}


+ [Google Analytics Dashboard for WP by ExactMetrics (formerly GADWP)](https://ja.wordpress.org/plugins/google-analytics-dashboard-for-wp/)
: MonsterInsightsではなくこっちのが良さそう。

+ [Collapsing Archives](https://ja.wordpress.org/plugins/collapsing-archives/)
: アーカイブの表示をアコーディオンメニュー的な感じにする。

+ [Collapsing Categories](https://wordpress.org/plugins/collapsing-categories/)
: カテゴリの表示をア（以下略）。

+ [Pixabay Images](https://ja.wordpress.org/plugins/pixabay-images/)
: ちょっと画像が欲しいなーというときに[Pixabay](https://pixabay.com/)から引っ張ってくる。

+ [Easy FancyBox](https://ja.wordpress.org/plugins/easy-fancybox/)
: 画像をクリックでにゅっと（表現難しい…）。画像がポップアップするやつ。特に設定は必要なくて、画像のリンク先を**メディアファイル**にするくらい。

### たまに役に立つやつ

+ [Batch Cat](https://ja.wordpress.org/plugins/batch-cat/)
: カテゴリをまとめて編集したり。特にカテゴリがない記事をインポートしたときに便利。
  1. 先に移動先のカテゴリを作っておく
  1. Batch Catプラグインをインストール
  1. **ツール→Batch Cat**
  1. カテゴリ「未分類」を選んでSearch
  1. カテゴリを選んで**Set categories to posts**
  1. カテゴリから「未分類」を削除するには**Drop categories from posts**

+ [All-in-One WP Migration](https://ja.wordpress.org/plugins/all-in-one-wp-migration/)
: 後述の通り、まるっと中身のバックアップを取ってくれる。

+ [Automatic Post Thumbnail](http://www.sanisoft.com/blog/2010/04/19/wordpress-plugin-automatic-post-thumbnail/)
: 記事の最初にある記事をアイキャッチとして設定してくれるのだが、お引越しにも普段遣いにも便利。  
**設定→Automatic Post Thumbnail**で一括設定してくれる。

+ [Organize Media Library by Folders](https://ja.wordpress.org/plugins/organize-media-library/)
: メディアファイルのフォルダを変更できる。各ファイル毎にフォルダを仕分けることも可。

### 試したけど使ってないやつ

+ [Featured Image From URL](https://ja.wordpress.org/plugins/featured-image-from-url/)

+ [Browser Shots](https://ja.wordpress.org/plugins/browser-shots/)
: 外部リンクを貼りたいときにを使うと、リンク先のプレビューを画像で載せてくれるのが便利。

+ [Google Analytics for WordPress by MonsterInsights](https://wordpress.org/plugins/google-analytics-for-wordpress/)
: Googleアカウントに紐付けられたやつをするするん、っと。ただし現在は別のやつを使用中。

+ [Under Construction](https://ja.wordpress.org/plugins/under-construction-page/)
: 簡単なので、ちょっとだけ工事中というときに便利。

## 他から引っ越し

### ライブドアより

#### ライブドア側

1. **ブログ設定→バックアップ**
1. **改行**だけは**改行をそのまま出力**に変更
1. **ブログのデータを書き出す**をクリック
1. 一呼吸する（一定時間が経過したら、なのだそうで）
1. **こちらのリンクをクリック**をクリック
1. 画像を[GetHTMLW](http://www.vector.co.jp/soft/win95/net/se077067.html)などのツールで収集
1. 必要なのは**livedoor.blogimg.jp→【ライブドアアカウント】→imgs**のみ

#### WordPress側

1. 画像が入っている**imgs**フォルダの中身を、WordPressの**public_html→wp-content→uploads**へ
1. **【引越し先URL】/wp-content/uploads/imgs/【ディレクトリのいくつか下にあるファイル名】**で画像が見えるか確認
1. backup.txtを開いて全置換
: 置換前 http://livedoor.blogimg.jp/【ライブドアアカウント】/imgs/
: 置換後 【引越し先URL】/wp-content/uploads/imgs/
1. 別名で保存しておく
1. **ダッシュボード→設定→パーマリンク設定**を変更
: **カスタム構造**を選択して**/archives/%postname%.html**に書き換え
1. **ツール→インポート→Movable Type と TypePad**をインストール
1. インポーターを実行して、全置換後のファイルを読み込ませる

…で完了だったかな。  
あとはライブドア側からの転送設定とかいろいろ。  
パーマリンクの設定は好みに戻しても問題なし。

### Tumblrより

カスタムドメインを設定してあるときは、解除してtumblr.comでアクセスできるか確認。  
その後、どちらかの方法でインポート。
{: .notice}

#### アプリを作成してインストール

1. カスタムドメインを設定している場合は解除
1. **ツール→インポート→Tumblr**をインストール
1. インポーターを実行
1. **https://www.tumblr.com/oauth/apps**へ飛ぶ
1. **アプリを登録する**をクリック
1. いろいろ記入  
  + アプリケーション名（適当に）
  + アプリケーションの説明（適当に）
  + 管理用の連絡先メール（これは既に入っているかと）
  + アプリケーションウェブサイト（引越し先のURLとか）
  + デフォルトのコールバックURL（同上）
1. **アプリを登録する**ボタンの上にいろいろ書いてある
1. それぞれインポーターへ入力
  + OAuth Consumer Keyをインポーター画面へ
  + **Show secret key**をクリックすると表示されるKeyも入力
1. **Authorize the Application**をクリック
1. さきほどのアプリケーション名で確認が出てくるので、許可
1. 認証ができたら**このブログをインポート**というボタンがあるのでクリック

これでインポート終了。

#### Tumblr2HatenaBlog

うまくできないときは、この方法で。  
{: .notice}

1. [Tumblr2HatenaBlog](http://tumblr2hatenablog.herokuapp.com/)からエクスポート
1. **Movable TypeとTypePad**を使ってどちらかの方法でインポート

[![WordPress Movable Type](/assets/images/wordpress_movable-import.png)](/assets/images/wordpress_movable-import.png)
+ ファイルを選択してインポート
+ エクスポートしたファイルを**mt-export.txt**にリネームし、FTPで**/wp-content/**にアップロードしてインポート

ただし、この方法だとタグをインポートすることができないっぽい?

#### カテゴリの仕分け

Tumblrの記事に「カテゴリ」という概念がない。  
「未分類」になっているのを整理する。
{: .notice}

1. **ツール→インポート→カテゴリー・タグ変換ツール**をインストール
1. **タグをカテゴリーに変換**を使う
1. すべて選択して、変換実行
1. あとは前述のBatch Catを使ったり

## まるごとお引越し

そのままでサーバ間のお引越し。URL変更可能。
{: .notice}

1. [All-in-One WP Migration](https://ja.wordpress.org/plugins/all-in-one-wp-migration/)というプラグインをインストール
1. **All-in-One WP Migration→エクスポート**    
引っ越し前と引っ越し後で違うURLになる場合、置換設定も必要
[![All-in-One　export replace](/assets/images/wordpress_all-in-one_export-replace-import.png)](/assets/images/wordpress_all-in-one_export-replace-import.png)
1. エクスポート先を選ぶ
[![All-in-One　export 1](/assets/images/wordpress-all-in-one-export-1.png)](/assets/images/wordpress-all-in-one-export-1.png)
1. エクスポート先は**ファイル**を選択
[![All-in-One　export 3](/assets/images/wordpress-all-in-one-export-2.png)](/assets/images/wordpress-all-in-one-export-2.png)
1. .wpressなファイルのダウンロードをしばし待つ
1. 終わったら**旧サーバとアドレスの紐付けを切り離す**
1. **新サーバとアドレスを紐付ける**
1. WordPressをインストール
1. 最低限で[All-in-One WP Migration](https://ja.wordpress.org/plugins/all-in-one-wp-migration/)だけインストール
[![All-in-One import](/assets/images/wordpress-all-in-one-import.png)](/assets/images/wordpress-all-in-one-import.png)
1. これで中身のお引越し完了
+ 念のため、パーマネントリンクの設定とかをチェック

## その他

+ [mod_rewriteでWordPressの管理画面だけアクセスを許可する設定](https://resource-sharing.co.jp/mod-rewrite-redirect-setting/)
+ [WordPressの管理画面へのアクセスはリダイレクトさせないようにしたい](https://teratail.com/questions/32946)
+ [リダイレクトを使用してWordPressのログイン画面などのセキュリティを向上させる](https://blue-leaf81.net/archives/1377/)

+ CloudFlareを噛ませてSSLをFlexibleにする場合は、**ダッシュボード→設定→一般→サイトアドレス**のURLを http**s**:// にする（カスタマイズのプレビュー画面が出てないときの原因はこれ）

+ [CLOUD FLARE + WordPress + 共用サーバーでサイトが崩壊したときの処方箋](https://alaki.co.jp/blog/?p=1715)
+ URLのwww有無は、.htaccessで頑張らずに**ダッシュボード→設定→一般**で大丈夫
  + 自分は壊してしまうのが得意なので、慎重にサイトアドレスを修正して、サイトがちゃんと表示されたのを見てWordPressアドレスを変えた
+ 投稿記事に日付だけじゃなく時刻も入れたいなぁと調べてたら、**ダッシュボード→設定→一般→日付のフォーマット**に時刻も無理やり入れてしまうという荒業が。