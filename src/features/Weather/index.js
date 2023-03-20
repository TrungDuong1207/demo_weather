import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherOfCity from './components/WeatherOfCity';
import WeatherForecast from './components/WeatherForecast';
import { Box } from '@mui/material';
import "./style.css";

const WeatherFeature = () => {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = '161f979cf563f7b1ea8b91979554d7f6';
    const [city, setCity] = useState('Hà Nội');
    const [forecastData, setForecastData] = useState(null);
    const [bgGif, setBGGif] = useState(undefined);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                setWeatherData(response);

                const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);

                setForecastData(forecastResponse);

                const main = response.weather[0].main;

                console.log(main);

                switch (main) {
                    case "Snow":
                      setBGGif(
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')"
                      );
                      break;
                    case "Clouds":
                      setBGGif(
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')"
                      );
                      break;
                    case "Fog":
                      setBGGif(
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')"
                      );
                      break;
                    case "Rain":
                      setBGGif(
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')"
                      );
                      break;
                    case "Clear":
                      setBGGif(
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')"
                      );
                      break;
                    case "Thunderstorm":
                      setBGGif(
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')"
                      );
                      break;
                    default:
                      setBGGif(
                        "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')"
                      );
                      break;
                  }

                // const dailyResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${API_KEY}&units=metric`);
                // console.log(dailyResponse)

            } catch (error) {
                console.log(error);
            }
        };
        fetchWeatherData();
    }, [API_KEY, city]);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className="container"
            style={{
                backgroundImage: bgGif ?? "url(https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif)"
            }}
        >
            <div className="weather-app-search">
                <input type="text" placeholder="Enter city" value={city} onChange={handleCityChange} />
            </div>
            {weatherData && forecastData ? (
                <Box>
                    <WeatherOfCity weatherData={weatherData} />
                    <WeatherForecast forecastData={forecastData} weatherData={weatherData} />
                </Box>


            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default WeatherFeature;
