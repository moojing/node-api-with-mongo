const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


const ProductSchema = new Schema( { 
    
        title: String,
        sku:String,
        "content":Number, 
        "price": Number,
        "productImageUrl": String,
        "detailImageUrl": String,
        "sizeImageUrl": String,
        "category": Number,
        "spec": {
          "weight": String,
        },
        "size": [
          {
            name:String ,
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number,
            _id : false
          }
        ],
        'star': {
            type:Number, 
            default:4
        }
        
})

ProductSchema.plugin(autoIncrement.plugin, 'Product');
const Product = mongoose.model('Product', ProductSchema)

module.exports = Product