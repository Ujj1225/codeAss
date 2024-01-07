const express = require("express");
const { home, optimize, review, translate } = require("../controller/home");
const router = express.Router();

router.route("/").get(home);
router.route("/optimize").post(optimize);
router.route("/review").post(review)
router.route("/translate").post(translate);

module.exports = router;
