const express =require("express");
const mongoose =require("mongoose");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
const authRouter =require("./routes/auth");

dotenv.config();
const app = express();


//Database
mongoose
    .connect(process.env.MONGOURL)  
    .then("Database Successfully Contected")
    .catch(err=>console.log(err));

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/auth",authRouter);



app.listen(5000,()=>{
    console.log("server running at 5000 port")
})























// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mysql = require("mysql");
// const app = express();
 
//database
// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "crud" 
// });

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));

// app.listen(3000, function () {
//    console.log("server running on 3000"); 
// });
