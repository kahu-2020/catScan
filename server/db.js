const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const db = require('knex')(config)

function getSavedFacts(){
    return db('cat_fact_table')
}

function postFact(catFact){
    console.log('catFact')
    return db('cat_fact_table')
    .insert({
        cat_fact: catFact.catFact
    })
}

module.exports = {
    getSavedFacts,
    postFact
}