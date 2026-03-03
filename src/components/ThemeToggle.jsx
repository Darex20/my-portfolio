import React from 'react';
import './toggleSwitch.css';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className={`toggleBtn ${theme}`} onClick={toggleTheme}>
      <div className="toggleSlider">
        <div className="craterContainer">
          <div className="crater top"></div>
          <div className="crater bottom"></div>
          <div className="crater right"></div>
          <div className="crater left"></div>
        </div>
        <div className="cloud">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.25 51h-6.75v-9h-9c-2.206 0-4-1.794-4-4s1.794-4 4-4c0.666 0 1.3 0.167 1.85 0.46 1.028-7.926 7.924-14.46 15.65-14.46 5.514 0 10.444 3.11 13.09 7.76 0.93-0.367 1.95-0.56 3.06-0.56 5.514 0 10 4.486 10 10s-4.486 10-10 10h-13.25c-2.038 0-3.944 0.794-5.37 2.12s-2.12 3.332-2.12 5.38v0z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export default ThemeToggle;
