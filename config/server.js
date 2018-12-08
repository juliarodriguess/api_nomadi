const port = 4000
const bodyParser = require('body-parser')
const express = require('express');
const server = express()
const cors = require("cors")



server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json());
server.use(cors())



server.listen(process.env.PORT || port, function() {
    console.log(`Listening in port ${port}!`)
})

module.exports = server