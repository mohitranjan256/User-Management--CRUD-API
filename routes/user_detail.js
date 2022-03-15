const express = require('express')
const { find } = require('../model/user');
const user = require('../model/user')
const router = express.Router();

router.get('/getall',async(req,res) =>{

    try{
        let result = await user.find({})
        res.json(result)
    }
    catch(error){
        res.json(error)
    }
})


router.get('/get',async(req,res) =>{

    try{
        let search = req.body.username
        let result = await user.find({username : search})
        res.json(result)
    }
    catch(error){
        res.json(error)
    }
})

module.exports= router;