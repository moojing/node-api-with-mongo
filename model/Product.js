const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const autoIncrement = require('./mongoConnect').autoIncrement
const ObjectID =  require('mongodb').ObjectID

const ProductSchema = new Schema({ 
        created_at: Date,
        title: String,
        sku:String,
        "i18n":{
          type:Number, 
          ref:"ProductDescription"
        }, 
        "price": Number,
        "productImageUrl": String,
        "descriptionImageUrl": String,
        "specImageUrl": String,
        "sizeImageUrl": String,
        "category": {
          type:Number, 
          ref:"ProductCategory"
        },
        "size":[
          {
            name:String ,
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number,
            _id : false
          }],
        'star': {
            type:Number, 
            default:4
        }
        
})

ProductSchema.plugin(autoIncrement.plugin, 'Product');
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product