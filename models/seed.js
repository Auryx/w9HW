const mongoose = require('./connection');
const Animal = require('./animal');


mongoose.connection.on('open', async () => {

    //1. create entries into the db using the startFruits
    //1a. in order to do this we need to delete everything
    await Animal.deleteMany();

    //1b. then using startFruits, we will insert that into the db
    const startAnimals = [
        { species: "Capra hircus",
            extinct: false,
            location: "Southwest Asia and Eastern Europe",
            lifeExpectancy: 15 },
        { species: "Aepyceros melampus",
            extinct: false,
            location: "Eastern and Southern Africa",
            lifeExpectancy: 12 },
        { species: "Pongo abelii",
            extinct: false,
            location: "Southeast Asia and South China",
            lifeExpectancy: 35 },
    ];
    await Animal.create(startAnimals);

    //2. we are going to close the connection
    mongoose.connection.close();


})