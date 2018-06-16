---
title: "GitHub"
description: GitHub Pagesなのですから、当然最初はGitHubの準備や設定やら。
permalink: /githubpages/github/
classes: wide
# categories:
#   - GitHub Pages
# tags:
#   - GitHub
---
{{ page.description }}
{: .notice}

慌ててHTTPS対応の設定をメモったので、ドメインとリポジトリ名と画像がちぐはぐになってますが、うまく解釈してくれると~~楽、じゃなくて~~助かります。
{: .notice--warning}

## GitHubの準備から
[GitHub](https://github.com/)より登録。

## リポジトリを作成  
最初からカスタムドメインで運用する前提で書きます。自分がそうだったので。   
リポジトリ名は`hoehoe`で作成（説明画像では`hogehoge`）[^repogitory]。

[^repogitory]: 古い記事だと"xxx.github.io"で作るように書いてあったのだが、"github.io"を付けなくてもカスタムドメインは作れるっぽいっていうか、作れた。

[![GitHub New Repository](/assets/images/github-new-repository.png)](/assets/images/github-new-repository.png)

{% comment %}
リポジトリを作成したら、とりあえず適当なテーマを設定。
[![GitHub Clone Repository](/assets/images/github-set-theme.png)](/assets/images/github-set-theme.png)
{% endcomment %}

手元に持ってくる。パターンはいくつかある。↓参照（説明画像では`hogehoge`）。
[![GitHub Set Theme](/assets/images/github-clone-hogehoge.png)](/assets/images/github-clone-hogehoge.png)

今回は一番上の案を採用。HTTPSなりSSHなりの文字列をコピーして、`git clone`を実行。
HTTPSパターンだとこういう感じで。
```shell
$ git clone https://github.com/ユーザID/hoehoe.git
```
SSHパターン。
```shell
$ git clone git@github.com:ユーザID/hoehoe.git
```
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
[GitHub Desktop](https://desktop.github.com/)をインストール[^githubwindows]。  
[git for windows](https://gitforwindows.org/)をインストールするとコマンド画面で作業できる。  
USBメモリに持ち歩くために探したのが[Git Portable](https://github.com/sheabunge/GitPortable)とか[Git for Windows Portable](https://portableapps.com/node/36346)とか。

{% comment %}
key生成
```sh
ssh-keygen -t rsa -b 4096 -C "mail@domain"
```
パスフレーズはお好みで
{% endcomment %}

[^githubwindows]: でもGit&nbsp;Shellしか使ってないかも。

## Brackets

[Brackets](http://brackets.io/)なるテキストエディタに[Brackets-Git](https://github.com/brackets-userland/brackets-git)という拡張機能を追加すると、エディタからadd, commit, pushなどが可能。  
今までは書き溜めたのをまとめてばーっとcommit→pushだったので、一度のcommitにコメントが渋滞してた。

これだと簡単にファイル別にcommitできるし、Git Shellを行き来しなくてもpushできる。もちろんpullも。  
これでcommitログが見やすくなる。

既にGit for Windowsなどでコマンドでのgitが使えていることが前提。  
最初にgit.exeが見当たらないって怒られたけど、whereで調べた結果、`~\AppData\Local\`なフォルダにあったせい。いつもGit Shellで立ち上げてたから気にならなかった。  
それをうまく設定してあげれば、かなり便利。  

## 迷子なURL対策

かなり前というか、1995年から作っていたサイトに、今でもLinux系のリンク経由で飛んできていたのにびっくり。  
ありがとう、[Check your website's backlinks -SEO Toolbox](https://toolbox.seositecheckup.com/apps/backlinks)  
なので、GitHubからリダイレクトするように設定してみた。
{: .notice}

_layouts/redirected.htmlに、こういうファイルを作成。
<script src="https://gist.github.com/laureltreetop/7582df7a84f3912a1db3f75986f0a8b7.js"></script>

Gemfileにも追加。
```rb
group :jekyll_plugins do
	gem 'jekyll-redirect-from'
end
```
_config.ymlに追加。
```yml
plugins:
  - jekyll-redirect-from
```

リダイレクトしたいURLのある場所に、ファイルを設置。  
例としてあげたのは、実際に最近も廻ってきているらしい、Linux関係の設定。  
どこにも書いてなかったが、フォルダは`/_Linux/`ではなく、アンダーバー無しの`/Linux/`に置くべし。
```yml
---
layout: redirected
sitemap: false
permalink: /Linux/
redirect_to: http://treetop.webcrow.jp/Linux/
---
```
あとは通常通りに`bundle update`やら`jekyll `sやらでできた。  
お試しで[/Linux/index](/Linux/index)にアクセスすると、スパーンっとリダイレクトされるように。