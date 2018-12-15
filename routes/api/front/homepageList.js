var express = require('express');
var router = express.Router();
const models = require('../../../model');
const News = models('News');
const Menu = models('Menu');

router.get('/', async function(req, res) {
 
const lang = req.header('lang'); 

console.log('lang=',lang)

Menu.getSingleton(async function (err, menuItem) {
  if (err) return handleError(err);
  console.log('menuItem',menuItem)
  // menuItem.menus=[];
            
  // menuItem[0].save()
   
  res.json({res:menuItem})
},lang);

// Menu.deleteMany({ }, function (err) {console.log(err);});
   
    
  })
 


module.exports = router;