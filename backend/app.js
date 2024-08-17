//password = D3gXYY9rAt3ynyfD

const express = require("express");
const mongoose = require("mongoose");


const router = require("./routes/userRoutes");
const app = express();

//Middleware
app.use(express.json());
const cors=require("cors");

app.use("/users",router);
app.use(cors());

mongoose.connect("mongodb+srv://admin:D3gXYY9rAt3ynyfD@cluster0.iyih7.mongodb.net/")
.then(()=>console.log("MongoDB connected Succesfully"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=>console.log((err)));