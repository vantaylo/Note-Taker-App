const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

//get data file
const dataFile = path.join(__dirname, "./../../db/db.json");

//read db.json

//return all saved notes
