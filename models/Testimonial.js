const mongoose = require("mongoose");

const TestimonialSchema = new mongoose.Schema({
 description: String,
 name:String,
 designation:String,
 image:String,
});

module.exports = mongoose.model("testimonial", TestimonialSchema);
// module.exports={

//     name:nameSchema,
//     userSchema:mongoose.model("user", UserSchema);
// }
