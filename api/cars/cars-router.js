// takes routes from requests
// needs express, needs to be taught how to read json, needs knex, exports, and 
const express = require('express')
const db = require()
//import middleware
const router = express.Router() // build an instance of express
router.use(express.json())

router.get("/", (req, res, next) => {
  next()
})

router.get("/:id", (req, res, next) => {
  next()
})
router.post("/", (req, res, next) => {
  next()
})




module.exports = router // Gives the outside world access to the router we've defined here