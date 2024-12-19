const { Sequelize, DataTypes } = require('sequelize');
// var md5 = require('md5');

//Database object
const sequelizeDbObject = new Sequelize(
  'node_phase2_apis',
  'george',
  '2580_Vlad',
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);
//Check database
sequelizeDbObject
  .authenticate()
  .then((response) => {
    console.log('Database connected successfully.');
  })
  .catch((err) => {
    console.log(err);
  });

//define users table
const usersTable = sequelizeDbObject.define(
  'users',
  {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
      //   set(value) {
      //     this.setDataValue('password', md5(value));
      //   },
    },
  },
  {
    timestamps: false,
  }
);
//define blog table
const blogsTable = sequelizeDbObject.define(
  'blogs',
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

//sequelizeDbObject.sync({ force: true });

module.exports = {
  UsersTable: usersTable,
  BlogsTable: blogsTable,
};
