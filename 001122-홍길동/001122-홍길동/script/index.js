// // 웹디자인 개발 기능사
// // 자바스크립트 ver
// const popup = document.querySelector('#popup');
// popup.style.display = 'none';
// const sub = document.querySelectorAll('nav > ul > li > ul');
// const nav = document.querySelectorAll('nav > ul > li')
// const subLi = document.querySelectorAll('nav > ul > li > ul li')


// for(let s of sub){ // 서브 모두 숨기기 (초기값)
//     s.style.height = '0'; 
//     s.style.overflow = 'hidden'
//     s.style.transition = 'height 0.4s'
// }
// for(let sl of subLi){
//     sl.addEventListener('mouseover',()=>{sl.style.backgroundColor ='yellow'})
//     sl.addEventListener('mouseoout',()=>{sl.style.background ='none'})

// }
// for(let n of nav){ //메인메뉴
//     n.addEventListener('mouseover',()=>{
//         n.style.backgroundColor ='yellow'
//         console.log(n.children[1]); //서브 ul 출력확인
//         n.children[1].style.height='200px'
//     })
//     n.addEventListener('mouseout',()=>{
//         n.style.backgroundColor ='none'
//         n.children[1].style.height='0'
//     })
// }

// //공지사항 첫 글 클릭 시 팝업 출력, 팝업 ㄷ닫기 클릭 시 팝업 숨기기
// const fir = document.querySelector('.contents .notice li')
// const clo = document.querySelector('#popup .close')
// fir.addEventListener('click', ()=>{
//     popup.style.display = 'block';
//     popup.style.zIndex = '999';
// })
// clo.addEventListener('click', ()=>{
//     popup.style.display = 'none';
// })

// //공지사항, 갤러리 탭 제목 클릭 시 나오는 탭 내용
// const tabTitle = document.querySelectorAll('.notice_gallery .title a');
// const tabContent = document.querySelectorAll('.notice_gallery .contents > * ' );
// tabTitle.forEach((t,i)=>{
//     t.addEventListener('click',()=>{
//         for(let reset of tabContent) reset.style.display='none';
//         tabContent[i].style.display = 'flex'; 
//         for(let reset of tabTitle) reset.classList.remove('active');
//         t.classList.add('active')
//     })
// })

// // 히어로베너 상 <-> 하 슬라이드 구조(swiper X)
// const heroWrap = document.querySelector('.hero_wrapper')
// const heroSlide = document.querySelectorAll('.hero_slide') //모든 슬라이드 개수세기 용
// // heroWrap.style.transform = 'translateY(-600px)'
// let count = 0; //초기값 0으로 사작해서 heroSlide의 개수만큼 증가
// heroWrap.style.transition = 'transform 0.5s'

// const sliderTimer = setInterval(() => {
//     count++; //3초마다 1증가
//     if(count > heroSlide.length-1 ){
//         count = 0
//     }
//     heroWrap.style.transform = `translateY(-${count*300}px)`
//     console.log(count*300)
// }, 3000);

// // 제이쿼리 ver 
console.log(typeof $); //function 제이쿼리 로드 확인(필수 X)

// 자바스크립트에선 HTML 작업 시 변수 저장 작업 필수!
// 제이쿼리는 변수 구조가 워낙 짧아 2번이상 자주 반복하는 변수만 지정하고 그 외는 일회성으로 사용가능

$('#popup').hide();

const $sub = $('nav > ul > li > ul')
const $nav = $('nav > ul > li ')
//sub.hide(); // 제이쿼리는 대상이 2개이상이어도 for 없이 한번에 다수 처리가 가능하다
//자바스크립트에서 css는 객체.style.속성 ='값'
// 제이쿼리 css 사용법 : 객체.css('속성','값')
// $sub.css('height','0')  // css()함수 2개이상 연결 = 체이닝
//     .css('overflow','hidden')
//     .css('transition','height 0.4s');

$sub.slideUp()

//제이쿠리 사용 시 화살표 함수 사용 권장안함. 일반 함수 위주로 사용
$nav.on('mouseover', function(){
    // $(this) 현재 마우스 오버 한 대상
    $(this).css('background-color','aqua')
    $(this).children('ul').stop().slideDown()
    
})
$nav.on('mouseout', function(){
    // $(this) 현재 마우스 오버 한 대상
    $(this).css('background','none')
    $(this).children('ul').stop().slideUp()
    
})

$('.contents .notice li:nth-child(1').on('click',function(){
    $('#popup').css('display','block').css('z-index','999')
})
$('#popup .close').on('click',function(){
    $('#popup').css('display','none').css('z-index','999')
})

// 탭 제목 활성화
$('.notice_gallery .title a').on('click',function(){
    $('.notice_gallery .title a').removeClass()
    $(this).addClass('active')
    
    let $i = $(this).index() // 현재 클릭한 대상 인덱스 변수 저장

    $('.notice_gallery .contents > * ' ).hide() //모든내용숨기기
    $('.notice_gallery .contents > * ' ).eq($i).css('display','flex')
    //eq => 몇번째 인덱스에 해당하는 요소인지 세는 제이쿼리 함수
})

// 제이쿼리v 슬라이드
let count = 0; //초기값 0으로 사작해서 heroSlide의 개수만큼 증가

const sliderTimer = setInterval(function(){
    count++; //3초마다 1증가
    if(count > 2 ){count = 0}
    // $('.hero_wrapper').css('transform',`translateY(-${count*300}px)`);
    // $('.hero_wrapper').css('transform',translateY(-+(count*300)+'px'));
    // $('.hero_wrapper').animate({
    //     top:'-'+(count*300)+'px',
    // },400)
    // 기존 js 에서 주로 다루는 transition+transform 애니메이셔 묶음 전용 제이커리 함수
}, 3000);