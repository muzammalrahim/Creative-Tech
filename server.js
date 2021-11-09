// cloud mongodb name : admin
// cloud mongodb password: admin@123

// step no 1
const express = require("express");
// initialize express with app and use express as a function
const app = express();
const cors = require("cors");

var bodyParser = require("body-parser");
const PORT = 6501;
const db = require("./config/db");
const userRouter = require("./routes/user");

const bannerRouter = require("./routes/banner");
const serviceRouter = require("./routes/service");
const partnerRouter = require("./routes/partner")
const testimonialRouter = require("./routes/testimonial");
const teamRouter = require("./routes/team.rout");
const faqRouter = require("./routes/faq");
const allEntities = require("./routes/totalEntities");
db();
// app.use(cors())
// // for parsing application/json
// app.use(bodyParser.json({ extended: true }));
// // for parsing application/xwww-
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));

app.get("/", (req, res) => {
  return res.json({
    msg: "Hello to test project",
  });
});

app.use("/", allEntities);
app.use("/user", userRouter);

app.use("/banner", bannerRouter);
app.use("/service" , serviceRouter);
app.use("/partner" , partnerRouter);

app.use("/testimonial" , testimonialRouter);
app.use("/team" , teamRouter);

app.use("/faq" , faqRouter);

// step no 2
// take two args . one is port and sec is call back function
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// CORS rquests
// app.use("/", (req, res, next) => {
//   res.header(
//     "Access-Control-Allow-Origin",
//     "https://fierce-springs-34587.herokuapp.com/"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With,Content-Type, Accept, Authorization"
//   );
//   // res.header(
//   //   "Access-Control-Allow-Methods",
//   //   "GET,PUT,PATCH,POST,DELETE,OPTIONS"
//   // );
//   next();
// });
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname, '../client', 'demo', 'index.html'));
//     // console.log
// })
// model

// controller

