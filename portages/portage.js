const restful = require('node-restful')
const mongoose = restful.mongoose


let portageSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    contact: {
        name: { type: String, required: true },
        phone: { type: Number, required: false },
        email: { type: String, required: false }
    },
    origin: {  
        address: { type:String, required: false },
        propertyType: { type:String, required: false },
        apartment: { type:String, required: false },
        hasLift: { type:Boolean, required: false },
        stage: { type:String, required: false },
        comments: { type:String, required: false }
    },
    destination:{
        address: { type:String, required: false },
        propertyType: { type:String, required: false },
        apartment: { type:String, required: false },
        hasLift: { type:Boolean, required: false },
        stage: { type:String, required: false },
        comments: { type:String, required: false }
    },
    distance: {type: String, required: false },
    date: {
        startDate: {type: String, required: false },
        endDate: {type: String, required: false }
    },
    period: {
        hour: {type: String, required: false },
        comments: {type: String, required: false }
    },
    listOfItems: { type: Array, required: false }
})

let portage = restful.model("portage", portageSchema)

module.exports = portage;