function add(n1, n2, n3) {
    setTimeout(function() {
        let result =n1 +n2;
        callback(result);
    }, 1000);
}

function mul(n, callback) {
    setTimeout(function() {
        let result =n * 2;
    ;    callback(result);
    }, 700)
}

function sub(n, callback) {
    setTimeout(function() {
        let result =n-1;
        callback(result);
    }, 500);
}




add(4, 3, function (x) {
    console.log("1: ", x);
    mul(x, function (y) {
      console.log("2: ", y);
      sub(y, function (z) {
        console.log("3: ", z);
      });
    });
  });

// 실행결과 : 1: 7 (4+3) // 2: 14(4+3)*2 //13 (4+3)*2-1


//위에껀 callback이용한거 - 콜백지옥 예시임..
//아래는 promise 이용한거
//Promise 클래스로 만들어야 되니까 new Promise

function add(n1, n2) {
    return new Promise ((resolve,reject)=>{
        setTimeout(function() {
            let result =n1 +n2;

            resolve(result);
        }, 1000);
       
    })
}

function mul(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            let result =n * 2;

            resolve(result);
            // reject("오류발생");
        }, 700);

    });
}

function sub(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            let result =n-1;

            resolve(result);
        }, 500);

    })
}



add(4,3)
.then((result)=>{
    console.log("1 : ", result);

    return mul(result);
})
.then((result)=>{
    console.log("2 : ", result);

    return sub(result);
})
.then((result)=>{
    console.log("3 : ", result);
})
.catch((err)=>{
    console.log(err);
});

// then이 여러개 오는 순간 마지막에 한번만 .catch 넣어주면 됨
