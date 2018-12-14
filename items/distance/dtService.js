const Distance = require('./distance.js')

Distance.methods(['get'])

Distance.updateOptions({
    new: true,
    runValidators: true
})

module.exports = Distance