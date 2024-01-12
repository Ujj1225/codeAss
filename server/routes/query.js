const express = require("express");

const { optimize, translate, review } = require("../controller/query");

const router = express.Router();

router.route("/optimize").post(optimize);
router.route("/translate").post(translate);
router.route("/review").post(review);

module.exports = router;
