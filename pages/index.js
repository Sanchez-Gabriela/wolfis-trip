import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

export default function App() {
  const app = css`
    box-sizing: content-box;
    padding: 0;
    margin: 0;
  `;

  const main = css`
    min-height: 79vh;
    padding: 0 0.5rem;
  `;

  const header = css`
    width: 100%;
    background-color: #4abdac;
    -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    animation: slideUp 2000ms ease;
  `;
  const img = css`
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 30px;
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
      </style> */}
      <div css={app}>
        <Header />
        <div css={main}>
          <div css={header}>
            <img src="/wien.png" alt="vienna city" css={img} />
          </div>
          <div>
            <p css={quote}>
              Get your personalized plan based on your interests!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
