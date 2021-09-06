const express = require("express");
const router = express.Router();
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Data.now())
  }
})
const upload = multer({ storage: storage });


const {
  saveService,
  getServiceBYId,
  getServices,
  deleteService,
  updateService,
} = require("../controllers/services");

router.post("/save-service", upload.single('services'), saveService);
router.get("/getService/:id", getServiceBYId);
router.get("/services", getServices);
router.delete("/remove-service/:id", deleteService);
router.put("/update-service/:id", updateService);

module.exports = router;
