const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TableSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Table = mongoose.model("Table", MessageSchema);

module.exports = Table;
