const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    table: { type: Schema.Types.ObjectId, ref: "Table", required: true },
    drink: { type: String },
    food: { type: String },
    // drinks: [{ type: Schema.Types.ObjectId, ref: "Drink" }],
    // food: [{ type: Schema.Types.ObjectId, ref: "Food" }]
  },
  { timestamps: { createdAt: "created_at" } }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
