---
last_modified_at: 2017-10-28
title: "Jekyll Theme"
permalink: /githubpages/jekyll-theme/
---
{% include toc icon="gears" title="Jekyll" %} 未だに勉強中。とりあえずリンクだけ張っていく。

## Jekyll用テーマ
あちこちにいろいろ。   
[jekyllthemes.io](https://jekyllthemes.io/)  

当方は[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)を使うことに。   

## Minimal Mistakesを導入
### インストール
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)からインストール。

```sh
$ git clone git@github.com:/minimal-mistakes.git
```

[Quick Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)を参考に、要らないファイルを削除。  

Gemfile書き換え。

```ruby
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins

gem "tzinfo-data"
gem 'wdm', '~> 0.1.1' if Gem.win_platform?
```
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
```yaml
repository: username/repository-name
github: [metadata]
```

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
