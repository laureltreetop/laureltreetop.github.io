---
date: 2017-08-04 23:34 +0900
last_modified_at: 2017-11-06
title: "GitHub start"
permalink: /githubpages/github/
toc: true
toc_label: "GitHub start"
toc_icon: "github"
---
GitHub Pagesなのですから、当然最初はGitHubの準備や設定やら。
{: .notice}

## GitHubの準備から
[GitHub](https://github.com/)より登録。

## リポジトリを作成  
最初からカスタムドメインで運用する前提で書きます。自分がそうだったので。   
リポジトリ名は`hoehoe.github.io`で作成。  
…と、調べた限りでは書いてあったのだが、`github.io`を付けなくてもカスタムドメインは作れるっぽい?  
[![GitHub New Repository](/assets/images/github-new-repository.png)](/assets/images/github-new-repository.png)
リポジトリを作成したら、とりあえず適当なテーマを設定。
[![GitHub Clone Repository](/assets/images/github-set-theme.png)](/assets/images/github-set-theme.png)
手元に持ってくる。パターンはいくつかある。↓参照。
[![GitHub Set Theme](/assets/images/github-clone.png)](/assets/images/github-clone.png)
今回は一番上の案を採用。HTTPSなりSSHなりの文字列をコピーして、`git clone`を実行。
HTTPSパターンだとこういう感じで。
```shell
$ git clone https://github.com/username/hoehoe.github.io.git
```
SSHパターン。
```shell
$ git clone git@github.com:username/hoehoe.github.io.git
```
## DNS設定
`hoehoe.treetop.to`なCNAMEレコードに、`hoehoe.github.io`なリポジトリ名を設定。

`Settings`→`GitHub Pages`→`Custom domain`に、`hoehoe.treetop.to`という感じでドメインを設定。  
[![GitHub Custom Domain](/assets/images/github-custom-domain.png)](/assets/images/github-custom-domain.png)
リポジトリにCNAMEというファイルが作成されて、その中にカスタムドメインがぴろっと書かれていたら正解。  

## 環境構築 on Windows 
自分がそうなので。オレオレですみません。   
[GitHub Desktop](https://desktop.github.com/)をインストール。  
でもGit Shellしか使ってないかも。
