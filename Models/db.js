var mongoose = require( 'mongoose' );
const fs = require("fs");
var config   = require("../Config/config");
mongoose.connect(config.dbconnection).then(() => console.log("connection successful")).catch((err) => console.error(err));
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open');
    //require('../dbImport');
  });
  mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
  });
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });
  
  require('./Admin');
  require('./Employee');
  require('./Service');
  require('./User');
  require('./Entry');
  require('./Order');
  require('./Area');
  require('./Task');


