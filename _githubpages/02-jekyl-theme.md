---
last_modified_at: 2017-10-23
title: "Jekyll Theme"
permalink: /githubpages/jekyll-theme/
---
{% include toc icon="gears" title="Jekyll" %} 未だに勉強中。とりあえずリンクだけ張っていく。

## Jekyll参照リンク
- [Jekyll](http://jekyllrb.com/)   
- [Jekyll（日本語訳）](http://jekyllrb-ja.github.io/)   
- [Import your old & busted site or blog for use with Jekyll](http://import.jekyllrb.com/)
- [Run Jekyll on Window](http://jekyll-windows.juthilo.com/)

## Jekyll用テーマ
あちこちにいろいろ。   
- [jekyllthemes.io](https://jekyllthemes.io/)  

### お手軽に導入できるテーマ
ついでに、楽に導入できたテーマも紹介しておく。
- [Agus Makmun](https://agusmakmun.github.io/)

ただし今回の用途ではちょーっとレイアウトが違うなーと見送り。

当方は[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)を使うことに。   

### Minimal Mistakesを導入
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)からインストール。

#### 設定
[minimal-mistakes/docs](https://github.com/mmistakes/minimal-mistakes/tree/master/docs)

公式サイトを見ながら実際の構成を見て設定を確認しつつやってみたら、ブログっぽいものが作れるように。

## おまけ? Soloを導入する場合
- [solo](https://chibicode.github.io/solo/)  
[Fork A Repo](https://help.github.com/articles/fork-a-repo/)を見つつ、まずはFork（ってよく判ってない）。  
その後コマンドで、
```sh
$ git clone https://github.com/<em>user-name</em>/solo
$ jekyll new <em>your-repository</em>
```
