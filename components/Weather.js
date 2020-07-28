import React, { useState } from 'react';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

export default function weather() {
  const widget = css`
    font-family: 'Karla', cursive;
    font-size: 20px;
    text-align: center;
    letter-spacing: 2px;
    color: #999;
    padding-top: 10px;
  `;

  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState('');

  const api_key = 'ffc63954e8b3eb859d3685f92e76982b';
  // fetch the url to get city,country,temp,description

  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Vienna,Austria&appid=${api_key}`;

  fetch(weatherURL)
    .then((res) => res.json())
    .then((data) => {
      const tempInCel = data.main.temp - 273.15;
      setTemperature(tempInCel.toFixed(2) + '°C');
      setDescription(data.weather[0].description);
    });

  return (
    <>
      <div css={widget}>
        <p>
          <span style={{ color: '#ffcd3c' }}>☀</span>
          {temperature} - {description}
        </p>
      </div>
    </>
  );
}
