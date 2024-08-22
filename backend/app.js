//password = D3gXYY9rAt3ynyfD

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



mongoose.connect("mongodb+srv://admin:D3gXYY9rAt3ynyfD@cluster0.iyih7.mongodb.net/")
.then(()=>console.log("MongoDB connected Succesfully"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=>console.log((err)));