const express = require("express");
const { home, optimize, review } = require("../controller/home");
const router = express.Router();

router.route("/").get(home);
router.route("/optimize").get(optimize);
router.route("/review").get(review)

module.exports = router;
