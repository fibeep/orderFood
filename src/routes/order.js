const express = require("express");
const router = express.Router();

const Order = require("../models/order");
const Table = require("../models/table");


// Route to get all orders

router.get('/', (req,res) => {
    // GET all orders using .find()
    Order.find()
    .then((order) =>{
        // Returns tables as JSON list
        return res.json({order})
    })
    .catch((err)=>{
        throw err.message
    })
})



module.exports = router;
