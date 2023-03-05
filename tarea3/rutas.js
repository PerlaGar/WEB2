const path=require('path');
const express = require('express');

module.exports=function(app){
    app.use('/public', express.static(path.join(__dirname, 'public')));

    app.get('/',function(req,res){
        res.sendFile(path.join(__dirname,'src/vistas/index.html'));
    });   
}
