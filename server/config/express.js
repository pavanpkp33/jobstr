let express = require('express');
let path = require('path');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors');


// view engine setup
module.exports = function (app, config) {

    app.set('views', path.join(config.rootPath, 'public'));
    app.use(logger('dev'));
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());
    app.use(cookieParser());
    app.use(express.static(path.join(config.rootPath, 'public')));


    app.get("/", (req, res)=>{
        res.status(200).json({"status" : "UP"});
    });



}