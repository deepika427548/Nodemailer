
const router=require("express").Router();
const sendMail=require("../controller/mailController");


router.post('/',sendMail);


module.exports=router;