---
title: "GitHub contents"
description: "GitHub PagesからあらゆるGitHub関係の記述をお引越し。"
permalink: /githubpages/github-contents/
classes: wide
header:
  teaser: /assets/images/github-new-repository.png
  og_image: /assets/images/github-new-repository.png
---
{{ page.description }}
{: .notice}

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