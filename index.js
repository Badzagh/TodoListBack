const express = require('express');
const mongoose = require("mongoose");
const itemRouter = require('./routes/itemUrl');
const cors = require('cors');
const app = express();
let bodyParser = require("body-parser");
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/items', itemRouter);

mongoose.connect('mongodb+srv://bertold:q5AgthGqVN2zR4FV@cluster0.1fo2e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

