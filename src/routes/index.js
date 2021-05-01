const express = require("express");
const tableRoutes = require("./table.js");
const orderRoutes = require("./order.js");
// Menu, Food, Drink


const router = express.Router();

router.use("/tables", tableRoutes);
router.use("/orders", orderRoutes);

// Menu, Food, Drink


module.exports = router;
