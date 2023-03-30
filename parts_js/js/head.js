'use strict';
{
    const title = "JavascriptでHTMLをパーツ管理";

    document.head.insertAdjacentHTML('afterbegin', `
        <title>${title}</title>

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="./css/style.css">
    
        <meta property="og:title" content="ページタイトル">
        <meta property="og:type" content="website">
        <meta property="og:image" content="http://example.com/image.png">
        <meta property="og:url" content="http://example.com/page.html">
        <meta property="og:description" content="ページの説明文">
        <meta property="og:site_name" content="サイト名">
        <meta property="og:locale" content="ja_JP">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="ページタイトル">
        <meta name="twitter:description" content="ページの説明文">
        <meta name="twitter:image" content="http://example.com/image.png">
        <meta name="twitter:site" content="@example">
        <meta name="twitter:creator" content="@username">
        <meta name="twitter:player" content="https://example.com/player.html">
        <meta name="twitter:player:width" content="640">
        <meta name="twitter:player:height" content="360">
    `);
}

/*
OGP設定
og:title：ウェブページのタイトルを指定
og:type：ウェブページの種類を指定 例)website、article、productなど
og:image：ウェブページのサムネイル画像を指定
og:url：ウェブページのURLを指定
og:description：ウェブページの説明を指定
og:site_name：ウェブサイトの名称を指定
og:locale：ウェブページの言語を指定
*/

/*
Twitterカード設定
twitter:card：Twitter Cardの種類を指定　例)summary、summary_large_image、app、playerなど
twitter:title：Twitter Cardのタイトルを指定
twitter:description：Twitter Cardの説明文を指定
twitter:image：Twitter Cardの画像を指定
twitter:site：Twitterアカウントの@ユーザー名を指定
twitter:creator：Twitter Cardの作成者の@ユーザー名を指定
twitter:player：Twitter Cardがビデオプレーヤーである場合、プレーヤーのURLを指定
twitter:player:width：Twitter Cardのビデオプレーヤーの幅を指定
twitter:player:height：Twitter Cardのビデオプレーヤーの高さを指定
*/

/*
その他OGP拡張タグ
article:published_time：記事が公開された日時を指定
article:modified_time：記事が更新された日時を指定
article:expiration_time：記事の有効期限を指定
article:author：記事の著者を指定
article:section：記事のカテゴリを指定
article:tag：記事のタグを指定
book:author：書籍の著者を指定
book:isbn：書籍のISBN番号を指定
music:album：音楽アルバムの名称を指定
music:album:disc：音楽アルバムのディスク番号を指定
music:album:track：音楽アルバムのトラック番号を指定
music:musician：音楽家の名前を指定
music:song：音楽曲の名称を指定
music:release_date：音楽アルバムのリリース日を指定
video:actor：ビデオの出演者を指定
video:director：ビデオの監督を指定
video:writer：ビデオの脚本家を指定
video:duration：ビデオの再生時間を指定
video:release_date：ビデオのリリース日を指定
video:tag：ビデオのタグを指定

使用例
<meta property="article:published_time" content="2023-03-30T12:34:56Z">
<meta property="article:modified_time" content="2023-03-30T15:43:21Z">
<meta property="article:author" content="John Smith">
<meta property="book:author" content="J.K. Rowling">
<meta property="book:isbn" content="978-4-123456-78-9">
<meta property="music:album" content="Album Title">
<meta property="music:release_date" content="2023-04-01">
<meta property="video:actor" content="Actor Name">
<meta property="video:duration" content="PT1M30S">
*/