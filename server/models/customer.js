var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    name: {type: String, require: true, unique: true, trim: true},
    date: Date
});

mongoose.model('Customer', CustomerSchema);