import React from 'react';
import styled from 'styled-components';
import { ForgotPasswordForm } from '../../components/ForgotPassword';

const StyledForgotPasswordPage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
`;

const ForgotPasswordPage = () => {
  return (
    <StyledForgotPasswordPage>
      <h1>Forgot Password</h1>
      <ForgotPasswordForm />
    </StyledForgotPasswordPage>
  );
};

export default ForgotPasswordPage;
