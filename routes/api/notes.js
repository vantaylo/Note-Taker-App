const express = require("express");
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");

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
  let id = uuid.v4();

  let newNote = {
    id,
    title,
    text,
  };

  console.log("My new note: " + newNote);

  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    var strNotes = JSON.stringify(data);

    console.log("Result for var notes: " + strNotes);

    notes.push(newNote);
    console.log("All my notes: " + JSON.stringify(notes));

    fs.writeFile(dataFile, JSON.stringify(notes), {}, function (err) {
      if (err) console.log(err);
      else {
        res.json(newNote);
        console.log("File written successfully\n");
      }
    });
  });
});

module.exports = router;
