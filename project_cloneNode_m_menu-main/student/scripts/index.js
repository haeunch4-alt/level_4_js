// student index.js
// 1. 데스크탑 내비 복제 -> 모바일 내비 위치에 붙여넣기
const deskNav = document.querySelector('.full_nav .menu');
const mobileNav = document.querySelector('#m_nav');

console.log(deskNav,mobileNav);

const navClone = deskNav.cloneNode(true);
mobileNav.appendChild(navClone);

// 2. 모바일 메뉴(햄버거) 클릭 시 모바일 배경+모바일메뉴 출력하기
const ham = document.querySelector('#m_nav_btn');
const mobileBg = document.querySelector('.m_nav_bg');

// 안보인다 0 컴퓨터가 이해하는 언어로 초기값 설정
let menu_visible = 0; // 안보이는 (상태변수) 초기값 설정

ham.addEventListener('click', ()=>{
    // 기존 css에서 어떤 속성으로 숨겨져 있었는지에 따라 반대되는 값 작성
    // mobileBg.style.opacity = '1';
    // mobileBg.style.right = '0%';
    // 클릭 이벤트의 동작이 1개다 == (위 명령어로 끝)
    // 클릭 이벤트의 동작이 2개이상이다 == (조건에 따른 함수 실행으로 코드 업글)
    // 보인다?안보인다?라는 뜻은 조건으로 불가능 -> 컴퓨터가 이해하는 언어 0,1
    menu_visible = !menu_visible; // 클릭이벤트가 실행될때마다 상태 변수 값 반전
    console.log(menu_visible); // 반전되는 값 확인\
    // 메뉴의 보이는 상태 (menu_visible)가 0(안보이는)값이면 어떨게 헐 것인가?
    // 안보인다(참) -> right:0; opacity:1;
    // 보인다(거짓) => right:-100%; opacity:0;

    menu_visible == 0 ? (()=>{
        // 안보인다(참) -> right:0; opacity:1;
        mobileBg.style.opacity = '1';
        mobileBg.style.right = '0%';
    })() :  (()=>{
        // 보인다(거짓) => right:-100%; opacity:0;
        mobileBg.style.opacity = '0';
        mobileBg.style.right = '-100%';
    })()
})
