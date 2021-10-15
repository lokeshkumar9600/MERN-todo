const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/mernTodo",{useNewUrlParser:true,useUnifiedTopology:true});

const connection = mongoose.connection;

connection.once('open',()=>{
   console.log("database connection established");
});

const dataRouter = require('./routes/dataRouter');

app.use("/data",dataRouter);

app.listen(5000,(req, res) => {
    console.log("server is running on port 5000");
});

