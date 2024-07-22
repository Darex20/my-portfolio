import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyle } from './styles';
import { useState } from 'react';

const Root = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeObject = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeObject}>
      <GlobalStyle />
      <App theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
