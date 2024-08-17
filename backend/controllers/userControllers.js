const User = require("../models/userModel");

const getAllUsers = async(req,res,next) =>{
    let users;

    //get all users
    try{
        users = await User.find();
    }catch (err){
        console.log(err);
    }
    //not found
    if(!users){
        return res.status(404)
        .json({  message: 'User not found' });
    }

    return  res.status(200).json({users});
}
// data insert
const addUsers = async(req,res,next)=>{
    const {firstName, lastName, email,Address, Department} =req.body;

    let users;
    try{
        users = new User({firstName, lastName, email,Address, Department});
        await users.save();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404)
        .json({  message: 'Unable to add users' });
    }

    return  res.status(200).json({users});
}

//find user by id
const getByID = async(req,res,next) =>{
    const id = req.params.id;

    let user;
    try{
        user = await User.findById(id);

    }catch(err){
        console.log(err);
    }
    if(!user){
        return res.status(404)
        .json({  message: 'Not found users' });
    }

    return  res.status(200).json({user});
}

//update user using id
const updateUser = async(req,res,next)=>{
    const id = req.params.id;
    const {firstName, lastName, email,Address, Department} =req.body;

    let users;
    
    try{
       users = await User.findByIdAndUpdate(id,{firstName :firstName, lastName:lastName, email:email,Address:Address, Department:Department});
        users = await users.save();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({  message: 'Unable to update user  ' });
    }

    return  res.status(200).json({users});

}
//Delete USer
const deleteUser =async (req,res,next)=>{
    const id = req.params.id;
    let user;

    try{
        user = await User.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    //unable to delete
    if(!user){
        return res.status(404).json({  message: 'No user to delete  ' });
    }

    return  res.status(200).json({user});
}
exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getByID = getByID;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;