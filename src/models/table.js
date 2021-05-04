const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TableSchema = new Schema(
  {
    number: { type: String, required: true, unique: true },
    order: { type: Schema.Types.ObjectId, ref: "Order", required: false },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Table = mongoose.model("Table", TableSchema);

module.exports = Table;
