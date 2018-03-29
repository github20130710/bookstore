/*
 * books 数据模型
 */

import mongoose from 'mongoose';
require('../db/connect');
var options = { page_size: 15 };
var Schema = mongoose.Schema;

var _schema = new Schema({
  id: String,
  name: { type:String, required:[true,"名称是必须的"] },  //第二个参数是错误提示信息
  value: { type:String, required:[true,"value是必须的"] }
}, { versionKey: false });
_schema.set('autoIndex', false);    // 默认不按索引排序

var _model = mongoose.model('tag', _schema);

/*
 * * * * * * * 方法论 * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * *
 */
var ModelDao = function(){};

// 按条件查询
ModelDao.prototype.find = (obj, callback)=>{
  obj = obj || {};
  _model.find(obj).exec((err, docs)=>{
    if(err)  console.log(err);
    else callback(docs);
  });
};

// 查询一个文档: 若有多个符合条件，仅返回第一个
ModelDao.prototype.findOne = (obj, callback)=>{
  _model.findOne(obj).limit(1).exec((err, doc)=>{
    if(err)   console.log(err);
    else callback(doc);
  });
};

// 新增
ModelDao.prototype.save = (obj, callback)=>{
  var instance = new _model(obj);
  instance.save((err)=>{
    callback(err);
  });
};

// 修改
ModelDao.prototype.update = (condition, obj, callback)=>{
  _model.update(condition, obj, (err)=>{
    callback(err);
  });
};

// 删除: 根据条件删除多个
ModelDao.prototype.remove = (condition, callback)=>{
  _model.remove(condition, (err)=>{
    callback(err);
  });
};

module.exports = new ModelDao();
