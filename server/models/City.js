const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const citySchema = new Schema({
    city: String,
    country: String,
    updatedAt: {type: String, default: moment().format("LL")},
    //updatedAt: Date,
    temperature: Number,
    condition: String,
    conditionPic: String,
    added: Boolean
})

const City = mongoose.model("city", citySchema)
module.exports = City