var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var productSchema = new Schema({
	"product"   : {type:String},
    "desc":{type:String},
    "price":{type:Number},
	"createdDate":{type: Date, default: Date.now},
    "updatedDate":{type: Date, default: Date.now},
});
module.exports = mongoose.model('Product', productSchema, 'Product')