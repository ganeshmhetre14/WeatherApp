document.addEventListener('DOMContentLoaded', function() {
    const weatherContainer = document.getElementById('weather-data');
    const cityInput = document.getElementById('city-input');
    
    // Try to get user's location first
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                fetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
            },
            error => {
                console.log("Geolocation error:", error);
                fetchWeather('London'); // Default city if geolocation fails
            }
        );
    } else {
        fetchWeather('London'); // Default city if geolocation not supported
    }
    
    // Handle form submission
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const city = cityInput.value.trim();
        if (city !== '') {
            fetchWeather(city);
        }
    });
    
    // Fetch weather by city name
    function fetchWeather(city) {
        fetch(`weather.php?city=${encodeURIComponent(city)}`)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => {
                console.error('Error fetching weather:', error);
                weatherContainer.innerHTML = `<div class="error">Failed to fetch weather data</div>`;
            });
    }
    
    // Fetch weather by coordinates (for geolocation)
    function fetchWeatherByCoords(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=22fde6889b2947a5ceed553e8c55942c&units=metric`)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
                cityInput.value = data.name; // Update input with current city
            })
            .catch(error => {
                console.error('Error fetching weather by coordinates:', error);
                fetchWeather('London'); // Fallback to default city
            });
    }
    
    // Display weather data
    function displayWeather(data) {
        if (data.cod !== 200) {
            weatherContainer.innerHTML = `<div class="error">${data.message}</div>`;
            return;
        }
        
        const weatherHTML = `
            <div class="weather-info">
                <h2>${data.name}, ${data.sys.country}</h2>
                
                <div class="weather-main">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" 
                         alt="${data.weather[0].description}">
                    <div class="temp">${Math.round(data.main.temp)}°C</div>
                </div>
                
                <div class="weather-description">
                    ${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}
                </div>
                
                <div class="weather-details">
                    <div class="detail">
                        <span>Feels Like</span>
                        <span>${Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div class="detail">
                        <span>Humidity</span>
                        <span>${data.main.humidity}%</span>
                    </div>
                    <div class="detail">
                        <span>Wind</span>
                        <span>${Math.round(data.wind.speed * 3.6)} km/h</span>
                    </div>
                    <div class="detail">
                        <span>Pressure</span>
                        <span>${data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        `;
        
        weatherContainer.innerHTML = weatherHTML;
    }
});