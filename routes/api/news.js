var express = require('express');
var router = express.Router();


router.get('/one', function(req, res) {
        
    res.json({res:"news"})
    
  });

module.exports = router;