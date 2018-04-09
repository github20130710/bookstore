/*
 * books路由
 * 业务逻辑
 */

var url = require('url');
var TagDao = require('../models/tag');

//查询图书标签 不分页
exports.query = function(req, res) {
  var params = req.body || {};
  TagDao.find(params, (docs)=>{
    res.send(docs);
  });
};

// 查询图书标签  分页
exports.page = function(req, res) {
  var params = req.body || {};
  TagDao.page(params, (docs)=>{
    res.send(docs);
  });
};

// 获得一个
exports.findById=function(req,res){
  var id = url.parse(req.url, true).search || "";
  if(id.indexOf("?")>-1)  id = id.substr(1);
  TagDao.findOne(id, (docs)=>{
    res.send(docs);
  });
};

//添加图书
exports.add = function(req, res) {
  var tag=req.body;
  TagDao.save(tag, (err) => {
    if(err) {
      res.send('添加图书标签失败！');
    } else {
      res.send('添加图书标签成功！');
    }
  });
};

//删除图书标签
exports.delete = function(req, res) {
  let id = url.parse(req.url, true).search || "";
  let arr = id.split('/');
  if(arr.length > 0)  id = arr[arr.length-1];
  if(id="")   res.send({msg: '参数id缺失!'});
  var conditions={"id": id};
  CategoryDao.remove(conditions, (err) => {
    res.send(err);
  });
};

//更新
exports.update = function(req, res) {
  var cond=req.body.conditions;
  var category=req.body.entity;
  TagDao.update(cond, category, (err) => {
    res.send(err);
  });
};
