#!/bin/bash

use bookstore;

db.books.insert({"name":"demo","author":"Jack","press":"邮电出版社","provider":"Sophia","price":14.98,"discount":"9.99","stock":999,"sold":23,"tags":""});
db.tags.insert({"name":"科技","value":"technology"});
db.users.insert({"name":"bookstore","password":"bookstore"});
