const express = require("express");
const router = express.Router();

const Order = require("../models/order");
const Table = require("../models/table");
// ADD OTHER MODELS AS NEEDED


// Route to get all tables

router.get('/', (req,res) => {
    // GET all tables using .find()
    Table.find()
    .then((tables) =>{
        // Returns tables as JSON list
        return res.json({tables})
    })
    .catch((err)=>{
        throw err.message
    })
})
module.exports = router;