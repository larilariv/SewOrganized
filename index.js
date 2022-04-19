const express = require("express");
const app = express();
const Pattern = require("./models/pattern-model");

app.set("view enigine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/patterns", (req, res) => {
  Pattern.find({})
    .then((patterns) => {
      res.json(patterns);
    })
    .catch(console.error);
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Express MVC app is running on port ${port}`);
});
