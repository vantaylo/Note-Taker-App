const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();
const dataFile = path.join(__dirname, "./../../db/db.json");

router.get("/", function (req, res) {
  fs.readFile(dataFile, (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    res.json(notes);
  });
});

router.post("/", function (req, res) {
  let title = req.body.title;
  let text = req.body.text;
  console.log("My note " + title + " " + text);

  fs.readFile(dataFile, (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes.push({ title, text });
    console.log(notes);
  });
});

module.exports = router;
