/**
 * message model
 */
const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
 

module.exports = mongoose.model('message', messageSchema);
