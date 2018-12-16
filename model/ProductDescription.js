const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const DescriptionSchema = new Schema( { 
    productId:Number,
    content:{
        'zh-cn':{
            tilte: String,
            text:String,
            imageUrl: String
        },
        'en-us':{
            tilte: String,
            text:String,
            imageUrl: String
        },
        'ja-jp':{
            tilte: String,
            text:String,
            imageUrl: String
        },
        'it-ch':{
            tilte: String,
            text:String,
            imageUrl: String
        },
        'es-es':{
            tilte: String,
            text:String,
            imageUrl: String
        }
    }, 
})

DescriptionSchema.plugin(autoIncrement.plugin, 'Description');
const Description = mongoose.model('Description', DescriptionSchema)

module.exports = Description