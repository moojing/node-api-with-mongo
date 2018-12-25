let bannerArr = ['top','lefttop','leftbottom','right']

let defaultValue = {} 

let defaultBanner = {
        backgroundImg:"",  
        i18n:{
            "zh-cn":{
                title:"",
                btnText:""
            },
            "en-us":{
                title:"",
                btnText:""
            },
            "it-ch":{
                title:"",
                btnText:""
            },
            "ja-jp":{
                title:"",
                btnText:""
            },
            "es-es":{
                title:"",
                btnText:""
            }
        }
} 

let defaultProduct = {
    backgroundImg:"", 
    i18n:{
        "zh-cn":{
            title:"",
            description:""
        },
        "en-us":{
            title:"",
            description:""
        },
        "it-ch":{
            title:"",
            description:""
        },
        "ja-jp":{
            title:"",
            description:""
        },
        "es-es":{
            title:"",
            description:""
        }
    }
} 
defaultValue.products = {} 
for(let i=0 ; i < 6; i++){
    defaultValue.products[i] = {...defaultProduct}
} 

bannerArr.forEach(banner=>{
    defaultValue[banner] = {...defaultBanner} 
})

module.exports = defaultValue