const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    drinks: [{ type: Schema.Types.ObjectId, ref: "Drink" }],
    food: [{ type: Schema.Types.ObjectId, ref: "Food" }],
  },
  { timestamps: { createdAt: "created_at" } }
);

const Menu = mongoose.model("Menu", OrderSchema);

module.exports = Menu;
