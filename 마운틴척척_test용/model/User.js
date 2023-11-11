function User(Sequelize, DataTypes) {
    return Sequelize.define(
      'user',
      {
        u_id: {
          type: DataTypes.STRING(8),
          allowNull: false,
          primaryKey: true
        },
        email: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        tableName: 'User',
        freezeTableName: true,
        timestamps: false,
      }
    )
  }
  
  module.exports = User
  