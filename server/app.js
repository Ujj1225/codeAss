  const express = require("express");
  const app = express();
  const cors = require("cors");
  const home = require("./routes/home");

  app.use(cors());
  app.use(express.json());

  require("dotenv").config();

  app.use("/api/v1", home);

  const port = process.env.PORT || 3000;

  const start = () => {
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  };

  start();
