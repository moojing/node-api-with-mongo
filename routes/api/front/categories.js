var express = require('express');
var router = express.Router();
const models = require('../../../model');
const Category = models('ProductCategory');


    router.get('/', async function(req, res) {
    // Category.remove({},()=>{})
    Category.find({},function (err, categoryModel) {
        if (err){
            res.err({
                status: 'failed',
                message: err
            })
        }
        
        res.json( {
            status: 'success',
            data: categoryModel
        })
          
    });
    

    })
    


    router.post('/', async function(req, res) {
        let categoryName = req.body.name
         console.log('categoryName',categoryName)

        Category.create({name:categoryName},function(err,category){
            if (err){
                res.err({
                    status: 'failed',
                    message: err
                })
            }
            res.json({
                status: 'success',
                data: category
            })
            
        })
 
    
    })


module.exports = router;