const express = require('express')

const db = require('./db')
const router = express.Router()

router.use(express.json())

router.get('/saved', (req, res) => {
  db.getSavedFacts()
  .then(facts => res.json(facts))
})

module.exports = router
