import React from "react"
import styled from "styled-components";
import CityComponent from "./Modules/CityComponent"
import WeatherComponent from "./Modules/WeatherInfoComponent"
import Axios from "axios";
import { useState } from "react";


export const WeatherIcons = {
  "01d": "/icon/sunny.svg",
  "01n": "/icon/night.svg",
  "02d": "/icon/day.svg",
  "02n": "/icon/cloudy-night.svg",
  "03d": "/icon/cloudy.svg",
  "03n": "/icon/cloudy.svg",
  "04d": "/icon/perfect-day.svg",
  "04n": "/icon/cloudy-night.svg",
  "09d": "/icon/rain.svg",
  "09n": "/icon/rain-night.svg",
  "10d": "/icon/rain.svg",
  "10n": "/icon/rain-night.svg",
  "11d": "/icon/storm.svg",
  "11n": "/icon/storm.svg",
};


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`


const AppLable = styled.span`
font-weight: bold;
font-size: 30px;
 
`;

function App() {

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };


  return (
   <Container>
    <AppLable>React Weather App</AppLable>
    {weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
   
   

   </Container>
  );
}

export default App;
