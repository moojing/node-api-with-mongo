const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const autoIncrement = require('./mongoConnect').autoIncrement


const TeamSchema =  new Schema({ 
    created_at: Date,
    img1:String,
    img2:String,
    i18n:{
        "zh-cn":{
            title:String,
            description:String,  
        },
        "en-us":{
            title:String,
            description:String
        },
        "it-it":{
            title:String,
            description:String
        },
        "ja-jp":{
            title:String,
            description:String
        },
        "es-es":{
            title:String,
            description:String
        }
    }
})
TeamSchema.plugin(autoIncrement.plugin, 'Team' );
const Team = mongoose.model('Team', TeamSchema)

module.exports = Team