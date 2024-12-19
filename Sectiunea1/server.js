const express = require('express');

const app = express();
const port = 8080;

app.get('/', function (req, res) {
  res.send({
    status: true,
    message: 'Welcome express application.',
  });
});
app.get('/about-us', function (req, res) {
  res.send({
    status: true,
    message: 'About us...',
    data: {
      name: 'George Condeescu',
      email: 'george_condeescu@yahoo.com',
    },
  });
});
//utilizam arrow function
app.get('/products', (req, res) => {
  res.send({
    status: true,
    message: 'Products.',
  });
});

//save data
app.post('/save-data', (req, res) => {
  res.send({
    status: true,
    message: 'Data saved successfully',
  });
});
//update data
app.put('/update-data', (req, res) => {
  res.send({
    status: true,
    message: 'Update data successfully.',
  });
});
//delete data
app.delete('/delete-data', (req, res) => {
  res.send({
    status: true,
    message: 'Delete data successfully.',
  });
});

app.listen(port, function () {
  console.log(`Server started on http://localhost:${port}`);
});
