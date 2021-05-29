import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../Button';
import { withFirebase } from '../Context';

import * as ROUTES from '../../constants/routes';

const StyledSignUpForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 60%;
  padding: 10px 0px 10px 0px;
  border: 1px solid #e7e7e6;
  border-radius: 20px;
  box-shadow: 0px 0px 21px 2px #706f6c;
  background-color: 858380;
`;

const SignUpFormBase = (props) => {
  const { firebase, history } = props;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    fullName === '';

  const resetState = () => {
    setFullName('');
    setEmail('');
    setPasswordOne('');
    setPasswordTwo('');
  };

  const onSubmit = (event) => {
    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        resetState();
        history.push(ROUTES.HOME);
      })
      .catch((err) => {
        setError(err);
      });
    event.preventDefault();
  };

  return (
    <StyledSignUpForm onSubmit={onSubmit}>
      <h1>Sign Up</h1>
      <input
        type="text"
        name="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full Name"
        required
      />
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
        name="passwordOne"
        value={passwordOne}
        onChange={(e) => setPasswordOne(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="passwordTwo"
        value={passwordTwo}
        onChange={(e) => setPasswordTwo(e.target.value)}
        placeholder="Confirm Password"
        required
      />
      <Button text="Sign Up" type="submit" disabled={isInvalid} primary />

      {error && <p>{error.message}</p>}
    </StyledSignUpForm>
  );
};

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpForm;
