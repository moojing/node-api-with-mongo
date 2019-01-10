var express = require('express');
var router = express.Router();
const models = require('../../model');
const TeamModel = models('Team');


    router.get('/', async function(req, res) {
        // TeamModel.remove({},()=>{})
        const page = Number(req.query.page) ||  Number(req.body.page)  
        const size =  Number(req.query.size) ||  Number(req.body.size) 
        
        
        try{
            let total = await TeamModel.countDocuments({})
            let allTeam = await TeamModel.find({}) 

            if (!(page&&size))   { 
                return res.json({
                    success: true,
                    total,
                    allTeam
                })
            }
            let team = await TeamModel.find({})
                    .skip((page-1)*size)
                    .limit(size)
                
            
            res.json({
                success: true,
                total,
                page,
                size,
                team
            })
            
      
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        } 
    });   
    


    router.post('/', async function(req, res) {
        let createTeam = req.body.team
        createTeam.created_at = Date.now()
        TeamModel.create({...createTeam} ,function(err,TeamModel){
        
            if (err){
                res.json({
                    success: false,
                    message: err
                })
            }
            res.json({
                success: true,
                TeamModel
            })
            
        })
 
    
    })

    router.delete('/:id', async function(req, res) {
        let deleteId = req.params.id
        try{
            let TeamModel = await TeamModel.findOneAndRemove({_id:deleteId})
            if(!TeamModel) throw "TeamModel is not exist!!"
            
            res.json({
                success: true,
                data: TeamModel
            })
            
        }catch(err){
            res.json({
                success: false,
                message: err
            })
        } 
    
    })


    module.exports = router;