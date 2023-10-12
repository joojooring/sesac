const values = [10,20,30];


//함수가 정의된 곳에 쓸 때 ...rest
function get(a, ...rest){
    console.log("a: ",a); //10
    console.log(rest); //[20,30] 남은 인자들이 배열로 들어옴
}

get(...values);

//[10,20,30] => 10,20,30
get(10,20,30);