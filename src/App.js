import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, NavLink, Routes, Link, Navigate } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import ThemeToggle from './components/ThemeToggle';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  * {
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .header {
    background-color: ${({ theme }) => theme.navBackground};
    color: ${({ theme }) => theme.navText};
    padding: 20px; /* Add some padding to the header */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-title {
    font-size: 2.5em; /* Make the header title larger */
    color: inherit;
    text-decoration: none;
    position: relative;
  }

  main {
    flex: 1;
  }

  .footer {
    background-color: ${({ theme }) => theme.footerBackground};
    color: ${({ theme }) => theme.footerText};
    text-align: center;
    padding: 20px;
  }

  nav a {
    color: ${({ theme }) => theme.text};
    margin: 0 15px; /* Add some spacing between the nav links */
    text-decoration: none;
    font-size: 1.2em; /* Increase the font size of the nav links */
  }

  nav a.active {
    border-bottom: 2px solid ${({ theme }) => theme.activeLink};
  }
`;

const lightTheme = {
  body: '#FFFFFF',
  text: '#000000',
  navBackground: '#F8F9FA',
  navText: '#000000',
  footerBackground: '#F8F9FA',
  footerText: '#000000',
  activeLink: '#6f42c1',
};

const darkTheme = {
  body: '#1c1c1c',
  text: '#FFFFFF',
  navBackground: '#333333',
  navText: '#FFFFFF',
  footerBackground: '#333333',
  footerText: '#FFFFFF',
  activeLink: '#6f42c1',
};

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <header className="header">
          <div className="header-content">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'header-title active' : 'header-title'}>Dario <span style={{ color: '#6f42c1' }}>Pavlović</span></NavLink>
            <nav>
              <NavLink to="/about" activeClassName="active">About</NavLink>
              <NavLink to="/projects" activeClassName="active">Projects and Papers</NavLink>
              <NavLink to="/work-experience" activeClassName="active">Work Experience</NavLink>
              <NavLink to="/skills" activeClassName="active">Skills</NavLink> {/* New Skills button */}
              <NavLink to="/education" activeClassName="active">Education</NavLink>
            </nav>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/skills" element={<Skills />} />  {/* New Skills route */}
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2024 Dario Pavlović. All rights reserved.</p>
        </footer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
