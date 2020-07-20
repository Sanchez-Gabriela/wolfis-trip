import React, { useEffect, useState } from 'react';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

export default function Weather() {
  const [weather, setWeather] = useState([]);
  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=Vienna&APPID=ffc63954e8b3eb859d3685f92e76982b&units=metric',
      );
      const jsonResponse = await response.json();
      setWeather(jsonResponse);
    };
    getWeather();
  }, []);
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
      </style>
      <div>
        <p>Weather in Vienna</p>
        <ul>
          {/* {weather.map((main) => {
            return <li key={`${main.temp}`}></li>;
          })} */}
        </ul>
      </div>
    </div>
  );
}
