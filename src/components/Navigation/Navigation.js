import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';

import { AuthUserContext, withAuthentication } from '../Context';

const StyledNavigation = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 5vh;
  list-style: none;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.foreground};
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.foreground};
`;

/* Navigation links to display when a user is logged in. */
const NavigationAuth = () => (
  <div>
    <StyledNavigation>
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

const Navigation = () => {
  const authUser = useContext(AuthUserContext);

  return <>{authUser ? <NavigationAuth /> : null}</>;
};

export default withAuthentication(Navigation);
