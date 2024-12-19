const express = require('express');
const { UsersTable, BlogsTable } = require('./database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'Welcome to this page.',
  });
});

//login
router.post('/login', (req, res) => {
  UsersTable.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        //comparam parola
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let userToken = jwt.sign(
            {
              id: user.id,
              email: user.email,
            },
            'samplekeyfortoken',
            {
              audience: 'appusers',
              issuer: 'nodeapplication',
              expiresIn: '100000',
              notBefore: '2000',
            }
          );
          res.json({
            status: true,
            message: 'Login successfully.',
            token: userToken,
          });
        } else {
          res.json({
            status: false,
            message: 'Password does not match.',
          });
        }
      } else {
        res.json({
          status: false,
          message: 'User does not exists with this email.',
        });
      }
    })
    .catch((err) => {
      res.json({
        status: false,
        message: err.Message,
      });
    });
});

//register
router.post('/register', (req, res) => {
  //check email
  UsersTable.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        res.json({
          status: false,
          message: 'The email already exists.',
        });
      } else {
        UsersTable.create({
          name: req.body.name,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
        })
          .then((response) => {
            res.json({
              status: true,
              message: 'User registered successfully.',
            });
          })
          .catch((err) => {
            res.json({
              status: false,
              messaage: 'User register failed.',
            });
          });
      }
    })
    .catch((err) => {
      res.json({
        status: false,
        message: err,
      });
    });
});

module.exports = router;
