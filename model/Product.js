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
        "size":{
          CRANK_LENGTH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          STEM_LENGTH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          SEATPOST_LENGTH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          SADDLE_WIDTH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          HANDLEBAR_WIDTH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          REACH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          TOP_TUBE_LENGTH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          STACK:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },

          WHEELBASE:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          CHAINSTAY_LENGTH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          FRONT_CENTER:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          BB_DROP:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          BB_HEIGHT:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          SEAT_TUBE_ANGLE:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          HEAD_TUBE_ANGLE:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          SEAT_TUBE_LENGTH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          HEAD_TUBE_LENGTH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          FORK_LENGTH:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
          TRAIL:{
            "44": Number,
            "46": Number,
            "48": Number,
            "50": Number,
            "52": Number,
            "54": Number
          },
        },
        'star': {
            type:Number, 
            default:4
        }
        
})

ProductSchema.plugin(autoIncrement.plugin, 'Product');

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product