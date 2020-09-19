import Header from '../components/Header';
import Footer from '../components/Footer';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Weather from '../components/Weather';

export default function App() {
  const app = css`
    box-sizing: content-box;
    padding: 0;
    margin: 0;
  `;

  const main = css`
    min-height: 83vh;
    padding: 0 0.5rem;
  `;

  const img = css`
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  `;

  const quote = css`
    text-align: center;
    font-size: 30px;
    font-family: 'Karla', cursive;
    margin-top: 5px;
    color: #00a399;
  `;

  const quote2 = css`
    text-align: center;
    font-size: 30px;
    font-family: 'Karla', cursive;
    margin-top: 5px;
    color: #00a399;
    margin-top: -200px;
    margin-bottom: 150px;
  `;

  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Karla&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <div css={app}>
        <Header />
        <div css={main}>
          <Weather />
          <p css={quote}>Welcome to Vienna!</p>
          <img src="/wien.png" alt="vienna city" css={img} />
        </div>
        <p css={quote2}>
          Let your journey be a surprise{' '}
          <span style={{ color: 'red' }}>&#x2665;</span>
        </p>
        <Footer />
      </div>
    </div>
  );
}
