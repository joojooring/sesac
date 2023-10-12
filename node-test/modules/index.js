const math = require("./math")

// const add = require("./math")

// require은 module을 불러옴
// require 뒤에 파일을 불러오겠다. 그 파일을 add로 받아오겠다.
// const sum = add(2,3);
// console.log(sum);



//case1
//파일에서 한개의 식별자만 내보내는 경우

//case2
//파일에서 여러개의 식별자를 객체 형태로 내보내는 경우
//모듈을 받아올 때 겍체를 그대로 math라는 식별자로 받아옴
// const sum = math.add(3,5)
// console.log(sum);
// console.log(math.PI);


//case3
//특정 식별자만 필요한 경우 !! 객체구조분해 할당으로 받아올 수 있음
//파일에서 여러개의 식별자를 객체 형태로 내보내는데 
//모듈을 받아올 때 구조분해할당
const { add, minus, PI } = require("./math");

const sum = add(3,5);
console.log(sum);
console.log(PI);

// const { } = { add : add(){}, minus: minus(){}}
