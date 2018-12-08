const restful = require('node-restful')
const mongoose = restful.mongoose


let LeadSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    name: { type:String, required: true},
    phone: { type:Number, required: true},
})

let leads = restful.model("leads", LeadSchema)

module.exports = leads;