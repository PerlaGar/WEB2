const path= require('path');
const express=require('express');

module.exports= function(app){
    app.use('/assets', express.static(path.join(__dirname,'assets')))

    app.get('/', async(req,res)=>{
        const urlnws= `https://newsapi.org/v2/everything?q=${req.query.search}&apikey=5d4c0d26f72446b58f89fcd27c412d99`;
        try{
            const response= await fetch(urlnws);
            const json= await response.json();
            res.render('home', {articles: json.articles });
        }catch (error){
            console.error(error);
            res.status(500).send({error: 'Algo salio mal'});
        }
       });
}