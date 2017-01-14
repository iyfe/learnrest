var express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');

var mongoUri = 'mongodb://localhost/LearnREST';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();
//var bodyParser = require('body-parser')


 // app.use(express.bodyParser());

require('./models/musician');
require('./routes')(app);

app.listen(3001);
console.log('Listening on port 3001...');
