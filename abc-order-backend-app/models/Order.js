const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const OrderSchema = new Schema({
    orderId: String,
    customerId: String,
    items: [{
        productId: String,
        qty: Number
    }],
    total: Number,
},
{timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);