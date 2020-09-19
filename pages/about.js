/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const p = css`
    font-size: 22px;
    font-family: 'Karla', sans-serif;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 40px;
    margin-bottom: 40px;
    line-height: 2;
    color: #696969;
  `;

  const app = css`
    min-height: 83vh;
    padding: 0 0.5rem;
    width: 100%;
  `;

  const text = css`
    display: flex;
    flex-direction: row;
    width: 50%;
    margin: auto;
    color: #999;
    line-height: 2;
  `;

  const section2 = css`
    background-color: lightblue;
    width: 20%;
    margin: auto;
    border-radius: 6px;
    padding: 10px;
    -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    animation: slideUp 2000ms ease;
    text-align: center;
  `;

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap"
        rel="stylesheet"
      ></link>
      <Header />
      <div css={app}>
        <div css={text}>
          <p css={p}>
            Wolfi helps you saving time and makes your journey more exciting!{' '}
          </p>
          <p css={p}> Let Wolfi schedules your days according to your taste.</p>
        </div>
        <div css={section2}>
          <span css={p} role="img" aria-label="star">
            &#x2728; This application was made for those tourists who do not
            want to spend time browsing for hours to find a place to go...{' '}
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
