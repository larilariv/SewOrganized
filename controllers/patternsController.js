const express = require("express");
const router = express.Router();

const Pattern = require("../models/pattern-model");

router.get("/", (req, res) => {
  Pattern.find({})
    .then((patterns) => {
      res.render("patterns/index", { patterns });
    })
    .catch(console.error);
});

router.get("/new", (req, res) => {
  res.render("patterns/new");
});

router.get("/:id", (req, res) => {
  Pattern.find({})
    .then((pattern) => {
      res.render("patterns/show", pattern[req.params.id]);
    })
    .catch(console.error);
});

router.post("/", (req, res) => {
  Pattern.create(req.body)
    .then((pattern) => {
      res.redirect("/patterns");
    })
    .catch(console.error);
});

module.exports = router;
