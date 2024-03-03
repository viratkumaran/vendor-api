var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var serviceSchema = new Schema({
	"name"   : {type:String},
	"area"   : {type:String},
	"product"   : {type:Array},
    "customerno":{type:String},
	"alternateno":{type:String},
	"person":{type:String},
	"email":{type:String},
	"website":{type:String},
	"gst":{type:String},
	"certificate":{type:String},
	"photo":{type:String},
	"remark":{type:String},
	"latitude":{type:String},
	"longitude":{type:String},
	"createdDate":{type: Date, default: Date.now},
    "updatedDate":{type: Date, default: Date.now},
});
module.exports = mongoose.model('Service', serviceSchema, 'Service')