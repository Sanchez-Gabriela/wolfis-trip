import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Footer from '../../components/Footer';

export default function Userplan({ plan }) {
  const app = css`
    box-sizing: content-box;
    padding: 0;
    margin: 0;
  `;

  const header = css`
    width: 100%;
    margin-top: 16px;
    text-align: center;
  `;

  const quote = css`
    font-size: 2rem;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #4abdac;
    display: inline-block;
    font-family: 'Karla', cursive;
    font-size: 36px;
  `;

  const journey = css`
    margin: auto;
  `;

  const text = css`
    font-family: 'Karla', cursive;
    font-size: 16px;
    line-height: 2;
    list-style-type: none;
    padding: 10px;
    color: #555555;
  `;

  const name = css`
    font-family: 'Karla', cursive;
    font-size: 18px;
    line-height: 1.2;
    list-style-type: none;
    padding: 10px;
    color: #555555;
  `;

  const img = css`
    width: 300px;
    height: 200px;
    background-color: $coral;
    -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    animation: slideUp 2000ms ease;
    margin-bottom: 20px;
    border-radius: 4px;
    margin-top: 20px;
  `;

  const main = css`
    min-height: 100vh;
    padding: 0 0.5rem;
    margin-top: 5%;
    width: 95%;
    display: flex;
    justify-content: center;
    background-color: #ffff;
    -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    animation: slideUp 2000ms ease;
    margin-bottom: 20px;
    border-radius: 4px;
    margin-left: 2%;
  `;

  const description = css`
    list-style-type: none;
    border-radius: 4px;
    padding: 10px;
    margin-top: 10px;
    font-family: 'Karla', sans-serif;
    color: #555555;
    line-height: 2;
    text-align: left;
    font-size: 16px;
    width: 300px;
  `;

  const icon = css`
    width: 5%;
    margin-left: 10px;
  `;

  const li = css`
    ${'' /* display: flex;
    flex-direction: column;
    justify-content: center; */}
    list-style-type: none;
  `;

  const wolfi = css`
    width: 100px;
    text-align: center;
    margin-left: 45%;
  `;

  const place = css`
    display: flex;
    flex-direction: row;
  `;

  const danke = css`
    font-family: 'Cabin Sketch', cursive;
    line-height: 3;
    text-align: center;
  `;

  const bottomDiv = css`
    display: flex;
    flex-direction: column;
  `;
  return (
    <div>
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Karla&display=swap"
          rel="stylesheet"
        ></link>
      </div>
      <div css={app}>
        <Header />
        <div css={main}>
          <div>
            <div css={header}>
              <span css={quote}>Your plan </span>
              <img css={icon} src="/yellowMap.png" alt="goal-flag" />
            </div>
            <div css={journey}>
              <ul css={place}>
                {plan.map((value) => {
                  return (
                    <li key={value.name} css={li}>
                      <span css={name} role="img" aria-label="flag">
                        {' '}
                        🚩 {value.name}
                      </span>
                      <br />
                      <br />
                      <span css={text}>
                        <strong>Address:</strong> {value.address}
                      </span>
                      <br />
                      <img css={img} src={value.image} alt={value.name} />
                      <p css={description}>{value.description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div css={bottomDiv}>
          <span css={danke} role="img" aria-label="ballon">
            Don't forget to say Danke 🎈
          </span>
          <img css={wolfi} src="/logo.png" alt="wolfi" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { personalizedPlan } = await import('../../db.js');
  const plan = await personalizedPlan(context.params.id);
  console.log('this', plan);

  if (plan === null) {
    return { props: {} };
  }
  return {
    props: {
      plan,
    },
  };
}
