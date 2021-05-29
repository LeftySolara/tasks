import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as ROUTES from '../../constants/routes';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e98074;
`;

const SignUpLink = () => (
  <p>
    Don&apos;t have an account?{' '}
    <StyledLink to={ROUTES.SIGN_UP}>Sign Up</StyledLink>
  </p>
);

export default SignUpLink;
