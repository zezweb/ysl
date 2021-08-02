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
        ['img/best_1/pa1.png','img/best_1/pa2.png','img/best_1/pa3.png','img/best_1/pa4.png','img/best_1/pa5.png',
        'img/best_1/pa6.png','img/best_1/pa7.png','img/best_1/pa8.png','img/best_1/pa9.png','img/best_1/pa10.png'],
        ['img/best_2/per1.png'],
        ['img/best_3/fact1.png','img/best_3/fact2.png'],
        ['img/best_4/pen1.png','img/best_4/pen2.png'],
        ['img/best_5/serum1.png']        
    ]
        
    
    function colorIdx(i){
        this.num = 0,
        this.colorP = elB[i].querySelector('.c-slide p'),
        this.btnLeft = elB[i].querySelector('.left_icon'),
        this.btnRight = elB[i].querySelector('.right_icon'),
        this.slide = elB[i].querySelectorAll('.c-slide p span')
    }
    colorIdx.prototype.count = function(n){
        return this.num = this.num + n;
    }

    for(let i=0;i<elB.length; i++){
        
        elB[i].addEventListener('click',function(e){
            const elSpan = elB[i].querySelectorAll('span');
            const elImg = elB[i].querySelector('.b_img img');

            if(e.target.tagName == 'SPAN'){ 
                let colorNum = e.target.dataset.num; //span(data-num)
                elImg.setAttribute('src',elImgSrc[i][colorNum]); //img src change
            }
        });

        // const container = elB[i].querySelector('.b_1_color');
        let cSlide = new colorIdx(i);

        try{
            cSlide.btnLeft.addEventListener('click',function(){
                let count = cSlide.count(0);
                if( count > 0 ){
                    count = cSlide.count(-1);
                    cSlide.colorP.style = `transform:translateX(${-32 * count}px)`;
                }
            });

            cSlide.btnRight.addEventListener('click',function(){
                let count = cSlide.count(0);
                if( count < cSlide.slide.length-3){
                    count = cSlide.count(1);
                    cSlide.colorP.style = `transform:translateX(${-32 * count}px)`;
                }
                
            });
        }catch{}        
    }

    


    

        // var mql = window.matchMedia('screen and (max-width:561px)');
        // mql.addListener(function(e){
        //     if(e.matches){
        //         console.log('561미만')
        
        //     }
        //     else{console.log('561이상')}
        // });

        
}

window.onload = init;