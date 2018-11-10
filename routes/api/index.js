var express = require('express')
var router = express.Router()
 

router.use('/news', require('./news'));
router.use('/menu', require('./menu'));
router.use('/homepageList', require('./front/homepageList'));

module.exports = router;



