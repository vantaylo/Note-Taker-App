const express = require("express");
const router = express.Router();
const path = require("path");

// get the notes.html
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./../../public/notes.html"));
});

module.exports = router;
