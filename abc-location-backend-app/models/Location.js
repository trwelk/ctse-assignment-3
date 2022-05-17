const mongoose = require('mongoose');
const {} = require('mongoose');

const Location = new ({
    locationId: String,
    address:String,
    temperature: Number,
    humidity: Number,
},
{timestamps: true});

module.exports = mongoose.model('Location', Location);