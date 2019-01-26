const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
  forum_id: mongoose.Schema.ObjectId,
  user_id: mongoose.Schema.ObjectId,
  date: Date,
  content: String
});

module.exports = mongoose.model('message', messageSchema);
