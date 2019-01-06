const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const autoIncrement = require('./mongoConnect').autoIncrement


const NewsSchema =  new Schema({ 
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
        "it-ch":{
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
NewsSchema.plugin(autoIncrement.plugin, 'News' );
const News = mongoose.model('News', NewsSchema)

module.exports = News