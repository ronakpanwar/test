const express = require("express");
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const cors = require('cors')
const PORT = 8000;

const app = express();

app.use(express.json());
const  corsOptions  = {
    origin:"https://test-w5hz.vercel.app",
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true
}
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use('/bfhl', apiRoutes);
app.get("/" , (req,res)=>{
  res.json('Hello') } );

app.listen( PORT , ()=>{
    console.log("Server start on 8000");
})

