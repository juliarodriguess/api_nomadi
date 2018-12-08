const Lead = require('./lead.js')

//criar o Rest API e adicionar o CRUD ao Mongo's Schema
Lead.methods(['get', 'post', 'put', 'delete'])

//Retorna os métodos POST e PUT atualizados
Lead.updateOptions({new:true, runValidators: true})

module.exports = Lead