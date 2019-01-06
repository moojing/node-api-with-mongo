var express = require('express');
var router = express.Router();
const models = require('../../../model');
const News = models('News');


    router.get('/', async function(req, res) {
        // News.remove({},()=>{})
        News.find({},function (err, news) {
            if (err){
                res.err({
                    success: false,
                    message: err
                })
            }
            
            res.json( {
                success: true,
                 news
            })
            
        });
    })
    


    router.post('/', async function(req, res) {
        let createNews = req.body.news
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
        let = req.params.id
        try{
            let category = await News.findOneAndRemove({_id:deleteId})
            if(!category) throw "news is not exist!!"
            
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