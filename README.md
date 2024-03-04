# CSE310_WeatherApp
Weather Forecast Web App



# WeatherApp

WeatherApp is a web application that provides real-time weather data for various cities. It utilizes MongoDB to store weather data and Node.js with Express for the backend. The frontend fetches and displays weather information based on user input.

## Features

- Fetch and display real-time weather data for a specified city.
- Backend implemented in Node.js with Express.
- Frontend interaction with backend APIs to retrieve weather data.
- CORS enabled for cross-origin resource sharing.
- Data persistence using MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm
- MongoDB

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. Clone the repository:


git clone https://github.com/your-username/WeatherApp.git
cd WeatherApp


2. Install NPM packages:


npm install


3. Set environment variables:

Create a `.env` file in the root directory and fill it with the necessary environment variables:

##env
OPENWEATHER_API_KEY=your_openweather_api_key
DB_URI=your_mongodb_connection_string
DB_NAME=WeatherApp
PORT=3000


4. Start the server:


npm start


The server should be running on [http://localhost:3000](http://localhost:3000).

## Usage

To fetch weather data for a city, navigate to [http://localhost:3000](http://localhost:3000), enter the city name in the input field, and submit the form.

## Development

- The `server.js` file contains the server setup, API routes, and database connection.
- The `script.js` file handles the form submission and fetches data from the backend.
- The `models/Weather.js` file defines the Mongoose schema for the weather data.



## Authors

- **Moises Sanchez** - 
## https://github.com/MoisesSanchez2020/CSE310_WeatherApp


