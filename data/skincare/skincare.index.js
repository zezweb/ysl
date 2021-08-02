function init(){
    const elUl = document.querySelector('.skin_shop');


    let xhr,res,tagList='';

    xhr = new XMLHttpRequest();
    xhr.open('get','data/skincare/skincare.data.json');  // get, post //
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
        //문서에서 불러온 내용을 객체타입으로 변경함(JSON.parse())
        // console.log(res);
        let type = 'all';
        function list(){

            tagList='';

        res.work.forEach(function(v,k){
            if(v.type == type || type == 'all'){

            tagList +=
            `<li data-code="${v.code}">
                <div class="btn">
                    <a href="${v.link}">상세보기</a>
                </div>

                <div class="skin_set">
                    <div class="skin_img">
                        <img src="${v.photo}">
                    </div>

                    <div class="skin_text">
                        <p>
                            ${v.name}
                        </p>
                        <p>
                            ${v.money}
                        </p>
                    </div>
                </div>
            </li>`
            }
        });

        elUl.innerHTML = tagList;

    }
    list();

        const skinLi = document.querySelectorAll('.skin_shop li');
        for(let i=0; i<skinLi.length; i++){
            skinLi[i].addEventListener('click',function(e){
                e.preventDefault();
                localStorage.code = this.dataset.code;
                location.href = "buy2.html";
            });
        }


        const skinTab = document.querySelectorAll('.s_menu span a');
        let stNum = 0;
        for(let i=0; i<skinTab.length; i++){
            skinTab[i].addEventListener('click',function(e){
                e.preventDefault();

                skinTab[stNum].classList.remove('active');
                stNum = i;
                this.classList.add('active');
                type = this.dataset.name;
                list();                
            });
        }
    
        

    }
}
window.onload = init;