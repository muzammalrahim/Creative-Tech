// cloud mongodb name : admin
// cloud mongodb password: admin@123

// step no 1
const express = require("express");
const serverless = require('serverless-http');
// initialize express with app and use express as a function
const app = express();
const cors = require("cors");

const db = require("../config/db");
const userRouter = require("../routes/user");

const bannerRouter = require("../routes/banner");
const serviceRouter = require("../routes/service");
const partnerRouter = require("../routes/partner")
const testimonialRouter = require("../routes/testimonial");
const teamRouter = require("../routes/team.rout");
const faqRouter = require("../routes/faq");
const allEntities = require("../routes/totalEntities");
const contactRouter = require("../routes/contact");
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

app.use("/.netlify/functions/api", allEntities);
app.use("/.netlify/functions/api/user", userRouter);

app.use("/.netlify/functions/api/banner", bannerRouter);
app.use("/.netlify/functions/api/service" , serviceRouter);
app.use("/.netlify/functions/api/partner" , partnerRouter);

app.use("/.netlify/functions/api/testimonial" , testimonialRouter);
app.use("/.netlify/functions/api/team" , teamRouter);

app.use("/.netlify/functions/api/faq", faqRouter);

app.use("/.netlify/functions/api/contact", contactRouter);

module.exports = app;
module.exports.handler = serverless(app);


