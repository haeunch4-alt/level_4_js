// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
// small1 ==big1
// small2 == big2
//1.---------------------------변수
const small1 = document.querySelectorAll('.left_thum');
console.log(small1);
//2.---------------------------함수
//3.---------------------------이벤트

// --------------------------상품옵션선택에 따른 주문 정보 + 가격 8/28
// 목표1) 색상 선택 시 선택한 정보를 data-* 속성에 대입한 값 확인하기
// 선택한 DOM 대상이 select-option 태그라면 사용해야하는 문법 (아래)
// DOM.options[DOM.selectedIndex].text
// DOM.options[DOM.selectedIndex].value
const colorSelect = document.querySelector('select[id=color]');
const sizeSelect = document.querySelector('select[id=size]')
const optResult = document.querySelector('.opt_result'); // 주문 옵션 선택 시 출력 
console.log(colorSelect, optResult,sizeSelect);



// selsct 태그 변수를 이벤트를 제작 사용해야하는 이벤트 종류 : change
// colorSelect.addEventListener('change',()=>{
//     if(colorSelect.selectedIndex > 0){ // 첫번째 (0) 안내문을 제외한 조건문
//         // console.log('change 변경 확인')
//         let changeOpt =colorSelect.options[colorSelect.selectedIndex].text;// 선택 옵션 변수 저장
//         // console.log(changeOpt); // 위 변수 test

//         // data-*속성에 사용자가 선택한 정보 저장하기
//         // dom.dataset.속성명=값; //수정, 삭제
//         // dom.dataset.속성명; //읽기
//         colorSelect.dataset.color = changeOpt;
//         // console.log(colorSelect.dataset.color)// 위 명령 test

//         // 선택 색상옵션이 opt_result의 result자식에 "색상 :" 자리에 삽입하기
//         showHideFunc(optResult, 'flex');
//         optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color}`;
//     }
// })

// // 사이즈 옵션 선택 시 주문옵션에 출력하기
// sizeSelect.addEventListener('change', ()=>{
//     if(sizeSelect.selectedIndex > 0){
//         let sizeOpt =  sizeSelect.options[sizeSelect.selectedIndex].text
//         sizeSelect.dataset.size = sizeOpt;
//         showHideFunc(optResult, 'flex');
//         optResult.children[0].textContent = `사이즈 : ${ sizeSelect.dataset.size}`;
//     }
// })

// optResult.style.display = 'none';
showHideFunc(optResult);
// 주문 옵션 숨기기/보이기 함수
function showHideFunc(target, visible='none'){ 
    return target.style.display = visible;
}

// 옵션 선택 시 호출 함수
function optResultFunc(dom,dataValue){
    if(dom.selectedIndex > 0){
        let changeOpt = dom.options[dom.selectedIndex].text;
        dom.dataset.dataValue = changeOpt;
        showHideFunc(optResult, 'flex');
        return optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color} , 사이즈 : ${sizeSelect.dataset.size}`;
    }
}

// (위) 함수호출 이용한 이벤트 함수
sizeSelect.addEventListener('change', ()=>{ optResultFunc(sizeSelect,'size')} )
sizeSelect.addEventListener('change', ()=>{ optResultFunc(colorSelect,'color')} )