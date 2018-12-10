const Item = require('./item.js')

//criar o Rest API e adicionar o CRUD ao Mongo's Schema
Item.methods(['get', 'post', 'put', 'delete'])


//Retorna os métodos POST e PUT atualizados
Item.updateOptions({new:true, runValidators: true})

module.exports = Item