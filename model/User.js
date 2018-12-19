const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new Schema( { 
    name: String,
    password: String,
    admin: Boolean
})

 
const User = mongoose.model('User', UserSchema)

User.create({
    name: 'admin', 
    password:'$2b$10$OkFwQNUgSSJgPGCuS6Se..8RW78pQEdcz05xyj4QpzRqlSzDXvpUu', 
    admin:true
})
module.exports = User