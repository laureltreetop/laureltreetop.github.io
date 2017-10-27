---
date: 2017-08-04 23:34 +0900
last_modified_at: 2017-10-24
title: "GitHub start"
permalink: /githubpages/github/
---
{% include toc icon="github" title="GitHub start" %}
GitHub Pagesなのですから、当然最初はGitHubの準備や設定やら。

## GitHubの準備から
[GitHub](https://github.com/)より登録。

## リポジトリを作成  
最初からカスタムドメインで運用する前提で書きます。自分がそうだったので。   
リポジトリ名は`hoehoe.github.io`で作成。

リポジトリを作成したら、とりあえずテーマ設定


`Settings`→`GitHub Pages`→`Custom domain`に、ドメインを設定。   
例えば当方なら`github.treetop.to`という感じで。   


リポジトリにCNAMEというファイルが作成されて、その中にカスタムドメインがぴろっと書かれていたら正解。  

手元に持ってくる
```
git clone git@github.com:username/hoehoe.github.io.git
```

コピってきた中身があるディレクトリに移動。  
`git init`で管理スタート。

## DNS設定
github.treetop.toなCNAMEレコードに、`hoehoe.github.io`なリポジトリ名を設定。

## 環境構築 on Windows 
自分がそうなので。オレオレですみません。   
[GitHub Desktop](https://desktop.github.com/)をインストール。  

