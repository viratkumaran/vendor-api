var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var areaSchema = new Schema({
	"areaName"   : {type:String},
    "desc":{type:String},
	"createdDate":{type: Date, default: Date.now},
    "updatedDate":{type: Date, default: Date.now},
});
module.exports = mongoose.model('Area', areaSchema, 'Area')