---
title: "Jekyll Theme"
description: "未だに勉強中。とりあえずリンクだけ張っていく。"
permalink: /githubpages/jekyll-theme/
classes: wide
# categories:
#   - GitHub Pages
# tags:
#   - Jekyll
#   - Theme Customize
---
{{ page.description }}
{: .notice}

## Jekyll用テーマ
あちこちにいろいろ。   
+ [Jekyll Themes & Templates](https://jekyllthemes.io/)
+ [Jelyll Themes](http://jekyllthemes.org/)
+ [Jekyll Templates](https://learn.cloudcannon.com/jekyll-templates/)
+ [Dr. Jekyll’s Themes](http://drjekyllthemes.github.io/)

当方は[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)を使うことに。   

## Minimal Mistakesを導入
### インストール
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)からインストール。

```sh
$ git clone git@github.com:/minimal-mistakes.git
```

[Quick Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)を参考に、要らないファイルを削除。  

Gemfile書き換え。
<script src="https://gist.github.com/laureltreetop/f54309da6c8c814512f5cc8fa0561021.js"></script>  
で、コマンド実行。

```shell
$ bundle update
$ bundle exec jekyll serve
```
エラーが出たので、潰していく。

### エラー潰し
エラーメッセージを見ると、gem installしたやつがバージョンに合わないらしい。  
`gem list hoge`で確認して、合わないバージョンのは`gem uninstall -v x.x.x hoge`で削除。

今度は`No GitHub API authentication...`というエラーが出てきた。  
["No GitHub API authentication" error #399](https://github.com/github/pages-gem/issues/399)を参考に、
_config.ymlに追記。ついでにもう一個手直し。  
<script src="https://gist.github.com/laureltreetop/0da5ff11d755d035a5a9120fcc1b2a6c.js"></script>

まだ出る…今度は`invalid byte sequence in Windows-31J...`なエラーが出てきたので、
[[ruby]jekyll server で 『invalid byte sequence in Windows-31J～』とエラーになった時の対処方法](http://d.hatena.ne.jp/osyo-manga/20140216/1392552409)を参考にし、環境変数`RUBYOPT`に`-Ku`を設定。


### 設定
[minimal-mistakes/docs](https://github.com/mmistakes/minimal-mistakes/tree/master/docs)

公式サイトを見ながら_config.ymlの構成を見て設定を確認しつつやってみたら、ブログっぽいものが作れるように。  

## おまけ? soloを導入する場合
[solo](https://chibicode.github.io/solo/)もやってみたので、メモ。  
[Fork A Repo](https://help.github.com/articles/fork-a-repo/)を見つつ、まずは[Fork](https://github.com/chibicode/solo/fork) （ってよく判ってない）。  
その後コマンドで引っ張ってくる。  
```shell
$ git clone https://github.com/user-name/solo
```
で、真っさらから作ってみる。
```shell
$ git init
$ jekyll new your_repository
```
"new"ってくらいなので、既にコンテンツがある場合は怒られる。  
`jekyll new -f your_repository`で。  

## おまけ? その2 Agus Makmunを導入する場合
[Agus Makmun](https://agusmakmun.github.io/)も基本的にはSoloと同じようにいけた。  
ただ、Jekyllさんに小言を言われないように、`gems:`を`plugins:`に書き換える。

## おまけ? その3 Baseを導入する場合
[Base | CloudCannon Academy](https://learn.cloudcannon.com/templates/base/)の「**導入は**」簡単だった。  
ソースが見やすくて一見カスタマイズしやすそうだけど、癖がすごい。  
カスタマイズは[Customize Base](/githubpages/theme-base/)に書いてある通り。
