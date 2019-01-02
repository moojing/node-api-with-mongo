var express = require('express');
var router = express.Router();
const models = require('../../../model');
const News = models('News');
const Banner = models('Banner');

router.get('/', async function(req, res) {
 
  const lang = req.header('lang')?req.header('lang'):req.params.lang; 
  // Banner.remove({},()=>{})
  Banner.getSingleton(async function (err, bannerItem) {
    if (err) return handleError(err);
    bannerItem  = bannerItem.toObject()  
    if (!lang) return res.json({...bannerItem})

    //loop through all blocks
    let bannerArr = ['top','lefttop','leftbottom','right']
    bannerArr.forEach(banner=>{
      if(!bannerItem[banner])return 
      bannerItem[banner].i18n = {[lang]:bannerItem[banner].i18n[lang] }
    })  
    // loop through products
    
    if(!bannerItem.products)return

    for (let i=0; i<bannerItem.products.length;i++){
      let product = bannerItem.products[i] 
      product.i18n = {[lang]:product.i18n[lang]}
    }
     
    res.json({...bannerItem})
  });


})


router.post('/', async function(req, res) {
  const data = req.body  
  
  Banner.findOneAndUpdate({},data,async function (err, bannerItem) {
    if (err){
       handleError(err);
       return res.json({success:false,err})
      
    }
    bannerItem = bannerItem.toObject()              
    res.json({success:true, ...bannerItem})
  });


})
 


module.exports = router;