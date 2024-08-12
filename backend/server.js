
require('dotenv').config()

const express = require("express");

//express app being stored in app variable
const app = express();

//global middleware
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()    
})

//reacting to requests on port 4000 / routes / middleware
app.get("/", (req, res) => {
    res.json({ mssg: "Welcome to the App" });  
});


//listening to a certain port number /request
app.listen(process.env.PORT, () => {
  console.log("listening on port ",process.env.PORT);
});