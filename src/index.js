const express = require('express');
const loginRouter = require('./routes/login');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
