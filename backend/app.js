

const express = require("express");
const mongoose = require("mongoose");
const userrouter = require("./routes/userRoutes");
const deprouter = require("./routes/departRoutes");

const cors=require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/users",userrouter);
app.use("/departments",deprouter);

//Middleware



mongoose.connect("mongodb link and password")
.then(()=>console.log("MongoDB connected Succesfully"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=>console.log((err)));