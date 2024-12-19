const { Sequelize } = require('sequelize');
//Database Object
const sequelizeDBObject = new Sequelize(
  'node_phase1_apis',
  'george',
  '2580_Vlad',
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

const Model = Sequelize.Model();

class Users extends Model {}
Users.init(
  {
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('male', 'female'),
      defaultValue: 'male',
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    sequelizeDBObject,
    modelName: 'Users',
    timestamps: false,
  }
);
