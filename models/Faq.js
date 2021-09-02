const mongoose = require("mongoose");

const FaqSchema = new mongoose.Schema({
  title: String,

  description: String,
});

module.exports = mongoose.model("faq", FaqSchema);
// module.exports={

//     name:nameSchema,
//     userSchema:mongoose.model("user", UserSchema);
// }
