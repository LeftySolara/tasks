import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../Button';
import { withFirebase } from '../Context';

import * as ROUTES from '../../constants/routes';

const StyledForgotPasswordForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 10%;
  padding: 10px 0px 10px 0px;
  border: 1px solid #e7e7e6;
  border-radius: 20px;
  box-shadow: 0px 0px 21px 2px #706f6c;
  background-color: 858380;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.accent};
  font-weight: bold;
`;

const ForgotPasswordFormBase = (props) => {
  const { firebase } = props;
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const resetState = () => {
    setEmail('');
    setError(null);
  };

  const handleSubmit = (event) => {
    firebase
      .doPasswordReset(email)
      .then(() => {
        resetState();
      })
      .catch((err) => setError(err));
    event.preventDefault();
  };

  const isInvalid = email === '';

  return (
    <StyledForgotPasswordForm onSubmit={handleSubmit}>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email Address"
      />
      <Button
        text="Reset Password"
        disabled={isInvalid}
        type="submit"
        primary
      />

      {error && <p>{error.message}</p>}
    </StyledForgotPasswordForm>
  );
};

const ForgotPasswordForm = withFirebase(ForgotPasswordFormBase);

const ForgotPasswordLink = () => (
  <p>
    <StyledLink to={ROUTES.FORGOT_PASSWORD}>Forgot Password?</StyledLink>
  </p>
);

export { ForgotPasswordForm as default, ForgotPasswordLink };
