const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config({path:'./config/.env'});

const port = process.env.PORT;

const user = require('./models/User');




const DBconnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);

    console.log("Data base is connected");
  } catch (error) {
    console.log(error);
  }
};

DBconnect()
app.use(express.json());
app.use("/user",require("./routes/userRoute"))






  app.listen(port, ()=> {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s', port);
  });