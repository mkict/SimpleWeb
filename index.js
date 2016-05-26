var express = require("express");
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
var users = [];

app.post('/api/user',function(req,res){
	users.push(req.body);
	res.send('success');
});
app.get('/api/users',function(req,res){
	res.send(users);
});

app.use('/',function(req,res){
	res.sendFile(__dirname+'/public/index.html');
});

app.listen(PORT,function(){
	console.log('Listening on '+PORT+' ....');
});

