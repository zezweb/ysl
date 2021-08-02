function init(){
    const elUl = document.querySelector('.perfume_shop');


    let xhr,res,tagList='';

    xhr = new XMLHttpRequest();
    xhr.open('get','data/perfume/perfume.data.json');  // get, post //
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

                <div class="perfume_set">
                    <div class="perfume_img">
                        <img src="${v.photo}">
                    </div>

                    <div class="perfume_text">
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
            }        
        });

        elUl.innerHTML = tagList;

        }
        list();

        const perLi = document.querySelectorAll('.perfume_shop li');
        for(let i=0; i<perLi.length; i++){
            perLi[i].addEventListener('click',function(e){
                e.preventDefault();
                localStorage.code = this.dataset.code;
                location.href = "buy3.html";
            })
        }

        const perTab = document.querySelectorAll('.p_menu span a');
        let ptNum = 0;
        for(let i=0; i<perTab.length; i++){
            perTab[i].addEventListener('click',function(e){
                e.preventDefault();
            
            perTab[ptNum].classList.remove('active');
            ptNum = i;
            this.classList.add('active');
            type = this.dataset.name;
            list();
        });
        }

    }
}
window.onload = init;