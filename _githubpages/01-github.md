---
title: "GitHub"
description: "GitHub Pagesなのですから、当然最初はGitHubの準備や設定やら。流れ上、あらゆるGitHub関係の記述あり。"
permalink: /githubpages/github/
classes: wide
header:
  teaser: /assets/images/github-new-repository.png
  og_image: /assets/images/github-new-repository.png
---
{{ page.description }}
{: .notice}

慌ててHTTPS対応の設定をメモったので、ドメインとリポジトリ名と画像がちぐはぐになってますが、うまく解釈してくれると~~楽、じゃなくて~~助かります。  
あと、画像を使いまわしているので、あちこち伏せてあります。あやしいからじゃないですからね。たぶん。
{: .notice--warning}

## GitHubの準備から
[GitHub](https://github.com/)より登録。

## リポジトリを作成  
最初からカスタムドメインで運用する前提で書きます。自分がそうだったので。   
どうやらメインのサイトを置くリポジトリは、`ユーザID.github.io`で作るっぽい?  
その他は自由なリポジトリ名でいけることは確認済み。  
説明でのリポジトリ名は`hoehoe`で作成（説明画像では`hogehoge`とか伏せたりとか）。

[![GitHub New Repository](/assets/images/github-new-repository.png)](/assets/images/github-new-repository.png)

## GitHub Pagesとして稼働

リポジトリを作成したら、手元に持ってくるための手順が書いてあるけど、その前にとりあえず稼働させてしまおうかと。  
`Code`になっているはずなので、`Settings`に移動する。
[![GitHub code to settings](/assets/images/github_new-github-pages-code-to-settings.png)](/assets/images/github_new-github-pages-code-to-settings.png)

{% comment %}[![GitHub Clone Repository](/assets/images/github-set-theme.png)](/assets/images/github-set-theme.png){% endcomment %}

で、テーマを適当に選んでおく。
[![GitHub code to settings](/assets/images/github_new-github-pages-before.png)](/assets/images/github_new-github-pages-before.png)

まぁこのあたりを選んじゃうよね。
[![GitHub theme](/assets/images/github_new-github-pages-select-theme-hacker.png)](/assets/images/github_new-github-pages-select-theme-hacker.png)

トップページになるやつなので、自分の環境に直したり、保留にしておくなり。
[![GitHub theme](/assets/images/github_new-github-pages-index.png)](/assets/images/github_new-github-pages-index.png)

GitHub Pagesとして動くように。
[![GitHub theme](/assets/images/github_new-github-pages-after.png)](/assets/images/github_new-github-pages-after.png)

こんな感じに。
[![GitHub theme](/assets/images/github_new-github-pages-hacker.png)](/assets/images/github_new-github-pages-hacker.png)

## DNS設定(HTTPS対応)
`www.hoehoe.tk`なCNAMEレコードに、`ユーザID.github.io`な値を設定。

`Settings`→`GitHub Pages`→`Custom domain`に、`www.hoehoe.tk`という感じでドメインを設定。   
[![GitHub Custom Domain](/assets/images/github-custom-domain-enforce-yet.png)](/assets/images/github-custom-domain-enforce-yet.png)  
リポジトリにCNAMEというファイルが作成されて、その中にカスタムドメインがぴろっと書かれていたら正解。  
`Enforce HTTPS`にチェックが付けられないのは後述。  

よく行方不明になるHelpを。
+ [Setting up an apex domain](https://help.github.com/articles/setting-up-an-apex-domain/)
+ [Setting up a www subdomain](https://help.github.com/articles/setting-up-a-www-subdomain/)

あと、こういう記事も。カスタムドメインのHTTPSひゃっほー、なのです。
+ [Custom domains on GitHub Pages gain support for HTTPS](https://blog.github.com/2018-05-01-github-pages-custom-domains-https/)

それを踏まえてDNSにこういう設定を。  
CAAレコードの値は[CAA Record Helper](https://sslmate.com/caa/)で生成できる。  

| name | Type  | Target                    |
|------|-------|---------------------------|
| @    | A     | 185.199.108.153           |
| @    | A     | 185.199.109.153           |
| @    | A     | 185.199.110.153           |
| @    | A     | 185.199.111.153           |
| www  | CNAME | ユーザID.github.io         |
| www  | CAA   | 0 issue "letsencrypt.org" |

CAAレコードが使えないDNSサービスでCAA抜きで設定をしてもイケた。  
[CNET Japanの記事](https://japan.cnet.com/release/30208036/)によると、  
> CAAレコードが指定されていない場合は、どの認証局（CA）でも証明書を発行できます。
<cite>2017年9月8日よりSSLサーバ証明書発行時のDNSのCAAレコードチェックが必須に - CNET Japan</cite>  

ということなので、そういうことなのかな。  
何度かセキュアじゃないという警告が出たのはそのせい?

これでしばらく待つと`Enforce HTTPS`にチェックを付けられるようになるので、忘れずにチェックを。
[![GitHub Custom Domain](/assets/images/github-custom-domain-enforce-done.png)](/assets/images/github-custom-domain-enforce-done.png)

## 環境構築 on Windows 
自分がそうなので。オレオレですみません。   
今のところ2つを確認済み。  
個人的な好みで言うと、GUIで使うなら[GitHub Desktop](https://desktop.github.com/)で、コマンドでガシガシいくなら[git for windows](https://gitforwindows.org/)かなと。  
USBメモリで持ち歩くために探したのが[Git Portable](https://github.com/sheabunge/GitPortable)とか[Git for Windows Portable](https://portableapps.com/node/36346)とか。

{% comment %}
key生成
```sh
ssh-keygen -t rsa -b 4096 -C "mail@domain"
```
パスフレーズはお好みで
{% endcomment %}

## 手元に持ってくる

パターンはいくつかある。↓参照（説明画像では`hoehoehoe`）。
{% comment %}[![GitHub Set Theme](/assets/images/github-clone-hogehoge.png)](/assets/images/github-clone-hogehoge.png){% endcomment %}
[![GitHub Set Theme](/assets/images/github_new-repository-code.png)](/assets/images/github_new-repository-code.png)

一番楽なのはGitHub Desktopを使うパターンかな。  
左上の`Set up in Desktop`をポチッといくと、あとは流れのままにという感じで。
[![GitHub Set Theme](/assets/images/github_desctop-clone.png)](/assets/images/github_desctop-clone.png)

コマンドラインで突き進むなら、HTTPSなりSSHなりの文字列をコピーして、`git clone`を実行。  
HTTPSパターンだとこういう感じで。
```shell
$ git clone https://github.com/ユーザID/hoehoehoe.git
```
SSHパターン。
```shell
$ git clone git@github.com:ユーザID/hoehoehoe.git
```

## Brackets

[Brackets](http://brackets.io/)なるテキストエディタに[Brackets-Git](https://github.com/brackets-userland/brackets-git)という拡張機能を追加すると、エディタからadd, commit, pushなどが可能。  
今までは書き溜めたのをまとめてばーっとcommit→pushだったので、一度のcommitにコメントが渋滞してた。

これだと簡単にファイル別にcommitできるし、Git Shellを行き来しなくてもpushできる。もちろんpullも。  
これでcommitログが見やすくなる。

既にGit for Windowsなどでコマンドでのgitが使えていることが前提。  
最初にgit.exeが見当たらないって怒られたけど、whereで調べた結果、`~\AppData\Local\`なフォルダにあったせい。いつもGit Shellで立ち上げてたから気にならなかった。  
それをうまく設定してあげれば、かなり便利。  

## 参考にしたリンク

リンク群なサイトから持ってきただけなので、あとでもう少し整理する…のかなぁ?

+ [Bloggerで外部ファイルを使うならGithubで決まり！](http://blogger.weblix.net/2014/07/blogger-external-file-github-pages.html)
+ [Github Pagesでウェブサイトを構築する方法](http://blogger.weblix.net/2014/01/github-pages-create-web-site.html)
+ [Git サーバー - SSH 公開鍵の作成](https://git-scm.com/book/ja/v1/Git-%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC-SSH-%E5%85%AC%E9%96%8B%E9%8D%B5%E3%81%AE%E4%BD%9C%E6%88%90)
+ [Git初心者でも大丈夫！完全無料でGithub PagesにWebページを公開する方法](https://liginc.co.jp/web/html-css/html/96453)
+ [Configuring a publishing source for GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)
+ [GitHub Help | Categories / GitHub Pages Basics](https://help.github.com/categories/github-pages-basics/)
+ [GitHubでディレクトリ作成](http://maeokaka.hatenablog.jp/entry/2016/07/07/001441)
+ [Git をはじめからていねいに](https://github.com/Shinpeim/introduction-to-git)
+ [GitHubの複数アカウントを使い分けるならSSHよりhttpsの方がいいんじゃね？という話](https://qiita.com/zaki-yama/items/bfb0c2bef516af58c3fa)
+ [git を https 経由で使うときのパスワードを保存する](https://qiita.com/usamik26/items/c655abcaeee02ea59695)