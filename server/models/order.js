var mongoose = require('mongoose');
var OrderSchema = new mongoose.Schema({
    name: String,
    product: String,
    quantity: Number,
    date: Date
});

mongoose.model('Order', OrderSchema);