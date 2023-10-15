function first(){
    second();
    console.log(1);
    return;
};

function second(){
    console.log(2);
    return;
}

first();

//2
//1

function run(){
    console.log("3초 후 실행")
};

console.log("시작");
setTimeout(run, 3000);
console.log("끝");

// 시작
// 끝 // setTimeout실행시 콜백 run은 백그라운드로 보내서 3초 머물게 함
// 3초 후 실행

