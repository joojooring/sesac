//asyn / await는 promise 기반임
//비동기 처리가 이루어지는 함수에다가 붙이면 됨
// 1. async는 promise 함수를 자동으로 return해줌
// 2. async 내부에서만 await를 사용할 수 있음


// async function test(){
//     console.log("test");
//     return Promise
// }
// console.log(test());





async function add(n1, n2) {
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



async function exec() {
    const x = await add(4,3); //x에 7
    console.log("await 1 뒤 : ",x)
    const y = await mul(x); //y에 14
    console.log("await 2 뒤 : ",y)

    const z = await sub(y); //z에 13
    console.log("await 3 뒤 : ",z)

}

exec();

            
