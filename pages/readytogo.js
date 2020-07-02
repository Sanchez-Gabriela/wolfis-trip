import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

export default function readytogo() {
  const header = css`
    width: 100%;
    background-color: #4abdac;
    display: flex;
    flex-direction: row;
  `;

  const links = css`
    padding-right: 20px;
    padding-left: 20px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 1.5rem;
    font-family: 'Karla', sans-serif;
    text-decoration: none;
    background-color: #4abdac;
    color: #ffff;
    border-radius: 4px;
  `;

  const quote = css`
    text-align: center;
    font-size: 1.5rem;
    font-family: 'Karla', sans-serif;
    margin-top: 60px;
    margin-right: 200px;
    color: #555555;
    text-align: center;
  `;

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
      </style>
      <Header />
      <div css={header}>
        <p css={quote}>Enjoy Vienna!</p>
      </div>
    </div>
  );
}
