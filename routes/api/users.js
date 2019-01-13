const bcrypt = require('bcryptjs')
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const models = require('../../model')
const User = models('User') 


router.get('/', function (req, res) {
    // User.remove({},()=>{})
    User.find({}, function (err, users) {
      res.json(users)
    })
})

router.get('/info', function (req, res) {
   
    User.findOne({name:req.decoded.name}, function (err, user) {
        user = user.toObject()
        delete user.password
        res.json(user)
    })
})
 

// router.post('/',async function(req, res) {

//   const saltRounds = 10;
//   let password = req.body.password
//   let name = req.body.name
//   try{
//     let hashPassword = await  bcrypt.hash(password, saltRounds) 
  
//     let newUser =await User.create({
//       name,
//       password: hashPassword,
//       admin: true
//     })
     
//     res.json({
//       success: true,
//       message: newUser.name+' has created.'
//     })
//   } catch(e){
//     console.log('hasherror',e)
//   }
// })




module.exports = router;