const mongoose = require('mongoose');
const {Schema} = require('mongoose');

var Stock = mongoose.Schema({
    stockId: {type:String,required:true},
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
     },
    supplierId: String,
    recievedDate: String,
    recievedQty: Number,
    outGoingQty: Number,
    purchasePrice: Number
    //addrecievingDate

 });

 module.exports = mongoose.model('Stock', Stock)
