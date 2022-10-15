mongodb  = require('mongodb'), //  <--- var para o banco de dados
objectId = require('mongodb').ObjectId;

var url = 'mongodb://localhost:27017/moviesdb';      
var url = process.env.MONGOLAB_URI;