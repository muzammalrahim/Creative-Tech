const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: String,
  
  description: String,
  link:String,
  image: String,
 
});

module.exports = mongoose.model("user", UserSchema);
// module.exports={

//     name:nameSchema,
//     userSchema:mongoose.model("user", UserSchema);
// }
