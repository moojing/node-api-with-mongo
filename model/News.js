const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const NewsSchema =  { name: String }

const News = mongoose.model('News', new Schema(NewsSchema))

module.exports = News