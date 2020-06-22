import React from 'react';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

const categories = [
  {
    name: 'Fruits',
    id: 0,
    children: [
      {
        name: 'Apple',
        id: 10,
      },
      {
        name: 'Strawberry',
        id: 17,
      },
      {
        name: 'Pineapple',
        id: 13,
      },
      {
        name: 'Banana',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],
  },
  {
    name: 'Gems',
    id: 1,
    children: [
      {
        name: 'Quartz',
        id: 20,
      },
      {
        name: 'Zircon',
        id: 21,
      },
      {
        name: 'Sapphire',
        id: 22,
      },
      {
        name: 'Topaz',
        id: 23,
      },
    ],
  },
  {
    name: 'Plants',
    id: 2,
    children: [
      {
        name: "Mother In Law's Tongue",
        id: 30,
      },
      {
        name: 'Yucca',
        id: 31,
      },
      {
        name: 'Monsteria',
        id: 32,
      },
      {
        name: 'Palm',
        id: 33,
      },
    ],
  },
];

export default function interests() {
  return <input>What are your interests?</input>;
}
