var express = require("express");
var router = express.Router();
var messages = require("../messages");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", (req, res) => {
  const newMessage = {
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  };

  messages.push(newMessage);
  res.redirect("/"); // Redirect back to the main page to see the new message
});

module.exports = router;
