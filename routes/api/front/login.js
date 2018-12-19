var jwt = require('jsonwebtoken')
var express = require('express');
var router = express.Router();
var path = require('path');

const config = require('../../../config');
const models = require('../../../model');
 


router.post('/',async function(req, res) {
    res.json({data:'asdda'}) 
})
 


module.exports = router;