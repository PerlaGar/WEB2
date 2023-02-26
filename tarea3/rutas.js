const path=require('path');
const express = require('express');

module.exports=function(app){
    app.use('/public/css', express.static(path.join(__dirname, '/public/css')))

    app.get('/',function(req,res){
        res.sendFile(path.join(__dirname,'src/vistas/index.html'));
    });   
    
}
