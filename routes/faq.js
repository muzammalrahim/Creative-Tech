const express = require("express");
const router = express.Router();

const {
  saveFaq,
  getFaqBYId,
  getFaq,
  deleteFaq,
  updateFaq,
} = require("../controllers/faq");

router.post("/save-faq", saveFaq);
router.get("/getFaq/:id", getFaqBYId);
router.get("/faq", getFaq);
router.delete("/remove-faq/:id", deleteFaq);
router.put("/update-faq/:id", updateFaq);

module.exports = router;
