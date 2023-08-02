const express = require("express");
require("dotenv").config();
const cors = require("cors");

const routes = require("./routes");

// Database connection
require("./sqlconfig");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

// init routes
routes(app);
