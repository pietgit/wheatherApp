var express = require('express');
//now we have access to the entire express API

//create our app based on Express framework
var app = express();

//Which folder to serve?
//app.use() let's me define functionality for my application
app.use(express.static('public'));

app.listen(3000,function(){console.log("express server is up on 3000")});
