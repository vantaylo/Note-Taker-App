//require the modules installed and then call them
const express = require("express");
const path = require("path");

//create server
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//routing
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});

app.use("/notes", require("./routes/html/notes"));

app.use("/api/notes", require("./routes/api/notes"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
