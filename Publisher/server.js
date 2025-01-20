require("dotenv").config("/config.js");
const express = require("express");
const { bodyParser } = require("body-parser");
const cors = require("cors");
const { connect } = require("./src/producer.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 3501;

//app.use(bodyParser.json("application/json"));

app.get("/get", async (req, res) => {
  res.json({ message: "Producer Service is working" });
});

app.post("/", async (req, res, next) => {
  try {
    // producer.publishMessage(req.body.logType, req.body.message);
    // res.json({ message: "Success" });
    console.log("connecting");
    connect();
  } catch (error) {
    res.json({ message: "Error occurred", error });
  }
});

app.listen(PORT, () => {
  console.log(`Producer Service is running on PORT ${PORT}`);
});
