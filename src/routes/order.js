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

// Route to GET one Order

router.get("/:id", (req, res) => {
  // GET all orders using .find()
  Order.findById(req.params.id)
    .then((order) => {
      // Returns tables as JSON list
      return res.json({ order });
    })
    .catch((err) => {
      throw err.message;
    });
});

// Route to DELET one Order

// router.delete("/:number", (req, res) => {
//   Table.findOneAndDelete(req.params.number)
//     .then((result) => {
//       if (result === null) {
//         return res.json({ message: "Table does not exist." });
//       }
//       return res.json({
//         message: "Successfully deleted.",
//          number: req.params.number,
//       });
//     })
//     .catch((err) => {
//       throw err.message;
//     });
// })

// Route to CREATE one order:

router.post("/:number", (req, res) => {
  console.log(req.body);
  let order = new Order({
    food: req.body.food,
    drink: req.body.drink,
  });
  Table.findOne({ number: req.params.number })
    .then((table) => {
      console.log(table);
      order.table = table
      table.order = order;
      return table.save();
    })
    .then(() => {
      return order.save()
    })
    .then((order) => {
      return res.json({ order: order });
    })
    .catch((err) => {
      throw err.message;
    });
});

module.exports = router;
