
function init(){
    const elUl = document.querySelector('.acc');
    const buySet = document.querySelector('.buyset');

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
                    <a href="buy.html#${v.link}">상세보기</a>
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


        function buyFage(v,k){
            buyList +=  `<div class="buy">
            <span><img src="${v.photo}"></span>

            <div class="buy_2">
                <div class="buy_text">
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

                <div class="buy_box">
                    <div class="buy_box_1">
                        <p>
                            <a href="#">-</a>
                        </p>
                        <p>
                            <a href="#">1</a>
                        </p>
                        <p>
                            <a href="#">+</a>
                        </p>
                    </div>
                    <div class="buy_box_2">
                        <p>
                            <a href="#">구매하기</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>


            <div class="buy_text_last">
            <p>
                ${v.buyDetail}
            </p>
            <p>
                상품고시정보<br>
                * 용량 또는 중량 : N/A<br>
                * 제품 주요 사항 : 모든 피부용<br>
                * 책임판매업자 : 엘오케이(유)<br>
                * 제조국 : 한국<br>
                * 기능성화장품 심사필여부 : 해당 사항 없음<br>
                * 사용기한 또는 개봉후 사용기간 : 배송되는 제품은 사용기한이 12개월 이상 남아있는 제품부터 순차적으로 배송됩니다.<br>
                * 사용시 주의 사항 :<br>
                1. 화장품 사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은 반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우 전문의 등과 상담할 것<br>
                2. 상처가 있는 부위 등에는 사용을 자제할 것<br>
                3. 보관 및 취급 시의 주의사항<br>
                가) 어린이의 손이 닿지 않는 곳에 보관할 것<br>
                나) 직사광선을 피해서 보관할 것
            </p>
            <p>
                상세한 주의사항 내용은 제품에 부착된 라벨내용을 참조해 주십시오.<br>
                * 품질 보증 기준 : 본 제품에 이상이 있을 경우 공정거래위원회 고시 품목별 소비자 분쟁해결기준에 의해 보상해드립니다.<br>
                * 소비자상담 전화번호 : 080-835-0089
            </p>
            </div>`
        }

        buySet.innerHTML = buyList;

    }
}
    
window.onload = init;