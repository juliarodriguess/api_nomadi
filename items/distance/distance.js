const restful = require('node-restful')
const mongoose = restful.mongoose


let DistanceSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    origin: { type:String, required: true},
    destiny: { type:String, required: true}
})

let distance = restful.model("distance", DistanceSchema)

module.exports = distance;