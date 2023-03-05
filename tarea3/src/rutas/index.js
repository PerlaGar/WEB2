const express= require('express');
const router=express.Router();
const galRoutes = require('./galeria');
const contRoutes=require('./contacto');
const hobbRoutes=require('./hobbies');


router.use('',express.json());

router.use('/galeria', galRoutes);
router.use('/contacto', contRoutes);
router.use('/hobbies', hobbRoutes);

module.exports=router;