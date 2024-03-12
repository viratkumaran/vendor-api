var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var expensiveSchema = new Schema({
    "proof":{type:String},
    "price":{type:Number},
    "empId": { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },

});
module.exports = mongoose.model('Expensive', expensiveSchema, 'Expensive')