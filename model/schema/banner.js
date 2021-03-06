let bannerArr = ['top','lefttop','leftbottom','right']

let defaultSchema = {} 

let defaultBannerSchema = {
        backgroundImg:String,  
        link:String,
        i18n:{
            "zh-cn":{
                title:String,
                btnText:String
            },
            "en-us":{
                title:String,
                btnText:String
            },
            "it-it":{
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
            }
        }
} 

let defaultProductSchema = {
    backgroundImg:String, 
    link:String,
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
} 
defaultSchema.products = {}
for(let i=0 ; i < 6; i++){    
    defaultSchema.products[i] = {type:Object}
} 

bannerArr.forEach(banner=>{
    defaultSchema[banner] = {...defaultBannerSchema} 
})

module.exports = defaultSchema