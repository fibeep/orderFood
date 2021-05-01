const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinkItemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Float32Array, required: true },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Drink = mongoose.model("Drink", DrinkItemSchema);

module.exports = Drink;
