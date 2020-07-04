import React, { useState, FormEvent } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import nextCookies from 'next-cookies';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import { GetServerSidePropsContext } from 'next';
import Footer from '../components/Footer';

//================================================================================
// Style
//================================================================================

const app = css`
  min-height: 100vh;
  font-weight: 400;
  font-family: 'Karla', sans-serif;
  width: 100%;
  position: absolute;
`;
const form = css`
  background: #f7b733;
  width: 200px;
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
  width: 70px;
  font-family: 'Karla', sans-serif;
  margin: auto;
  border-radius: 4px;
  color: #4abdac;
  border: 2px solid #4abdac;
  padding: 10px;
  font-weight: bold;
`;

const forgottenPass = css`
  text-align: center;
  color: #555555;
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
  color: #555555;
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  font-family: 'Karla', sans-serif;
  text-decoration: none;
  border: 2px solid #555555;
`;

//================================================================================
// Function
//================================================================================
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok !== true) {
          setStatus('Failed logging in - response is not ok');
        }
        return response.json();
      })
      .then((json) => {
        if (json.loggedIn === false) {
          setStatus('Failed logging in - check username and password');
        } else {
          setStatus('Logged in!');
          setTimeout(() => {
            Router.replace('/interests');
          }, 2000);
        }
      })
      .catch(() => {
        setStatus('Failed logging in - request failed');
      });
  }

  return (
    <>
      <div css={app}>
        <Link href={'/index'}>
          <a href="#a" css={logo}>
            Wolfi
          </a>
        </Link>
        <form method="POST" css={form} onSubmit={onSubmit}>
          <input
            css={input}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="username"
            name="username"
          />

          <input
            css={input}
            placeholder="Password"
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button css={button}> LOGIN</button>
        </form>
        <p>{status}</p>
        <a href="#a" css={forgottenPass}>
          I forgot my password, send me an email &#x0226B;
        </a>
        <Link href={'/register'}>
          <a href="#a" css={forgottenPass}>
            Register &#x0226B;
          </a>
        </Link>
      </div>
      <Footer />
    </>
  );
}

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   if (nextCookies(context).token) {
//     context.res.setHeader('location', '/');
//     context.res.statusCode = 302;
//     context.res.end();
//   }

//   return {
//     props: {},
//   };
// }
