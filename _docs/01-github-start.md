---
last_modified_at: 2017/08/02 23:02 +0900
title: "GitHub Pages start"
permalink: /docs/github-start/
---
## GitHubの準備から
[GitHub](https://github.com/)より登録。

## リポジトリを作成
最初からカスタムドメインで運用する前提で書きます。自分がそうだったので。   
リポジトリ名はusername.github.ioで作成。

Settings→GitHub Pages→Custom domainに、ドメインを設定。   
例えば当方ならgithub.treetop.toという感じで。   
リポジトリにCNAMEというファイルが作成されて、その中にカスタムドメインがぴろっと書かれていたら正解。

## DNS設定
DNSも設定しないとです。   
github.treetop.toなCNAMEレコードに、username.github.ioなリポジトリ名を設定。

## 環境構築@Windows
自分がそうなので。オレオレですみません。   
[GitHub Desktop](https://desktop.github.com/)をインストール。
