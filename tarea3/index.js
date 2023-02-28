const express= require('express');
const rutas=require('./rutas');
const apiRoutes= require('./src/rutas');
const path=require('path');

const port= 3000;
const app=express();

rutas(apiRoutes);
app.use('',apiRoutes);


app.get("*", function (req, res) {
    res.status(404).sendFile(path.join(__dirname,'./src/vistas/error.html'));
});

app.listen(port,()=> {
    console.log('app is running in port '+ port);
});