const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const autoIncrement = require('./mongoConnect').autoIncrement

const ObjectId = mongoose.Schema.Types.ObjectId;



const CategorySchema = new Schema( { 
    name:{
        'zh-cn':{
            type:String,
            required:true
        },
        'en-us':{
            type:String,
            required:true
        }, 
        'ja-jp':{
            type:String,
            required:true
        }, 
        'it-it':{
            type:String,
            required:true
        }, 
        'es-es':{
            type:String,
            required:true
        }, 
    }, 
})

CategorySchema.plugin(autoIncrement.plugin, 'ProductCategory');
const Category = mongoose.model('ProductCategory', CategorySchema)

module.exports = Category