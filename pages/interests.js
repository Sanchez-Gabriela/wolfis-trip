import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Datepicker from '../components/Datepicker';
import Header from '../components/Header';
import { START_DATE } from '@datepicker-react/hooks';
import Cookie from 'js-cookie';
import { differenceInCalendarDays, eachDayOfInterval } from 'date-fns';

//================================================================================
// Style
//================================================================================

const app = css`
  min-height: 100vh;
  font-weight: 400;
  font-family: 'Karla', sans-serif;
  width: 100%;
  position: relative;
`;

const h2 = css`
  color: #4abdac;
  font-family: 'Karla', sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
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

const divToGo = css``;

const button = css`
  width: 70px;
  font-family: 'Karla', sans-serif;
  margin: auto;
  margin-top: 40px;
  border-radius: 4px;
  color: #4abdac;
  border: 2px solid #4abdac;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const selectButton = css`
  width: 70px;
  font-family: 'Karla', sans-serif;
  text-align: center;
  margin-top: 40px;
  border-radius: 4px;
  color: #4abdac;
  border: 2px solid #4abdac;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const tags = css`
  height: 500px;
`;

const dates = css`
  list-style: none;
  line-height: 2.5;
  font-size: 16px;
`;

const section = css`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  font-size: 20px;
  line-height: 2.5;
`;

//================================================================================
// Function
//================================================================================

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

  //multiselector
  const [selected, setSelected] = useState([]);

  //calendar
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });

  const result = differenceInCalendarDays(state.endDate, state.startDate);
  const resultDays = result + 1;
  // alert('You have selected ' + resultDays + 'day(s)');
  console.log(resultDays);

  // function array() {
  let datesInInterval = [];
  if (state.startDate !== null && state.endDate !== null) {
    datesInInterval = eachDayOfInterval({
      start: state.startDate,
      end: state.endDate,
    });
  }

  // const [select, setSelect] = useState(['']);

  const [journeyId, setJourneyId] = useState();

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla&display=swap"
        rel="stylesheet"
      ></link>
      <div css={app}>
        <Header />
        <div css={main}>
          <h2 css={h2}>1. Choose your dates </h2>
          <div css={calendar}>
            <Datepicker state={state} setState={setState} />
          </div>
          {state.startDate !== null && state.endDate !== null && (
            <button
              css={button}
              onClick={() => {
                fetch('/api/journey', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    startDate: state.startDate.toISOString().split('T')[0],
                    endDate: state.endDate.toISOString().split('T')[0],
                    token: Cookie.get('token'),
                  }), // body data type must match "Content-Type" header
                })
                  .then((response) => {
                    console.log(response);
                    return response.json();
                  })
                  .then((json) => {
                    console.log(json.id);
                    setJourneyId(json.id);
                  });
              }}
            >
              submit
            </button>
          )}
          <section>
            <ul css={section}>
              Choose for each day the places you want to visit:
              {datesInInterval.map((date) => {
                return <li css={dates}>{date.toDateString()}</li>;
              })}
            </ul>
          </section>
          <div css={tags} hidden={!journeyId}>
            <h2 css={h2}>2. What are your interests:</h2>
            <div css={dropdown}>
              <pre hidden>{JSON.stringify(selected)}</pre>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={'Select'}
              />
              <button
                onClick={() => {
                  fetch('/api/tags', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      Accept: 'application/json',
                    },
                    body: JSON.stringify({
                      placeIds: selected.map((tag) => {
                        return tag.value;
                      }),
                      journeyId: journeyId,
                    }), // body data type must match "Content-Type" header
                  })
                    .then((response) => {
                      console.log(response);
                      return response.json();
                    })
                    .then((json) => {
                      console.log(json);
                      JSON.stringify(json);
                    });
                }}
                css={selectButton}
              >
                submit
              </button>
            </div>
          </div>
        </div>
        <div css={divToGo}>
          <Link href={'/journey/' + journeyId}>
            <a href="#a" css={readyToGo}>
              Get your plan! &#x0226B;
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
