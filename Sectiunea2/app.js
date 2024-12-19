const express = require('express');
const bodyParser = require('body-parser');
const appRoutes = require('./routes');

const app = express();
const port = 8087;
//

app.use(bodyParser.json());
app.use('/', appRoutes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
