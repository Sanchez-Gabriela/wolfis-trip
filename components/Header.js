import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import cookies from 'js-cookie';

export default function Header() {
  const logo = css`
    font-size: 30px;
    color: #24305e;
    padding-left: 20px;
  `;

  const navbar = css`
    width: 100%;
    display: flex;
    color: #24305e;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #ffff;
    font-family: 'Julius Sans One', sans-serif;
    padding: 20px;
  `;

  const links = css`
    padding-right: 30px;
    padding-left: 20px;
    font-size: 1.5rem;
  `;
  const [user, setUser] = useState(null);
  const linkList = [{ name: 'About', url: '/about' }];

  console.log('username', user);

  if (user === null) {
    linkList.push({ name: 'Register', url: '/register' });
    linkList.push({ name: 'Login', url: '/login' });
  } else {
    linkList.push({ name: 'Logout', url: '/logout' });
  }

  useEffect(() => {
    fetch('/api/checkLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ }),
    })
      .then((response) => {
        console.log('success', response);
        if (response.ok !== true) {
          throw new Error('Error fetching session');
        }
        return response.json();
      })
      .then((json) => {
        if (json === true) {
          setUser('TODO: add the user');
        }
      })
      .catch((err) => {
        console.error('error fetching session', err);
      });
  }, []);

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');
      </style>
      <div css={navbar}>
        <div className="logo-header">
          <Link href={'/index'}>
            <a href="#a" css={logo}>
              Wolfi
            </a>
          </Link>
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
