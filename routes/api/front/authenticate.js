const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const path = require('path')

const config = require('../../../config')
const models = require('../../../model')
const User = models('User')



router.post('/', function (req, res) {
    console.log(req.body.name);
    
    User.findOne({
      name: req.body.name
    }, function (err, user) {
      if (err) throw err
  
      if (!user) {
        res.json({ success: false, message: 'Authenticate failed. User not found'})
      } else if (user) {
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authenticate failed. Wrong password'})
        } else {
            console.log('config.get',config.get('secret'))
            user = user.toObject()
          var token = jwt.sign(user,'ilovera', {
            expiresIn: 60*60*24
          })
  
          res.json({
            success: true,
            token: token
          })
        }
      }
    })
  })


module.exports = router;