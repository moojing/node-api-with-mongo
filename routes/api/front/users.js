const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const path = require('path')

const config = require('../../../config')
const models = require('../../../model')
const User = models('User') 


// router.get('/', function (req, res) {
//     User.find({}, function (err, users) {
//       res.json(users)
//     })
// })

router.post('/',async function(req, res) {

  const saltRounds = 10;
  let password = req.body.password
  let name = req.body.name
  try{
    let hashPassword = await  bcrypt.hash(password, saltRounds) 
  
    let newUser =await User.create({
      name,
      password: hashPassword,
      admin: true
    })
     
    res.json({
      success: true,
      message: newUser.name+' has created'
    })
  } catch(e){
    console.log('hasherror',e)
  }
})

module.exports = router;