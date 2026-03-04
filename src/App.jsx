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
    font-family: monospace;
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
    font-size: 3em;
    color: inherit;
    text-decoration: none;
    position: relative;

    @media (max-width: 1350px) {
      font-size: 1.8em;
    }
  }

  main {
    flex: 1;
    padding-top: 100px;
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
    margin: 0 15px;
    text-decoration: none;
    font-size: 1.8em;
  }

  .nav-links a.active {
    border-bottom: 2px solid ${({ theme }) => theme.activeLink};
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .nav-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 26px;
    height: 18px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: inherit;
    z-index: 1001;
  }

  .nav-toggle span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.navText};
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.2s ease;
    transform-origin: center;
  }

  .nav-toggle.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .nav-toggle.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }

  .nav-toggle.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  @media (max-width: 1700px) {
    .header-title {
      font-size: 2em;
    }

    .nav-links a {
      font-size: 1.3em;
      margin: 0 8px;
    }
  }

  @media (max-width: 1350px) {
    .nav-toggle {
      display: flex;
    }

    .nav-links {
      display: none;
    }
  }
`;

const SidebarStyles = createGlobalStyle`
  .sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1001;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .sidebar-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }

  .sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 260px;
    background-color: ${({ theme }) => theme.navBackground};
    color: ${({ theme }) => theme.navText};
    display: flex;
    flex-direction: column;
    padding-top: 80px;
    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.2);
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1002;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .sidebar a {
    color: ${({ theme }) => theme.text};
    padding: 14px 28px;
    text-decoration: none;
    font-size: 1.1em;
    font-weight: 600;
    letter-spacing: 0.02em;
    width: 100%;
    border-right: 3px solid transparent;
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }

  .sidebar a:hover {
    background-color: ${({ theme }) => theme.activeLink}18;
    border-right-color: ${({ theme }) => theme.activeLink}88;
    color: ${({ theme }) => theme.activeLink};
  }

  .sidebar a.active {
    border-right-color: ${({ theme }) => theme.activeLink};
    color: ${({ theme }) => theme.activeLink};
    background-color: ${({ theme }) => theme.activeLink}12;
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

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [sidebarOpen]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <SidebarStyles />
      <Router>
        <ScrollToTop />
        <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar} />
        <header className="header">
          <div className="header-content">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'header-title active' : 'header-title'}>
              Dario <span style={{ color: '#6f42c1' }}>Pavlović</span>
            </NavLink>
            <nav className="nav-links">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects and Papers</NavLink>
              <NavLink to="/work-experience" className={({ isActive }) => isActive ? 'active' : ''}>Work Experience</NavLink>
              <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink>
              <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink>
            </nav>
            <div className="header-right">
              <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
              <button className={`nav-toggle ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar} aria-label="Toggle menu">
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </header>
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleSidebar}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleSidebar}>Projects and Papers</NavLink>
          <NavLink to="/work-experience" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleSidebar}>Work Experience</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleSidebar}>Skills</NavLink>
          <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''} onClick={toggleSidebar}>Education</NavLink>
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
          <p>© 2026 Dario Pavlović. All rights reserved.</p>
        </footer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
