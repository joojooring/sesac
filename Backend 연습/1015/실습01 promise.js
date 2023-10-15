function call(name){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            // console.log(name);
            resolve(name);
        },1000)

    })
};

function back(){
    return new Promise (function(resolve, reject){
        setTimeout(()=>{
            // console.log("오늘 복습 잘 돼?")
        resolve("back")
        },1000)

    })
};

function hell(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("callbackhell")
        },1000)

    })
};

// call("joojooring", function(name){
//     console.log(name + "님 반갑습니다.");
//     back(function(back){
//         console.log(back, "콜백이 이해가 되니?");
//         hell(function(hell){
//             console.log(hell,"어때?")
//         })
//     });
// })
call("juhyundanggen")








// ---------------------------------------
call("joojooring")
.then((name) =>{
    console.log(name, "님 반갑습니다.")
    return back();
}).then(()=>{
    console.log("콜백이 이해가 되니?")
    return hell();
}).then((hell)=>{
    console.log("여기는", hell)
})