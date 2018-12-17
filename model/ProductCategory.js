const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const autoIncrement = require('./mongoConnect').autoIncrement

const ObjectId = mongoose.Schema.Types.ObjectId;



const CategorySchema = new Schema( { 
    name:{
        'zh-cn':String, 
        'en-us':String, 
        'ja-jp':String, 
        'it-ch':String, 
        'es-es':String, 
    }, 
})

CategorySchema.plugin(autoIncrement.plugin, 'Category');
const Category = mongoose.model('Category', CategorySchema)

module.exports = Category