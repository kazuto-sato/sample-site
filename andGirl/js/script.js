$(function(){
    const ham =$(`#js-hamburger`);
    ham.on('click',function(){
        $('#side-menu').slideToggle();
    });
});