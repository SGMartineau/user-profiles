var express = require('express'),
    cors = require('cors'),
    expressSession = require('express-session'),
    bodyParser = require('body-parser'),
    profileCtrl = require('./controllers/profileCtrl'),
    userCtrl = require('./controllers/userCtrl');

var app = express();

app.use(bodyParser.json());

var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use(session({ secret: config.sessionSecret }));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.pushProfiles);

app.listen(3000, function () {
    console.log("listening on port 3000");
});