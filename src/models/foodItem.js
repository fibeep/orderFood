const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Float32Array, required: true },
    
  },
  { timestamps: { createdAt: "created_at" } }
);

const Food = mongoose.model("Food", FoodItemSchema);

module.exports = Food;
