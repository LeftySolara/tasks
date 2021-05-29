import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../../components/SignUp/SignUpForm';

const StyledSignUpPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`;

const SignUpPage = () => (
  <StyledSignUpPage>
    <SignUpForm />
  </StyledSignUpPage>
);

export default SignUpPage;
