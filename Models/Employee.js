var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var employeeSchema = new Schema({
    "name":{type:String},
    "lastname":{type:String},
    "dob":{type:String},
    "qualification":{type:String},
    "certificate":{type:String},
    "aadhar":{type:String},
    "desc":{type:String},
	"email"   : {type:String,required: true,unique: true},
	"password"   : {type:String},
    "serviceName":{type:Array},//
    "PhoneNumber":{type:String},
    "currentLocations":{type:String},
    "empid":{type:String},
    "jobtitle":{type:String},
    "attendence":{type:Boolean,default:false},
    "availableStatus":{type:String},//Pending,Approved,Rejected
    "slot":{type:String},//Available,Waiting,Booked,Not Available
    "createdDate":{type: Date, default: Date.now},
    "updatedDate":{type: Date, default: Date.now},



});
module.exports = mongoose.model('Employee', employeeSchema, 'Employee')