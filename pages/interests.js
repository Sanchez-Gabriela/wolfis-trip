import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';
import Footer from '../components/Footer';
import Datepicker from '../components/Datepicker';
import Header from '../components/Header';
import { START_DATE } from '@datepicker-react/hooks';
import Cookie from 'js-cookie';
//================================================================================
// Style
//================================================================================

const app = css`
  min-height: 100vh;
  font-weight: 400;
  font-family: 'Karla', sans-serif;
  width: 100%;
  position: absolute;
`;

const h2 = css`
  color: #4abdac;
  font-family: 'Karla', sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  border-bottom: 2px solid #f7b733;
  border-top: 2px solid #f7b733;
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

const divToGo = css`
  margin-top: 70px;
`;

const button = css`
  width: 5%;
  font-family: 'Karla', sans-serif;
  margin: auto;
  margin-top: 40px;
  border-radius: 4px;
  color: #4abdac;
  border: 2px solid #4abdac;
  padding: 10px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const selectButton = css`
  width: 10%;
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

//================================================================================
// Function
//================================================================================

export default function Interests(props) {
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

  // console.log(selected);

  //calendar
  const [state, setState] = useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
      </style>
      <div css={app}>
        <Header />
        <div css={main}>
          <h2 css={h2}>1. Choose the dates you would like to plan </h2>
          <div css={calendar}>
            <Datepicker state={state} setState={setState} />
          </div>
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
                  console.log(json);
                });
            }}
          >
            submit
          </button>
          <div css={tags}>
            <h2 css={h2}>2. What are your interests:</h2>
            <div css={dropdown}>
              <pre>{JSON.stringify(selected)}</pre>
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
                    },
                    body: JSON.stringify({
                      journeyId: 1,
                      placeIds: selected.map((tag) => {
                        return tag.value;
                      }), // I'm getting the [values]
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
                css={selectButton}
              >
                submit
              </button>
            </div>
          </div>
        </div>
        <div css={divToGo}>
          <Link href={'/readytogo'}>
            <a href="#a" css={readyToGo}>
              Get your plan! &#x0226B;
            </a>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { login } = await import('../api/login.ts');

//   const user = await login();
//   return {
//     props: {
//       login,
//     },
//   };
// }
