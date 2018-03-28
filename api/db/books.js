/*
 * 使用monk访问mongodb
 * 以rest的方式向前台提供服务
 */

import mongoose from 'mongoose';
var DB = require('./db');

var BooksDao = function(){};

BooksDao.prototype.query = function(obj, callback){
  DB.find('books', obj, function (err, res) {
    if(err){
      console.log(err);
    } else {
      callback(res);
    }
  });
};

BooksDao.prototype.findOne = function(obj, callback){
  DB.findOne('books', obj, function (err, res) {
    if(err){
      console.log(err);
    } else {
      callback(res);
    }
  });
};

BooksDao.prototype.findById = function(id, callback){
  DB.findById('books', id, function (err, res) {
    if(err){
      console.log(err);
    } else {
      callback(res);
    }
  });
};

BooksDao.prototype.save = function(obj, callback){
    DB.save('books', obj, function (err, res) {
        if(err){
            console.log(err);
        } else {
            callback(res);
        }
    });
};

BooksDao.prototype.update = function(cond, obj, callback){
    DB.update('books', cond, obj, function (err, res) {
        if(err){
            console.log(err);
        } else {
            callback(res);
        }
    });
};

BooksDao.prototype.delete = function(obj, callback){
    DB.remove('books', obj, function (err, res) {
        if(err){
            console.log(err);
        } else {
            callback(res);
        }
    });
};

module.exports = new BooksDao();
