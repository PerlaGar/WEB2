const router= require('express').Router();
const path= require('path');
router.get('', function(req,res){
   // res.send('Ruta contacto');
   res.sendFile(path.join(__dirname,'../vistas/contacto.html'));
});
module.exports=router;