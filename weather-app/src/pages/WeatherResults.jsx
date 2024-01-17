import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";

export default function WeatherResults() {
  const { id } = useParams();
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([])
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${id}&APPID=394f45aa55ab9a32fbd175e3d5c00808&units=metric`;
  const api2 = `http://api.openweathermap.org/data/2.5/forecast?q=${id}&APPID=394f45aa55ab9a32fbd175e3d5c00808&units=metric`;

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((json) => {
        setWeather(...weather, json);
      })
      .catch((error) => console.log(error))
      

    fetch(api2)
      .then((response) => response.json())
      .then((json) => {
        setForecast(...forecast, json)
      })
      .catch((error) => console.log(error))
  });
  
  return (
    <>
      {console.log(weather)}
      {console.log(forecast)}
      <WeatherCard weather={weather} forecast={forecast}/>
    </>
  );
}