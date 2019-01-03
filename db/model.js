const mongoose = require('mongoose');
const db = require('./index.js');

const picSchema = mongoose.Schema({
    title: {type: String, require: true}, 
    picture: {type: String, require: true},
    id: {type: Number, require: true},
    about: String
})

const Image = mongoose.model('Image', picSchema);

module.exports = Image;
