//require the modules installed and then call them
const express = require("express");

//create server
var app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
