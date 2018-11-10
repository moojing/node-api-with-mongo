var express = require('express');
var router = express.Router();
const models = require('../../model');
const News = models('News');

router.get('/one', async function(req, res) {
    let news = await News.find(); 
    res.json({res:news})
    
  })
  
  .post('/one',function(req,res){
    res.json({res:'post one'})
  });


module.exports = router;