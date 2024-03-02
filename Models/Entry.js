var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var entrySchema = new Schema({
	"shopname"   : {type:String},
    "phoneno":{type:Number},
	"companyname"   : {type:Array},
    "location":{type:String},
    "userId": { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	"createdDate":{type: Date, default: Date.now},
    "updatedDate":{type: Date, default: Date.now},
});
module.exports = mongoose.model('Entry', entrySchema, 'Entry')