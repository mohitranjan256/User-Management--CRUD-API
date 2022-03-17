const express=require('express');
const router=express.Router();
const user = require('../model/user')
router.put('/:username' , async(req,res) =>{

    try{
        const username = req.params.username
        const Name = req.body.Name
        const password = req.body.password
        const phoneno = req.body.phoneno

        const user_update = await user.updateOne({username : username}, {$set : { Name : Name ,password : password , phoneno : phoneno}})

        res.json(user_update);
        console.log("User Data Updated..");
        console.log(user_update);
    }
    catch(error){
        res.json({
            error
        })
    }

})


module.exports = router;
