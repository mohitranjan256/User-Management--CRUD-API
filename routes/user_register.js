const express=require('express');
const router=express.Router();
const user = require('../model/user')
router.post('/register' , async(req,res) =>{

    try{
        const username = req.body.username
        const Name = req.body.Name
        const password = req.body.password
        const phoneno = req.body.phoneno

        const usercreate = await user.create({username : username , Name : Name , password : password ,phoneno : phoneno})

        res.json(usercreate);
    }
    catch(error){
        res.json({
            error
        })
    }

})


module.exports = router;