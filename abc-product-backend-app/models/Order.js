const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const OrderSchema = new Schema({
    OrderId: String,
    CustomerId: String,
    items: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        qty: number
    }],
    total: double,
},
{timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);