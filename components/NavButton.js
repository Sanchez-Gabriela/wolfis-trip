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
          border: '2px solid #4abdac',
          background: 'transparent',
          padding: '8px',
          fontSize: '12px',
          fontFamily: 'Karla',
          borderRadius: '4px',
        }}
      >
        {children}
      </button>
    </>
  );
}
