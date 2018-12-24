var express = require('express');
var router = express.Router();
const models = require('../../../model');
const News = models('News');
const Banner = models('Banner');

router.get('/', async function(req, res) {
 
  const lang = req.header('lang')?req.header('lang'):req.param('lang'); 

  console.log('lang=',lang)

  Banner.getSingleton(async function (err, bannerItem) {
    if (err) return handleError(err);
              
    res.json({res:bannerItem})
  },lang);


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