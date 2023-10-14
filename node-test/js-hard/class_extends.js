class House {
    constructor(name, year) {
        this.name = name;
        this.year =year;

    }
    age(){
        console.log(`이 건물은 ${new Date().getFullYear() - this.year}년에 됐어요.`)
    }
};



// class Personal {
    //     constructor(){
        //이름
        //나이
        //주민번호
        // }
        //밥을 먹는다.
        //잠을 잔다
        // }
        
        // class Student {
            //     constructor(){
                //이름
                //나이
                //주민번호
                //학번
                
            // }
            //밥을 먹는다.
            //잠을 잔다
            // }
            
            // const p = new Personal();
            
            const house1 = new House("우리집", "2022");
            const house2 = new House("남의집", "2021");
            
            console.log(house1.name, house2.year);
            house1.age();
            
            
            //class 상속 : 기존에 있던 클래스의 속성과 메소드를 받아와서 사용하되, 추가적인 속성과 메소드를 더 정의할 수 있음
            //상속받을때 super() 메소드에 넣어서 받아옴

            
            class Apartment extends House {
                constructor(name,year,floor){
                    super(name, year); //부모요소를 받아올 때 super를 쓰면 됨, 여기서는 house의 생성자를 뜻함
                    this.floor =floor;
                }
                
                //상속에서의 오버라이딩 : 부모에 있는 메소드를 자식이 다시 정의하는 것
                //오버라이딩(상속의 개념) vs 오버로딩 (자바스크립트에서는 오버로딩이라는 개념이 없음!! 혼돈주의)
                //              오버로딩? 상속과 관련이 없고 똑같은 함수의 이름으로 여러개의 함수를 선언하는 것
                //                      (매개변수가 다르다.

                age(){
                    super.age(); //부모에 있는 메소드를 사용시
                    // console.log(`이 건물은 ${new Date().getFullYear() - this.year}년에 됐어요.`
                    // );

                    console.log(`입주는 ${this.year+5}부터 시작했습니다.`);
                }
            }

            const apt = new Apartment("래미안 아파트", 2013, 25);
            console.log(apt.name, apt.floor);
            apt.age();


//상속에서의 오버라이딩 : 부모에 있는 메소드를 자식이 다시 정의하는 것
                //오버라이딩(상속의 개념) vs 오버로딩 (자바스크립트에서는 오버로딩이라는 개념이 없음!! 혼돈주의)
                //              오버로딩? 상속과 관련이 없고 똑같은 함수의 이름으로 여러개의 함수를 선언하는 것
                //                      (매개변수가 다르다.

    // function test (a,b){
    //     console.log(`a: ${a}, b: ${b}`);
    // };
    function test (a,b=0,c=0){
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
        return a + b + c;

    };

    test(2, 5);
