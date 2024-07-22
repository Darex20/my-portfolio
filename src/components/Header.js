import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.navBackground};
  color: ${({ theme }) => theme.navText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.navText};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.navText};
  margin-right: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.navText};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  &.active {
    border-bottom: 2px solid purple;
  }
  &:hover {
    border-bottom: 2px solid purple;
  }
`;

const ThemeToggleContainer = styled.div`
  margin-left: 1rem;
`;

const Header = ({ theme, toggleTheme }) => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>Dario Pavlović</Title>
        <ThemeToggleContainer>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </ThemeToggleContainer>
      </TitleContainer>
      <Nav>
        <NavLinkStyled to="/about" activeClassName="active">About</NavLinkStyled>
        <NavLinkStyled to="/education" activeClassName="active">Education</NavLinkStyled>
        <NavLinkStyled to="/work" activeClassName="active">Work</NavLinkStyled>
        <NavLinkStyled to="/experience" activeClassName="active">Experience</NavLinkStyled>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
