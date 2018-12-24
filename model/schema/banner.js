let bannerArr = ['top','lefttop','leftbottom','right']
let bannerDefault = {} 


 let defaultSchema = {
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
            }
        }
} 


bannerArr.forEach(banner=>{
    bannerDefault[banner] = {...defaultSchema} 
})

module.exports = bannerDefault