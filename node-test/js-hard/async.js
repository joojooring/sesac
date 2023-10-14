// 비동기 acync
// 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성

// 1)콜백함수로 비동기 시켜서 내가 원하는 순서대로 뜰 수 있게끔!!! 보통 가장 마지막에 매개변수로 받음
//      콜백함수 ?  다른 함수가 실행을 끝낸 뒤 실행되는 함수
function goMart() {
    console.log("마트에 가서 어떤 음료를 살지 고민한다. ");
    
}

let product;
let price;

function pickDrink(callback) {
    setTimeout(function(){
        console.log("고민 끝!!");
        product ="제로 콜라";
        price = 2000;
        callback(product, price);
        //pay(product, price)

    },3000)    
}    

function pay(product,price) {
    console.log(`상품명 : ${product}, 가격 : ${price}`)
};    


goMart();
pickDrink(pay);
// pay(product,price);


