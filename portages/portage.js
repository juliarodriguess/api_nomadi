const restful = require('node-restful')
const mongoose = restful.mongoose


let portageSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    origin: {    
    address: { type:String, required: true },
    propertyType: { type:String, required: true },
    apartment: { type:String, required: false },
    hasLift: { type:Boolean, required: false },
    stage: { type:String, required: false },
    comments: { type:String, required: false }
    },
    destination:{
    address: { type:String, required: true },
    propertyType: { type:String, required: true },
    apartment: { type:String, required: false },
    hasLift: { type:Boolean, required: false },
    stage: { type:String, required: false },
    comments: { type:String, required: false }
    },
    distance: {type: String, required: true },
    date: {
        startDate: {type: Date, required: true },
        endDate: {type: Date, required: true }
    },
    period: {
        hour: {type: String, required: true },
        comments: {type: String, required: false }
    },
    listOfItems: { type: Array, required: true }
})

let portage = restful.model("portage", portageSchema)

module.exports = portage;