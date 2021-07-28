function init(){

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

}


window.onload = init;