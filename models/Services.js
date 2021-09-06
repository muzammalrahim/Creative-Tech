const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: String,
  image:{
    data:Buffer,
    contentType:String
  },
  description: String,
});

module.exports = mongoose.model("service", UserSchema);
// module.exports={

//     name:nameSchema,
//     userSchema:mongoose.model("user", UserSchema);
// }
