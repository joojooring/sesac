// import add2 from "./math_es6.js"
// ./math_es6.js파일에서 default로 export 하고 있는 식별자를 add2라는 식별자로 받아옴
// console.log(add2(2,3));

import { add } from "./math_es6.js"
console.log(add(2,3));

// es6문법에서 모듈 import할 때, 구조분해 없이 식별자를 만들어서 받아오는 방법은 
//module 파일에 default로 export하는 값이 있어야 함

import math from "./math_es6.js"
console.log(math.add(2,3)); //오류 발생함 왜?  export default한 값이 없을 때는 오류임

// import math from "./"
//전파일에서 defalut로 export하는게 있어야 사용할 수 있음

// import {} from "./"
//전파일에서 defalut 없어도 사용 가능