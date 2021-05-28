import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button';

import { withFirebase } from '../Context';
import * as ROUTES from '../../constants/routes';

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
    <form onSubmit={onSubmit}>
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
    </form>
  );
};

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInForm;
