import React from 'react';
import Link from 'next/link';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import About from '../pages/about';

export default function Footer() {
  const navbar = css`
    font-family: 'Karla', sans-serif;
    padding-bottom: 10px;
    padding-top: 20px;
    align-items: baseline;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem; /* Footer height */
  `;

  const columnList = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 28%;
  `;

  const madeBy = css`
    text-align: right;
    margin-right: 20px;
    font-family: 'Karla', sans-serif;
    color: #555555;
  `;

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
      </style>
      <div css={navbar}>
        <div css={columnList}>
          <div></div>
        </div>
        <div css={madeBy}>
          <span></span>
        </div>
      </div>
    </>
  );
}
