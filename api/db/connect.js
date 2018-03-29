/*
 * 使用mongoose访问mongodb
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

mongoose.Promise = global.Promise;//为了解决过期的问题

// mongoose.set('debug', true);

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
