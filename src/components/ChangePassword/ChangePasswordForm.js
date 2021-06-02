import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../Button';
import { withFirebase } from '../Context';

const StyledChangePasswordForm = styled.form`
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

const ChangePasswordFormBase = (props) => {
  const { firebase } = props;
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [error, setError] = useState(null);

  const resetState = () => {
    setPasswordOne('');
    setPasswordTwo('');
    setError(null);
  };

  const handleSubmit = (event) => {
    firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        resetState();
      })
      .catch((err) => setError(err));
    event.preventDefault();
  };

  const isInvalid = () => passwordOne !== passwordTwo || passwordOne === '';

  return (
    <StyledChangePasswordForm onSubmit={handleSubmit}>
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={(event) => setPasswordOne(event.target.value)}
        type="password"
        placeholder="New Password"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={(event) => setPasswordTwo(event.target.value)}
        type="password"
        placeholder="Confirm Password"
      />
      <Button text="Change Password" disabled={isInvalid()} type="submit" />

      {error && <p>{error.message}</p>}
    </StyledChangePasswordForm>
  );
};

const ChangePasswordForm = withFirebase(ChangePasswordFormBase);

export default ChangePasswordForm;
