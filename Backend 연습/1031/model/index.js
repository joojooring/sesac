const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];


const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// const Visitor = require("./Visitor")
// db.Visitor =Visitor(sequelize, Sequelize)

db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.Login =require("./Login")(sequelize, Sequelize)
module.exports = db;