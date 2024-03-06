var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var taskSchema = new Schema({
    "empId": { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
	"customer"   : {type: Object},
    "area":{type:String},
    "start":{type:String},
    "end":{type:String},
	"createdDate":{type: Date, default: Date.now},
    "updatedDate":{type: Date, default: Date.now},
});
module.exports = mongoose.model('Task', taskSchema, 'Task')