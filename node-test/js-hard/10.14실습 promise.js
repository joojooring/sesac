call("kim", function(name){
    console.log(name + "반가워");
    back(function (txt){
        console.log(txt + "을 실행했구나");
        hell(function(message){
            console.log("여기는 "+ message);
        });

    });
});
// ---------------------------------
call("kim").then((name)=>{
    console.log(name + "반가워")
    
    return back(back);
}).then((back)=>{
    console.log( back + "을 실행했구나");

    return hell(hell);
}).then((hell)=>{
    console.log("여기는 "+ hell);
})
// --------------------------------------------------
setTimeout(() => {
    document.body.style.backgroundColor = "red";
    
}, 1000);
