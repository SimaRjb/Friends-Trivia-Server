const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const charData = require("../data/friends-quotes.json");

router.route("/")
  .get((req, res) => {
    res.status(200).json("good");
  })
router.route("/:charId")
  .get((req, res) => {
    const { charId } = req.params;

    const charMatch = charData.find((character) => character.charId == charId);
    // if(!userMatch) return res.status(404).json(`No user with id ${userId}`);
    // res.json(userMatch);
    res.status(200).json(charMatch);
  })

  module.exports = router;