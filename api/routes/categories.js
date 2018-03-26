/*
 * 使用monk访问mongodb
 * 以rest的方式向前台提供服务
 */

//依赖monk模块
var monk = require('monk');
//连接并打开数据库
var db = monk('localhost:27017/bookstore');
var categories = db.get('categories');

//列出所有
exports.list = function(req, res) {
    categories.find({}).then((docs) => {
        res.json(docs);
    }).then(() => db.close());
};

//获得一个
exports.getOne=function(req,res){
    categories.findOne({'id':id}).then((obj)=>{
        res.json(obj);
    }).then(() => db.close());
};

//添加
exports.add = function(req, res) {
    categories.findOne({}, {sort: "id"}).then((obj)=>{
        var category=req.body;
        category.createTime = Date.now();
        category.updateTime = Date.now();
        if(obj==null){
            category.id="1";
        } else {
            category.id=(parseInt(obj.id)+1)+"";
        }
        categories.insert(category).then((docs) => {
            res.json(docs);
        }).then(() => db.close());
    });
};

//删除
exports.del = function(req, res) {
    var id=req.params.id;
    categories.remove({"id":id}).then((obj)=>{
        res.json(obj);
    }).then(() => db.close());
};

//更新
exports.update = function(req, res) {
    var category=req.body;
    category.updateTime = Date.now();
    categories.update({"id":category.id}, category).then((obj)=>{
        res.json(obj);
    }).then(() => db.close());
};
