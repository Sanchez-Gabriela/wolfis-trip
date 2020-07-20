import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Footer from '../../components/Footer';

export default function userPlan({ plan }) {
  const app = css`
    box-sizing: content-box;
    padding: 0;
    margin: 0;
  `;

  const header = css`
    width: 100%;
    margin-top: 20px;
    text-align: center;
  `;

  const quote = css`
    font-size: 2rem;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #555555;
    display: inline-block;
    font-family: 'Comfortaa', cursive;
  `;

  const journey = css`
    width: 80%;
  `;

  const text = css`
    font-family: 'Karla', sans-serif;
    font-size: 20px;
    line-height: 2;
    list-style-type: none;
    padding: 10px;
    color: #555555;
  `;

  const name = css`
    font-family: 'Karla', sans-serif;
    font-size: 25px;
    line-height: 1.2;
    list-style-type: none;
    padding: 10px;
    color: #555555;
    border-bottom: 1.5px solid #4abdac;
    }
  `;

  const img = css`
    width: 400px;
    background-color: $coral;
    -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    animation: slideUp 2000ms ease;
    margin-bottom: 20px;
    border-radius: 4px;
  `;

  const main = css`
    min-height: 100vh;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    width: 50%;
    display: flex;
    justify-content: center;
    background-color: #ffff;
    -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    animation: slideUp 2000ms ease;
    margin-bottom: 20px;
    border-radius: 4px;
  `;

  const description = css`
    list-style-type: none;
    border-radius: 4px;
    padding: 10px;
    margin-top: 10px;
    font-family: 'Karla', sans-serif;
    color: #555555;
    line-height: 1.8;
  `;

  const icon = css`
    width: 5%;
    margin-left: 10px;
  `;

  console.log(
    'plan',
    plan.map((value) => value.name),
  );
  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
      </style>
      <div css={app}>
        <Header />
        <div css={main}>
          <div css={header}>
            <span css={quote}>Your plan </span>
            <img css={icon} src="/yellowMap.png" alt="goal-flag" />
          </div>
          <div css={journey}>
            <ul>
              {plan.map((value) => {
                return (
                  <>
                    <li css={name}>{value.name}</li>
                    <li css={text}>
                      <strong>Address:</strong> {value.address}
                    </li>
                    <img css={img} src={value.image} alt={value.name} />
                    <li css={description}>{value.description}</li>
                  </>
                );
              })}
            </ul>
          </div>
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
