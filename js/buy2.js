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

    

    let xhr,res,tagList='';
    xhr = new XMLHttpRequest();
    xhr.open('get','data/skincare/skincare.data.json');  // get, post //
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
        res.work.forEach(function(v,k){
            if(v.code == localStorage.code){
                dSkinImg.setAttribute('src',v.photo)
                dTitle.innerHTML  = v.name;
                dTxt.innerHTML  = v.detail;
                dPrice.innerHTML = v.money;
                dImg.setAttribute('src',v.photo_2)
                dInfo_1.innerHTML  = v.buyDetail_1;
                dInfo_2.innerHTML  = v.buyDetail_2;
                dInfo_3.innerHTML  = v.buyDetail_3;
                dInfo_4.innerHTML  = v.buyDetail_4;
            }

        });
    }
}

window.onload = init;