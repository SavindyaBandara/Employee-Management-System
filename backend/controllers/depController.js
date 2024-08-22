const Dep = require("../models/addDep");

const getAllDeps = async(req,res,next) =>{
    let depts;

    //get all users
    try{
        depts = await Dep.find();
    }catch (err){
        console.log(err);
    }
    //not found
    if(!depts){
        return res.status(404)
        .json({  message: 'Department not found' });
    }

    return  res.status(200).json({depts});
}
// data insert
const addDeps = async(req,res,next)=>{
    const {Department,description} =req.body;

    let dept;
    try{
        dept = new Dep({Department,description});
        await dept.save();
    }catch(err){
        console.log(err);
    }
    if(!dept){
        return res.status(404)
        .json({  message: 'Unable to add Department' });
    }

    return  res.status(200).json({dept});
}

//find user by id
const getByID = async(req,res,next) =>{
    const id = req.params.id;

    let department;
    try{
        department = await Dep.findById(id);

    }catch(err){
        console.log(err);
    }
    if(!department){
        return res.status(404)
        .json({  message: 'Not found Department' });
    }

    return  res.status(200).json({department});
}

//update user using id
const updateDepartment = async(req,res,next)=>{
    const id = req.params.id;
    const {Department, description} =req.body;

    let dept;
    
    try{
       dept = await Dep.findByIdAndUpdate(id,{ Department:Department, description:description});
        dept = await dept.save();
    }catch(err){
        console.log(err);
    }
    if(!dept){
        return res.status(404).json({  message: 'Unable to update department  ' });
    }

    return  res.status(200).json({dept});

}
//Delete USer
const deleteDepartment =async (req,res,next)=>{
    const id = req.params.id;
    let department;

    try{
        department = await Dep.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    //unable to delete
    if(!department){
        return res.status(404).json({  message: 'No department to delete  ' });
    }

    return  res.status(200).json({department});
}
exports.getAllDeps = getAllDeps;
exports.addDeps = addDeps;
exports.getByID = getByID;
exports.updateDepartment = updateDepartment;
exports.deleteDepartment = deleteDepartment;