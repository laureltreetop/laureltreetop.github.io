---
title: "USBドライブを使い倒す"
description: "出先でも好きな環境で作業したいと思い、いろいろ揃えてみた。例によってWindowsでオレオレ的に。"
permalink: /inventory/usb-drive/
classes: wide
---
{{ page.description }}
{: .notice}

## 使う前に

ややこしくならないように、ドライブ文字（ドライブレター）固定。  

Windows7の場合
1. `コンピューター`→`コンピューターの管理`
1. `記憶域`→`ディスクの管理`
1. USBドライブを右クリック→`ドライブ文字とパスの変更`
1. 使いやすい文字を割り当てる

## Portableアプリ

### PortableApps系

[PortableApps](https://portableapps.com/)と、それで管理できるアプリ。  
以下、現在使ってるやつ。  
面倒なので"Portable"は省略。

+ Internet
  + [Google Chrome](https://portableapps.com/apps/internet/google_chrome_portable)（[元ネタ](https://www.google.com/chrome/)）
  + [Mozilla Firefox](https://portableapps.com/apps/internet/firefox_portable)（[元ネタ](https://www.mozilla.org/ja/firefox/)）
+ Office
  + [LibreOffice](https://portableapps.com/apps/office/libreoffice_portable)（[元ネタ](https://ja.libreoffice.org/)）
+ Security 
  + [Kaspersky TDSSKiller](https://portableapps.com/apps/security/kaspersky-tdsskiller-portable)
  （[元ネタ](https://support.kaspersky.co.jp/viruses/disinfection/5350)）
  + [KeePass Pro Password Safe](https://portableapps.com/apps/utilities/keepass-pro-portable)（[元ネタ](https://keepass.info/)）
  : 一緒に[KeeAnywhere](https://github.com/Kyrodan/KeeAnywhere)というプラグインを入れておけば便利。
+ Utilities
  + [7-Zip](https://portableapps.com/apps/utilities/7-zip_portable)（[元ネタ](https://sevenzip.osdn.jp/)）
  + [NexusFont](https://portableapps.com/node/26433)（[元ネタ](http://www.xiles.net/)）
+ Graphics & Pictures
  + [GIMP](https://portableapps.com/apps/graphics_pictures/gimp_portable)（[元ネタ](https://www.gimp.org/)）
  + [IrfanView](https://portableapps.com/apps/graphics_pictures/irfanview_portable)（[元ネタ](http://www.irfanview.com/)）
+ Development
  + [Brackets](https://github.com/sagiegurari/brackets-portable/releases/tag/v1.11.0.1)（[元ネタ](http://brackets.io/)）
  + [Git](https://github.com/sheabunge/GitPortable)（[元ネタ](https://gitforwindows.org/)）
 
### その他

[Appetizer](http://appetizer.cozic.net/)などのランチャーにまとめるといいかも。  
…だったけど、使いそうなアイテムはほぼPortableAppsでイケる状態に。

+ [DropboxPortableAHK](http://nionsoftware.com/dbpahk/)
: KeePassのファイルを引っ張るだけなら上記のKeyAnywhereだけでも問題ないので、他に用途があれば使うかも、程度。
+ [Git for Windows](https://github.com/git-for-windows/git/releases/tag/v2.17.0.windows.1)（[元ネタ](https://git-scm.com/)）
: Git Bashを使いたい場合。

## フォントを持ち歩く

これが本題だったり…  
{: .notice}

### 一時的にフォントを使えるように

1. 使いたいフォントをUSBドライブに放り込む
1. [NexusFont](http://www.xiles.net/)起動
1. `ライブラリ`を右クリック→`グループに追加`
1. `グループ`を右クリック→`フォルダを追加`→放り込みたいフォントフォルダを指定

…としておくと、[NexusFont](http://www.xiles.net/)を起動してグループを開いている間は、フォントが一時的に使えるように。  

ジャンルで分けたいときは

1. `ライブラリ`右クリック→`セットに追加`
1. グループを選んでおく
1. フォントを選んで、セットにドロップ

…で、選んでいるフォントが一時的に使える。  

### GIMPでフォントを使う

ただ困ったことに、上記の方法は[GIMP](https://portableapps.com/apps/graphics_pictures/gimp_portable)では使えない。  
GIMPからフォントフォルダを認識するように設定する。

1. `編集`→`設定を開く`
1. `フォルダー`→`フォント`で、フォントが入っているフォルダも追加

これでGIMPでも使えるようになるが、起動は遅くなりますねぇ。