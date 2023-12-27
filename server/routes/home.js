const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.json({
    message: "Welcome first response of this API",
  });
});

module.exports = router;
