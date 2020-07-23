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
    font-family: 'Karla', cursive;
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
    background-color: #999;
    padding-top: 10px;
    padding-bottom: 10px;
  `;

  const copyright = css`
    float: left;
    font-family: 'Karla', cursive;
    background-color: #999;
    width: 50%;
  `;

  const footer = css`
    width: 100%;
    display: inline-block;
    height: 50px;
    background-color: #999;
    bottom: 0;
    height: 1rem;
  `;

  return (
    <>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?  family=Comfortaa:wght@300&family=Karla&display=swap"
          rel="stylesheet"
        ></link>
      </div>
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
            <i className="fa fa-github" style={{ fontSize: '20px' }}></i>
          </a>
          <a href="https://twitter.com/gab_veg" css={tweet}>
            <i className="fa fa-twitter" style={{ fontSize: '20px' }}></i>
          </a>
          <a href="#a" css={linked}>
            <i className="fa fa-linkedin" style={{ fontSize: '20px' }}></i>
          </a>
        </div>
      </footer>
    </>
  );
}
