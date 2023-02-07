const mongoose =require("mongoose");

const ChatRoomSchma = new mongoose.Schema(
{
    createdUserId:{type:String,require:true},
    chatRoomName:{type:String,require:true},
    joinUsers:[
        {
            userId:{type:String,require:true}
        }
    ]
},{timestamps:true}
);

module.exports=mongoose.model("ChatRoom",ChatRoomSchma)