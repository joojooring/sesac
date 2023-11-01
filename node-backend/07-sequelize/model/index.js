const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];
// config = {
//     "host":"localhost",
//     "database" : "sesac_test",
//     "username" : "user",
//     "password" : "1234fang^^",
//     "dialect" : "mysql"

// }

const db = {};

// sequelize 객체를 만든다.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);


db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = { sequelize : sequelize, Sequelize : Sequelize }




// const Visitor2 = require("./Visitor2")
// db.Visitor2 = Visitor2(sequelize, Sequelize)
// 위에랑 밑에랑 같은 코드임
db.Visitor2 = require("./Visitor2")(sequelize, Sequelize);
// db.Visitor에는 sequelize로 visitor테이블을 정의한 객체가 담겨있음


module.exports = db;