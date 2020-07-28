import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Footer from '../components/Footer';

type Props = {
  csrfToken: string;
};

export default function Register(props: Props) {
  const app = css`
    box-sizing: content-box;
    padding: 0;
    margin: 0;
  `;

  const main = css`
    padding: 0 0.5rem;
    min-height: 65vh;
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
    width: 80px;
    font-family: 'Karla', sans-serif;
    margin: auto;
    border-radius: 4px;
    color: #ffff;
    border: 2px solid #4abdac;
    padding: 10px;
    font-weight: bold;
    background-color: #4abdac;
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

  return (
    <>
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
        </style>
        <title>Register</title>
      </Head>
      <div css={app}>
        <Header />
        <div css={main}>
          <form method="POST" css={form}>
            <input name="username" css={input} />
            <input name="password" type="password" css={input} />
            <input type="hidden" name="csrf" value={props.csrfToken} />

            <button css={button}>REGISTER</button>
          </form>
          <Link href={'/login'}>
            <a href="#a" css={forgottenPass}>
              I already have an Account &#x0226B;
            </a>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // TODO: Do this in an API Route instead!

  // This also helps to avoid all of the buffer code
  // and the query-string dependency below!

  const queryString = await import('query-string');
  const { insertUser } = await import('../db');
  const { hashPassword } = await import('../hashing');
  require('dotenv').config();

  const Tokens = (await import('csrf')).default;
  const tokens = new Tokens();

  const secret = process.env.CSRF_TOKEN;
  if (typeof secret !== 'string') {
    throw new Error('Token secret misconfigured!');
  }

  let buffer = '';

  context.req.on('data', (chunk) => {
    buffer += chunk;
  });

  context.req.on('end', async () => {
    const body = queryString.parse(Buffer.from(buffer).toString());

    if (
      typeof body.username !== 'string' ||
      typeof body.password !== 'string'
    ) {
      console.log('No username or password passed in body');
      return;
    }

    const username = body.username;

    const passwordHash = await hashPassword(body.password);

    // insertUser(body.username, body.password)
    //   .then(() => console.log('succeeded'))
    //   .catch((err) => console.error('did not work', err));
    // });

    const requestToken = body.csrf;

    console.log(requestToken);

    if (typeof requestToken !== 'string') {
      throw new Error('No CSRF token passed!');
    }

    if (tokens.verify(secret, requestToken)) {
      // console.log(user);
      insertUser(username, passwordHash)
        .then(() => console.log('succeeded'))
        .catch((err) => console.error("didn't work", err));
    } else {
      console.error('CSRF token not valid!!');
    }
  });

  const props: Props = {
    csrfToken: tokens.create(secret),
  };

  return {
    props,
  };
}
