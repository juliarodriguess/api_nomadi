const express = require('express')


module.exports = function(server) {
    //API routes
    const router = express.Router()
    // api barra alguma coisa
    server.use('/api', router)

    //Registrando os métodos API no router
    const itemService = require('../items/itemService')
    const leadService = require('../leads/leadService')
    itemService.register(router, '/item')
    leadService.register(router, '/leads')
}