// function abc () {
//     console.log("abc")
// }


// 함수 자체의 type : 함수가 실행되어 결국 return되는 값을 의미
function sum (a : number, b:number): number {
    return a+b ;
}
console.log(sum(1,5))

// 화살표 함수로 타입을 선언 : 매개변수에 optional key가 있다면 똑같이 ?물음표를 달고 if문 작성
const sumsum = (a:number,b?:number): number => {
    if(b) return a+b;
    return a;
}
console.log(sumsum(2,2))



// function hello(num: number) : void;
function hello(num: number) : number;

// 함수 자체의 return값이 없을때 void 사용!!
function hello(str: string, str2: string):string 

// 함수 오버로딩? -> 함수의 이름은 같으나, 형태가 다른 함수
// (매개변수가 다르다던지, 매개변수의 개수나 type이 다르다던지, 반환값이 다르다던지)
// function hello(param:any){
//     return param;
// }
function hello(param:number | string, param2?:number | string ){
    console.log(param)
    console.log(param2)
    return param;
}

hello(100);
hello("hello","world")

interface Calculator {
    sum: (a: number, b:number) => number
    sub?: ()=>void
}

const calc: Calculator = {
    sum: sum
}

// never은 함수의 끝에 도달할 수 없을 때 사용
function goingOn() : never {
    while(true) {
        console.log("go")
    }
}

// ----------실습-----------------

// 두 개의 수를 매개 변수로 받고 합을 console.log 로 출력하는 함수 sum1 만들기
// sum1(5, 11); // 테스트는 이렇게 하기!

function sum1 (a:number, b:number):number {
    return a+b;
} 
console.log(sum1(5,11))


// 매개 변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
// 모두 합산한 값을 "return" 합니다.
// Hint: 전개 연산자 이용하기

// 테스트는 이렇게!
// console.log(sum2(1, 2, 3, 4, 10)); // 20
// function sum2 (a:number, b:number, c:number,d:number, e:number){
//     return a+b+c+d+e;
// }
// console.log(sum2(1, 2, 3, 4, 10))

// function sumSpread(...numbers: number[]) {
//     let total = 0;
//     numbers.forEach(num => {
//         total += num;
//     });    
//     return total
// }

function sum2(...numbers: number[]):number {
    if (numbers.length === 0) {
        return 0;
    } else {
        return numbers[0] + sum2(...numbers.slice(1));
    }
}

console.log(sum2(1, 2, 3, 4, 10));
