/*
 * 使用monk访问mongodb
 * 以rest的方式向前台提供服务
 */

//依赖monk模块
var monk = require('monk');
//连接并打开数据库
var db = monk('localhost:27017/bookstore');
var labels = db.get('labels');

//列出所有
exports.list = function(req, res) {
  labels.find({}).then((docs) => {
    res.json(docs);
  }).then(() => db.close());
};

//获得一个
exports.getOne=function(req,res){
  labels.findOne({'id':id}).then((obj)=>{
    res.json(obj);
  }).then(() => db.close());
};

//添加
exports.add = function(req, res) {
  labels.findOne({}, {sort: {id: -1}}).then((obj)=>{
    var book=req.body;
    book.id=(parseInt(obj.id)+1)+"";
    labels.insert(book).then((docs) => {
      res.json(docs);
    }).then(() => db.close());
  });
};

//删除
exports.del = function(req, res) {
  var id=req.params.id;
  labels.remove({"id":id}).then((obj)=>{
    res.json(obj);
  }).then(() => db.close());
};

//更新
exports.update = function(req, res) {
  var book=req.body;
  labels.update({"id":book.id}, book).then((obj)=>{
    res.json(obj);
  }).then(() => db.close());
};
