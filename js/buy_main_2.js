function init(){

    const buySet = document.querySelector('.buyset');
    var buyNum = document.querySelector('.buy_box_1 > p:nth-child(2)');
    var plus = document.querySelector('.buy_box_1 > p:nth-child(3)');
    var minus = document.querySelector('.buy_box_1 > p:nth-child(1)');
    var bleen = true;
    var i = 0;
        

    plus.addEventListener('click',function(){
            if(bleen){
                buyNum.textContent = i++
            }
    });

    minus.addEventListener('click',function(){
            if(bleen, i>0){
                buyNum.textContent = i--
            }
    });

    const elB = document.querySelectorAll('.buy');

    let elImgSrc = [
        ['img/best_1/pa1.png','img/best_1/pa2.png','img/best_1/pa3.png','img/best_1/pa4.png','img/best_1/pa5.png'
        ,'img/best_1/pa6.png','img/best_1/pa7.png','img/best_1/pa8.png','img/best_1/pa9.png','img/best_1/pa10.png']
    ]
    
    for(let i=0;i<elB.length; i++){
        elB[i].addEventListener('click',function(e){
            const elSpan = elB[i].querySelectorAll('span');
            const elImg = elB[i].querySelector('.buy span img');

            if(e.target.tagName == 'SPAN'){ 
                let colorNum = e.target.dataset.num; //span(data-num)
                elImg.setAttribute('src',elImgSrc[i][colorNum]); //img src change
            }
            
        });
    }

    const colorP = document.querySelector('.c-slide p');
    const btnLeft = document.querySelector('.left_icon');
    const btnRight = document.querySelector('.right_icon');
    let slide = document.querySelectorAll('.c-slide p span');
    let cIdx = 0;

    btnLeft.addEventListener('click',function(){
        if( cIdx > 0 ){
        cIdx--;
        colorP.style = `transform:translateX(${-34 * cIdx}px)`;
        }
    });
    btnRight.addEventListener('click',function(){
        if( cIdx < `${slide.length-4}` ){
        cIdx++;
        colorP.style = `transform:translateX(${-34 * cIdx}px)`;
        }
    });

    

}
    
window.onload = init;