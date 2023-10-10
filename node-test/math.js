

const add = (a,b) => a+b;
const minus =(a,b) => a-b;
const PI = 3.14;

// const add2 = (a,b) => {
    //     return a+b;
    // };
    
    //여러 식별자를 객체로 내보낸다.
    //----------case2) 3)-------------------
    //파일에서 여러개의 식별자를 객체 형태로 내보내는 경우
    //모듈을 받아올 때 겍체를 그대로 math라는 식별자로 받아옴
    module.exports = {
        add,
        minus,
        PI
    };
    
    
    module.exports.add = (a,b) => a+b;
    module.exports.minus = (a,b) => a-b;
    module.exports.PI = 3.14;
    // const data = {
    //    add,
    //    minus,
    //    PI,
    // };
    
//-----------------case1--------------------
//파일에서 한개의 식별자만 내보내는 경우
// module.exports = add;



const data = {
    add :add,
    minus : minus,
    PI : PI
};

// key : "value";
// name: "lily";
// gender : "female";
