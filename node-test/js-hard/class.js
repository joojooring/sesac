const cat = {
    name : "나비",
    age: 2,
    mew: function(){
        console,log("야옹");
    }
};

const cat2 = {
    name : "장화",
    age: 80,
    mew: function(){
        console,log("야옹");
    }
};

const cat3 = {
    name : "코코",
    age: 5,
    mew: function(){
        console,log("야옹");
    }
};

// cat3.mew();


//class는 PascalCase 규칙을 이용해서 식별자 생성
//camelCase에서 첫글자를 대문자로~
//PascalCase는 첫글자도 대문자로!!
class Cat {
    //constructor는 생성자(메소드의 일종)
    // (메소드 중에서) Cat 클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드가  constructor
    //constructor() 여기의 괄호랑 Cat 뒤의 () 매개변수값이 같아야 됨
    //this는 class 내의 전역변수이기때문에 class 내의 어떤 메소드에서든 사용 가능
    constructor(name2, age2){
        this.name =name2;
        this.age =age2;
    }
    
    //메소드
    //class 내부에서 메소드 만들때는 function 안붙이고 바로 사용가능(){}
    mew(){
        console.log("야옹");
    }
    //고양이의 정보를 콘솔로 찍는 메소드
    info(){
        console.log(`이름은 : ${this.name}, 나이는 : ${this.age}살`)
    
    }
}
//객체 생성할 때 매개변수 인자 두개를 넘겨줘야 겠죠??
//cat class를 이용해서 새로운 객체를 만들겠다. new Cat()
const cat4 = new Cat("나비", 2)
const cat5 = new Cat("장화", 80)

console.log(cat4.name, cat5.name);
cat4.mew();
cat4.info();

