import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import * as ROUTES from '../../constants/routes';

const FadeIn = keyframes`
  from {
    transform: translateY(75px);
    opacity: 0;
    height: 80vh;
  }

  to {
    transform: translateY(0);
    opacity: 1;
    height: 95vh;
  }
`;

const StyledLandingPage = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 95vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  font-size: 2em;
`;

const StyledLandingContainer = styled.div`
  animation: ${FadeIn} 2s;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  font-family: Ubuntu, 'Open Sans', sans-serif;
`;

const StyledSlogan = styled.h1`
  width: 100%;
  text-align: center;
  font-family: cursive, sans-serif;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.accent};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: bold;
  text-decoration: none;
`;

const LandingPage = () => (
  <StyledLandingPage>
    <StyledLandingContainer>
      <StyledSlogan>
        Task management
        <br />
        made easy.
      </StyledSlogan>
      <p>
        <StyledLink to={ROUTES.SIGN_UP}>Create an account</StyledLink>
        &nbsp;&nbsp;or&nbsp;&nbsp;
        <StyledLink to={ROUTES.SIGN_IN}>Sign in</StyledLink>
      </p>
    </StyledLandingContainer>
  </StyledLandingPage>
);

export default LandingPage;
