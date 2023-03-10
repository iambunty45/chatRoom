const mongoose =require("mongoose");


const UserSchma =new mongoose.Schema(
    {
        userName:{type:String,require:true},
        email:{type:String,require:true,unique:true},
        password:{type:String,require:true}
    },{timestamps:true}
);

module.exports=mongoose.model("User",UserSchma);