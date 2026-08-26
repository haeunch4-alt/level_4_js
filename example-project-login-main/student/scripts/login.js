// 기존회원 - 아이디, 비밀번호, 로그인버튼 변수
const userId = document.querySelector('#user-id'); 
const userPw = document.querySelector('#user-pw');
const memberLoginBtn = document.querySelector('#member-login');
const pwVisibleBtn = document.querySelector('#non-member-pw-visible')
const nonPwVisibleBtn = document.querySelector('#non-member-pw-visible2')


// 비회원 - 주문자명, 주문번호, 비회용주문비밀번호, 주문조희 버튼 변수
const non_userId = document.querySelector('#non-user-id');
const non_userOrder = document.querySelector('#non-user-order');
const non_userPw = document.querySelector('#non-user-pw');
const non_memberLoginBtn = document.querySelector('#non-user-login');

// 기존회원) 논라연산자 활용한 아이디&비밀번호 동시 검사 수행 이벤트+함수
memberLoginBtn.addEventListener('click',()=>{
    // 목표1) 아이디, 비밀번호 중 하나라도 안적으면 '000을 입력하세요'
    // if(userId.value == '' && userPw.value == ''){}
    if(userId.value == '' || userPw.value == ''){
        if(userId.value == '' && userPw.value == ''){
            alert('아이디와 비밀번호를 입력하세요.')
        }
        else if(userId.value == ''){ // 하나의 조건세트에서 두번째 조건식이 필요할능(두개이상 작성가능)
            alert('아이디를 입력하세요.')
        }else{// 조건 셑, 안에 거짓을 처리할때(마지막에 한번만 작성가능)
            alert('비밀번호를 입력하세요.')
        }
    }
    // 목표2) 아이디, 비밀번호를 모두 적으면 '000님 환영합니다'
    // if(userId.value != '' && userPw.value != ''){
    //     alert(`${userId.value}님 환영합니다.`)
    // }
    // 삼항조건 ? 참 : 거짓
    // 조건식1개로 처리하는 if-else를 간편하게 쓰고 싶을때
    userId.value != '' && userPw.value != '' ?
        alert(`${userId.value}님 환영합니다.`) : null;
})

// 비회원 이벤트-함수
// 목표1) 주문자명, 주문번호, 비회용주문비번을 모두 썼을 때 "000님 주문은 배송중입니다."

// non_memberLoginBtn.addEventListener('click',()=>{
//     if(non_userId.value =='' || non_userOrder.value =='' || non_userPw.value ==''){
//         if(non_userId.value ==''){
//             alert('아이디를 입력해주세요')
//         }
//         else if(non_userPw ==''){
//             alert('비밀번호를 입력해주세요.')
//         }
//         else if(non_userOrder.value ==''){
//             alert('주문 번호를 입력해주세요')
//         }
//         else if(non_userId.value =='' && non_userOrder.value =='' && non_userPw.value ==''){
//             ('아이디와 비밀번호와 주문번호를 입력해주세요')
//         }
//     }
    
//     // if(non_userId.value !='' && non_userOrder.value !='' && non_userPw !=''){
//     //     alert(`${non_userId.value}님 주문은 배송중입니다.`)
//     // }
//     non_userId.value !='' && non_userOrder.value !='' && non_userPw !='' ?
//         alert(`${non_userId.value}님 주문은 배송중입니다.`) : null
// })

// 기존회원) 눈 아이콘 클릭 시 비밀번호 보이기/다시 누르면 비밀번호 숨기기
let pwVisibleStatus = 0; // 비번 숨김상태 초기값
pwVisibleBtn.addEventListener('click',()=>{
    userPw.type = 'text'
    pwVisibleStatus == 0 ?
        userPw.type = 'text'
        : userPw.type = 'password'
    pwVisibleStatus = !pwVisibleStatus
})

non_userPw.type = 'password';
nonPwVisibleBtn.addEventListener('click',()=>{
    non_userPw.type = 'text'
    pwVisibleStatus == 0 ?
        non_userPw.type = 'text'
        : non_userPw.type = 'password'
    pwVisibleStatus = !pwVisibleStatus
})