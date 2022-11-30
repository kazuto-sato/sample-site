$(function(){
    $('button').on('click',function(){
        $('.side-menu').toggleClass('active');
    });
    $('.hover-list').on('click',function(){
        $('.hover-list-content').slidToggle();
    });


    /*
   if ('side-menu'.hasClass('active')){
        $('js-main').on('click',function(){
            console.log('waaaaaaa');
           // $('side-menu').removeClass('active');

        });
    }
    */
    

});