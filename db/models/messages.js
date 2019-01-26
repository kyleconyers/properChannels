/**
 * message model
 */
const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  forum_id: mongoose.Schema.ObjectId,
  forum: { type: mongoose.Schema.ObjectId, ref: 'forum' },
  user_id: mongoose.Schema.ObjectId,
  user: { type: mongoose.Schema.ObjectId, ref: 'user' },
  date: Date,
  title: String,
  content: Object,
  favorites: Array,
  tags: Array,
});

module.exports = mongoose.model('message', messageSchema);
