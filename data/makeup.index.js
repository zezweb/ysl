
function init(){
    const elUl = document.querySelector('.acc');



    let xhr,res,tagList='';

    xhr = new XMLHttpRequest();
    xhr.open('get','data/makeup.data.json');  // get, post //
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
        //문서에서 불러온 내용을 객체타입으로 변경함(JSON.parse())
        // console.log(res);
        res.work.forEach(function(v,k){
            tagList += `
            <li data-code="${v.code}">
                <div class="btn">
                    <a href="${v.link}">상세보기</a>
                </div>
        
                <div class="acc_bg">
                    <div class="acc_img">
                        <img src="${v.photo}">
                    </div>
        
                    <div class="acc_text">
                        <p>
                            ${v.name}
                        </p>
                        <p>
                            ${v.detail}
                        </p>
                        <p>
                            ${v.money}
                        </p>
                    </div>
                </div>
            </li>`        
        });

        elUl.innerHTML = tagList;

        const accLi = document.querySelectorAll('.acc li');
        for(let i=0; i<accLi.length; i++){
            accLi[i].addEventListener('click',function(e){
                e.preventDefault();
                localStorage.code = this.dataset.code;
                location.href = "buy.html";
            })
        }

    }
}
    
window.onload = init;

// 썸네일 클릭 -> 브라우저 제품넘버값을 남기고
// 상세페이지에서 모든 제품들중에 클릭한 제품을 찾아내서 화면에 출력
// -> 클릭한 제품 찾기( 브라우저에 남겨져있는 값을 이용하여 조건문으로 찾음)