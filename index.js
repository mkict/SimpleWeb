var express = require('express');
var logger = require("morgan");
var bodyParser = require('body-parser');
var app = express();

// create application/json parser 
app.use(bodyParser.json());
 
// create application/x-www-form-urlencoded parser 
app.use(bodyParser.urlencoded({ extended: false }));

var PORT = 8080;
app.use(logger('dev'));
app.use('/assets',express.static(__dirname+'/public/assets'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/public/index.html');
});
app.get('/api/messages',function(req,res){
	res.send({
		data:['server list 1','server list 2','server list 3']
	});
});
app.listen(PORT,function(){
	console.log('Listening on '+PORT+' ....');
});

