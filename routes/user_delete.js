const express = require('express')
const { deleteOne } = require('../model/user');
const user = require('../model/user')
const router = express.Router();

router.get('/del',async(req,res) =>{

    try{
        let search = req.body.username
        let result = await user.deleteOne({username : search})
        res.json({result})
        console.log("User Deleted..")
        
    }
    catch(error){
        res.json(error)
    }
})

module.exports= router;
