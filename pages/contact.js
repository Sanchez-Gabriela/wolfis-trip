import React from 'react';
import Head from 'next/head';
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
import Header from '../components/Header';
import Footer from '../components/Footer';

//================================================================================
// Style
//================================================================================

const form = css`
  background: #f7b733;
  width: 350px;
  position: relative;
  margin: auto;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 6px;
`;

const input = css`
  line-height: 2.5;
  margin-bottom: 15px;
  border-radius: 4px;
  border: 2px solid #f7b733;
  margin-top: 20px;
  font-family: 'Karla', sans-serif;
`;

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
  margin-bottom: 30px;
`;

const name = css`
  font-family: 'Karla', sans-serif;
  color: #555555;
`;

//================================================================================
// Function
//================================================================================
export default function contact() {
  return (
    <>
      <Header />
      <div>
        <form
          css={form}
          action="mailto:gaby.peta@gmail.com?subject=Wolfi%20Desktop%20Application."
          method="post"
        >
          <table border="0" cellspacing="0" cellpadding="4" width="90%">
            <tr>
              <td width="30%">
                <div align="right">
                  <b css={name}>Name:</b>
                </div>
              </td>
              <td width="70%">
                <input
                  css={input}
                  type="text"
                  name="name"
                  size="20"
                  placeholder="Name"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <div align="right">
                  <b css={name}>Email:</b>
                </div>
              </td>
              <td>
                <input
                  css={input}
                  type="email"
                  name="email"
                  size="20"
                  placeholder="Email"
                />
              </td>
            </tr>

            <tr>
              <td>
                <div align="right">
                  <b css={name}>Comments:</b>
                </div>
              </td>
              <td>
                <textarea
                  css={input}
                  name="comments"
                  cols="30"
                  rows="4"
                  wrap="virtual"
                  placeholder="Speak your mind!"
                ></textarea>
              </td>
            </tr>

            <tr>
              <td>&nbsp;</td>
              <td>
                <input
                  css={button}
                  type="submit"
                  name="submit"
                  value="Submit"
                />
                <input css={button} type="reset" name="reset" value="Reset" />
              </td>
            </tr>
          </table>
        </form>
      </div>
      <Footer />
    </>
  );
}
