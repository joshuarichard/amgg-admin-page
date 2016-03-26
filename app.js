/* eslint-env node */
var express = require('express');
var fs = require('fs');
var path = require('path');
var nconf = require('nconf');
var bodyParser = require('body-parser');

var mongo = require('./data/mongo.js');

var app = express();

nconf.file({
    file: './config.json'
});

var port = nconf.get('app:port');

app.use(bodyParser.urlencoded({limit: "50mb", extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.redirect('index.html');
});

var childCollection = nconf.get('mongo:childCollection');
var donorCollection = nconf.get('mongo:donorCollection');
var cartCollection = nconf.get('mongo:cartCollection');

app.post('/api/v1/child/insert', function(req, res) {
    var child = req.body;
    mongo.insert(child, childCollection, function(result) {
        if (result.hasOwnProperty('err')) {
            res.status(500).send({
                success: false,
                message: result.err
            });
        } else {
            res.status(200).send({
                success: false,
                message: 'Child inserted.'
            });
        }
    });
});

app.listen(port, function () {
    console.log('Express port listening at ' + port);
});
