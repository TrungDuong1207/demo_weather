import React, { useState, useEffect } from 'react';
import "./style.css";

const WeatherOfCity = (props) => {
    const { weatherData } = props;

    return (
        <div className="weather-app">
            <div className="weather-app-location">
                <h1>{weatherData.name}</h1>
            </div>
            <div className="weather-app-temperature">
                <div style={{ fontSize: "80px" }}>{Math.round(weatherData.main.temp)}&#8451;</div>
            </div>
            <div className="weather-app-description">{weatherData.weather[0].description}</div>
            <div className = "weather-max-min">
                <div className = "weather-max-min-item">H: {Math.round(weatherData.main.temp_max)}&#8451;</div>
                <div className = "weather-max-min-item">L: {Math.round(weatherData.main.temp_min)}&#8451;</div>
            </div>

        </div>
    );
};

export default WeatherOfCity;
