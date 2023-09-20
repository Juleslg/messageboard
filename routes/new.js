var express = require("express");
var router = express.Router();
var messages = require("../messages");

router.get("/", function (req, res, next) {
  res.render("newMessage", { title: "Add new message" });
});

router.post("/", (req, res) => {
  res.send("hi");
});

module.exports = router;
