import express from "express";
//import consign from "consign";
import path from 'path';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import errorhandler from 'errorhandler';

const PORT = 3000;
const app = express();
//app.set("json spaces", 4);

//consign()
    //.include("db/base.js")
    //.then("db/books.js")
    //.then("routes/books.js")
    //.into(app);

var books = require('./routes/books');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
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

// -------------book---------------------
//获得所有的图书列表
app.post('/books', books.query);
app.get('/books', books.query);
//按ID获取一个
app.get('/books/findById?:id', books.findById);
//添加
app.post('/books/book', books.add);
//删除
app.delete('/books', books.delete);
//更新
app.put('/books/book', books.update);

app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));

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
