const router= require('express').Router();
const path= require('path');
router.get('', function(req,res){
    res.sendFile(path.join(__dirname,'../vistas/hobbies.html'));
});

module.exports=router;