const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const path = require('path')

const config = require('../../../config')
const models = require('../../../model')
const User = models('User') 


router.get('/', function (req, res) {
    User.find({}, function (err, users) {
      res.json(users)
    })
})

router.get('/setup',async function(req, res) {

    
  var andyyou = new User({
    name: 'andyyou',
    password: '12345678',
    admin: true
  })

  andyyou.save(function (err) {
    if (err) throw err

    console.log('User saved successfully')
    res.json({success: true})
  })


})

module.exports = router;