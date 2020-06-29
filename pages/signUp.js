import React from 'react';
import Link from 'next/link';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

export default function Signup() {
  const app = css`
    background: #4abdac;
    min-height: 100vh;
    font-weight: 400;
    font-family: 'Karla', sans-serif;
    width: 100%;
    position: absolute;
  `;
  const form = css`
    background: #f7b733;
    width: 15%;
    height: 70%;
    position: relative;
    margin: auto;
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 6px;
  `;

  const input = css`
    line-height: 2.5;
    margin-bottom: 15px;
    border-radius: 4px;
    border: 2px solid #f7b733;
    margin-top: 20px;
    font-family: 'Karla', sans-serif;
  `;

  const button = css`
    border-radius: 4px;
    font-family: 'Karla', sans-serif;
    font-size: 18px;
    margin-top: 10px;
    background: #ffff;
    border: 2px solid #2f4f4f;
  `;

  const forgottenPass = css`
    text-align: center;
    color: #2f4f4f;
    font-size: 18px;
    font-family: 'Karla', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 15px;
    text-decoration: none;
  `;

  const logo = css`
    font-size: 40px;
    color: #fc4a1a;
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
    font-family: 'Karla', sans-serif;
    text-decoration: none;
    border: 2px solid #fc4a1a;
  `;

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Muli&display=swap');
      </style>
      <div css={app}>
        <Link href={'/index'}>
          <a href="#a" css={logo}>
            Wolfi
          </a>
        </Link>
        <form css={form}>
          <input css={input} placeholder="Name" type="text" required="" />
          <input
            css={input}
            placeholder="Email"
            type="email"
            name="customerEmail"
          />
          <input
            css={input}
            placeholder="Password"
            type="password"
            name="customerPassword"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <button css={button} type="button">
            {' '}
            SIGN UP
          </button>
        </form>
        <a href="#a" css={forgottenPass}>
          I forgot my password, send me an email &#x0226B;
        </a>
        <Link href={'/login'}>
          <a href="#a" css={forgottenPass}>
            I already have an Account &#x0226B;
          </a>
        </Link>
      </div>
    </>
  );
}
