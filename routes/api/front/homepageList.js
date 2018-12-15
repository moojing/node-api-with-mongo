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
    
    // menuItem.menus=[];
              
    // menuItem[0].save()
    
    console.log(process.env.NODE_ENV)
    res.json({res:menuItem})
  },lang);


})
 


module.exports = router;