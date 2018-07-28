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
~~どこにも書いてなかったが、フォルダは`/_Linux/`ではなく、アンダーバー無しの`/Linux/`に置くべし。~~  
嘘ですごめんなさい、フォルダは自由です。`permalink`さえちゃんと設定されていれば、どこに置いても問題無しです。  
自分の場合は`redirected`フォルダに放り込んであります。
```yml
---
layout: redirected
sitemap: false
permalink: /Linux/
redirect_to: https://1995.treetop.to/Linux/
---
```
あとは通常通りに`bundle update`やら`jekyll `sやらでできた。  
お試しで[/Linux/index](/Linux/index)にアクセスすると、スパーンっとリダイレクトされるように。

## 手元のファイル群を管理したい

GitHub **Pages**から離れているので、あとで別の場所に置き直すかも。
{: .notice--info}

1. 管理したいファイル群が入っているフォルダに移動して、git用に初期化
```sh
$ git init
```
1. さっそく中身を見てみると、こんな感じで戻ってきた[^indent]
```sh
$ git status
On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
...
nothing added to commit but untracked files present (use "git add" to track)
```
[^indent]: インデントがおかしくなるので、空白行は削除してます。
1. 全部放り込む
```sh
$ git add -A
```
1. そして、コメントを付けてcommit
```sh
$ git commit -m "new repository from existing files"
[master (root-commit) 16cfb94] new repository from existing files
 nn files changed, nnn insertions(+)
...
```
{% comment %}
1. ?
```sh
$ git remote add origin https://github.com/<user>/<repository>.git
```
1. ??
```sh
$ git remote -v
origin  https://github.com/<user>/<repository>.git (fetch)
origin  https://github.com/<user>/<repository>.git (push)
```
1. で、pushしてみたら、怒られた
```sh
$ git push
fatal: The current branch master has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master
```
{% endcomment %}
1. こう?
```sh
$ eval `ssh-agent`
Agent pid nnnn
```
1. でもって?
```sh
$ ssh-add ~/.ssh/id_rsa
Identity added: /c/Users/<user>/.ssh/id_rsa (/c/Users/<user>/.ssh/id_rsa)
```
1. [GitHub](https://github.com/)上で空のリポジトリを作成（上記「リポジトリを作成」参照）
1. 追加
```sh
$ git remote add origin https://github.com/<user>/<repogitory>.git
```
  + もし`fatal: remote origin already exists.`というエラーが出たら、こんな状態になっているかと
  ```sh
  $ cat .git/config
  [core]
        repositoryformatversion = 0
        filemode = false
        bare = false
        logallrefupdates = true
        symlinks = false
        ignorecase = true
  [remote "origin"]
        url = https://github.com/<username>/<repository>.git
        fetch = +refs/heads/*:refs/remotes/origin/*
  ```
  + 下記コマンドを実行
  ```sh
  $ git remote rm origin
  ```
  + 確認
  ```sh
  $ cat .git/config
  [core]
        repositoryformatversion = 0
        filemode = false
        bare = false
        logallrefupdates = true
        symlinks = false
        ignorecase = true
  ```
  + その状態で`git remote add ...`を実行
1. そして放流(?)
```sh
$ git push -u origin master
Counting objects: 19, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (16/16), done.
Writing objects: 100% (19/19), 524.54 KiB | 22.81 MiB/s, done.
Total 19 (delta 0), reused 0 (delta 0)
To https://github.com/<username>/<repository>.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
```