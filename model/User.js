const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new Schema( { 
    name: String,
    password: String,
    admin: Boolean
})

 


UserSchema.static('getSingleton', function (cb,lang) {
    return User.findOne({})
                .limit(1)
                .exec(async function (error, model) {
                   console.log('model has found:',model)
                    if (error) {
                        cb(error, null);
                    } else if (!model|| model.length==0) {
                        
                        let genModel = await User.create({
                            name: 'admin', 
                            password:'$2b$10$OkFwQNUgSSJgPGCuS6Se..8RW78pQEdcz05xyj4QpzRqlSzDXvpUu', 
                            admin:true
                        })
                        cb(error,genModel);
                    } else {
                        cb(error, model);
                    }
                });
    });

const User = mongoose.model('User', UserSchema)
module.exports = User