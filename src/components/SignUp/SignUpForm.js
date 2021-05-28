import React, { useState } from 'react';
import Button from '../Button';

const SignUpForm = () => {
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

  const onSubmit = (event) => {
    alert('submitted');
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

export default SignUpForm;
