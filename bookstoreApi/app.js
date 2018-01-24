var express = require('express');
var morgan = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorhandler = require('errorhandler');

var index = require('./routes/index'),
    books = require('./routes/books'),
    labels = require('./routes/labels'),
    categories = require('./routes/categories');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  if(req.method == "OPTIONS") {
    res.send("200");
  } else {
    next();
  }
});

app.use('/', index);
// -------------book---------------------
//获得所有的图书列表
app.get('/books', books.list);
//最大的编号
app.get('/books/maxid', books.getMax);
//添加
app.post('/books/book', books.add);
//删除
app.delete('/books/id/:id', books.del);
//更新
app.put('/books/book', books.update);
// -------------label---------------------
app.get('/labels', labels.list);
app.get('/labels/id/:id', labels.getOne);
app.post('/labels/label', labels.add);
app.delete('/labels/id/:id', labels.del);
app.put('/labels/label', labels.update);
// -------------category---------------------
app.get('/categories', categories.list);
app.get('/categories/id/:id', categories.getOne);
app.post('/categories/category', categories.add);
app.delete('/categories/id/:id', categories.del);
app.put('/categories/category', categories.update);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

if('development' == app.get('env')) {
  app.use(errorhandler());
}

module.exports = app;
