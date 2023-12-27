const home = (req, res) => {
  res.json({
    message: "Welcome first response of this API",
  });
};

module.exports = { home };
