const {Schema, model} = require('./connection')


const animalSchema = new Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

const Animal = model('animal', animalSchema)

module.exports = Animal