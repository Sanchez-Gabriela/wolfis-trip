/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function NavButton({ children, onClick }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla&display=swap"
        rel="stylesheet"
      ></link>
      <button
        type="button"
        onClick={onClick}
        css={{
          width: '75px',
          fontFamily: 'Karla, sans-serif',
          margin: 'auto',
          marginTop: '10px',
          borderRadius: '4px',
          backgroundColor: '#4abdac',
          border: '2px solid #4abdac',
          padding: '10px',
          fontWeight: 'bold',
          marginRight: '10px',
          color: '#ffff',
        }}
      >
        {children}
      </button>
    </>
  );
}
