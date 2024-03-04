const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS for all routes

const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Define a schema that matches the structure of your data
const weatherSchema = new mongoose.Schema({
    coord: {
        lon: Number,
        lat: Number
    },
    weather: [{
        id: Number,
        main: String,
        description: String,
        icon: String
    }],
    base: String,
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number,
        pressure: Number,
        humidity: Number
    },
    visibility: Number,
    wind: {
        speed: Number,
        deg: Number,
        gust: Number
    },
    clouds: {
        all: Number
    },
    dt: Number,
    sys: {
        type: Number,
        id: Number,
        country: String,
        sunrise: Number,
        sunset: Number
    },
    timezone: Number,
    id: Number,
    name: String,
    cod: Number
}, { strict: false }); // Use strict: false to allow for documents with fields not defined in the schema


// Create a model based on the schema, explicitly specifying the collection name
const Weather = mongoose.model('Weather', weatherSchema, 'cities');

// New route to fetch data
app.get('/weather/:city', async (req, res) =>  {
    try {
        const cityParam = req.params.city;
        // Perform a search in the database for the city
        const cityData = await Weather.findOne({ 'name': cityParam });


        if (!cityData) {
            return res.status(404).send('City not found');
        }

        res.json(cityData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
