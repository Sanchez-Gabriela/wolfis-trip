import React from 'react';
import Link from 'next/link';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

export default function Footer() {
  const social = css`
    width: 50%;
    float: right;
    font-family: 'Karla', sans-serif;
  `;

  const inst = css`
    float: right;
    line-height: 70px;
    text-decoration: none;
    color: white;
    text-align: center;
    font-weight: bold;
    background-color: lightblue;
    font-size: 16px;
    width: 20%;
  `;

  const tweet = css`
    float: right;
    line-height: 70px;
    text-decoration: none;
    color: white;
    text-align: center;
    font-weight: bold;
    background-color: #f7b733;
    font-size: 16px;
    width: 20%;
  `;

  const support = css`
    float: right;
    line-height: 70px;
    text-decoration: none;
    color: white;
    text-align: center;
    font-weight: bold;
    background-color: #4abdac;
    font-size: 0.8em;
    width: 40%;
  `;

  const linked = css`
    float: right;
    line-height: 70px;
    text-decoration: none;
    color: white;
    text-align: center;
    font-weight: bold;
    background-color: lightblue;
    font-size: 20%px;
    width: 20%;
  `;

  const paragh = css`
    padding-left: 5%;
    color: white;
    font-size: 14px;
    letter-spacing: 1px;
    padding-top: 10px;
    padding-bottom: 29px;
    background-color: #999;
  `;

  const copyright = css`
    width: 50%;
    float: left;
    font-family: 'Karla', sans-serif;
  `;

  const footer = css`
    width: 100%;
    display: inline-block;
    height: 70px;
    background-color: #999;
    ${'' /* position: relative; */}
    bottom: 0;
    height: 2.5rem;
  `;

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
      </style>
      <footer css={footer}>
        <div css={copyright}>
          <p css={paragh}>&copy; 2020 - Sánchez</p>
        </div>
        <div css={social}>
          <Link href={'/contact'}>
            <a href="#a" css={support}>
              Contact Us
            </a>
          </Link>
          <a href="https://github.com/Sanchez-Gabriela" css={inst}>
            g
          </a>
          <a href="https://twitter.com/gab_veg" css={tweet}>
            t
          </a>
          <a href="#a" css={linked}>
            in
          </a>
        </div>
      </footer>
    </>
  );
}
