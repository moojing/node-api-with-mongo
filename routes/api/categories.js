var express = require('express');
var router = express.Router();
const models = require('../../model');
const Category = models('ProductCategory');
const Product = models('Product');


    router.get('/', async function(req, res) {
        // Category.remove({},()=>{})
            Category.find({},function (err, categoryModel) {
                if (err){
                    res.err({
                        success: false,
                        message: err
                    })
                }
                
                res.json( {
                    success: true,
                    data: categoryModel
                })
                
            });
        })



        router.get('/:id', async function(req, res) {
            let category = req.params.id


            const page = Number(req.query.page) ||  Number(req.body.page)  
            const size =  Number(req.query.size) ||  Number(req.body.size) 
            const sku = req.query.sku 
           
        try{
            let total = await Product.countDocuments({category})
            let allProducts = await Product.find({category})
            .populate('category')



            if (!(page&&size))   { 
                return res.json({
                    success: true,
                    total,
                    products:allProducts
                })
            }
            let products = await Product.find({category})
                    .populate('category')
                    .populate('i18n')
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
    


    router.post('/', async function(req, res) {
        let categoryName = req.body.name
         console.log('categoryName',categoryName)
        
        Category.create({name:categoryName},function(err,category){
            if (err){
                res.json({
                    success: false,
                    message: err
                })
            }
            res.json({
                success: true,
                category
            })
            
        })
 
    
    })

    router.delete('/:id', async function(req, res) {
        let deleteId = req.params.id
        try{
            let category = await Category.findOneAndRemove({_id:deleteId})
            if(!category) throw "product is not exist!!"
            
            res.json({
                success: true,
                data: category
            })
            
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        } 
    
    })


    module.exports = router;