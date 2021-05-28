import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button';
import { withFirebase } from '../Context';

import * as ROUTES from '../../constants/routes';

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
    <form onSubmit={onSubmit}>
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
    </form>
  );
};

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpForm;
