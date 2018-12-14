const express = require('express')
const dtQuerys = require('../items/distance/dtQuerys');

module.exports = function(server) {
    //API routes
    const router = express.Router()
    // api barra alguma coisa
    server.use('/api', router)

    //Registrando os métodos API no router
    const itemService = require('../items/itemService')
    const leadService = require('../leads/leadService')
    const dtService = require('../items/distance/dtService')
    const portageService = require('../portages/portageService')

    itemService.register(router, '/item')
    leadService.register(router, '/leads')
    dtService.register(router, '/dt')
    portageService.register(router, '/portage')

    //Search's routes
    router.post('/dt', dtQuerys.searchByOriginDestiny);
}