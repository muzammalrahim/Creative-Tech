const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema({
  title: String,
  description: String,
  link:String,
  image:String
});

module.exports = mongoose.model("banner", BannerSchema);
// module.exports={

//     name:nameSchema,
//     userSchema:mongoose.model("user", UserSchema);
// }
