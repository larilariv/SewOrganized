const express = require("express");
const router = express.Router();

const Pattern = require("../models/pattern-model");

router.get("/", (req, res) => {
  let brand = req.query.brands;
  let category = req.query.categories;
  if (brand !== undefined) {
    Pattern.find({ brand: brand })
      .sort("name")
      .then((patterns) => {
        res.render("patterns/index", { patterns });
      })
      .catch(console.error);
  } else if (category !== undefined) {
    Pattern.find({ categories: category })
      .sort("name")
      .then((patterns) => {
        res.render("patterns/index", { patterns });
      })
      .catch(console.error);
  } else {
    Pattern.find({})
      .sort("name")
      .then((patterns) => {
        res.render("patterns/index", { patterns });
      })
      .catch(console.error);
  }
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

router.put("/:name", (req, res) => {
  Pattern.findOneAndUpdate(
    { name: req.params.name },
    {
      brand: req.body.brand,
      coverImage: req.body.coverImage,
      lineArtImage: req.body.lineArtImage,
      sizeChartImage: req.body.sizeChartImage,
      link: req.body.link,
      categories: req.body.categories,
      description: req.body.description,
      difficulty: req.body.difficulty,
      fabricType: req.body.fabricType,
      fabricChoices: req.body.fabricChoices,
      format: req.body.format,
      digitalPrinted: req.body.digitalPrinted,
      inPrint: req.body.inPrint,
      quantity: req.body.quantity,
      rating: req.body.rating,
      letterSize: req.body.letterSize,
      numSize: req.body.numSize,
      tags: req.body.tags,
    },
    { new: true }
  )
    .then((pattern) => {
      res.render("patterns/show", pattern);
    })
    .catch(console.error);
});

router.post("/", (req, res) => {
  if (typeof req.body.categories === "string") {
    req.body.categories = [req.body.categories];
  }
  Pattern.create(req.body)
    .then((pattern) => {
      res.redirect("/patterns");
    })
    .catch(console.error);
});

router.delete("/:name", (req, res) => {
  Pattern.findOneAndRemove({ name: req.params.name })
    .then(() => {
      res.redirect("/patterns");
    })
    .catch(console.error);
});

module.exports = router;
