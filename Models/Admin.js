var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adminSchema = new Schema({
	"email"   : {type:String,required: true,unique: true},
	"password"   : {type:String},
});
module.exports = mongoose.model('Admin', adminSchema, 'Admin')