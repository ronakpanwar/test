const express = require("express");
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use('/bfhl', apiRoutes);

app.listen( PORT , ()=>{
    console.log("Server start on 8000");
})

