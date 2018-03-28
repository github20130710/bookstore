/*
 * 使用mongoose访问mongodb
 * 封装mongodb操作
 */

// 依赖mongoose模块
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import logger from 'logger';

var options = {
    db_user: "root",
    db_pwd: "123",
    db_host: "localhost",
    db_port: 27017,
    db_name: "bookstore"
};

const configurations = {
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    bufferMaxEntries: 0
};

var dbURL = "mongodb://" + options.db_host + ":" + options.db_port + "/" + options.db_name;
mongoose.connect(dbURL, configurations);

// mongoose连接状态设置
mongoose.connection.on('connected', function (err) {
    if (err)
    logger.error('mongodb connect to %s error: ', dbURL, err.message);
});

mongoose.connection.on('error', function (err) {
    logger.error('Mongoose connected error ' + err);
});

mongoose.connection.on('disconnected', function () {
    logger.error('Mongoose disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        logger.error('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

// mongoose封装操作
var DB = function () {
    this.mongoClient = {};
    var filename = path.join(path.dirname(__dirname).replace('app', ''), 'db/schema.json');
    this.schema = JSON.parse(fs.readFileSync(path.normalize(filename)));
};

/**
 * 初始化mongoose model
 * @param collection_name 集合名称
 */
DB.prototype.getConnection = function (collection_name) {
    if (!collection_name) return;
    if (!this.schema[collection_name]) {
        logger.error('No Collection structure');
        return false;
    }

    var client = this.mongoClient[collection_name];
    if (!client) {
        //构建集合结构
        var nodeSchema = new mongoose.Schema(this.schema[collection_name]);

        //构建model
        client = mongoose.model(collection_name, nodeSchema, collection_name);

        this.mongoClient[collection_name] = client;
    }
    return client;
};

/**
 * 保存数据
 * @param collection_name 集合名
 * @param fields 集合数据
 * @param callback 回调方法
 */
DB.prototype.save = function (collection_name, fields, callback) {
    if (!fields) {
        if (callback) callback({msg: 'Field is not allowed for null'});
        return false;
    }

    var err_num = 0;
    for (var i in fields) {
        if (!this.schema[collection_name][i]) err_num ++;
    }
    if (err_num > 0) {
        if (callback) callback({msg: 'Wrong field name'});
        return false;
    }

    var node_model = this.getConnection(collection_name);
    var mongooseEntity = new node_model(fields);
    mongooseEntity.save(function (err, res) {
        if (err) {
            if (callback) callback(err);
        } else {
            if (callback) callback(null, res);
        }
    });
};

/**
 * 更新数据
 * @param collection_name 集合名
 * @param conditions 更新需要的条件 {_id: id, user_name: name}
 * @param update_fields 要更新的字段 {age: 21, sex: 1}
 * @param callback 回调方法
 */
DB.prototype.update = function (collection_name, conditions, update_fields, callback) {
    if (!update_fields || !conditions) {
        if (callback) callback({msg: 'Parameter error'});
        return;
    }
    var node_model = this.getConnection(collection_name);
    node_model.update(conditions, {$set: update_fields}, {multi: true, upsert: true}, function (err, res) {
        if (err) {
            if (callback) callback(err);
        } else {
            if (callback) callback(null, res);
        }
    });
};

/**
 * 更新数据方法(带操作符的)
 * @param collection_name 数据集合名
 * @param conditions 更新条件 {_id: id, user_name: name}
 * @param update_fields 更新的操作符 {$set: {id: 123}}
 * @param callback 回调方法
 */
DB.prototype.updateData = function (collection_name, conditions, update_fields, callback) {
    if (!update_fields || !conditions) {
        if (callback) callback({msg: 'Parameter error'});
        return;
    }
    var node_model = this.getConnection(collection_name);
    node_model.findOneAndUpdate(conditions, update_fields, {multi: true, upsert: true}, function (err, data) {
        if (callback) callback(err, data);
    });
};

/**
 * 删除数据
 * @param collection_name 集合名
 * @param conditions 删除需要的条件 {_id: id}
 * @param callback 回调方法
 */
DB.prototype.remove = function (collection_name, conditions, callback) {
    var node_model = this.getConnection(collection_name);
    node_model.remove(conditions, function (err, res) {
        if (err) {
            if (callback) callback(err);
        } else {
            if (callback) callback(null, res);
        }
    });
};

/**
 * 查询数据
 * @param collection_name 集合名
 * @param conditions 查询条件
 * @param callback 回调方法
 */
DB.prototype.find = function (collection_name, conditions, callback) {
    var node_model = this.getConnection(collection_name);
    node_model.find(conditions, {}, function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

/**
 * 查询单条数据
 * @param collection_name 集合名
 * @param conditions 查询条件
 * @param callback 回调方法
 */
DB.prototype.findOne = function (collection_name, conditions, callback) {
    var node_model = this.getConnection(collection_name);
    node_model.findOne(conditions, function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

/**
 * 根据_id查询指定的数据
 * @param collection_name 集合名
 * @param _id 可以是字符串或 ObjectId 对象。
 * @param callback 回调方法
 */
DB.prototype.findById = function (collection_name, _id, callback) {
    var node_model = this.getConnection(collection_name);
    node_model.findById(_id, function (err, res){
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

/**
 * 返回符合条件的文档数
 * @param collection_name 集合名
 * @param conditions 查询条件
 * @param callback 回调方法
 */
DB.prototype.count = function (collection_name, conditions, callback) {
    var node_model = this.getConnection(collection_name);
    node_model.count(conditions, function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

/**
 * 查询符合条件的文档并返回根据键分组的结果
 * @param collection_name 集合名
 * @param field 待返回的键值
 * @param conditions 查询条件
 * @param callback 回调方法
 */
DB.prototype.distinct = function (collection_name, field, conditions, callback) {
    var node_model = this.getConnection(collection_name);
    node_model.distinct(field, conditions, function (err, res) {
        if (err) {
            callback(err);
        } else {
            callback(null, res);
        }
    });
};

/**
 * 连写查询
 * @param collection_name 集合名
 * @param conditions 查询条件 {a:1, b:2}
 * @param options 选项：{fields: "a b c", sort: {time: -1}, limit: 10}
 * @param callback 回调方法
 */
DB.prototype.where = function (collection_name, conditions, options, callback) {
    var node_model = this.getConnection(collection_name);
    node_model.find(conditions)
        .select(options.fields || '')
        .sort(options.sort || {})
        .limit(options.limit || {})
        .exec(function (err, res) {
            if (err) {
                callback(err);
            } else {
                callback(null, res);
            }
        });
};

module.exports = new DB();
