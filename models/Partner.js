const mongoose = require("mongoose");
                
const PartnerSchema = new mongoose.Schema({
  link:String,
  image:String
});

module.exports = mongoose.model("partner", PartnerSchema);
