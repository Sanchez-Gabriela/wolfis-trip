import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

export default function App() {
  const header = css`
    width: 100%;
    background-color: #4abdac;
  `;
  const img = css`
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding-top: 50px;
    padding-bottom: 50px;
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
    color: #555555;
  `;

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
      </style>
      <Header />
      <div css={header}>
        <img src="/wien.png" alt="vienna city" css={img} />
      </div>
      <div>
        <p css={quote}>Get your personalized plan based on your interests!</p>
      </div>
      <Footer />
    </div>
  );
}
