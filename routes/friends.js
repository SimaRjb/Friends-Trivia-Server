const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const charData = require("../data/friends-quotes.json");

router.route("/")
  .get((req, res) => {
    res.status(200).json(charData);
  })
router.route("/:charId")
  .get((req, res) => {
    const { charId } = req.params;

    const charMatch = charData.find((character) => character.charId == charId);
    if(!charMatch) return res.status(404).json(`No character with id ${charId}`);
    res.status(200).json(charMatch);
  })

  module.exports = router;