const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const depSchema = new Schema({
    Department:{
        type:String,
        required:true
    },
    description :{
        type : String,
        required: true
    }
   
});

module.exports = mongoose.model(
    "addDep"  //file name
    ,depSchema //function name
) 

