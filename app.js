const express = require("express");
var mongoose = require( 'mongoose' );
let cookieParser = require('cookie-parser');
let config = require("./Config/config");
let path = require('path');
let app = express();
require("./Models/db");
let adminRouter = require('./routes/admin');
let employeeRouter = require('./routes/employee');
let serviceRouter = require('./routes/servicedetails');
let userRouter = require('./routes/user');

let port = config.port;
let cors = require('cors');
// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRouter);
app.use('/employee',employeeRouter);
app.use('/service',serviceRouter);
app.use('/user',userRouter);
// app.use('/image',public)
let server;
if (config.serverType == 'http') {
  let http = require('http');
  server = http.createServer(app);
} else {
  let https = require('https');
  server = https.createServer(config.options, app);
}
app.use("/images",express.static(__dirname + '/public/images/nov'));

server.listen(port, () => console.log(`Express server running `+ port));
app.get("/", function (req, res) {
  console.log('welcome')
	res.end("success");
});


module.exports = app;