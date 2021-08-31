const express = require("express");
const router = express.Router();

const {
  saveService,
  getServiceBYId,
  getServices,
  deleteService,
  updateService,
} = require("../controllers/services");

router.post("/save-service", saveService);
router.get("/getService/:id", getServiceBYId);
router.get("/services", getServices);
router.delete("/remove-service/:id", deleteService);
router.put("/update-service/:id", updateService);

module.exports = router;
