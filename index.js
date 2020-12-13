var express = require('express');
var session = require('express-session');
var json = require('jsonfile');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var i18n = require('i18n-express');
var mail = require('./script/mail.js');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use('/js', express.static(__dirname + "/node_modules/jquery/dist"));
app.use('/js', express.static(__dirname + "/node_modules/popper.js/dist"));
app.use(express.static(__dirname + '/node_modules/swiper/dist'));

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(session({
   secret: 'secret',
   saveUninitialized: true,
   resave: true
 }));

 app.use(i18n({
   translationsPath: path.join(__dirname, '/data/translation'),
   siteLangs: ["en", "nl", "fr"],
   textsVarName: "trans"
}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render('home', {active: "home"});
 });

 app.get('/obstacles', function(req, res){
    json.readFile('data/obstacles.json', (err, obj) => {
      res.render('obstacles', {active: "obstacles", obstacles: obj});
    })
 });

 app.get('/accessoires', function(req, res){
    json.readFile('data/accessoires.json', (err, obj) => {
      res.render('accessoires', {active: "accessoires", accessoires: obj});
    });
 });

 app.get('/contact', function(req, res){
    res.render('contact', {active: "contact", mail: req.query.mail});
 });

 app.post('/mail', function(req, res) {
   mail.sendMail(req.body.email, req.body.subject, req.body.name, req.body.phone, req.body.text);
   res.redirect('/contact?mail=true');
 })

 
app.listen(3000);