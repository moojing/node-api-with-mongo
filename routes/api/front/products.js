var express = require('express');
var router = express.Router();
const models = require('../../../model');
const Product = models('Product');
const ProductDescription = models('ProductDescription');
const ProductCategory = models('ProductCategory');


    router.get('/', async function(req, res) {
        // ProductDescription.remove({},()=>{})
        // Product.remove({},()=>{})
        let productId = req.body.productId
        
        try{
            let productQuery = productId ?{_id:productId} : {}  
            let product = await Product.find(productQuery) 
            
            let queryProduct = Object.create(product[0])
            
            let productDescQuery = productId ?{_id:queryProduct.descriptionId} : {} 
            let pdesc = await ProductDescription.findOne(productDescQuery) 
            
            queryProduct.description = pdesc.description
            
            console.log('pdesc',pdesc.description);
            
            console.log('queryProduct',queryProduct)
            res.json({
                status: 'success',
                data: queryProduct
            })
        }catch(err){
            res.json({
                status: 'failed',
                message: err
            })
        } 
       
    })
    


    router.post('/', async function(req, res) {
        let postBody = req.body 
        try{
            let desc = await ProductDescription.create({description:postBody.description})
            delete postBody.description
            postBody.descriptionId = desc._id
            
            let product = await Product.create(postBody)
            res.json({
                status: 'success',
                data: product
            })
            
        }catch(err){
            res.json({
                status: 'failed',
                message: err
            })
        } 
    
    })


module.exports = router;