
function init(){
    const elUl = document.querySelector('.acc');



    let xhr,res,tagList='';

    xhr = new XMLHttpRequest();
    xhr.open('get','data/makeup/makeup.data.json');  // get, post //
    xhr.send(null);
    xhr.onload = function(){
        res = JSON.parse(xhr.responseText);
        //문서에서 불러온 내용을 객체타입으로 변경함(JSON.parse())
        // console.log(res);
        let type = 'all';
        function list(){
            
            tagList = '';

            res.work.forEach(function(v,k){
                if(v.type == type || type == 'all'){
                    
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
                }
                
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
        list();
        
       



         // 1. 내가 클릭한 탭의 type = this.dataset.name값을 얻어옴 (type = 'eye')
        // 2. 탭클릭하면 list(); 실행
        const makeTab = document.querySelectorAll('.m_menu span a');
        let mtNum = 0;        
        for(let i=0; i<makeTab.length; i++){
            makeTab[i].addEventListener('click',function(e){
                e.preventDefault();

                makeTab[mtNum].classList.remove('active');
                mtNum = i;
                this.classList.add('active');
                type = this.dataset.name;
                list();                
            });
        }
        // makeTab.classList.add('active');


    }
}
    
window.onload = init;

// 썸네일 클릭 -> 브라우저 제품넘버값을 남기고
// 상세페이지에서 모든 제품들중에 클릭한 제품을 찾아내서 화면에 출력
// -> 클릭한 제품 찾기( 브라우저에 남겨져있는 값을 이용하여 조건문으로 찾음)