$(function(){
    $('.pagetop').click(function () {//ページトップにゆっくり戻る
        $('html,body').animate({ scrollTop: 0 }, 1100);
        return false;
    });
})

$(function(){
    $('.inner').hide();
    $('.button').click(function(){
        $('.inner').slideToggle('slow');
        $(this).toggleClass('active');
    });
})