function User (Sequelize, DataTypes){
    return Sequelize.define(
      "user3",
    //   id INT AUTO_INCREMENT primary key not null,
    // userid varchar(20) not null,
    // name varchar(10) not null,
    // pw varchar(20) not null
      {
        id : {
              type : DataTypes.INTEGER,
              allowNull : false,
              primaryKey : true,
              autoIncrement : true
        },
        userid : {
              type : DataTypes.STRING(10),
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
        tabelName : "user3",
        freezeTableName : true,
        timestamps : false

      }
    )
}

module.exports = User;