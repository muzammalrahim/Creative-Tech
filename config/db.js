const mongoose = require("mongoose");

const URL = 'mongodb+srv://dbCtech:ctech@cluster0.za4ul.mongodb.net/ctech?retryWrites=true&w=majority'

const dbConnect = async () => {
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useCreateIndex:true,
      useNewUrlParser: true,
      useFindAndModify:false
    });
    console.log("connected to db");
  } catch (error) {
    console.log("error in db Connection ....", error);
  }
};

module.exports = dbConnect;
