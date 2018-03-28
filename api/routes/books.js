/*
 * books路由
 * 业务逻辑
 */

var url = require('url');
var BooksDao = require('../db/books');

//查询图书 不分页
exports.query = function(req, res) {
  var params = req.body || {};
  BooksDao.query(params, (docs)=>{
    res.send(docs);
  });
};

// // 查询图书  分页
// exports.page = function(req, res) {
//   var params = req.body || {};
//   var pageSize = params.pageSize, curPage = params.curPage, conditions = params.conditions;
//   if(!params.pageSize)  pageSize = 15;
//   if(!params.curPage)  curPage = 1;
//   BooksDao.query(conditions, (docs)=>{
//     res.send(docs);
//   });
// };

// 获得一个
exports.findById=function(req,res){
  var id = url.parse(req.url, true).search || "";
  if(id.indexOf("?")>-1)  id = id.substr(1);
  BooksDao.findById(id, (docs)=>{
    res.send(docs);
  });
};

//添加图书
exports.add = function(req, res) {
  //从客户端发送到服务器的图书对象
  var book=req.body;
  book.cDate = Date.now();
  book.uDate = Date.now();
  BooksDao.save(book, (docs) => {
    res.send(docs);
  });
};

//删除图书
exports.delete = function(req, res) {
  var conditions=req.body;
  BooksDao.delete(conditions, (docs) => {
    res.send(docs);
  });
};

//更新
exports.update = function(req, res) {
  var cond=req.body.conditions;
  var book=req.body.entity;
  book.uDate = Date.now();
  BooksDao.update(cond, book, (docs) => {
    res.send(docs);
  });
};
