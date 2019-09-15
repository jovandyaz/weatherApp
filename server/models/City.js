const mongoose = require('mongoose')
const Schema = mongoose.Schema

const citySchema = new Schema({
    updatedAt: Date,
    temperature: Number,
    condition: String,
    conditionPic: String
})

const City = mongoose.model("city", citySchema)
module.exports = City