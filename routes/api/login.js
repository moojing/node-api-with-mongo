const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const express = require('express')
const router = express.Router()
const path = require('path')

const config = require('../../config')
const models = require('../../model')
const User = models('User')
 
 

router.post('/', function (req, res) {
    console.log(req.body.name);
    
    User.getSingleton(async function (err, user) {
      if (err) throw err
      
      if (!user) {
        res.json({ success: false, message: 'Authenticate failed. User not found'})
      } else if (user) {
        
        let loginPassword = req.body.password 
        let userPassword = user.password 
        let loginResult = await bcrypt.compare(loginPassword, userPassword)

        if (loginResult){

          user = user.toObject()
          var token = jwt.sign(user,config.get('secret'), {
              expiresIn: 60*60*24
          })

          res.json({
            success: true,
            token: token, 
            name:user.name,
            roles:user.roles,
            introduction:'超級管理員'
          })
        }else{
          res.json({ success: false, message: 'Authenticate failed. Wrong password Or token Expired'})  
        } 

      }
    })
  })


module.exports = router;