var express = require('express');
var router = express.Router();
const models = require('../../model');
const Company = models('Company');

router.get('/', async function(req, res) {
 
  const lang = req.header('lang')?req.header('lang'):req.params.lang; 
  // Company.remove({},()=>{})
  Company.getSingleton(async function (err, compantItem) {
    if (err) return handleError(err);
    compantItem  = compantItem.toObject()  
    if (!lang) return res.json({...compantItem})

    //loop through all blocks
    let bannerArr = ['top','lefttop','leftbottom','right']
    bannerArr.forEach(banner=>{
      if(!compantItem[banner])return 
      compantItem[banner].i18n = {[lang]:compantItem[banner].i18n[lang] }
    })  
    // loop through products
    
    if(!compantItem.products)return

    for (let i=0; i<compantItem.products.length;i++){
      let product = compantItem.products[i] 
      product.i18n = {[lang]:product.i18n[lang]}
    }
     
    res.json({...compantItem})
  });


})


router.post('/', async function(req, res) {
  const data = req.body  
  
  Company.findOneAndUpdate({},data,async function (err, compantItem) {
    if (err){
       handleError(err);
       return res.json({success:false,err})
      
    }
    compantItem = compantItem.toObject()              
    res.json({success:true, ...compantItem})
  });


})
 


module.exports = router;