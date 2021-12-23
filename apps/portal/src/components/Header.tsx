import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from 'login/loginUtils';

const Header = () => (
  <StyledHeader>
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/app1">App 1</StyledLink>
      <StyledLink to="/app2">App 2</StyledLink>
      <StyledLink to="/app3">App 3</StyledLink>
      <StyledLink to="/app4">App 4</StyledLink>
      <StyledLink to="/appSvelte">Svelte</StyledLink>
      <StyledLink to="/appVue">Vue</StyledLink>
    </StyledNav>
    <StyledAuth>
      <button type='button' onClick={() => logout()}>Logout</button>
    </StyledAuth>
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 5rem;
  background-color: blue;
  color: white;
  font-size: 3rem;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-grow: 1;
`;

const StyledLink = styled(Link)`
  color: white;

  :not(:last-child):after {
    content: '|';
    display: inline-block;
    margin: 0 1rem;
  }
`;

const StyledAuth = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
`;
