const apiKey = 'your_api_key_here'; // Replace with your OpenWeatherMap API key
const city = 'Nairobi';
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(weatherURL);
    const data = await response.json();

    document.getElementById('temp').textContent = Math.round(data.main.temp);
    document.getElementById('desc').textContent = data.weather[0].description;
    
    const icon = data.weather[0].icon;
    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');

    weatherIcon.setAttribute('src', iconURL);
    weatherIcon.setAttribute('alt', data.weather[0].description);
  } catch (error) {
    console.error("Weather API error:", error);
  }
}

getWeather();
