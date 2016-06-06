var express = require('express');
//now we have access to the entire express API

//create our app based on Express framework
var app = express();
const PORT = process.env.PORT || 3000;
//Which folder to serve?
//app.use() let's me define functionality for my application

app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto']==='https'){
    res.redirect('http://'+req.hostname+req.url);
  }else{
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT,function(){console.log("express server is up on 3000")});
