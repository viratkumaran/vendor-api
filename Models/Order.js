var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var orderSchema = new Schema({
	"ordernumber"   : {type:Number},
	"companyname"   : {type:Array},
    "productname":{type:Array},
    "price":{type:Number},
    "duration":{type:String},
    "userId": { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    "entryId": { type: mongoose.Schema.Types.ObjectId, ref: 'Entry' },


});
module.exports = mongoose.model('Order', orderSchema, 'Order')