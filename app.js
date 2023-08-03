const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.port || 4000;
const authRouter = require('./routes/authRoutes');
const bodyParser = require('body-parser');


dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/user', authRouter);

app.listen(port, () => {
    console.log(`server running at port ${port}!`)
});

