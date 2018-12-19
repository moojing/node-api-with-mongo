const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const config = require('../../config')
const whiteList = require('../../config/routerWhitelist')

const fs = require('fs');

router.use(function (req, res, next) {

    let method = req.method.toLowerCase()
    let path = req.path
    
    let token = req.body.token || req.query.token || req.headers['x-access-token']
    //Bypass
    if(whiteList[method] && whiteList[method].indexOf(path) !== -1){
      return  next()
    }
    // require token-checking 
    if (token) {
      jwt.verify(token, config.get('secret'), function (err, decoded) {
        if (err) {
          return res.json({success: false, message: 'Failed to authenticate token.'})
        } else {
          req.decoded = decoded
          next()
        }
      })
    } else {
      return res.status(403).send({
        success: false,
        message: 'Invalid token.'
      })
    }
} )


fs.readdir(__dirname+'/front', (err, files) => {
  if(err) throw err
  files.forEach(file => {
    let routerName = file.split('.')[0]
    router.use(`/${routerName}`, require(`./front/${routerName}`));    
  });
})
 




module.exports = router;



