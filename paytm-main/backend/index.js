const JWT_SECRET = require("./config");

const express = require("express");
const app = express();
app.listen(3000, () => console.log("Listening!"));

app.use(express.json());

var cors = require("cors");
app.use(cors());

const router = require("./routes/index");
app.use("/api/v1", router);
