$(function(){

    $('header').load('load/inc.html header > div', nav);

    $('footer').load('load/inc.html footer > div');

    function nav(){
        $('header nav a').on('mouseenter',function(){
            $(this).css('color','black');
        });

        const elBurger = document.querySelector('.menu-trigger');
        const elNav = document.querySelector('.h_menu nav');
        elBurger.addEventListener('click',function(){
            // console.log('a')
            this.classList.toggle('active-7');
            elNav.classList.toggle('active');
        });



    }
});