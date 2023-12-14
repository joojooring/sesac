// 오버로딩
function printXY(x: number, y:number): void;
function printXY(x : string, y:string):void;

function printXY(x : number|string|object, y:number|string|object){
    console.log(x,y);
}
printXY(1,2);
printXY("aa","bb")
// printXY("aa",5)

function strPrintXY(x : string, y:string){
    console.log(x,y);
}
strPrintXY("aa","bb")

// generic은 호출하거나 사용할 때 타입을 넘겨서 해당 타입으로 지정할 수 있는 방법,
// 보통매개변수에 (x:T, y:T) T를 씀
// 원하는 자료형을 받아오겠다는 의미임 
function printByGeneric<T> (x:T, y:T) {
    console.log(x,y);

}
printByGeneric<string | number>("문자열", "얘도 문자열")
printByGeneric<number>(500,500)


// 만약 객체배열, 이외 다른 타입의 배열도 length를 구하는 함수를 만들고 싶다면 계속 함수 이름을 바꿔가면 만드는건 무리임
// 그때 generic를 활용하면 됨

// const numArrLength = (arr:number[]):number => arr.length
function numArrLength(arr: number[]): number{
    return arr.length
}

function StrArrLength(arr: string[]): number{
    return arr.length
}


function arrLength<T> (arr: T[]):number{
    return arr.length
}
arrLength<string>(["문자열","문자열"]);

function exampleGeneric<T,U>(x:T, y: U){
    console.log(x,y)
}
exampleGeneric<number, string>(44,"문자열")

let a : string[]
let b : Array<string>

interface Phone<T> {
    company:string,
    model:string,
    option:T
}

interface SamsungOption {
    a: string,
    b: number,
    c: boolean
}

const samsung23:Phone<SamsungOption> = {
    company: "samsung",
    model: "gallerxy23",
    option: {
        a:"하이하이",
        b: 44,
        c: true
    }
}

interface IphoneOption {
    a: string,
    b: number,
}


const iphone15:Phone<IphoneOption> = {
    company: "apple",
    model: "iphone15",
    option: {
        a: "pro",

        
        b: 45
    }
}

// -----------------실습----------------------
// 제네릭 이용해서 함수 arrElement 선언하기
// 배열과 인덱스 번호를 매개변수로 받고, Arr[index]에 대한 요소를 리턴하는 함수 만들기
// 함수의 리턴 타입까지 작성하기
// 실행 예시) console.log(arrElement<string>(["a"], 0));

function arrElement<T>(arr:T[], index:number):T{
    return arr[index];
}

console.log(arrElement<string>(["a"], 0));


// 첫번째 인자로 들어간 배열의 길이보다 큰 index 수(두번째 인자)가 전달된다면 return false 시키기!


function arrElement2<T>(arr: T[], index: number): T | boolean {
    if (index < arr.length) {
        return arr[index];
    } else {
        return false;
    }
}
console.log(arrElement2<string>(['a'], 1)); // false
