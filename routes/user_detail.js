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


router.get('/:username',async(req,res) =>{

    try{
        let search = req.params.username
        let result = await user.findById( search)
        res.json(result)
        // console.log(result);
    }
    catch(error){
        res.json(error)
    }
})

module.exports= router;
