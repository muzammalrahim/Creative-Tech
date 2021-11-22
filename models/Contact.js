const mongoose = require("mongoose");
const validator = require("validator");

const ContactSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [validator.isEmail, "invalid email"],
  },
  subject: String,
  phone: String,
  message: String,
});

module.exports = mongoose.model("contact", ContactSchema);