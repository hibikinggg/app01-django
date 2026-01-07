$(function () {
    $("#bg").hide();

    // 送信 → 表示
    $("#click").on("click", function () {
        $("#bg").fadeIn(300);
    });

    // OKボタン → 閉じる
    $("#OKOK").on("click", function () {
        $("#bg").fadeOut(300);
    });

    // 黒背景クリック → 閉じる
    $("#bg").on("click", function () {
        $("#bg").fadeOut(300);
    });

    // アラートボックス内クリックでは閉じない
    $("#alertbox").on("click", function (e) {
        e.stopPropagation();
    });
});

$(function(){
    var $header = $('.nav-header');
    var headerOffset = $header.offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > headerOffset) {
            $header.addClass('fixed-nav');
        } else {
            $header.removeClass('fixed-nav');
        }
    });
});
