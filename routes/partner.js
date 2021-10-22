const express = require("express");
const router = express.Router();

const {
  savePartner,
  getPartnerById,
  getPartners,
  deletePartner,
  updatePartner,
} = require("../controllers/partner");

router.post("/save-partner", savePartner);
router.get("/getPartner/:id", getPartnerById);
router.get("/partners", getPartners);
router.delete("/remove-partner/:id", deletePartner);
router.put("/update-partner/:id", updatePartner);

module.exports = router;
