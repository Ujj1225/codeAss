const express = require("express");
const app = express();
const cors = require("cors");
const query = require("./routes/query");

app.use(cors());
app.use(express.json());

require("dotenv").config();
  
const port = process.env.PORT || 3000;

app.use("/api/v1", query);

const start = () => {
  app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
  });
};

start();