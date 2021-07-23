$(function(){

    $('header').load('load/inc.html header > div', nav);

    $('footer').load('load/inc.html footer > div');

    function nav(){
        $('header nav a').on('mouseenter',function(){
            $(this).css('color','black');
        });
    }
});