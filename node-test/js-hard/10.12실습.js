const hello = [..."hello"];
// hello = ["h","e","l","l","o"];
console.log("hello : ",hello);

//split과 같은 기능이 spread

const word1="abc";
const word2="xyz";

const spread=[...word1, ...word2];
console.log("결과물 : ", spread);