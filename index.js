const express = require('express');
const app = express();
var ejs = require('ejs');
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/'));

app.get('/',function(req,res){
	res.render('index1');
});

app.get('/index',function(req,res){
	res.render('index1');
});

app.get('/sign-in',function(req,res){
	res.render('sign-in');
});

app.get('/sign-up',function(req,res){
	res.render('sign-up');
});

app.get('/i-need-help',function(req,res){
	res.render('i-need-help');
});

app.get('/i-can-help',function(req,res){
	res.render('i-can-help');
});

app.get('/feed',function(req,res){
	res.render('feed');
});

app.get('/map',function(req,res){
	res.render('map');
});


// app.get('/forgot-password',function(req,res){
// 	res.render('forgot-password');
// });


// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(404).render('404');
// });

//Routes
// app.get('/faq',function(req,res){
// 	res.render('faq');
// });

//End of Routes

app.listen(5020, function () {
	console.log('Example app listening on port 5020!')
});
