const { required } = require("nodemon/lib/config");
const mongoose = require("../db/connection");

const PatternSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    brand: { type: String, required: true },
    categories: [{ type: String, required: true }],
    coverImage: String,
    lineArtImage: String,
    sizeChartImage: String,
    link: String,
    description: String,
    difficulty: {
      type: String,
      enum: ["Very Easy", "Easy", "Average", "Advanced"],
    },
    fabricType: { type: String, enum: ["Knit", "Woven"] },
    fabricRecs: [{ type: String }],
    format: { type: String, enum: ["Digital", "Printed", "Both"] },
    sizeRange: String,
  },
  { timestamps: true }
);

const Pattern = mongoose.model("Pattern", PatternSchema);

module.exports = Pattern;
