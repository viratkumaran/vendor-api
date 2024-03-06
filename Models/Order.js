var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var orderSchema = new Schema({
	"ordernumber"   : {type:Number},
    "productList":{type:Array},
    "totalPrice":{type:Number},
    "empId": { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },

});
module.exports = mongoose.model('Order', orderSchema, 'Order')