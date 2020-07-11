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

  fs.readFile(dataFile, "utf8", (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    var strNotes = JSON.stringify(data);

    notes.push(newNote);

    fs.writeFile(dataFile, JSON.stringify(notes), {}, function (err) {
      if (err) console.log(err);
      else {
        res.json(newNote);
      }
    });
  });
});

router.delete("/:id", function (req, res) {
  fs.readFile(dataFile, function (err, data) {
    if (err) throw err;
    let notes = JSON.parse(data);

    for (var i = 0; i < notes.length; i++) {
      noteId = notes[i].id;
      if (noteId === req.params.id) {
        notes.splice(i, 1);
        break;
      }
    }

    fs.writeFile(dataFile, JSON.stringify(notes), {}, function (err) {
      if (err) console.log(err);
      else {
        res.status(200).send();
      }
    });
  });
});

module.exports = router;
