document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('weather-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const city = document.getElementById('city-input').value;
        getWeatherData(city);
    });
});

async function getWeatherData(city) {
    try {
        const response = await fetch(`http://localhost:3000/weather/${city}`);


        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        updateWeatherDisplay(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeatherDisplay(data) {
    // Assuming you have elements in your HTML to display this data
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}`;
    // ... and so on for other weather details
}