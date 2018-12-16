var express = require('express');
var router = express.Router();
const models = require('../../../model');
const Product = models('Product');
const ProductDescription = models('ProductDescription');
const ProductCategory = models('ProductCategory');


    router.get('/', async function(req, res) {
        // ProductDescription.remove({},()=>{})
        // Product.remove({},()=>{})
       
        let page = req.query.page
        let size = Number(req.query.size)
         console.log('page',size)
        try{
            let product = await Product.find({}).skip(size*page).limit(size)
            
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

    router.get('/:id', async function(req, res) {
        let productId = req.params.id
        
        console.log('productId',productId)
        try{
            let product = await Product.findOne({_id:productId})
            let pdesc = await ProductDescription.findOne({_id:product.descriptionId}) 
            product.description = pdesc.description

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