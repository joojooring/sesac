const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database, // db이름
    config.username, // 유저
    config.password, // pw
    config
)

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Comment = require("./Comment")(sequelize, Sequelize);
db.Gallery = require("./Gallery")(sequelize, Sequelize);
db.Heart = require("./Heart")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

//commet랑 조인
db.Gallery.hasMany(db.Comment, {
    foreignKey:"g_id",
})

db.Comment.belongsTo(db.Gallery, {
    onDelete: "cascade",
    foreignKey: "g_id",
}) // -----------------------


// heart랑 조인
db.Gallery.hasMany(db.Heart, {
    foreignKey: "g_id",
})
db.Heart.belongsTo(db.Gallery,  {
    //  onDelete: "cascade",
        foreignKey: "g_id",
})
db.User.hasMany(db.Heart, {
    foreignKey: "u_id",
})
db.Heart.belongsTo(db.User, {
    ondelete: "cascade",
    foreignKey: "u_id",
})

module.exports = db;