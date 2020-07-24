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
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Karla', sans-serif;
`;

const h2 = css`
  color: black;
  font-family: 'Cabin Sketch', cursive;
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
  color: black;
  font-size: 40px;
  text-decoration: none;
  font-family: 'Cabin Sketch', cursive;
  margin-left: 35%;
`;

const calendar = css`
  margin: auto;
`;

const main = css`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  font-family: 'Karla', sans-serif;
`;

const divToGo = css`
  margin-bottom: 30px;
`;

const calendarButton = css`
  width: 70px;
  font-family: 'Karla', sans-serif;
  margin: auto;
  margin-top: 10px;
  border-radius: 4px;
  color: #4abdac;
  border: 2px solid #4abdac;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 70px;
`;

const selectButton = css`
  width: 30px;
  font-family: 'Karla', sans-serif;
  text-align: center;
  margin-top: 40px;
  border-radius: 4px;
  color: #4abdac;
  border: 2px solid #4abdac;
  padding: 5px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const tags = css`
  height: 500px;
  margin-top: 50px;
  width: 700px;
`;

const dates = css`
  list-style: none;
  line-height: 2.5;
  font-size: 16px;
`;

const section = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  font-size: 20px;
  line-height: 2.5;
  padding: 20px;
  margin-top: -50px;
`;

const sketchText = css`
  font-family: 'Cabin Sketch', cursive;
  margin-top: 50px;
`;

const dateSection = css`
  background-color: #fff2de;
  border-radius: 30px;
`;

const input = css`
  background-color: #4abdac;
  border-radius: 4px;
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
      <link
        href="https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap"
        rel="stylesheet"
      ></link>
      <div css={app}>
        <Header />
        <div css={main}>
          <h2 css={h2}>1. Choose your dates &#x2935;</h2>
          <div css={calendar}>
            <Datepicker state={state} setState={setState} />
          </div>
          <span css={sketchText}>Step 2 &#x2935;</span>
          {state.startDate !== null && state.endDate !== null && (
            <button
              css={calendarButton}
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
              Click here
            </button>
          )}
          <section css={dateSection}>
            <ul css={section}>
              <p css={sketchText}>
                &#x2939; 3 Now choose for each day the places you want to visit:
              </p>
              {datesInInterval.map((date) => {
                return <li css={dates}>{date.toDateString()}</li>;
              })}
            </ul>
          </section>
          <div css={tags} hidden={!journeyId}>
            <h2 css={h2}>4 Select your interests: &#x2938;</h2>
            <div css={dropdown}>
              <pre hidden>{JSON.stringify(selected)}</pre>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={'Select'}
                css={input}
              />
              <span css={sketchText}>Click here! </span>
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
                ok
              </button>
            </div>
          </div>
        </div>
        <div css={divToGo}>
          <Link href={'/journey/' + journeyId}>
            <a href="#a" css={readyToGo}>
              Check out your plan! &#x0226B;
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
