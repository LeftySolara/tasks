import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';

const StyledNavigation = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  list-style: none;
  background-color: #e98074;
  color: #eae7dc;
  font-weight: bold;
  border-bottom: 2px solid #3d3d3b;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #eae7dc;
`;

const Navigation = () => {
  return (
    <div>
      <StyledNavigation>
        <li>
          <StyledLink to={ROUTES.SIGN_IN}>Sign In</StyledLink>
        </li>
        <li>
          <StyledLink to={ROUTES.LANDING}>Landing</StyledLink>
        </li>
        <li>
          <StyledLink to={ROUTES.HOME}>Home</StyledLink>
        </li>
        <li>
          <StyledLink to={ROUTES.ACCOUNT}>Account</StyledLink>
        </li>
        <li>
          <StyledLink to={ROUTES.ADMIN}>Admin</StyledLink>
        </li>
        <li>
          <SignOutButton />
        </li>
      </StyledNavigation>
    </div>
  );
};

export default Navigation;
