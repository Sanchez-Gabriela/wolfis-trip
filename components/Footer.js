import React from 'react';
import Link from 'next/link';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import About from '../pages/about';

export default function Footer() {
  const footerList = [
    { name: 'Home', url: '/index' },
    { name: 'About', url: '/about' },
    { name: 'Log in', url: '/login' },
    { name: 'Sign up', url: '/signUp' },
  ];

  const navbar = css`
    background-color: #323339;
    font-family: 'Julius Sans One', sans-serif;
    padding-bottom: 20px;
    padding-top: 20px;
    align-items: baseline;
    display: flex;
    justify-content: flex-end;
    width: 100%;
  `;

  const columnList = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 28%;
  `;

  const links = css`
    padding-right: 15px;
    padding-left: 5px;
    color: #ffff;
    text-decoration: none;
  `;

  const madeBy = css`
    text-align: right;
    margin-right: 20px;
    color: #ffff;
  `;

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
      </style>
      <div css={navbar}>
        <div css={columnList}>
          <div className="navbar-linkList">
            {footerList.map((link) => {
              return (
                <Link key={link.url} href={link.url}>
                  <a href="#a" css={links}>
                    {link.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div css={madeBy}>
          <span>Made by Gabriela Sánchez</span>
        </div>
      </div>
    </>
  );
}
