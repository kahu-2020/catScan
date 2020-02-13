const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const db = require('knex')(config)

function getSavedFacts(){
    return db('cat_fact_table')
}

module.exports = {
    getSavedFacts
}