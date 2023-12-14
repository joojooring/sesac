// or
type Gender = "Men" | "Women";
const lily:Gender ="Women";

// [첫번째는 상품명, 두번째는 가격]
type productInfo = [string, number]
const cola : productInfo = ["코카콜라", 2500]

// 객체에 대한 type을 지정할 경우 interface라는 키워드 많이 사용
interface productInfo2 {
    productName: string,
    price: number,
    sale: number
}

const cider : productInfo2 = {productName: "cider", price : 2500, sale : 10}

type productInfo3 = {
    productName: string,
    price: number,
    // 있어도 되고 없어도 되는 선택형 값에는 ?물음표를 달아주면 됨
    sale? : number
}
const beer : productInfo3 = {productName: "hite", price: 2500}
console.log(beer.sale)
// const beer : productInfo3 = {productName: "hite", price: 2500, sale: 10}


// 객체 안에 객체가 들어가는 경우의 처리방법
interface Seller {
    name : string
};
interface productInfo4  {
    productName: string,
    price: number,
    // 있어도 되고 없어도 되는 선택형 값에는 ?물음표를 달아주면 됨
    sale? : object,
    seller?: Seller
}

const soju: productInfo4 = {
    productName: "soju",
    price: 2000,
    seller: {name : "꼬치집"}
};
// soju.seller -> undefined가 될 수 있음(optional한 key이기 때문)
// seller?.name -> optional한 key에는 ?물음표로 chaining해야되뮅
console.log(soju.seller?.name)




// 상속: extends 상속받을객체
interface Person {
    name : string,
    age: number,
}

interface Student extends Person {
    stundentId: string
    eat: () => void; //void : 함수의 리턴값이 없을때 void로 써줌
}

const person: Person = {name : "lily", age: 88}
const stu:Student = {name : "lily", age: 88, stundentId:"2587454", eat:()=>console.log("냠냠")}

// ---------------------------실습----------------------------
interface Game {
    title:string,
    price:number,
    category:string,
    platform:string,
    desc?:string
}


let heroGame_A: Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일',
  }
  
  let heroGame_B: Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000,
    category: '롤플레잉',
    platform: '모바일',
  }
