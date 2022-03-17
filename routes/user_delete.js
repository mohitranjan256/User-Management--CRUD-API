const express = require('express')
const { deleteOne } = require('../model/user');
const user = require('../model/user')
const router = express.Router();

router.get('/:username',async(req,res) =>{

    try{
        let search = req.params.username
        let result = await user.deleteOne({username : search})
        res.json({result})
        
    }
    catch(error){
        res.json(error)
    }
})

module.exports= router;
