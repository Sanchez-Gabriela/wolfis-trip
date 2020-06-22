import React from 'react';
import Link from 'next/link';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

export default function Signup() {
  const app = css`
    background: #f26968;
    min-height: 100vh;
    font-weight: 400;
    font-family: 'sans-serif';
    width: 100%;
    position: absolute;
  `;
  const form = css`
    background: #323339;
    width: 15%;
    height: 70%;
    position: relative;
    margin: auto;
    margin-top: 15%;
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
    border: 2px solid #f26968;
    margin-top: 20px;
    font-family: 'Muli', sans-serif;
  `;

  const button = css`
    border-radius: 4px;
    font-family: 'Muli', sans-serif;
    font-size: 18px;
    margin-top: 10px;
    background: #ffff;
    border: 2px solid #2f4f4f;
  `;

  const forgottenPass = css`
    text-align: center;
    color: #2f4f4f;
    font-size: 18px;
    font-family: 'Muli', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 15px;
    text-decoration: none;
  `;

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Muli&display=swap');
      </style>
      <div css={app}>
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
