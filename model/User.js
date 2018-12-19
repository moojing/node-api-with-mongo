const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new Schema( { 
    name: String,
    password: String,
    admin: Boolean
})

 

 
const User = mongoose.model('User', UserSchema)

module.exports = User