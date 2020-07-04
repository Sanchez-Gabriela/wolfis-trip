/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function NavButton({ children, onClick }) {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
      </style>
      <button
        type="button"
        onClick={onClick}
        css={{
          width: '15%',
          fontFamily: 'Karla, sans-serif',
          margin: 'auto',
          marginTop: '10px',
          borderRadius: '4px',
          color: '#4abdac',
          border: '2px solid #4abdac',
          padding: '10px',
          fontWeight: 'bold',
          marginRight: '10px',
        }}
      >
        {children}
      </button>
    </>
  );
}
