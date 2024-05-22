//imports
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


//middlewares
const app = express();
mongoose.Promise = global.Promise;
app.use(cors())
app.use(bodyParser.json())


//global variables
const URL = "mongodb://localhost:27017/employeeDetails"
const PORT = 3000;
const employeeRoutes = require('./Routes/Employee.route')



mongoose.connect(URL).then(()=>{console.log("database is connected")},err=>{
    console.log(`something went wrong ${err}`)
})

 app.use('/employees', employeeRoutes);

app.get("/", (req, res) => {
    res.send("hello ")
})

app.listen(PORT, (err) => {
    console.log("server is running on port " + PORT)
})