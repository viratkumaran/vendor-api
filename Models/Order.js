var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var orderSchema = new Schema({
	"ordernumber"   : {type:Number},
    "productname":{type:Array},
    "price":{type:Number},
    "empId": { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    "entryId": { type: mongoose.Schema.Types.ObjectId, ref: 'Entry' },


});
module.exports = mongoose.model('Order', orderSchema, 'Order')