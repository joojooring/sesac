//콜백지옥을 대비하여 promise 사용
// promise : 비동기처리를 하기 위해 나온 객체
// promise (ES6에 추가된 JS문법) - new Promise로 만들어서 사용
// promise 상태
// pending(대기) , Fulfilled(성공), rejected(실패), settled(fulfilled 혹은 rejected로 결론이 난 상황)



// promise기본예시
function promise1(flag){
    return new Promise (function ( resolve ,reject ){
        if(flag){
            resolve("상태는 fulfilled ! then으로 연결 "); //resolve는 매개변수로 값을 받음 성공했을때 then으로 받아오는게

        }else{
            reject("상태는 rejected ! catch로 연결 ")
        }
    });
}

// 특정 함수가 return 반환하는 값이 promise 객체일 경우,
//          method chaining으로 then과 catch라는 메소드를 사용할 수 있음
//          then에는 콜백함수가 들어감 
promise1(true).then((result)=>{
    // result에는 resolve로 보낸 인자값이 들어오게 됨
    // 여기서는 상태는 fulfilled ! then으로 연결이 뜨게 됨
    console.log(result);

}).catch((err)=>{
    console.log(err);
});

promise1(false).then((result)=>{
    console.log(result);

}).catch((err)=>{
    console.log(err);
});






