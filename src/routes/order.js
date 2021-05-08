const express = require("express");
const router = express.Router();

const Order = require("../models/order");
const Table = require("../models/table");

// Route to get all orders

router.get("/", (req, res) => {
  // GET all orders using .find()
  Order.find()
    .then((order) => {
      // Returns tables as JSON list
      return res.json({ order });
    })
    .catch((err) => {
      throw err.message;
    });
});

// Route to CREATE one order:

router.post("/:number", (req, res) => {
  console.log(req.body);
  Table.findOne({ number: req.params.number }).then((tableId) => {
      console.log(tableId)
    let order = new Order({
      food: req.body.food,
      drink: req.body.drink,
      table: tableId._id,
    });
    order
      .save()
      .then((orderResult) => {
        return res.json({ order: orderResult });
      })
      .catch((err) => {
        throw err.message;
      });
  });
});

module.exports = router;
