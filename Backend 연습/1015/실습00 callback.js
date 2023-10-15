function call(name, callback){
    setTimeout(function(){
        // console.log(name);
        callback(name);
    },1000)
};

function back(callback){
    setTimeout(()=>{
        // console.log("오늘 복습 잘 돼?")
    callback("back")
    },1000)
}

function hell(callback){
    setTimeout(()=>{
        callback("callbackhell")
    },1000)
}

call("joojooring", function(name){
    console.log(name + "님 반갑습니다.");
    back(function(back){
        console.log(back, "콜백이 이해가 되니?");
        hell(function(hell){
            console.log(hell,"어때?")
        })
    });
})

