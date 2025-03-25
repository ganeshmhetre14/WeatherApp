# Weather App 🌦️

A responsive web application that displays current weather conditions for any city worldwide using the OpenWeatherMap API.

## Features ✨
- **Real-time weather data** - Temperature, humidity, wind speed, and more.
- **City search** - Find weather for any location.
- **Geolocation** - Automatic detection of your local weather (with permission).
- **Responsive design** - Works on all devices from mobile to desktop.
- **Dark mode** - Automatically adapts to system preferences.
- **No page reloads** - Smooth AJAX data fetching.

## Technologies Used 💻
- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Backend:** PHP (API proxy)
- **API:** OpenWeatherMap

## Setup Instructions ⚙️

### Prerequisites
- Web server with PHP support (Apache, Nginx, etc.)
- OpenWeatherMap API key (free tier available)

### Installation
1. **Clone the repository:**
   ```bash
git clone https://github.com/ganeshmhetre14/meesho-clone.git
cd weather-app
   ```
2. **Get your OpenWeatherMap API key:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/)
   - Get your API key from the account dashboard
3. **Configure the application:**
   - Add your API key to both:
     - `weather.php` (replace `YOUR_OPENWEATHERMAP_API_KEY`)
     - `script.js` (replace `YOUR_OPENWEATHERMAP_API_KEY`)
4. **Deploy to your web server:**
   - Upload all files to your server's public directory.
   - Ensure PHP is properly configured.

## File Structure 💁️
```
weather-app/
├── index.html          # Main application interface
├── style.css           # All styling (responsive design)
├── weather.php         # PHP backend for API requests
├── script.js           # Frontend functionality
└── README.md           # This documentation
```

## Usage 🚀
1. Open `index.html` in your browser.
2. The app will:
   - Try to detect your location automatically (if permitted).
   - Show weather for London by default.
3. To search for another city:
   - Type the city name in the search box.
   - Press "Get Weather".

## Customization 🎨
- **Colors**: Edit CSS variables in `style.css`.
- **Default city**: Modify `script.js`.
- **API endpoint**: Edit `weather.php`.

## Screenshots 📸
- Desktop View screenshots/desktop.jpg
- Mobile View screenshots/mobile.jpg

## Contributing 🤝
Contributions are welcome! Please open an issue or submit a pull request.

## Credits 🙏
- Weather data provided by [OpenWeatherMap](https://openweathermap.org/).
- Icons from OpenWeatherMap.

Enjoy the weather app! ☀️🌧️🌨️

