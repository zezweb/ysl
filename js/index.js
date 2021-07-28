function init(){
    $('.regular').slick({
        btns:true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 881,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 798,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 744,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 622,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 510,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
            
        ]
    });

    const elB = document.querySelectorAll('.b');

    let elImgSrc = [
        ['img/best_1/pa1.png','img/best_1/pa2.png','img/best_1/pa3.png','img/best_1/pa4.png','img/best_1/pa5.png'],
        ['img/best_2/per1.png'],
        ['img/best_3/fact1.png','img/best_3/fact2.png'],
        ['img/best_4/pen1.png','img/best_4/pen2.png'],
        ['img/best_5/serum1.png']        
    ]
    
    for(let i=0;i<elB.length; i++){
        elB[i].addEventListener('click',function(e){
            const elSpan = elB[i].querySelectorAll('span');
            const elImg = elB[i].querySelector('.b_img img');

            if(e.target.tagName == 'SPAN'){ 
                let colorNum = e.target.dataset.num; //span(data-num)
                elImg.setAttribute('src',elImgSrc[i][colorNum]); //img src change
            }
            
        });
    }

    const btnLeft = document.querySelector('.left_icon');
    const btnRight = document.querySelector('.right_icon');
    const colorP = document.querySelector('.c-slide p');
    let cIdx = 0;
    btnLeft.addEventListener('click',function(){
        colorP.style = 'transform:translateX(0px)';
    });
    btnRight.addEventListener('click',function(){
        colorP.style = 'transform:translateX(-63px)';
    });


        // var mql = window.matchMedia('screen and (max-width:561px)');
        // mql.addListener(function(e){
        //     if(e.matches){
        //         console.log('561미만')
        
        //     }
        //     else{console.log('561이상')}
        // });
}


window.onload = init;