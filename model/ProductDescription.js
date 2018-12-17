const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const autoIncrement = require('./mongoConnect').autoIncrement


const DescriptionSchema = new Schema( { 
   
    
        'zh-cn':{
            description:{
                tilte: String,
                text:String,
            },
            spec:{
                weight: String,
                gear: String,
                frame: String,
                fork: String,
                derailleur: String,
                brakes: String,
                wheelset: String,
                saddle: String,
                size: String,
                color: String,
            },
            
        },
        'en-us':{
            description:{
                tilte: String,
                text:String,  
            },
            spec:{
                weight: String,
                gear: String,
                frame: String,
                fork: String,
                derailleur: String,
                brakes: String,
                wheelset: String,
                saddle: String,
                size: String,
                color: String,
            },
            
        },
        'ja-jp':{
            description:{
                tilte: String,
                text:String,
            },
            spec:{
                weight: String,
                gear: String,
                frame: String,
                fork: String,
                derailleur: String,
                brakes: String,
                wheelset: String,
                saddle: String,
                size: String,
                color: String,
            },
            
        },
        'it-ch':{
            description:{
                tilte: String,
                text:String,
            },
            spec:{
                weight: String,
                gear: String,
                frame: String,
                fork: String,
                derailleur: String,
                brakes: String,
                wheelset: String,
                saddle: String,
                size: String,
                color: String,
            },
            
        },
        'es-es':{
            description:{
                tilte: String,
                text:String,
            },
            spec:{
                weight: String,
                gear: String,
                frame: String,
                fork: String,
                derailleur: String,
                brakes: String,
                wheelset: String,
                saddle: String,
                size: String,
                color: String,
            },
            
        },



   
    
    
})

DescriptionSchema.plugin(autoIncrement.plugin, 'Description');
const Description = mongoose.model('ProductDescription', DescriptionSchema)

module.exports = Description