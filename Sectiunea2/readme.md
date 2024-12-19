# APIs Development in Node JS with Sequelize ORM

13. Development plan

---

Required Packages: express, nodemon, mysql2, sequelize, body-parser

# sequelize

Sequelize este un instrument ORM Node.js ușor de utilizat și promise-based pentru Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server și Snowflake. Dispune de suport solid pentru tranzacții, relații, încărcare nerabdatoare și leneșă, replicare de citire și multe altele.
Se instaleaza cu: 'npm i @subql/x-sequelize'

# mysql2

Client MySQL pentru Node.js cu accent pe performanță. Suportă declarații pregătite, codificări non-utf8, protocol de jurnal binar, compresie, ssl mult mai mult.

# body-parser

Middleware de analiză al body in Node.js.
Analizeaza body-urile request primite într-un middleware înaintea handler-elor dvs., disponibil sub proprietatea req.body.

Pentru a le instala:
npm i express nodemon mysql2 sequelize body-parser

14. Settings of "express" Package

---

se face asa cum am invatat

15. About Database Connectivity

---

const Sequelize = require('sequelize');

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
console.log('**_database connected_**');
})
.catch((error) => {
console.log(error);
});

---

16. Create a table in database (Metoda 1)

---

Table name: users
Colums names:
id,
name,
email,
password,
created_at,
updated_at

---

const { Sequelize, DataTypes } = require('sequelize');

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
// Create 'users' table in database
sequelizeDBObject.define(
'users',
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
{ timestamps: false }
);

sequelizeDBObject.sync();

---

17. Create a table in database (Metoda 2)

---

const { Sequelize, DataTypes } = require('sequelize');

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

// Create 'users' table in database
const Model = Sequelize.Model;
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
password: {
type: DataTypes.STRING(60),
allowNull: false,
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

---

18. Save Data API

---

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/add-user', (req, res) => {
UserTable.create(req.body)
.then((success) => {
console.log('User created.');
res.send({
status: true,
message: 'User created',
});
})
.catch((error) => {
console.log(error);
});
});

19. Manage app code
20. Save data bulk
21. List Data API
