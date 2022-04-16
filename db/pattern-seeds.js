const Pattern = require("../models/pattern-model");

const seedData = require("./pattern-seeds.json");

Pattern.deleteMany({})
  .then(() => {
    return Pattern.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
