// arr[0] arr[1]로 접근하는게 아닌
// 각각의 배열 요소를 변수의 이름으로 접근하기 위해 사용
const arr5 = ["tomato", "banana", "kiwi", "apple", "grape"];
const [tomato, banana, kiwi, apple, grape] = arr5;
console.log(tomato);

// let tomato =arr5[0]
// let kiwi = arr5[2]
// let banana = arr5[1]

console.log(arr5[4]);

//배열 구조 분해 할당
//const[변수]=배열;
//각 변수에 배열의 인덱스 순으로 값 대응
//구조분해시 변수의 값이 undefined일 때 기본값 할당가능
//구조분해 없이 두 변수의 값 교환도 가능

let lists = ["miki", "mini"];
[item1, item2, item3, item3, item4 = "Disney"] = lists;

console.log(" item1 : ", item1);
console.log(" item2 : ", item2);
console.log(" item3 : ", item3);

let listss = ["juhyun", "juri"];
[name1, name2, name3] = listss;
console.log(" what's your name? : ", name1);
console.log(" what's your name? : ", name2);

let x = 1, y = 3;
[x, y] = [y, x];
console.log(x, y);

//오브젝트(객체)의 구조 분해 할당
//배열의 구조 분해 할당처럼 객체의 속성값을 오브젝트의 key로 접근하는게 아닌 
//변수로 접근하기 위해 사용

const obj = {
    title: "제목",
    content: "내용",
    num: 0,
};
// const { title, num, content } = obj;

const title = obj.title;
const num = obj.num;
const content = obj.content;

console.log(num);

//const{변수}=객체;
// 객체 안의 속성을 변수명으로 사용
// 콜론: 이용해 새 변수명을 선언하고, 원래의 값을 새 변수명에 할당 가능

let objj = {
    key1: "one",
}

//객체 구조분해할당
let obj99 = {
    key1: "one",
    key2 : "two"
};
let {key1: newKey1, key2,key3="three"} =obj99;
// console.log("key1 : ", key1);
console.log("newKey1 : ", newKey1);
console.log("key2 : ", key2);
console.log("key3 : ",key3);

let{a,b} = {a:10, b:20};
console.log("a : ", a);
console.log("b : ", b);


//spread ...연산자 전개구문
let {c,d, ...rest} = {c:30, d:40, e:50, f:60, g:70 };
// console.log("g : ", g);
// console.log("f : ", f);
// console.log("e : ", e);
console.log("d : ", d);
console.log("c : ", c);
console.log("rest : ",rest);

const arr1 = [1,2,3,4,5,100000];
const arr2 = ["가","나","다","라","마","하"];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

//rest 파라미터
const values = [10,20,30];
function get(a, ...rest) {
    console.log(rest); // [20,30]
};
get(...values);

