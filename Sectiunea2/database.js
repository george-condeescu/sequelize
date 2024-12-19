const { Sequelize, DataTypes } = require('sequelize');
const md5 = require('md5');

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

//To check database connectivity
sequelizeDBObject
  .authenticate()
  .then(() => {
    console.log('***database connected***');
  })
  .catch((error) => {
    console.log(error);
  });

// Create 'users' table in databas
//--------------------------------

/* Metoda 1 */

// sequelizeDBObject.define(
//   'users',
//   {
//     name: {
//       type: DataTypes.STRING(120),
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING(50),
//       allowNull: false,
//     },
//     gender: {
//       type: DataTypes.ENUM('male', 'female'),
//       defaultValue: 'male',
//     },
//     created_at: {
//       type: DataTypes.DATE,
//       defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//     },
//     updated_at: {
//       type: DataTypes.DATE,
//       defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
//     },
//   },
//   { timestamps: false }
// );

/* Metoda 2 */
//------------

const Model = Sequelize.Model;
class Users extends Model {}

const UserTable = Users.init(
  {
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
      set(value) {
        // Storing passwords in plaintext in the database is terrible.
        // Hashing the value with an appropriate cryptographic hash function is better.
        // Using the username as a salt is better.
        this.setDataValue('password', md5(value));
      },
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
    sequelize: sequelizeDBObject,
    modelName: 'users',
    timestamps: false,
  }
);
sequelizeDBObject.sync();

module.exports = UserTable;
