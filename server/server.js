const path = require('path')
const express = require('express')

const savedFactsRoutes = require('./savedFacts')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', savedFactsRoutes )

module.exports = server
