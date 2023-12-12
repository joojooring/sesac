// let str = "hello"
let str : string = 'hello';

let num : number
num = 5;

console.log(str);
// str = 5; //error

let undif : undefined ;
// undif =3 //error

let nu : null = null;
// nu = 3 //error

let arr : number[] = [1,2,3,4,5];
// 숫자배열로 타입 지정

let strArr : string[] =["a","bb", "cc"];
let strArr2 : Array<string> =["a","bb", "cc"];
// 문자로 이루어진 배열의 type string[]

// let aaa = [1, "22"] // 문자랑 숫자를 배열에 동시에 담고 싶다면 어떤 typescript?
let numStrArr : (number | string)[] =[1,"a"]
let numStrArr2 : Array<string | number > =[1,"a"]


let abc : number | string = "4";
abc = 5;


let anyArr : any[] = [1, "a", null, undefined, {}]
// any는 어떤 자료형이든 다 올 수 있음
// typescript에서 any를 사용하는건 지양해야됨


let obj : object = {
    name : "lily",
}
// 객체
// interface, type로 customizing 가능


// Tuple 은 규칙이 있는 배열이라고 보면 됨
// 순서와 개수가 정해져 있는 배열 (요소의 길이와 타입 고정)
let drink : [string, number] = ["cola", 2500];
console.log(drink[0]);
drink[0]="cider";
console.log(drink[0]);
// drink[2]="aaa" // error
// Tuple의 한계 : 배열에서 사용하는 메소드인 push는 잡아주지 못함
drink.push("aaa");
console.log(drink);

// readonly
// 읽기만 가능한 data type!
let drink2 : readonly[string, number] = ["cola", 2500];
// drink2[0]="aaa"; //error 바꿀 수 없음
// drink2.push("aaa") //error 리드온리에선 push도 잡아줌


// Enum (열거형 데이터)
// 숫자 열거형, 문자 열거형이 존재
// ex: 날씨 데이터를 판단하려고할때, sun rain cloud 값들을 문자열이라고는 하지만 갯수 중 하나를 선택해야될 때
enum Weather {
    sun= "sun",
    rain="rain",
    cloud="cloud"
}
console.log(Weather.sun);


enum Weather2 {
    sun, //= 0,
    rain, //=1,
    cloud ///=2
}
console.log(Weather2.sun);

const weather = 0;
if(weather == Weather2.sun){
console.log("맑은 날씨");
}

let aaaaa : Weather2 = 2;
// let aaaaa : Weather2 = 3 //error 지금 값이 3개만 들어가 있기 때문에 2까지만 나옴



// ------------------------실습--------------------------
let olimpic_newgame : readonly[object, boolean] = [{name: "쇼트트랙", type: "혼성 계주"}, true];
// olimpic_newgame[1] =false;

