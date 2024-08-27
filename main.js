$(document).ready(function(){

    $('.fas-bars').click(function(){
        $(this).toggleclass('fas-times');
        $(this).toggleclass('nav-toggle');
    });
    $(window).on('load scroll',function(){

        $('.fas-bars').removeClass('fas-times');
        $('.nav').removeClass('nav-toggle');

        if($(window).scrollTop() > 10){
            $('header').addClass('header-active');
        }else{
            $('header').addClass('header-active');
        }
    });
    $('.facility').magnificpopup({
        delegate:'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });

});