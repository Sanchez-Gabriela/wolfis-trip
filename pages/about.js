import React from 'react';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const p = css`
    font-size: 30px;
    font-family: 'Karla', sans-serif;
  `;

  const app = css`
    min-height: 100vh;
    padding: 0 0.5rem;
    font-size: 16px;
    width: 100%;
  `;

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
      </style>
      <Header />
      <div css={app}>
        <p css={p}>
          Wolfi helps you saving time and makes your journey more exciting!{' '}
          <br />
          Wolfi schedule your days according to your taste.
        </p>
      </div>
      <Footer />
    </div>
  );
}
