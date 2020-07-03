import React, { useState, useEffect } from 'react';
import MultiSelect from 'react-multi-select-component';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Datepicker from '../components/Datepicker';
import Header from '../components/Header';
import { START_DATE } from '@datepicker-react/hooks';

// style

const app = css`
  ${'' /* min-height: 100vh; */}
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

const span = css`
  color: #4abdac;
  font-family: 'Karla', sans-serif;
  text-align: center;
`;

const dropdown = css`
  width: 50%;
  margin: auto;
`;

const readyToGo = css`
  color: #f7b733;
  font-size: 40px;
  text-decoration: none;
  font-family: 'Karla', sans-serif;
  margin-left: 40%;
`;

const calendar = css`
  margin: auto;
`;

const main = css`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const divToGo = css`
  margin-top: 70px;
`;

export default function Interests() {
  // fetch(
  //   'https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SPAZIERPUNKTOGD &srsName=EPSG:4326&outputFormat=json',
  // )
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));

  const options = [
    { value: '1', label: 'sights' },
    { value: '2', label: 'classical music' },
    { value: '3', label: 'palaces' },
    { value: '4', label: 'parks' },
    { value: '5', label: 'churchs' },
    { value: '6', label: 'markets' },
    { value: '7', label: 'coffee houses' },
    { value: '8', label: 'typical food' },
    { value: '9', label: 'vegan food' },
    { value: '10', label: 'museums' },
    { value: '11', label: 'theaters' },
    { value: '12', label: 'clubs' },
  ];

  const [selected, setSelected] = useState([]);
  // const { insertJourneys } = await import('../db.js');
  // const userId = userId;
  // const startDate = props.state.startDate;
  // const endDate = props.state.endDate;

  // insertJourneys(startDate, endDate, userId);

  // if (selected !== null) {
  //   insertJourneys = (startDate, endDate, userId);
  // } else {
  //   alert('select the dates');
  // }
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });

  // console.log(state.startDate.toISOString().split('T')[0]);
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
      </style>
      <div css={app}>
        <Header />
        <h2 css={mainTitle}>Let's plan your journey</h2>
        <div css={main}>
          <span css={span}>1. Choose the dates you would like to plan </span>
          <div css={calendar}>
            <Datepicker state={state} setState={setState} />
          </div>
          <button
            onClick={() => {
              fetch('/api/journey', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  startDate: state.startDate.toISOString().split('T')[0],
                  endDate: state.endDate.toISOString().split('T')[0],
                  userId: '1',
                }), // body data type must match "Content-Type" header
              })
                .then((response) => {
                  console.log(response);
                  return response.json();
                })
                .then((json) => {
                  console.log(json);
                });
            }}
          ></button>
          <div>
            <div css={dropdown}>
              <pre>{JSON.stringify(selected)}</pre>
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
            {props.selected.map((value) => {
              return (
                <>
                  <li>Name: {value.name}</li>
                  <li>Address: {value.address}</li>
                  <img src={value.image} alt={value.name} />
                  <li>{value.description}</li>
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
