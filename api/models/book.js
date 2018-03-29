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
  author: String,
  press: String,
  provider: String,
  price: { type: Number, default: 0},
  discount: { type: Number, default: 0},
  stock: { type: Number, default: 0},
  sold: { type: Number, default: 0},
  categories: Array,
  tags: Array,
  cDate: { type: Date, default: Date.now },
  uDate: { type: Date, default: Date.now }
}, { versionKey: false });
_schema.set('autoIndex', false);    // 默认不按索引排序

var _model = mongoose.model('book', _schema);     //collection 中的单个document, 自动发现books

/*
 * * * * * * * 方法论 * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * *
 */
var ModelDao = function(){};

// 按条件查询
ModelDao.prototype.find = (obj, callback)=>{
  obj = obj || {};
  _model.find(obj).sort('-uDate').exec((err, docs)=>{
    if(err)  console.log(err);
    else callback(docs);
  });
};

/*
 * 分页&带条件精确查询
 * eg.  {pageSize:10, currentPage:2, query:{author:'Jack', press:'你猜哪个出版社'}}
 */
ModelDao.prototype.page = (obj, callback)=>{
  var conditions = obj.query || {};
  var pageSize = obj.pageSize || options.page_size;
  var currentPage = obj.currentPage || 1;
  _model.count(conditions, (count)=>{
    _model.find(conditions).limit(pageSize).skip((currentPage-1)*pageSize).sort('-uDate').exec((err, docs)=>{
      if(err){
        console.log(err);
      } else {
        var result = {
          total: count,
          currentPage: currentPage,
          pageSize: pageSize,
          rows: docs
        };
        callback(result);
      };
    });
  });
};

// 按名称模糊查询
ModelDao.prototype.findByName = (name, callback)=>{
  name = name || '';
  _model.count({}).where('name').in(name).exec((count)=>{
    _model.find({}).where('name').in(name).limit(pageSize).skip((currentPage-1)*pageSize).sort('-uDate').exec((err, docs)=>{
      if(err){
        console.log(err);
      } else {
        var result = {
          total: count,
          currentPage: currentPage,
          pageSize: pageSize,
          rows: docs
        };
        callback(result);
      };
    });
  });
  // _model.find({}).where('name').in(name).limit(options.page_size).sort('-uDate').exec((err, docs)=>{
  //   if(err)   console.log(err);
  //   else callback(docs);
  // });
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
