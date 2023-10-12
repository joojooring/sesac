const hello = [..."hello"];
// hello = ["h","e","l","l","o"];
console.log("hello : ",hello);

//split과 같은 기능이 spread

const word1="abc";
const word2="xyz";

const spread=[...word1, ...word2];
console.log("결과물 : ", spread);

const name1 = "김수한무거북이와두루미"
const name2 = "삼척박사두룯루둘둘"
const 합쳐 = [...name1, ...name2];
console.log("뭐가 나올까 : ",합쳐);
