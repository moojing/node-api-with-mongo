var express = require('express');
var router = express.Router();
const models = require('../../../model');
const Product = models('Product');
const ProductDescription = models('ProductDescription');
const ProductCategory = models('ProductCategory');


    router.get('/', async function(req, res) {
        // ProductDescription.remove({},()=>{})
        // Product.remove({},()=>{})
       
        const page = Number(req.query.page) ||  Number(req.body.page)  
        const size =  Number(req.query.size) ||  Number(req.body.size) 
        let category = req.query.category || req.body.category
        if (!category) category = {$exists: true}
        
        console.log('body',req.query)
        try{
            let total = await Product.countDocuments({category })
            let allProducts = await Product.find({category}).populate('category') 
            
            if (!(page&&size))   { 
                return res.json({
                    success: true,
                    total,
                    products:allProducts
                })
            }
            let products = await Product.find({category})
                    .populate('category')
                    .skip((page-1)*size)
                    .limit(size)
                
            
            res.json({
                success: true,
                total,
                page,
                size,
                products
            })
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        } 
       
    })

    router.get('/:id', async function(req, res) {
        let productId = req.params.id
        let lang = req.query.lang ? req.query.lang : "zh-cn"
        
        try{
            let product = await Product.findOne({_id:productId})
                .populate('i18n',lang)
                
            res.json({
                success: true,
                data: product 
            })
        }catch(err){
            console.log(err)
            res.json({
                success: false,
                message: err
            })
        } 
       
    })
    


    router.post('/', async function(req, res) {
        let postBody = req.body
        // console.log('postBody',postBody.i18n)
        try{
            
            let desc = await ProductDescription.create(postBody.i18n)
            console.log('desc',desc)
            postBody.i18n = desc._id
            postBody.created_at = Date.now()
            let product = await Product.create(postBody)
            res.json({
                success: true,
                 product
            })
            
        }catch(err){
            console.log('err',err)
            res.json({
                success: false,
                message: err
            })
        } 
    
    })


    router.post('/:id', async function(req, res) {
        let updateId = req.params.id
        let data = req.body.data
        try{
            let product = await Product.findOneAndUpdate({_id:updateId},data,{new: true})
            if(!product) throw "product is not exist!!"
            
            res.json({
                success: true,
                data: product
            })
            
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        } 
    
    })

    router.delete('/:id', async function(req, res) {
        let deleteId = req.params.id
        try{
            let product = await Product.findOneAndRemove({_id:deleteId})
            if(!product) throw "product is not exist!!"
            let deleteI18n = product.i18n
            let desc = await ProductDescription.findOneAndRemove({_id:deleteI18n})
            
            res.json({
                success: true,
                data: product
            })
            
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        } 
    
    })


module.exports = router;