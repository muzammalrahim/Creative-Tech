const express = require("express");
const router = express.Router();

const {
  saveTestimonial,
  getTestimonialBYId,
  getTestimonials,
  deleteTestimonial,
  updateTestimonial,
} = require("../controllers/testimonial");

router.post("/save-testimonial", saveTestimonial);
router.get("/getTestimonial/:id", getTestimonialBYId);
router.get("/Testimonials", getTestimonials);
router.delete("/remove-testimonial/:id", deleteTestimonial);
router.put("/update-testimonial/:id", updateTestimonial);

module.exports = router;
