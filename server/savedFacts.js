const express = require('express')

const db = require('./db')
const router = express.Router()

router.use(express.json())

router.post('/savedFact', (req, res) => {
  console.log(req.body)
  db.postFact(req.body)
    .then(id => {
      res.json(id[0])
    })
}) 


router.get('/saved', (req, res) => {
  db.getSavedFacts()
  .then(facts => res.json(facts))
})

module.exports = router
