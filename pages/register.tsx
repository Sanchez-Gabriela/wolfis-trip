import React from 'react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Link from 'next/link';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

type Props = {
  csrfToken: string;
};

export default function Register(props: Props) {
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
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
        </style>
        <title>Register</title>
      </Head>
      <div css={app}>
        <Header />
        <form method="POST" css={form}>
          <input name="username" css={input} />
          <input name="password" type="password" css={input} />
          <input type="hidden" name="csrf" value={props.csrfToken} />
          <Link href={'/register'}>
            <a href="#a" css={forgottenPass}>
              Register &#x0226B;
            </a>
          </Link>
          <button css={button}>Register</button>
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
