var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(__dirname+'/'));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/interface.html'));
// })

// app.get('/stylesheet.css', function(req, res) {
//     res.sendFile(path.join(__dirname + '/' + 'stylesheet.css'));
// })

app.listen(8888);