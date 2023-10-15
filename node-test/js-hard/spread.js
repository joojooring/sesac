const arr1 = [1,2,3,4,5];
const arr2 = ["가","나","다","라","마"];
const arr3 = [...arr1, ...arr2];
console.log("arr3 : ", arr3);

//[1,2,3,4,5,"가","나","다","라","마"]

//1)
// const arr3 = [arr1[0], arr2[0]]
//2)
// for(arr1)
//3) 스프레드 연산자 ... 배열로 감쌌던걸 풀어준다

const obj2 = {
    name: "lily",
    gender:"여",
    age:99
};
const obj3 ={
    ...obj2,
    dental : "자연애치과"
}
console.log("뭐가 뜰거니 : ",obj3 )