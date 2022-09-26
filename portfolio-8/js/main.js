'use strict';

{
$(function(){
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    // ハンバーガーメニューのクリックイベント
    $('.hamburger').on('click', function() {
      // #headerにopenクラスが存在する場合
    if ($('#header').hasClass('open')) {
        // openクラスを削除 メニューが非表示になる
        $('#header').removeClass('open');

      // #headerにopenクラスが存在しない場合
    } else {
        // openクラスを追加、メニューが表示される
        $('#header').addClass('open');
    }
    });

    // メニューが表示されている時に画面をクリックした場合
    $('#mask').on('click', function() {
      // openクラスを削除して、メニューを閉じる
    $('#header').removeClass('open');
    });

/*=================================================
トップに戻る
===================================================*/
let pagetop = $('#to-top');
// 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
pagetop.hide();

// スクロールイベント（スクロールされた際に実行）
$(window).scroll(function() {

// スクロール位置が700pxを超えた場合
    if ($(this). scrollTop() > 700) {
 // トップに戻るボタンを表示する
    pagetop.fadeIn();
// スクロール位置が700px未満の場合
    } else {
// トップに戻るボタンを非表示にする
    pagetop.fadeOut();
    }
});

 // クリックイベント（ボタンがクリックされた際に実行）
pagetop.click(function() {
 // 0.5秒かけてページトップへ移動
    $('body,html').animate({scrollTop: 0}, 500);

// イベントが親要素へ伝播しないための記述
    return false;
});
});
}