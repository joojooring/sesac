function Login ( Sequelize, DataTypes){
    return Sequelize.define(
        "user3",
        {
            id : {
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true, 
                autoIncrement : true
                },
            userid : {
                type : DataTypes.STRING(20),
                allowNull : false 
                },
            name : {
                type : DataTypes.STRING(10),
                allowNull : false 
                },
            pw : {
                type : DataTypes.STRING(20),
                allowNull : false 
                }
        },
        {
            tableName : "user3",
            freezeTableName : true,
            timestamps : false
        }
    )
}

module.exports = Login;
