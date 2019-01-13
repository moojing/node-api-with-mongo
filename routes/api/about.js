var express = require('express');
var router = express.Router();
const models = require('../../model');
const Company = models('Company');

router.get('/', async function(req, res) {
 
  const lang = req.header('lang')?req.header('lang'):req.query.lang; 
  // Company.remove({},()=>{})
  Company.getSingleton(async function (err, compantItem) {
    if (err) return handleError(err);
    compantItem  = compantItem.toObject()  
    if (!lang) return res.json({...compantItem})
    compantItem.i18n  = {[lang]:compantItem.i18n[lang]}
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