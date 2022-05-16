const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const SupplierSchema = new Schema({
    supplierId: String,
    name: String,
    description: String,
    location: String
},
{timestamps: true});

module.exports = mongoose.model('Supplier', SupplierSchema);