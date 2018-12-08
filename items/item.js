const restful = require('node-restful')
const mongoose = restful.mongoose


let OrderSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    origin: { type:String, required: true},
    destiny: { type:String, required: true},
    distance: { type:String, required: true},
    dates: { type:String, required: true},
    period: { type:Array, required: true},
    itemsList: { type:Array, required: true}
})

let orders = restful.model("orders", OrderSchema)

module.exports = orders;