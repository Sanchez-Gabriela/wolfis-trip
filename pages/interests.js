import React, { useState } from 'react';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Datepicker from '../components/Datepicker';

// style
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

const app = css`
  min-height: 100vh;
  font-weight: 400;
  font-family: 'Karla', sans-serif;
  width: 100%;
  position: absolute;
`;

const mainTitle = css`
  color: #4abdac;
  font-family: 'Karla', sans-serif;
  text-align: center;
  letter-spacing: 0.1em;
`;

const readyToGo = css`
  color: #f7b733;
  font-size: 20px;
  text-decoration: none;
  font-family: 'Karla', sans-serif;
`;

// const li = css`
//   margin: 20px;
//   list-style-type: none;
//   font-family: 'Karla', sans-serif;
// `;

const calendar = css`
  margin-left: 20px;
`;

const main = css`
  display: flex;
  flex-direction: column;
`;

// const img = css`
//   width: 50%;
//   border-radius: 4px;
//   margin-bottom: 10px;
//   margin-left: 20px;
// `;

// const description = css`
//   font-family: 'Karla', sans-serif;
//   list-style-type: none;
//   margin: 20px;
//   width: 47%;
//   text-align: left;
//   background: #fc4a1a;
//   padding: 20px;
//   border-radius: 4px;
//   line-height: 1.8;
//   color: #ffff;
// `;

export default function interests(props) {
  // fetching data
  // fetch(
  //   'https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:MUSEUMOGD&srsName=EPSG:4326&outputFormat=json',
  // )
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));

  const [pointInterest, setPointInterest] = useState('Rathaus');

  function handleChange(e) {
    setPointInterest(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(pointInterest);
  }

  const filtering = props.sights.filter((sight) => {
    return sight.name === 'Rathaus';
  });

  // console.log(filtering);
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
      </style>
      <div css={app}>
        <Link href={'/index'}>
          <a href="#a" css={logo}>
            Wolfi
          </a>
        </Link>
        <h1 css={mainTitle}>Get your plan here</h1>
        <div css={main}>
          <div css={calendar}>
            <Datepicker />
          </div>
          <div>
            {/* <ul>
              {props.sights.map((sight) => {
                return (
                  <>
                    <li css={li}>Name: {sight.name}</li>
                    <li css={li}>Address: {sight.address}</li>
                    <img src={sight.image} alt={sight.name} css={img} />
                    <li css={description}>{sight.description}</li>
                  </>
                );
              })}
            </ul> */}
            <form onSubmit={handleSubmit}>
              <h2>Point of Interest:</h2>
              <select onChange={handleChange} value={pointInterest}>
                <option value="choose">Choose </option>
                <option value={JSON.stringify(filtering)}>Palaces</option>
                <option value="parks">Parks</option>
                <option value="vue">Streets</option>
                <option value="vue">Churchs</option>
              </select>
              <button type="submit">&#9755;</button>
            </form>
            <strong></strong>
          </div>
        </div>
        <div>
          <Link href={'/readyToGo'}>
            <a href="#a" css={readyToGo}>
              Get your plan! &#x0226B;
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { getSights } = await import('../db.js');

  const sights = await getSights();
  return {
    props: {
      sights,
    },
  };
}
