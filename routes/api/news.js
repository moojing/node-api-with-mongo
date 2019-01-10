var express = require('express');
var router = express.Router();
const models = require('../../model');
const News = models('News');


    router.get('/', async function(req, res) {
        // News.remove({},()=>{})
        const page = Number(req.query.page) ||  Number(req.body.page)  
        const size =  Number(req.query.size) ||  Number(req.body.size) 
        
        
        try{
            let total = await News.countDocuments({})
            let allNews = await News.find({}) 

            if (!(page&&size))   { 
                return res.json({
                    success: true,
                    total,
                    allNews
                })
            }
            let news = await News.find({})
                    .skip((page-1)*size)
                    .limit(size)
                
            
            res.json({
                success: true,
                total,
                page,
                size,
                news
            })
            
      
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        } 
    });   
    


    router.post('/', async function(req, res) {
        let createNews = req.body.news
        createNews.created_at = Date.now()
        News.create({...createNews} ,function(err,news){
        
            if (err){
                res.json({
                    success: false,
                    message: err
                })
            }
            res.json({
                success: true,
                news
            })
            
        })
 
    
    })

    router.delete('/:id', async function(req, res) {
        let deleteId = req.params.id
        try{
            let news = await News.findOneAndRemove({_id:deleteId})
            if(!news) throw "news is not exist!!"
            
            res.json({
                success: true,
                data: news
            })
            
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        } 
    
    })


    module.exports = router;