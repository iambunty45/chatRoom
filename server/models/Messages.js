const mongoose = require("mongoose");

const MessagesSchma = new mongoose.Schema(
    {
        userId :{type:String,require:true},
        chatRoomId :{type:String,require:true},
        msgText:{type:String,require:true}
    },{timestamps:true}
);

module.exports =mongoose.model("Messages",MessagesSchma);