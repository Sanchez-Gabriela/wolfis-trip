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

  // const header = css`
  //   width: 100%;
  //   background-color: #ffe7a3;
  //   -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
  //   -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
  //   box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
  //   animation: slideUp 2000ms ease;
  // `;
  const img = css`
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 30px;
    margin-bottom: 10px;
  `;

  const quote = css`
    text-align: center;
    font-size: 30px;
    font-family: 'Karla', cursive;
    margin-top: 5px;
    color: #00a399;
  `;

  // const screenshots = css`
  //   width: 250px;
  //   height: 200px;
  //   border: 2px solid lightgrey;
  //   border-radius: 15px;
  //   padding: 10px;
  //   margin-right: 10px;
  // `;

  // const images = css`
  //   width: 100%;
  //   margin-left: 10%;
  //   margin-top: 50px;
  // `;

  // const backgroundImg = css`
  //   background-color: lightgrey;
  //   width: 600px;
  //   margin-left: auto;
  //   margin-right: auto;
  //   display: block;
  // `;

  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <div css={app}>
        <Header />
        <div css={main}>
          <div>
            <img src="/wien.png" alt="vienna city" css={img} />
          </div>
          <div>
            <p css={quote}>
              Get your personalized plan based on your interests!
            </p>
            <p css={quote}>Vienna waits for you &#x2764;</p>
          </div>
          {/* <div css={images}>
            <img css={screenshots} src="/dates1.png" alt="screenshot dates" />
            <img
              css={screenshots}
              src="/step2and3.png"
              alt="screenshot dates"
            />
            <img
              css={screenshots}
              src="/dropdownOpen.png"
              alt="screenshot dates"
            />
            <img
              css={screenshots}
              src="/userPlan3.png"
              alt="screenshot dates"
            /> */}
          {/* </div> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
