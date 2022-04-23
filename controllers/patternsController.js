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

router.get("/:name", (req, res) => {
  Pattern.findOne({ name: req.params.name })
    .then((pattern) => {
      res.render("patterns/show", pattern);
    })
    .catch(console.error);
});

router.get("/:name/edit", (req, res) => {
  Pattern.findOne({ name: req.params.name })
    .then((pattern) => {
      res.render("patterns/edit", pattern);
    })
    .catch(console.error);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  Pattern.findOneAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      brand: req.body.brand,
      categories: req.body.categories,
    },
    { new: true }
  )
    .then((pattern) => {
      res.render("patterns/show", pattern);
    })
    .catch(console.error);
});

router.post("/", (req, res) => {
  console.log(req.body);
  Pattern.create(req.body)
    .then((pattern) => {
      res.redirect("/patterns");
    })
    .catch(console.error);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Pattern.findOneAndRemove({ _id: id })
    .then(() => {
      res.redirect("/patterns");
    })
    .catch(console.error);
});

module.exports = router;
