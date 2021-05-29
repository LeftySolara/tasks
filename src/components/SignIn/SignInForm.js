import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

import { withFirebase } from '../Context';
import * as ROUTES from '../../constants/routes';

const StyledSignInForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  height: 40%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #e7e7e6;
  border-radius: 20px;
  box-shadow: 0px 0px 21px 2px #706f6c;
  background-color: 858380;
`;

const SignInFormBase = (props) => {
  const { firebase, history } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const resetState = () => {
    setEmail('');
    setPassword('');
  };

  const onSubmit = (event) => {
    event.preventDefault();
    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        resetState();
        history.push(ROUTES.HOME);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const isInvalid = password === '' || email === '';

  return (
    <>
      <StyledSignInForm onSubmit={onSubmit}>
        <h1>Sign In</h1>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <Button text="Sign In" type="submit" disabled={isInvalid} primary />

        {error && <p>{error.message}</p>}
      </StyledSignInForm>
    </>
  );
};

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInForm;
