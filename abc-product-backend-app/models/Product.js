const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const ProductSchema = new Schema({
    productId: String,
    productName: String,
    productType: String,
    description: String,
    stockLocation: String,
    stocks: [{
      type: Schema.Types.ObjectId,
      ref: 'Stock'
   }],
   unitPrice:String
},
{timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);