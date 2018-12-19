var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var path = require('path');
const models = require('../../../model');
const cloudinary = require('../../../utils/cloudinary')


router.post('/',multipartMiddleware,async function(req, res) {
    
cloudinary.v2.uploader.upload(req.files.imageData.path, function(error, result) {
    if(error) console.log('error',error) 
    res.json({
        status : "success",
        data : {imageUrl:result.url}
    })
     
    });
})
 


module.exports = router;