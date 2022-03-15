const express=require('express');
const router=express.Router();

router.get('/' ,(req,res) =>{

    res.send("Hello is a freindly backend server");

})

router.use("/user_register",require("./user_register"))
router.use("/user_update",require("./user_update"))
router.use("/user_get",require("./user_detail"))
router.use("/user_del",require("./user_delete"))

module.exports = router;