import styled, { createGlobalStyle } from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: ${({ theme }) => theme.navBackground};
    color: ${({ theme }) => theme.navText};
  }

  .card {
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.cardText};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover, a.active {
    border-bottom: 2px solid #6f42c1;
  }
`;

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme === 'light' ? '#fff' : '#000'};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem; /* Increased font size */
  color: ${props => props.theme === 'light' ? '#333' : '#fff'};
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(RouterNavLink)`
  margin: 0 10px;
  text-decoration: none;
  font-size: 1.2rem;
  color: ${props => props.theme === 'light' ? '#333' : '#fff'};
  &.active {
    color: #6f42c1;
    border-bottom: 2px solid #6f42c1;
  }

  &:hover {
    color: ${props => props.theme === 'light' ? '#000' : '#bbb'};
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  margin-left: 20px;
  font-size: 1.2rem;

  &:hover {
    color: ${props => props.theme === 'light' ? '#000' : '#bbb'};
  }
`;

export const MainContent = styled.main`
  padding: 20px;
  flex: 1;
`;

export const Footer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: ${props => props.theme === 'light' ? '#fff' : '#000'};
  color: ${props => props.theme === 'light' ? '#333' : '#fff'};
`;

export const Section = styled.section`
  padding: 40px 20px;
  background-color: ${props => props.theme === 'light' ? '#f9f9f9' : '#444'};
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${props => props.theme === 'light' ? '#333' : '#fff'};
  margin-bottom: 20px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLabel = styled.label`
  margin-right: 10px;
  font-size: 1.2rem;
  color: ${props => props.theme === 'light' ? '#333' : '#fff'};
`;

export const ToggleButton = styled.div`
  cursor: pointer;
  width: 50px;
  height: 25px;
  background-color: ${props => props.theme === 'light' ? '#ccc' : '#333'};
  border-radius: 50px;
  position: relative;
  transition: background-color 0.3s;
`;

export const ToggleSlider = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 21px;
  height: 21px;
  background-color: ${props => props.theme === 'light' ? '#fff' : '#f1c40f'};
  border-radius: 50%;
  transition: all 0.3s;
  transform: ${props => props.theme === 'light' ? 'translateX(0)' : 'translateX(24px)'};
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: rotate(5deg);
  }
`;

