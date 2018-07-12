var buttons = document.getElementsByTagName('button');

function createHandler(name) {
	return function(){
		console.log(name);
	}
}

for(var i = 0; i < buttons.length; i += 1) {
	var button = buttons[i];
	var buttonName = button.innerHTML;
	button.addEventListener('click', createHandler(buttonName));
}

/*

Express example:

app.use(function(req, res, next) {
	// middleware logic
	next();
});

Morgan example:

var logger = require('morgan');
app.use(logger('dev'));

*/