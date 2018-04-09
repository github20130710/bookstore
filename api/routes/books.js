/*
 * books路由
 * 业务逻辑
 */

var url = require('url');
var BookDao = require('../models/book');

//查询图书 不分页
exports.query = function(req, res) {
  var params = req.body || {};
  BookDao.find(params, (docs)=>{
    res.send(docs);
  });
};

// 查询图书  分页
exports.page = function(req, res) {
  var params = req.body || {};
  BookDao.page(params, (docs)=>{
    res.send(docs);
  });
};

// 获得一个
exports.findById=function(req,res){
  var id = url.parse(req.url, true).search || "";
  if(id.indexOf("?")>-1)  id = id.substr(1);
  BookDao.findOne(id, (docs)=>{
    res.send(docs);
  });
};

//添加图书
exports.add = function(req, res) {
  var book=req.body;
  BookDao.save(book, (err) => {
    if(err) {
      res.send({msg: '添加图书失败！'});
    } else {
      res.send({msg: '添加图书成功！'});
    }
  });
};

//删除图书
exports.delete = function(req, res) {
  let id = url.parse(req.url, true).search || "";
  let arr = id.split('/');
  if(arr.length > 0)  id = arr[arr.length-1];
  if(id="")   res.send({msg: '参数id缺失!'});
  var conditions={"id": id};
  BookDao.remove(conditions, (err) => {
    res.send(err);
  });
};

//更新
exports.update = function(req, res) {
  var cond=req.body.conditions;
  var book=req.body.entity;
  book.uDate = Date.now();
  BookDao.update(cond, book, (err) => {
    res.send(err);
  });
};
