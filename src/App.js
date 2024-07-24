import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, NavLink, Routes, useLocation } from 'react-router-dom';
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
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000; /* Ensure the header is on top of other elements */
  }

  .header-title {
    font-size: 2.5em; /* Make the header title larger */
    color: inherit;
    text-decoration: none;
    position: relative;

    @media (max-width: 768px) {
      font-size: 1.5em; /* Make the header title smaller on mobile */
    }
  }

  main {
    flex: 1;
    padding-top: 80px; /* Add top padding to prevent content from being hidden behind the navbar */
  }

  .footer {
    background-color: ${({ theme }) => theme.footerBackground};
    color: ${({ theme }) => theme.footerText};
    text-align: center;
    padding: 20px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .nav-links a {
    color: ${({ theme }) => theme.text};
    margin: 0 15px; /* Add some spacing between the nav links */
    text-decoration: none;
    font-size: 1.2em; /* Increase the font size of the nav links */
  }

  .nav-links a.active {
    border-bottom: 2px solid ${({ theme }) => theme.activeLink};
  }

  .nav-toggle {
    display: none;
    font-size: 2em;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .nav-toggle {
      display: block;
    }

    .nav-links {
      display: none;
    }
  }
`;

const SidebarStyles = createGlobalStyle`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    background-color: ${({ theme }) => theme.navBackground};
    color: ${({ theme }) => theme.navText};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.5);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000; /* Ensure the sidebar is on top of other elements */
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .sidebar a {
    color: ${({ theme }) => theme.text};
    padding: 15px 30px;
    text-decoration: none;
    font-size: 1.5em;
    width: 100%;
    text-align: center;
  }

  .sidebar a.active {
    border-bottom: 2px solid ${({ theme }) => theme.activeLink};
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2em;
    cursor: pointer;
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <SidebarStyles />
      <Router>
        <ScrollToTop />
        <header className="header">
          <div className="header-content">
            <div className="nav-toggle" onClick={toggleSidebar}>
              ☰
            </div>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'header-title active' : 'header-title'}>
              Dario <span style={{ color: '#6f42c1' }}>Pavlović</span>
            </NavLink>
            <nav className="nav-links">
              <NavLink to="/about" activeClassName="active">About</NavLink>
              <NavLink to="/projects" activeClassName="active">Projects</NavLink>
              <NavLink to="/work-experience" activeClassName="active">Work Experience</NavLink>
              <NavLink to="/skills" activeClassName="active">Skills</NavLink>
              <NavLink to="/education" activeClassName="active">Education</NavLink>
            </nav>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </div>
        </header>
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="close-btn" onClick={toggleSidebar}>
            &times;
          </div>
          <NavLink to="/about" activeClassName="active" onClick={toggleSidebar}>About</NavLink>
          <NavLink to="/projects" activeClassName="active" onClick={toggleSidebar}>Projects and Papers</NavLink>
          <NavLink to="/work-experience" activeClassName="active" onClick={toggleSidebar}>Work Experience</NavLink>
          <NavLink to="/skills" activeClassName="active" onClick={toggleSidebar}>Skills</NavLink>
          <NavLink to="/education" activeClassName="active" onClick={toggleSidebar}>Education</NavLink>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/work-experience" element={<WorkExperience />} />
            <Route path="/skills" element={<Skills />} />
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
