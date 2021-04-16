const express = require('express');
const cors = require('cors');
const apiRouter = require('./api/apiRouter');

const app = express();
const PORT = 3005;

app.use(cors());

app.use(express.json())
app.use('/api', apiRouter);

app.listen(PORT, err => {
    err ? console.log(err) : console.log(`Server started on port ${PORT}`);
  });