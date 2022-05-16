const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const SupplierSchema = new Schema({
    SupplierId: String,
    Name: String,
    Description: String,
    Location: String
},
{timestamps: true});

module.exports = mongoose.model('Supplier', SupplierSchema);