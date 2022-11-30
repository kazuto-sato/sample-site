$(function(){
    //pc版のjsここから
    $('.hover-list').on('click',function(){
        console.log('fagfjs');//コンソールはされる
        $('.hover-list-content').sildeToggle();
    });
    
    //モバイル版のjsここから
    $('button').on('click',function(){
        $('.side-menu').toggleClass('active');
    });

    $('#js-main').on('click',function(){
        if ($('.side-menu').hasClass('active')){
            $('.side-menu').removeClass('active');
        }
    });
});