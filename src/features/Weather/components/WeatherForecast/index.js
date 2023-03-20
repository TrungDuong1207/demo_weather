import React, { useState, useEffect } from 'react';
import "./style.css";

const WeatherForecast = (props) => {
    const { forecastData, weatherData } = props;

    return (
        <div className="weather-forecast">
            <div className="weather-forecast-item">
                <div className="weather-forecast-time">
                    Now
                </div>
                <div className="weather-forecast-icon">
                    <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].description} />
                </div>
                <div className="weather-forecast-temp">{Math.round(weatherData.main.temp)}°C</div>
            </div>
            {forecastData.list.slice(0, 6).map((item, index) => (
                <div key={index} className="weather-forecast-item">
                    <div className="weather-forecast-time">
                        {("0" + new Date(item.dt * 1000).getHours()).slice(-2)}
                    </div>
                    <div className="weather-forecast-icon">
                        <img src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
                    </div>
                    <div className="weather-forecast-temp">{Math.round(item.main.temp)}°C</div>
                </div>
            ))}
        </div>

    );
};

export default WeatherForecast;
