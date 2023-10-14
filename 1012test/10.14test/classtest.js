// class House {
//     constructor(name, year) {
//         this.name = name;
//         this.year =year;

//     }
//     age(){
//         console.log(`${new Date().getFullYear() - this.year}년에 건축 되었어요.`)
//     }
// };

// const house1 = new House("우리집", 5);
// const house2 = new House("남의집", 10);

// console.log(house1.name, house2.year);

class Rectangle {
    constructor(width, height){
        this.width =width;
        this.height =height;
    }
    getArea () {
       return this.width * this.height;
    }
    getDiagonal(){
        return Math.sqrt((this.width)*(this.width) + (this.height)*(this.height) );

    }
}
let rec1 =new Rectangle(3,4);
console.log(rec1.getArea());
console.log(rec1.getDiagonal());


class Triangle extends Rectangle {
    constructor(width, height){
        super(width, height)

    }
}