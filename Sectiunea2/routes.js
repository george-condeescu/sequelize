const express = require('express');
const userTable = require('./database');

const router = express.Router();

//welcome page route
router.get('/', (req, res) => {
  res.send({
    status: true,
    message: 'Welcome to Phase #1 API Development.',
    packages: ['express', 'nodemon', 'mysql2', 'sequelize', 'body-parser'],
  });
});

//get all users
router.get('/users', async (req, res) => {
  await userTable
    .findAll()
    .then((users) => {
      res.json({
        status: true,
        message: 'Users found.',
        data: users,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: false,
        message: 'Failed to get users.',
      });
    });
});

//get user by id
router.get('/users/:id', async (req, res) => {
  const id = req.params.id;
  await userTable
    .findByPk(id)
    .then((user) => {
      res.json({
        status: true,
        message: 'User found.',
        data: user,
      });
    })
    .catch((err) => {
      res.json({
        status: false,
        message: 'No user found.',
      });
    });
});

//update user
router.put('/users/:id', async (req, res) => {
  const id = req.params.id;
  await userTable
    .findByPk(id)
    .then(async (user) => {
      await userTable
        .update(
          {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
          },
          {
            where: {
              id: id,
            },
          }
        )
        .then((response) => {
          res.json({
            status: true,
            message: 'User updated successfully.',
            data: response,
          });
        })
        .catch((err) => {
          res.json({
            status: false,
            message: 'Failed to update user.',
          });
        });
    })
    .catch((err) => {
      res.json({
        status: false,
        message: 'User not found',
      });
    });
});
// //delete user - method 1
// router.delete('/delete-user/:id', (req, res) => {
//   // User Check
//   userTable
//     .findOne({
//       where: {
//         id: req.params.id,
//       },
//     })
//     .then((user) => {
//       if (user) {
//         // user found

//         userTable
//           .destroy({
//             where: {
//               id: req.params.id,
//             },
//           })
//           .then((response) => {
//             res.json({
//               status: true,
//               message: 'User deleted',
//             });
//           })
//           .catch((error) => {
//             res.json({
//               status: false,
//               message: 'Failed to execute delete query',
//             });
//           });
//       } else {
//         res.json({
//           status: false,
//           message: 'No user found',
//         });
//       }
//     })
//     .catch((error) => {
//       res.json({
//         status: false,
//         message: 'Failed to execute to get user data',
//       });
//     });
// });

//delete user
router.delete('/users/:id', async (req, res) => {
  //user check
  await userTable
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then(async (user) => {
      if (user) {
        await userTable
          .destroy({
            where: {
              id: req.params.id,
            },
          })
          .then((response) => {
            res.json({
              status: true,
              message: 'User deleted successfully.',
            });
          })
          .catch((err) => {
            res.json({
              status: false,
              message: 'Can not delete user.',
            });
          });
      } else {
        res.json({
          status: false,
          message: 'No user found.',
        });
      }
    })
    .catch((err) => {
      res.json({
        status: false,
        message: 'Failed to execute to get user data',
      });
    });
});

//add users in table
router.post('/users/addBulk', async (req, res) => {
  await userTable
    .bulkCreate([
      {
        username: 'user1',
        email: 'user1@gmail.com',
        password: '12345',
      },
      {
        username: 'user2',
        email: 'user2@gmail.com',
        password: '2345',
      },
    ])
    .then(() => {
      res.json({
        status: true,
        message: 'Users created.',
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

//add user in table
router.post('/add-user', async (req, res) => {
  await userTable
    .create(req.body)
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

module.exports = router;
