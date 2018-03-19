---
title: "カスタムドメインメール"
description: "無料でカスタムドメインなメールアドレス作ったり。XREAに頼りまくり。"
permalink: /misc/xrea-mail/
---
{{ page.description }}
{: .notice}

## XREA基本設定

[XREA](https://www.xrea.com/)に登録…は、説明しなくても大丈夫かと

### ドメインを追加

1. ダッシュボードから`ドメイン設定`→`ドメイン設定の新規作成`  
[![XREA add new domain](/assets/images/xrea-add-new-domain.png)](/assets/images/xrea-add-new-domain.png)
1. で、ドメインを入力  
[![XREA add new domain](/assets/images/xrea-add-new-domain-setting.png)](/assets/images/xrea-add-new-domain-setting.png)
1. 怒られた…  
[![XREA add new domain error](/assets/images/xrea-add-new-domain-setting-error.png)](/assets/images/xrea-add-new-domain-setting-error.png)
1. 必要な情報は右上のアカウントから`契約情報`→`サーバースペック`→`IP`  
[![XREA server spec](/assets/images/xrea-server-spec-ip.png)](/assets/images/xrea-server-spec-ip.png)
1. Aレコードを追加して`Save Changes`  

| name | Type | TTL | Target |
|---|:----:|---|---|
| 空白（@不要） | A    | 14440（変更不可） | （IP） |  

`ドメイン設定の新規作成`をやり直すと、登録できた  
[![XREA add new domain ok](/assets/images/xrea-add-new-domain-setting-ok.png)](/assets/images/xrea-add-new-domain-setting-ok.png)

## メール設定

1. ダッシュボードから`メール`→`メールの新規作成`  
[![XREA add new mail](/assets/images/xrea-add-new-mail.png)](/assets/images/xrea-add-new-mail.png)
1. ドメインを選択しーの、ユーザ名入れーの、その他いろいろ  
[![XREA add new mail setting](/assets/images/xrea-add-new-mail-setting.png)](/assets/images/xrea-add-new-mail-setting.png)
1. 作成完了  
[![XREA add new mail setting ok](/assets/images/xrea-add-new-mail-setting-ok.png)](/assets/images/xrea-add-new-mail-setting-ok.png)

### webメール送受信

+ [SquirrelMail](http://squirrelmail.org/)  
[![SquirrelMail](/assets/images/squirrelmail-login.png)](/assets/images/squirrelmail-login.png)
+ [Roundcube](https://roundcube.net/)  
[![Roundcube](/assets/images/roundcube-login.png)](/assets/images/roundcube-login.png)

どちらも普通に使える。

### Roundcubeアプリを使う

一応、Androidにはアプリがあったけど、設定画面がweb剥き出しってところで削除決定。
<div id="appreach-box" style="text-align:left;">
    <img id="appreach-image" src="//lh4.ggpht.com/1Cg3rZY5fQkO9250VPz8_1lX8iGZe6JU_6a104skpw99ojjvWBYWx6Sa4oY96Fqtww=w170" alt="Roundcube Webmail" style="float:left; margin:10px; width:25%; max-width:120px; border-radius:10%;">
    <div class="appreach-info" style="margin: 10px;">
        <div id="appreach-appname">Roundcube Webmail</div>
        <div id="appreach-developer" style="font-size:80%; display:inline-block; _display:inline;">
            開発元:<a id="appreach-developerurl" href="https://play.google.com/store/apps/developer?id=SmallTownBoys" target="_blank" rel="nofollow">SmallTownBoys</a>
        </div>
        <div id="appreach-price" style="font-size:80%; display:inline-block; _display:inline;">無料</div>
        <div class="appreach-powered" style="font-size:80%; display:inline-block; _display:inline;">
            posted with <a href="http://mama-hack.com/app-reach/" title="アプリーチ" target="_blank" rel="nofollow">アプリーチ</a>
        </div>
        <div class="appreach-links" style="float: left;">
            <div id="appreach-itunes-link" style="display: inline-block; _display: inline;"></div>
            <div id="appreach-gplay-link" style="display:inline-block; _display:inline;">
                <a id="appreach-gplay" href="https://play.google.com/store/apps/details?id=smalltownboys.rc" target="_blank" rel="nofollow">
                    <img src="https://nabettu.github.io/appreach/img/gplay_ja.png" style="height:40px;width:134.5px;">
                </a>
            </div>
        </div>
    </div>
    <div class="appreach-footer" style="margin-bottom:10px; clear: left;"></div>
</div>

[![Roundcube Android setting](/assets/images/roundcube-android-setting.png)](/assets/images/roundcube-android-setting.png)

### myMailを使う

こっちのほうが良さげ。他のもまとめられるし。
<div id="appreach-box" style="text-align:left;">
    <img id="appreach-image" src="//lh3.googleusercontent.com/VhY0dNLi1KKsDYHIXxvo3AETy72Njiu7TPvitdtIXLF7OiwhEDYTStviRyL3Xd2Kf2E=w170" alt="myMail メール : Gmail、ヤフー、ドコモ Eメール" style="float:left; margin:10px; width:25%; max-width:120px; border-radius:10%;">
    <div class="appreach-info" style="margin: 10px;">
        <div id="appreach-appname">myMail メール : Gmail、ヤフー、ドコモ Eメール</div>
        <div id="appreach-developer" style="font-size:80%; display:inline-block; _display:inline;">
            開発元:<a id="appreach-developerurl" href="https://itunes.apple.com/jp/developer/my-com/id652136894?uo=4" target="_blank" rel="nofollow">MY.COM</a>
        </div>
        <div id="appreach-price" style="font-size:80%; display:inline-block; _display:inline;">無料</div>
        <div class="appreach-powered" style="font-size:80%; display:inline-block; _display:inline;">
            posted with <a href="http://mama-hack.com/app-reach/" title="アプリーチ" target="_blank" rel="nofollow">アプリーチ</a>
        </div>
        <div class="appreach-links" style="float: left;">
            <div id="appreach-itunes-link" style="display: inline-block; _display: inline;">
                <a id="appreach-itunes" href="https://itunes.apple.com/jp/app/mymail-%E3%83%A1%E3%83%BC%E3%83%AB/id722120997?mt=8&amp;uo=4&amp;at=" target="_blank" rel="nofollow">
                    <img src="https://nabettu.github.io/appreach/img/itune_ja.svg" style="height:40px;width:135px;">
                </a>
            </div>
            <div id="appreach-gplay-link" style="display:inline-block; _display:inline;">
                <a id="appreach-gplay" href="https://play.google.com/store/apps/details?id=com.my.mail" target="_blank" rel="nofollow">
                    <img src="https://nabettu.github.io/appreach/img/gplay_ja.png" style="height:40px;width:134.5px;">
                </a>
            </div>
        </div>
    </div>
    <div class="appreach-footer" style="margin-bottom:10px; clear: left;"></div>
</div>

