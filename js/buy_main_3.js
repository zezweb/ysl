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
        ['img/best_3/fact1.png','img/best_3/fact2.png']
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

}
    
window.onload = init;