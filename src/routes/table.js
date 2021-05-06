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

// Route to get ONE specific table

router.get('/:number', (req, res) => {
    // GET specific table object using findOne
    Table.findOne({number: req.params.number})
    .then(result => {
        // Returns message as JSON object
        return res.json(result)
    }).catch(err => {
        throw err.message
    })
})

// Route to ADD one Table

router.post('/', (req, res) => {
    console.log(req.body)
    let table = new Table(req.body)
    table.save().then(tableResult => {
        return res.json({table: tableResult})
    })
    .catch((err) => {
        throw err.message
    })
})


// Route to UPDATE one Table

router.put("/:number", (req, res) => {  
  Table.findOneAndUpdate({number: req.params.number}, req.body)
    .then(() => {
        console.log("Update Succesfully")
      return Table.findOne({ number: req.body.number });
    })
    .then((table) => {
      return res.json({ table });
    })
    .catch((err) => {
      throw err.message;
    });
});

// Route to DELETE one table
router.delete("/:number", (req, res) => {
  Table.findOneAndDelete(req.params.number)
    .then((result) => {
      if (result === null) {
        return res.json({ message: "Table does not exist." });
      }
      return res.json({
        message: "Successfully deleted.",
         number: req.params.number,
      });
    })
    .catch((err) => {
      throw err.message;
    });
});



module.exports = router;