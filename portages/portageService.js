const Portage = require('./portage.js')

//criar o Rest API e adicionar o CRUD ao Mongo's Schema
Portage.methods(['get', 'post', 'put', 'delete'])

//Retorna os métodos POST e PUT atualizados
Portage.updateOptions({new:true, runValidators: true})

module.exports = Portage