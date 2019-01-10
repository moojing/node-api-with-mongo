var express = require('express');
var router = express.Router();
const models = require('../../../model');
const RidingNewsModel = models('RidingNews');


    router.get('/', async function(req, res) {
        // RidingNewsModel.remove({},()=>{})
        const page = Number(req.query.page) ||  Number(req.body.page)  
        const size =  Number(req.query.size) ||  Number(req.body.size) 
       
        try{
           
            let total = await RidingNewsModel.countDocuments({})
             
            let allRidingNews = await RidingNewsModel.find({}) 
            
            if (!(page&&size))   { 
                return res.json({
                    success: true,
                    total,
                    allRidingNews
                })
            }
            let ridingNews = await RidingNewsModel.find({})
                    .skip((page-1)*size)
                    .limit(size)
                
              
            res.json({
                success: true,
                total,
                page,
                size,
                ridingNews
            })
            
      
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        } 
    });   
    


    router.post('/', async function(req, res) {
        let createRidingNews = req.body.ridingNews
        createRidingNews.created_at = Date.now()
        RidingNewsModel.create({...createRidingNews} ,function(err,RidingNewsModel){
        
            if (err){
                res.json({
                    success: false,
                    message: err
                })
            }
            res.json({
                success: true,
                RidingNewsModel
            })
            
        })
 
    
    })

    router.delete('/:id', async function(req, res) {
        let deleteId = req.params.id
        try{
            let RidingNewsModel = await RidingNewsModel.findOneAndRemove({_id:deleteId})
            if(!RidingNewsModel) throw "RidingNewsModel is not exist!!"
            
            res.json({
                success: true,
                data: RidingNewsModel
            })
            
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        } 
    
    })


    module.exports = router;