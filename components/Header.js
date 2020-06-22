import React from 'react';
import Link from 'next/link';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Signup from '../pages/signUp';

export default function Header() {
  const linkList = [
    { name: 'Log in', url: '/login' },
    { name: 'Sign up', url: '/signUp' },
  ];

  const logo = css`
    font-size: 30px;
    color: #ffff;
    padding-left: 20px;
  `;

  const navbar = css`
    width: 100%;
    display: flex;
    color: #ffff;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #f26968;
    font-family: 'Julius Sans One', sans-serif;
    padding: 20px;
  `;

  const links = css`
    padding-right: 30px;
    padding-left: 20px;
    font-size: 1.5rem;
  `;

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
      </style>
      <div css={navbar}>
        <div className="logo-header">
          <a href="#a" css={logo}>
            Wolfi
          </a>
        </div>
        <div className="navbar-linkList">
          {linkList.map((link) => {
            return (
              <Link key={link.url} href={link.url}>
                <a css={links}>{link.name}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
