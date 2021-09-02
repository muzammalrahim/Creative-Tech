const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: String,
    designation: String,
    linkedin: String,
    imag: String
})

module.exports = mongoose.model("team", TeamSchema)