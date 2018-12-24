const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const ObjectId = mongoose.Schema.Types.ObjectId;
const bannerData = require('./schema/banner') 
const BannerSchema = new Schema( { 
    ...bannerData
})
console.log('bannerData',bannerData)
BannerSchema.static('getSingleton', function (cb,lang) {
    return Banner.find({},{menus:{$elemMatch:{lang}}})
                .limit(1)
                .exec(function (error, model) {
                   console.log('model has found:',model)
                    if (error) {
                        cb(error, null);
                    } else if (!model|| model.length==0) {
                        let genModel = new Banner(); 
                        genModel.save()
                        cb(error,genModel);
                    } else {
                        cb(error, model);
                    }
                });
    });


 
const Banner = mongoose.model('Banner', BannerSchema)

module.exports = Banner