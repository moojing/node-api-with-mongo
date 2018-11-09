var express = require('express')
var router = express.Router()
var news = require('./news')
var navigation = require('./navigation')

router.use('/news', news);
router.use('/navigation', navigation);

module.exports = router;