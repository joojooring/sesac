const fruits = ["apple", "banana","kiwi","tomato","grape"];


const [애플, 바나나,키위,토마토,포도 ="grape" ] = fruits;
console.log(애플, 포도);

// 사실상 아래 코드와 동일한 작업을 하고 있음
// const 애플 = fruits[0]
// const 바나나 = fruits[0]
// const 키위 = fruits[0]
// const 애플 = fruits[0]
// const 애플 = fruits[0]

let x =1, y=3;
[x,y] = [y,x];
console.log(x,y);


//객체 구조분해
const obj = {
    name: "lily",
    gender:"여",
    age:99
};

// key이름 바꾸는 방법
const {age, name: name99} = obj;
console.log(name99);

// const {age, name, test="안녕"} = obj;
// console.log(age,test);
// const age = obj.age
// const name = obj.name


