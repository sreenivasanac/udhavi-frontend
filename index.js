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


// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(404).render('404');
// });

//Routes
// app.get('/faq',function(req,res){
// 	res.render('faq');
// });

//End of Routes

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});
