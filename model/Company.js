const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
const companyData = require('./default/company') 

const CompanySchema = new Schema( { 
     img1: String, 
     img2: String, 
     i18n:{
        "zh-cn":{
            title:String,
            description:String
        },
        "en-us":{
            title:String,
            description:String
        },
        "it-it":{
            title:String,
            description:String
        },
        "ja-jp":{
            title:String,
            description:String
        },
        "es-es":{
            title:String,
            description:String
        },
        _id:false
    }
})

CompanySchema.static('getSingleton', function (cb) {
    return Company.findOne({})
                .limit(1)
                .exec(function (error, model) {
                //    console.log('model has found:',model)
                    if (error) {
                        cb(error, null);
                    } else if (!model|| model.length==0) {
                        let genModel = new Company(companyData); 
                        genModel.save()
                        cb(error,genModel);
                    } else {
                        cb(error, model);
                    }
                });
    });


 
const Company = mongoose.model('Company', CompanySchema)

module.exports = Company