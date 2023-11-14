function Comment(Sequelize, DataTypes){
    return Sequelize.define(
        "comment",
        {
            // c_id(pk), g_id(fk), star, review
            c_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            g_id: {
                type: DataTypes.INTEGER,
                allowNull:false,
                // index.js 에서 조인설정해놈
            },
            star: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            review: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
        },
        {
            tableName: "comment",
        }
    )
}
module.exports = Comment;