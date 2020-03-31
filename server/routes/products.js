const express = require("express")
const router = express.Router()
//connection to the database file
const connection = require("../db")

//go get all of the products
router.get("/players", (req, res, next) => {
  const sql = `SELECT * FROM products;`

  // err - errors connecting to the database
  // results- results that your asking for
  // fields - are all the fields that your looking for

  connection.query(sql, (err, results, fields) => {
    //go get me the products

    res.json(results)
  })
})

module.exports = router
