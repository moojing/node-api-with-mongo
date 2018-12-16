var express = require('express');
var router = express.Router();
const models = require('../../../model');
const News = models('News');
const Menu = models('Menu');

router.get('/', async function(req, res) {
 
  const lang = req.header('lang')?req.header('lang'):req.param('lang'); 

  console.log('lang=',lang)

  Menu.getSingleton(async function (err, menuItem) {
    if (err) return handleError(err);
              
    res.json({res:menuItem})
  },lang);


})
 


module.exports = router;