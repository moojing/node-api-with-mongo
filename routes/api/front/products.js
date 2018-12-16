var express = require('express');
var router = express.Router();
const models = require('../../../model');
const Product = models('Product');
const ProductDescription = models('ProductDescription');
const ProductCategory = models('ProductCategory');


    router.get('/', async function(req, res) {
        Product.remove({},()=>{})
        Product.find({},function (err, productModel) {
            if (err){
                res.err({
                    status: 'failed',
                    message: err
                })
            } 
            
            res.json( {
                status: 'success',
                data: productModel
            })
            
        });
    })
    


    router.post('/', async function(req, res) {
        let postBody = req.body 
        try{
            let desc = await ProductDescription.create({content:postBody})
            postBody.content = desc._id
            let product = await Product.create(postBody)
            res.json({
                status: 'success',
                data: product
            })
            
        }catch(err){
            res.err({
                status: 'failed',
                message: err
            })
        } 
    
    })


module.exports = router;