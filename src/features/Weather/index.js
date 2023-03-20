import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherOfCity from './components/WeatherOfCity';
import WeatherForecast from './components/WeatherForecast';

const WeatherFeature = () => {
    const [weatherData, setWeatherData] = useState(null);
    const API_KEY = '161f979cf563f7b1ea8b91979554d7f6';
    const [city, setCity] = useState('Hà Nội');
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
                setWeatherData(response);

                const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
                
                setForecastData(forecastResponse);

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
        <div className="container">
            <div className="weather-app-search">
                <input type="text" placeholder="Enter city" value={city} onChange={handleCityChange} />
            </div>
            {weatherData && forecastData ? (
                <>
                    <WeatherOfCity weatherData={weatherData} />
                    <WeatherForecast forecastData={forecastData} weatherData={weatherData}/>
                </>


            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default WeatherFeature;
