import React from 'react';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const p = css`
    font-size: 30px;
  `;

  const app = css`
    min-height: 100vh;
    padding: 0 0.5rem;
    font-size: 16px;
    width: 100%;
  `;

  return (
    <div>
      <Header />
      <div css={app}>
        <p css={p}>
          Wolfi'S App saves you time and makes your journey more interesting!{' '}
          <br />
          Wolfi schedule your days with the activities you might like.
        </p>
      </div>
      <Footer />
    </div>
  );
}
