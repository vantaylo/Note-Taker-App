//require the modules installed and then call them
const express = require("express");
const path = require("path");

//create server
const app = express();

const PORT = process.env.PORT || 5000;

//routing
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
