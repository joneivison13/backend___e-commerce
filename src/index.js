const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require("mongoose");
const requireDir = require('require-dir')

const app = express();
const routes = require('./routes');

mongoose.connect(
    "mongodb+srv://joneivison:iasmimoo@cluster0-w1dhm.gcp.mongodb.net/test?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  );

app.use(cors());

requireDir("./models");

app.use(bodyParser.json());

app.use(express.json());

app.use(routes)

app.listen(3001);
