const mongoose = require("../db/connection");

const PatternSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    brand: { type: String, required: true },
    coverImage: String,
    lineArtImage: String,
    sizeChartImage: String,
    link: String,
    categories: [
      {
        type: String,
        required: true,
        enum: [
          "Activewear",
          "Coats",
          "Dresses",
          "Jackets",
          "Jumpsuits",
          "Underwear",
          "Pants",
          "Shorts",
          "Skirts",
          "Sleepwear",
          "Swimwear",
          "Tops",
        ],
      },
    ],
    description: String,
    difficulty: {
      type: String,
      enum: ["Very Easy", "Easy", "Average", "Advanced"],
    },
    fabricType: { type: String, enum: ["Knit", "Woven"] },
    fabricChoices: [{ type: String }],
    format: { type: String, enum: ["Digital", "Printed", "Both"] },
    digitalPrinted: Boolean,
    inPrint: Boolean,
    quantity: Number,
    rating: { type: Number, default: 0, min: 0, max: 5 },
    letterSize: [{ type: String, enum: ["XS", "S", "M", "L", "XL"] }],
    numSize: [
      { type: Number, enum: [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26] },
    ],
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const Pattern = mongoose.model("Pattern", PatternSchema);

module.exports = Pattern;
