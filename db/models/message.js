const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    forum_id: {type: Schema.ObjectId, ref: "Forum"},
    user: {type: Schema.ObjectId, ref: "User"},
    date: Date,
    content: String,
    tag: String
});

messageSchema.pre("find", function() 
    {this.populate("user")
})

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
