const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: String,
    designation: String,
    linkedin: String,
    image: String
})

module.exports = mongoose.model("team", TeamSchema)