let weather = {
    apiKey: "ac8dec3a18a72ac4e78497827b1c649e",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial&appid=" + // Changed units to imperial
          this.apiKey
      )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity, feels_like } = data.main;
      const { speed } = data.wind;
      const visibility = data.visibility; // Assuming this is in meters
      const uvIndex = data.uvi; // Assuming UV index is directly available
    
      // Convert visibility to kilometers with one decimal place
      const visibilityInKm = (visibility / 1000).toFixed(1);
    
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = Math.ceil(temp) + "°F"; // Temperature rounded up
      document.querySelector(".feels-like").innerText = "Feels like: " + Math.ceil(feels_like) + "°F"; // 'Feels like' temperature rounded up
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind Speed: " + speed + " mph";
      document.querySelector(".visibility").innerText = "Visibility: " + visibilityInKm + " km"; // Added visibility
      document.querySelector(".uv-index").innerText = "UV Index: " + uvIndex; // Added UV index
    
      document.querySelector(".weather").classList.remove("loading");
    }
    
    
    ,
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    }
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("San Mateo");
