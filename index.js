var React = require('react');
var express = require('express');
var path = require('path');

var app = express();

var hbs = require('hbs');

// 指定模板文件的后缀名为html
app.set('view engine', 'html');
app.set("views", __dirname + "/views");

// 运行hbs模块
app.engine('html', hbs.__express);
app.use(express.static('public'));
var routes = require('./router.js')(app);
app.listen(3000);