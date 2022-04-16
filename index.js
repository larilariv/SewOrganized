const express = require("express");

const app = express();

const Pattern = require("./models/pattern-model");

app.get("/", (req, res) => res.render("Boop"));

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Express MVC app is running on port ${port}`);
});
