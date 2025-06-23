import React from "react";
import "../styles/weather.css";

const Weather = () => {
  return (
    <div className="weather">
      <div className="search">
        <div className="search-top">
          <i className="fa-solid fa-location-dot"></i>
          <div className="location">Нью-Йорк, США</div>
        </div>
        <div className="search-location">
          <input type="text" placeholder="Введи Локацию" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="weather-data">
        <i className="bx bxs-sun"></i>
        <div className="weather-type">Солнечно</div>
        <div className="temp">24°C</div>
      </div>
    </div>
  );
};

export default Weather;
