const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/shakarez');

const db = mongoose.connection;

db.on('error', console.log.bind(console, "db error"));
db.once('open', () => {
    console.log("mongoose connected");
})

module.exports = db;
