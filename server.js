var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var bodyParser = require('body-parser');
var api = require('./api/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(favicon());
app.use(logger('dev'));
app.use(express.bodyParser());
app.use(cookieParser());
app.use(cookieParser());
app.use(session({
    secret: 'Ohara Pub'
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);






app.post('/input_dish',api.input_dish);
//app.get('',api.index );
app.post('/input_dish',api.input_dish);
app.post('/addDish',api.addDish);
app.post('/addNews',api.addNews);
app.post('/addDishPhoto',api.addDishPhoto);
app.post('/addNewsPhoto',api.addNewsPhoto);
app.post('/postDishOutOfFile',api.postOutOfFile);
app.post('/postDishDataOutOfFile',api.postDishDataOutOfFile);
app.post('/postNewsDataOutOfFile',api.postNewsDataOutOfFile);
app.post('/postNewsOutOfFile',api.postNewsOutOfFile);
app.post('/addEvent',api.addEvent);


app.get('/getMenuTotal',api.getMenuTotal);
app.get('/getDishInfo/:dish',api.getDishInfo);
app.get('/getNewsInfo/:news',api.getNewsInfo);
app.get('/deletePicture/:dish/:pic',api.deletePicture);
app.get('/deleteNewsPicture/:news/:pic',api.deleteNewsPicture);
app.get('/deleteDishTotal/:dish',api.deleteDishTotal);
app.get('/deleteNewsTotal/:news',api.deleteNewsTotal);
app.get('/getNewsTotal',api.getNewsTotal);
app.get('/deleteEventTotal/:photo',api.deleteEventTotal);
app.get('/getEventsTotal',api.getEventsTotal);


app.get('*',function(req,res){
    res.sendfile('index.html');
});
/*
app.post('/adminPanel',api.tryToLog);
app.get('/adminPanel',function(req,res){
    res.sendfile('login.html');//Change this one
});//Link to lh:/adminPanel
*/
/*
app.get('*',function(req,res){
    if(req.session.user=='Admin'){
        res.sendfile('login.html');
    }else{
        res.redirect('/');/////Link other types of pages USERPAGES
    }
});

*/

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        console.log(err.message);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.log(err.message);
});

module.exports = app;
app.listen(4321);
