const ChatRoom = require("../models/ChatRoom");

const router = require("express").Router();

//Create New Room
router.post("/newChatRoom",async(req,res)=>{
    const newChatRoom = new ChatRoom(req.body);
    try {
    const chatRoom = await newChatRoom.save();
    res.status(201).json(chatRoom);
    } catch (error) {
    res.status(500).json(error);
    }
    
})

module.exports =router;