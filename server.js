var express = require('express'),
partials = require('express-partials'),
app = express(),
errorHandlers = require('./middleware/errorhandlers'),
routes = require('./routes');

app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});
app.use(express.static(__dirname + '/static'));
app.use(partials());

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/service', routes.service);
app.get('/contact', routes.contact);
app.get('/blog', routes.blog);

app.get('/error', function(req, res, next){
 	next(new Error('A contrived error'));
});
app.use(errorHandlers.error);
app.use(errorHandlers.notFound);

app.listen(3000)
	console.log('server running port 3000');
