import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { GetServerSidePropsContext } from 'next';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';

export default function Logout() {
  const logout = css`
    font-family: 'Karla', sans-serif;
    color: #4abdac;
    text-align: center;
    font-size: 30px;
    margin-top: 200px;
  `;

  return (
    <>
      <Header />
      <div>
        <Head>
          <title>Logged out</title>
        </Head>
        <div css={logout}>Successfully logged out!</div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { serialize } = await import('cookie');
  const nextCookies = (await import('next-cookies')).default;
  const { deleteSessionByToken } = await import('../db');

  const { token } = nextCookies(context);
  await deleteSessionByToken(token);

  // Remove the cookie
  context.res.setHeader(
    'Set-Cookie',
    serialize('token', '', {
      maxAge: -1,
      path: '/',
    }),
  );

  return {
    props: {},
  };
}
