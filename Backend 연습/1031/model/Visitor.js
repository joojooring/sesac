// 테이블의 구조를 정의
// orm은 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해서 table 구조를 정의할 필요가 있음.

function Visitor (Sequelize, DataTypes) {
  return Sequelize.define( //테이블 정의할때 쓰는게 Sequelize.define : define 기본적으로 세개의 인자를 받음
    "visitor", //define메소드의 첫 인자로는 테이블 이름
    {
      id :{ //int auto_increment primary key not null
          type : DataTypes.INTEGER,
          allowNull : false,
          primaryKey : true, //id가 primary key 이므로 true로!! 기본값이 false임
          autoIncrement : true
      },
      username : { //varchar(10) not null
          type : DataTypes.STRING(10),
          allowNull : false 
      },
      comment : { // comment mediumtext
        type : DataTypes.TEXT("medium")
      }

    }, //두번째는 객체 : visitor 테이블에 어떤 컬럼이 들어가는지에 대한 정의
    {
      tableName : "visitor",
      freezeTableName : true, // tableName을 고정시키겠다는 뜻임 
      timestamps : false // 데이터에 insert,update가 발생할때 자동저장하겠다하면 timestamps true인데 이게 기본값
                        // 근데 자동저장 안하겠다하면 timestamps false로 줘야 됨

    } //세번쨰는 객체 : 부가적인 세팅
  )
}

// 위에서 정의한 Visitor exports 해야됨;
// 그럼 db연결이 된거임
module.exports = Visitor;
