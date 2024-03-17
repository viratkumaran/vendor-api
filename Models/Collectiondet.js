var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var collectiondetSchema = new Schema({
    "empId": { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    "custId": { type: mongoose.Schema.Types.ObjectId, ref: 'Service'},
    "ordId": { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    "pendingAmount":{type:Number},
    "collectedAmount":{type:Number},
    "remark":{type:String},
	"createdDate":{type: Date, default: Date.now},
    "updatedDate":{type: Date, default: Date.now},
});
module.exports = mongoose.model('Collectiondet', collectiondetSchema, 'Collectiondet')