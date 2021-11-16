const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: String,
    designation: String,
    image: String,
    skills: String
})

module.exports = mongoose.model("team", TeamSchema)