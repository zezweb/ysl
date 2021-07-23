
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
            <li>
                <div class="btn">
                    <a href="buy.html#${k}">상세보기</a>
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
            </li>`;

        
        });
        elUl.innerHTML = tagList;

        
    };

}
window.onload = init;