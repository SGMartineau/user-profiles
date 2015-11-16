var express = require('express'),
    cors = require('cors'),
    expressSession = require('express-session'),
    bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:3000'
};



app.listen(3000, function () {
    console.log("listening on port 3000");
});