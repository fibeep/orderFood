const express = require("express");
const tableRoutes = require("./table.js");
const orderRoutes = require("./order.js");
// Menu, Food, Drink


const router = express.Router();

router.use("/orders", orderRoutes);
router.use("/tables", tableRoutes);
// Menu, Food, Drink


module.exports = router;
