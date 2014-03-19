//install mongo (home brew for me)
// then install in node - npm install mongo
//install mongoose - npm install mongoose
// install express - npm install express

var express = require('express');
var fs = require('fs');
var app = express();

//here's how to set things that routes may need access to (drivers, loggers, etc)
app.set('info', {name: "Open Web App"});

app.use(express.static('app'));


//middleware
app.use(express.bodyParser());
app.use(require('./middleware/logging')());

//DB objects
app.set('Node', require('./objects/node.js')(app));

//routes
fs.readdirSync(__dirname + '/routes').forEach(function(file) {
	if(file !== ".svn")
  		require('./routes/' + file)(app);
});
console.log('Server is Up!')

app.listen(3000);