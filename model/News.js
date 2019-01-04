const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const autoIncrement = require('./mongoConnect').autoIncrement


const NewsSchema =  new Schema({ 
    img1:String,
    img2:String,
    i18n:{
        "zh-cn":{
            title:"",
            description:"",
            
        },
        "en-us":{
            title:"",
            description:""
        },
        "it-ch":{
            title:"",
            description:""
        },
        "ja-jp":{
            title:"",
            description:""
        },
        "es-es":{
            title:"",
            description:""
        }
    } 
})
NewsSchema.plugin(autoIncrement.plugin, 'News');
const News = mongoose.model('News', new Schema(NewsSchema))

module.exports = News