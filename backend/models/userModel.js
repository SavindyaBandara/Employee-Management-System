const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName :{
        type :String,  //data type
        required:true  //validate
    },
    lastName :{
        type :String,  //data type
        required:true  //validate
    },
    Address :{
        type :String,  //data type
        required:true  //validate
    },
    email:{
        type : String,
        required:true
    },
    Department:{
        type:String,
        required:true
    }
   
});

module.exports = mongoose.model(
    "userModel"  //file name
    ,userSchema //function name
) 