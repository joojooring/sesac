function call(name){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log(name);        
            
            resolve(name);
        }, 1000);

    })
}

function back(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log("back");        
            let back = "back"
            resolve("back");
        }, 1000);

    })
}

function hell(){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            let hell ="hell"
            resolve("callback hell");
        }, 1000);

    })
}
//--------------------------




// --------------------------------------------------

async function exec(){
    let x = await call("kim");
    console.log(x + "님 환영합니다.");
    let y = await back(x);
    console.log(y + "을 실행했구나");
    let z = await hell(y);
    console.log("여기는 "+z);
}
exec();

// call("kim").then((name)=>{
//     console.log(name + "반가워")
    
//     return back(back);
// }).then((back)=>{
//     console.log( back + "을 실행했구나");

//     return hell(hell);
// }).then((hell)=>{
//     console.log("여기는 "+ hell);
// })
