import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Datepicker from '../components/Datepicker';
import Header from '../components/Header';

// style

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

const h2 = css`
  color: #4abdac;
  font-family: 'Karla', sans-serif;
  letter-spacing: 0.1em;
`;

const dropdown = css`
  width: 100%;
  margin-left: 40%;
`;

const readyToGo = css`
  color: #f7b733;
  font-size: 40px;
  text-decoration: none;
  font-family: 'Karla', sans-serif;
  margin-left: 40%;
`;

const calendar = css`
  margin-left: 20px;
`;

const main = css`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
`;

const divToGo = css`
  margin-top: 70px;
`;

export default function interests(props) {
  // fetch(
  //   'https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SPAZIERPUNKTOGD &srsName=EPSG:4326&outputFormat=json',
  // )
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));

  // const filtering = props.sights.filter((sight) => {
  //   return sight.name === 'Rathaus';
  // });

  const options = [
    { value: 'sights', label: 'sights' },
    { value: 'classical music', label: 'classical music' },
    { value: 'palaces', label: 'palaces' },
    { value: 'parks', label: 'parks' },
    { value: 'churchs', label: 'churchs' },
    { value: 'markets', label: 'markets' },
    { value: 'coffee houses', label: 'coffee houses' },
    { value: 'typical food', label: 'typical food' },
    { value: 'vegan food', label: 'vegan food' },
    { value: 'museums', label: 'museums' },
    { value: 'theaters', label: 'theaters' },
    { value: 'clubs', label: 'clubs' },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
      </style>
      <div css={app}>
        {/* <Link href={'/index'}>
          <a href="#a" css={logo}>
            Wolfi
          </a>
        </Link>  */}
        <Header />
        {/* <h1 css={mainTitle}>Choose date and Interest</h1> */}
        <div css={main}>
          <div css={calendar}>
            <Datepicker />
          </div>
          <div>
            <div css={dropdown}>
              <h2 css={h2}>What are your interests:</h2>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={'Select'}
              />
            </div>
          </div>
          {/* <ul>
            {props.sight.map((sight) => {
              return (
                <>
                  <li>Name: {sight.name}</li>
                  <li>Address: {sight.address}</li>
                  <img src={sight.image} alt={sight.name} />
                  <li>{sight.description}</li>
                </>
              );
            })}
          </ul> */}
        </div>
        <div css={divToGo}>
          <Link href={'/readytogo'}>
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
  const { getPlaces } = await import('../db.js');

  const places = await getPlaces();
  return {
    props: {
      places,
    },
  };
}
