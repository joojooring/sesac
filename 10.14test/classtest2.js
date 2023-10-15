class Shape {
    constructor(width, height){
        this.width =width;
        this.height =height;
    }
    getArea () {
       return this.width * this.height;
    }
    // getDiagonal(){
    //     return Math.sqrt((this.width)*(this.width) + (this.height)*(this.height) );

    // }
}
let shape1 =new Shape(3,4);
console.log(shape1.getArea());
// console.log(shape1.getDiagonal());

class Rectangle extends Shape {
    constructor(width, height){
        super(width,height);

    }
    getArea () {
       return this.width * this.height;
    }
    getDiagonal(){
        return Math.sqrt((this.width)*(this.width) + (this.height)*(this.height) );

    }
}
let rec1 =new Rectangle(3,4);
console.log("직사각형의 넓이는 : ", rec1.getArea());
console.log("직사각형의 대각선 길이는 : ", rec1.getDiagonal());


class Triangle extends Rectangle {
    constructor(width, height){
        super(width, height)

    }
    getArea(){
        return (this.width * this.height)/2
    }
}

let tri =new Triangle(3,4);
console.log("삼각형의 넓이는 : ", tri.getArea());


class Circle extends Shape {
    constructor(width, height, radius){
        super(width,height);
        this.radius=radius;
    }
    getArea(){
        return(this.radius * this.radius *3.14) ;

    }
};

let cir = new Circle(3,3,3);
console.log("원은 넓이는 : ", cir.getArea());