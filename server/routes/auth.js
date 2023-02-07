const User = require("../models/User");
const router =require("express").Router();
const CryptoJS =require("crypto-js");


//User Register
router.post("/register",async(req,res)=>{
    const newUser =new User({
        userName:req.body.userName,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),  //encrypt password
    });

    try {
        const savedUser =await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

//User Login
router.post("/login",async(req,res)=>{
    try {  
        const user = await User.findOne({email:req.body.email});
        !user && res.status(401).send("User not found");
        
        const hashedPassword =CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);  //decrypt password
        const userPassword =hashedPassword.toString(CryptoJS.enc.Utf8);
        userPassword !== req.body.password && res.status(401).send("Wrong Password");
        const {password ,...other} =user._doc;  //remove password from userData
        res.status(200).json(other)
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports =router;