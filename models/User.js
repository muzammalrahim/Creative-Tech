const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: String,
  images: [],
  ref1: String,
  ref2: String,
  ref3: String,
  description: String,
});

module.exports = mongoose.model("user", UserSchema);
// module.exports={

//     name:nameSchema,
//     userSchema:mongoose.model("user", UserSchema);
// }
