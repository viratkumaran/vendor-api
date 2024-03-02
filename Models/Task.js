var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var taskSchema = new Schema({
	"customer"   : {type:Array},
    "area":{type:String},
    "latitude":{type:String},
    "longitude":{type:String},
    "start":{type:String},
    "end":{type:String},
    "empId": { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
	"createdDate":{type: Date, default: Date.now},
    "updatedDate":{type: Date, default: Date.now},
});
module.exports = mongoose.model('Task', taskSchema, 'Task')