import React from 'react';
import styled from 'styled-components';
import SignInForm from '../../components/SignIn';
import SignUpLink from '../../components/SignUp';

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
      <SignUpLink />
    </StyledSignInPage>
  );
};

export default SignInPage;
