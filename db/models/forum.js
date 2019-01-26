const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define userSchema
const forumSchema = new Schema({
    name: { type: String, unique: false }	
})

// Create reference to Forum & export
const Forum = mongoose.model('Forum', forumSchema)
module.exports = Forum
