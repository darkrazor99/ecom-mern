const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.port || 4000;

dbConnect();
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => {
    console.log(`server running at port ${port}!`)
});

