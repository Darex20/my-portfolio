import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const Pill = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 64px;
  height: 32px;
  border-radius: 999px;
  border: 1.5px solid ${({ $dark }) => $dark ? 'rgba(111,66,193,0.6)' : 'rgba(111,66,193,0.35)'};
  background: ${({ $dark }) => $dark
    ? 'linear-gradient(135deg, #1a0a3c 0%, #2d1b69 100%)'
    : 'linear-gradient(135deg, #e8f4fd 0%, #c8e6f9 100%)'};
  cursor: pointer;
  padding: 0;
  outline: none;
  transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  box-shadow: ${({ $dark }) => $dark
    ? '0 0 12px rgba(111,66,193,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
    : '0 0 10px rgba(100,180,255,0.4), inset 0 1px 0 rgba(255,255,255,0.6)'};
  flex-shrink: 0;

  &:hover {
    box-shadow: ${({ $dark }) => $dark
      ? '0 0 20px rgba(111,66,193,0.75)'
      : '0 0 18px rgba(100,180,255,0.65)'};
    border-color: ${({ $dark }) => $dark ? 'rgba(111,66,193,0.9)' : 'rgba(111,66,193,0.6)'};
  }
`;

const Knob = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.35s ease, box-shadow 0.35s ease;
  transform: ${({ $dark }) => $dark ? 'translateX(34px)' : 'translateX(3px)'};
  background: ${({ $dark }) => $dark
    ? 'linear-gradient(135deg, #c084fc, #7c3aed)'
    : 'linear-gradient(135deg, #fde68a, #fbbf24)'};
  box-shadow: ${({ $dark }) => $dark
    ? '0 2px 8px rgba(124,58,237,0.7)'
    : '0 2px 8px rgba(251,191,36,0.6)'};
  color: ${({ $dark }) => $dark ? '#fff' : '#92400e'};
`;

const ThemeToggle = ({ toggleTheme, theme }) => {
  const dark = theme === 'dark';
  return (
    <Pill $dark={dark} onClick={toggleTheme} aria-label="Toggle theme">
      <Knob $dark={dark}>
        {dark ? <FaMoon /> : <FaSun />}
      </Knob>
    </Pill>
  );
};

export default ThemeToggle;
