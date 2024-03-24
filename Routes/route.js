// const { Router } = require("express");

const express = require("express");
const { getPersonID, Person } = require("../controllers/controller");

const router = express.Router();

router.route("/").get(getPersonID);

router.route("/:id").get(Person);

module.exports = router;
