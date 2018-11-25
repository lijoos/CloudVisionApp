var express=require('express');
var controller=require('./visionApiController');
var router=express.Router();


router.get('/',(req,res)=>{
  res.send('welcome to cloud vision API');
})
router.get('/images',controller.processImageGet);
router.post('/images',controller.processImagePost);
module.exports=router;
