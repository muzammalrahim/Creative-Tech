const express = require('express')
const router = express.Router();
const {
    saveBanner,
    getBannerBYId,
    getBanners,
    deleteBanner,
    updateBanner,
  } = require("../controllers/banners");
  router.post("/save-banner", saveBanner);
  router.get("/getBanner/:id", getBannerBYId);
  router.get("/banners", getBanners);
  router.delete("/remove-banner/:id", deleteBanner);
  router.put("/update-banner/:id", updateBanner);
  
  module.exports = router;
  
  