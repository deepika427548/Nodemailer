
const router=require("express").Router();

const createQr=require('../controller/qrController');

router.post('/api/qrcode',createQr);

module.exports=router;


