const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

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

db.Customer = require("./Customer")(sequelize,Sequelize);
db.Orders = require("./Orders")(sequelize,Sequelize);

// 1대다 관계일때 hasMany
db.Customer.hasMany(db.Orders,{
    foreignKey : "custid",
    //sourceKey : "custid"
})

db.Orders.belongsTo(db.Customer, {
    // onDelete : "CASCADE",
    foreignKey : "custid",
    // targetKey : "custid"
})


module.exports = db;