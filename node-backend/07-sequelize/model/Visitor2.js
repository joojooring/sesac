// 테이블의 구조를 정의
// orm은 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해서 table의 구조를 정의할 필요가 있음.


function Visitor(Sequelize, DataTypes) {
    return Sequelize.define( //모델(테이블)정의, sequelize객체의 define메소드를 이용해서!
        "visitor", //테이블 이름
        { 
        id : {// INT AUTO_INCREMENT primary key not null
            type : DataTypes.INTEGER,
            allowNull : false , //not null 일때는 false, true가 기본 값
            primaryKey : true, //false가 기본 값
            autoIncrement : true //flase가 기본값
        } ,
        username : { //varchar(10) not null
            type : DataTypes.STRING(10),
            allowNull : false

        } ,
        comment : {
            type : DataTypes.TEXT("medium"),
            allowNull : false
        }

        }, //객체 (컬럼정의 key에는 컬럼의 이름)
        {
            tableName : "visitor",
            freezeTableName : true, //tableName을 고정시키겠다는 뜻임 (sequelize에서 간혹 단수로 지정해둔 테이블이름을 sql문을 날릴때 복수로 변경시킴 그때를 대비하기 위해)
                                    //insert into visitor~~~ => create() => insert into visitors
            timestamps : false //데이터에 insert,update 가 일어날 때 자동으로 저장하겠다는 옵션이라 자동 저장을 안하려면 false로 해야됨

        } // 겍체 (부가적인 세팅)
    )
}

module.exports = Visitor;
