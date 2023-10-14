function goMart() {
    console.log("마트에 가서 어떤 음료를 살지 고민한다. ");
    
}

let product;
let price;

function pickDrink(callback) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("고민 끝!!");
            product ="제로 콜라";
            price = 2000;
            resolve(true);  
        },3000)    
        
    })
}    
    
function pay(product,price) {
    console.log(`상품명 : ${product}, 가격 : ${price}`)
};    


goMart();
pickDrink().then(()=>{
    pay(product, price);
});
// pay(product,price);
