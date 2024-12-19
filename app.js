const express = require('express');
const appRoutes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use('/', appRoutes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
