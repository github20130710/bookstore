/*
 * books路由
 * 业务逻辑
 */

var url = require('url');
var CategoryDao = require('../models/category');

//查询图书类型 不分页
exports.query = function(req, res) {
  var params = req.body || {};
  CategoryDao.find(params, (docs)=>{
    res.send(docs);
  });
};

// 查询图书类型  分页
exports.page = function(req, res) {
  var params = req.body || {};
  CategoryDao.page(params, (docs)=>{
    res.send(docs);
  });
};

// 获得一个
exports.findById=function(req,res){
  var id = url.parse(req.url, true).search || "";
  if(id.indexOf("?")>-1)  id = id.substr(1);
  CategoryDao.findOne(id, (docs)=>{
    res.send(docs);
  });
};

//添加图书
exports.add = function(req, res) {
  var category=req.body;
  CategoryDao.save(category, (err) => {
    console.log(err);
    if(err) {
      res.send('添加图书类型失败！');
    } else {
      res.send('添加图书类型成功！');
    }
  });
};

//删除图书类型
exports.delete = function(req, res) {
  var conditions=req.body;
  CategoryDao.remove(conditions, (err) => {
    res.send(err);
  });
};

//更新
exports.update = function(req, res) {
  var cond=req.body.conditions;
  var category=req.body.entity;
  CategoryDao.update(cond, category, (err) => {
    res.send(err);
  });
};
