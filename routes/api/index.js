var express = require('express')
var router = express.Router()
 

router.use('/news', require('./news'));
router.use('/menu', require('./menu'));
router.use('/category', require('./front/categories'));
router.use('/homepage', require('./front/homepage'));
router.use('/products', require('./front/products'));

module.exports = router;



