function User(Sequelize, DataTypes){
  return Sequelize.define(
      "user",
      {
          // u_id, email, password, name
          u_id: {
              type: DataTypes.STRING(8),
              allowNull: false,
              primaryKey: true
          }, 
          email: {
              type: DataTypes.STRING(30),
              allowNull: false,
          },
          password: {
              type: DataTypes.STRING(255),
              allowNull: false,
          },
          salt: {
              type: DataTypes.STRING(100),
              allowNull: false,
          },
          name: {
              type: DataTypes.STRING(10),
              allowNull: false,
          },
      },
      {
          tableName: "user",
          freezeTableName: true,
          timestamps: false,
      }
  );
}

module.exports = User;