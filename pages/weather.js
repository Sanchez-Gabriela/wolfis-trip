import React from 'react';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

export default function Weather() {
  fetch(
    'https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=%3Crequired%3E&lat=%3Crequired%3E',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
        'x-rapidapi-key': 'f7f09d4e45msh8f728dc301706a0p1654c7jsndadd5fc6c4d8',
      },
    },
  )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
      </style>
    </div>
  );
}
