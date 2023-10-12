const arr1 = [1,2,3,4,5];
const arr2 = ["가","나","다","라","마"];

//[1,2,3,4,5,"가","나","다","라","마"]

//1)
// const arr3 = [arr1[0], arr2[0]]
//2)
// for(arr1)
//3) 스프레드 연산자 ... 배열로 감쌌던걸 풀어준다
const arr3 = [...arr1, ...arr2];
console.log("arr3 : ", arr3);