import React from 'react';
import styled from 'styled-components';
import SignInForm from '../../components/SignIn';
import SignUpLink from '../../components/SignUp';
import { ForgotPasswordLink } from '../../components/ForgotPassword';

const StyledSignInPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`;

const SignInPage = () => {
  return (
    <StyledSignInPage>
      <SignInForm />
      <ForgotPasswordLink />
      <SignUpLink />
    </StyledSignInPage>
  );
};

export default SignInPage;
