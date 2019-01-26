const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  forum_id: {type: Schema.ObjectId, ref: "Forum"},
  user_id: {type: Schema.ObjectId, ref: "User"},
  date: Date,
  content: String
});

module.exports = mongoose.model('message', messageSchema);
