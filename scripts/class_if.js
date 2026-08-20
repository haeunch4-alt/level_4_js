// class_if.js
const contentLi = document.querySelectorAll('.contents li');
console.log(contentLi); // 4개의 인덱스로 각각 li 출력

// // Q. 첫번째 li 디자인 (테두리, 배경, 여백)
// contentLi[0].style.borderBottom = '1px solid #000';
// contentLi[0].style.backgroundColor = '#ff0';
// contentLi[0].style.padding = '15px 6px';
contentLi[0].classList.add('design_set1');

contentLi[0].addEventListener('click',()=>{
    contentLi[0].classList.toggle('design_set1')
})

const search_open_wrap = document.querySelector('.search_open_wrap')
const search_btn = document.querySelector('#search_btn')

// 1. 초기-검색버튼 숨기기
// 2. 검색버튼 클릭 시 검색하기 보이기
// 3. 검색버튼 또 클릭 시 검색하기 숨기기

search_open_wrap.classList.add('target_showHide');
search_btn.addEventListener('click', ()=>{
    search_open_wrap.classList.toggle('target_showHide');
})

// 찜하기
const like_btn = document.querySelector('#like_btn')
like_btn.addEventListener('click', ()=>{
    like_btn.classList.toggle('heart_designe')
})

// ---------------------------------------------조건 참/거짓
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean('jdkl'));
console.log(Boolean(1 > 2));

let a = 10;
let b = 20;

// a와 b 변수의 값을 비교해서 조건 결과 테스트
// if(조건식){조건식이 참일 때 실행결과}
//1단 조건 (if 문은 각각 따로 실행된)
if(a != b ){ console.log('a와 b가 다르면 참')};
if(a == b ){ console.log('a와 b가 같으면 참')};

//2단 조건 (if-else 는 한 세트로 둘중 하나만 실행됨)
if(a<b){
    console.log('a가 b보다 작으면 참')
}else{
    console.log('a가 b보다 작지않으면 거짓')
}

// 인쇄버튼 클릭 시 -> 인쇄하시겠습니끼? 질문 -> 확인(예) 누르면 인쇄실행
// 인쇄버튼 클릭 시 -> 인쇄하시겠습니끼? 질문 -> 취소(아니오) 누르면 인쇄실행 안함
const print_btn = document.querySelector('#print_btn');
print_btn.addEventListener('click',()=>{
    let printQ = confirm('인쇄하시겠습니끼?')
    if(1){print()}else(0)
})