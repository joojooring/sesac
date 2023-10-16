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
    })
};

call("joojoobab")
    .then((result) => {
        console.log(result, "님 이건 promise 연습입니다.");
        return back(result);
    })
    .then((result) => {
        console.log(result, "콜백이나오겠지? 이건 프로미스 연습");
        return hell(result);
    })
    .then((result) => { console.log(result, "콜백헬이 나오곘지? 이건 프로미스 연습") });

// call("joojoobab", function(name){
//     console.log(name + "님 또 만났네요. 반가워요");
//     back(function(back){
//         console.log(back, "콜백을 다시 복습 중");
//         hell(function(hell){
//             console.log(hell, "이게 이런거구나")
//         })
//     })
// })