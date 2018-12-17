const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const ObjectId = mongoose.Schema.Types.ObjectId;

const BannerSchema = new Schema( { 
    banners:{
        top:{
            backgroundImg:String,  
            i18n:{
                "zh-cn":{
                    title:String,
                    btnText:String
                },
                "en-us":{
                    title:String,
                    btnText:String
                },
                "it-ch":{
                    title:String,
                    btnText:String
                },
                "ja-jp":{
                    title:String,
                    btnText:String
                },
                "es-es":{
                    title:String,
                    btnText:String
                },
            },
        },

    }
})

BannerSchema.static('getSingleton', function (cb,lang) {
    return BannerSchema.find({},{menus:{$elemMatch:{lang}}})
                .limit(1)
                .exec(function (error, model) {
                   console.log('model has found:',model)
                    if (error) {
                        cb(error, null);
                    } else if (!model|| model.length==0) {
                        let genModel = new BannerSchema(); 
                        genModel.save()
                        cb(error,genModel);
                    } else {
                        cb(error, model);
                    }
                });
    });


 
const Banner = mongoose.model('Banner', BannerSchema)

module.exports = Banner