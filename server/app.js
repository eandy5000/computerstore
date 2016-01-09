var express = require('express');
var app = express();
var path = require('path');

app.set("port", process.env.PORT || 3000);

app.get('/*', function(req, res, next){
    var file = req.params[0] || '/index.html';
    res.sendFile(path.join(__dirname,'./public', file));
});

app.listen(app.get("port"), function(){
    console.log('listening on port: ', app.get("port"));
});