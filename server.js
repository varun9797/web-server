var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication :function(req,res,next){
			console.log('private rout hit');
			next();
	},
	logger: function(req, res,next){
		console.log(req.method);
		next();
	}
}


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res){
	res.send('hello express!!!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('server is started on port '+PORT);
});