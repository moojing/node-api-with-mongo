var express = require('express');
var router = express.Router();
const models = require('../../../model');
const News = models('News');
const Menu = models('Menu');

router.get('/', async function(req, res) {
  
  // Menu.findOne({ id: 0 }, function(err, menuitem) {
  //   if(menuitem) console.log(menuitem)
  // });

Menu.getSingleton(async function (err, menuItem) {
  if (err) return handleError(err);
  // saved!
  menuItem.menus=[
            {name:"Bikes",
             link:''
            },
            {name:"Bikes",
             link:''
            }];
  menuItem.save()
  let news = await News.find();
  let menu = await Menu.find(); 
  res.json({res:menuItem})
});

// Menu.deleteMany({ }, function (err) {console.log(err);});
   
    
  })
 


module.exports = router;