const express = require("express");
const app = express();

app.use(express.json());

const getPersonID = (req, res) => {
  //   console.log("Which comes first");
  res.render("person", { ID: req.params.id });
};

const Person = (req, res) => {
  res.render("index");
};

module.exports = { getPersonID, Person };
