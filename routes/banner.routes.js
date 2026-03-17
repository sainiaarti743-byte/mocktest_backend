

const express = require("express");
const router = express.Router();

const {
  getBanners,
  addBanner,
  updateBanner,
  deleteBanner
} = require("../controllers/banner.controller");

router.get("/bannerlist", getBanners);

router.post("/bannerpost", addBanner);

router.put("/:id", updateBanner);

router.delete("/:id", deleteBanner);

module.exports = router;