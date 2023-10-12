const add = (a,b) => a+b;
const minus = (a,b) => a-b;
const PI = 3.14;



// common js에서는 default라는 개념이 없음
// 

// 1) 하나만 내보낼 경우
// module.exports = add
//  export default add;


 //2)여러개 내보낼 경우
 // module.exports = {
//      add,
//      minus;
// };

//  export default PI ;
 export {add, minus};
// {add : add}

