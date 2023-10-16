// async / await 프로미스 기반 코드를 좀 더 쓰기 쉽고 읽기 쉽게 하기 위해 등장


// async 는 함수 앞에 붙여 Promise를 반환
//         : 비동기 실행되는게 있음을 알림

// await : 프로미스 앞에 붙여 프로미스가 다 처리될 때까지 기다리는 역할, 결과는 그 후에 반환
//         : 실행 다 될 때까지 기다려주세요.
function call(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(name);
        }, 1000)
    })
};

function back() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("back")
        }, 1000)
    })
};

function hell() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("callbackhell")
        }, 1000)
    });
};

async function exec(){
    let x = await call("joojoohello");
    console.log(x, "이건 async await 연습");
    let y = await back(x);
    console.log(y, "주주헬로 나오겠지? 이건 async await연습");
    let z = await hell(y);
    console.log(z, "마지막꺼 async await 연습");
}

exec();
// call("joojoobab")
//     .then((result) => {
//         console.log(result, "님 이건 promise 연습입니다.");
//         return back(result);
//     })
//     .then((result) => {
//         console.log(result, "콜백이나오겠지? 이건 프로미스 연습");
//         return hell(result);
//     })
//     .then((result) => { console.log(result, "콜백헬이 나오곘지? 이건 프로미스 연습") });

// call("joojoobab", function(name){
//     console.log(name + "님 또 만났네요. 반가워요");
//     back(function(back){
//         console.log(back, "콜백을 다시 복습 중");
//         hell(function(hell){
//             console.log(hell, "이게 이런거구나")
//         })
//     })
// })