import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../Button';
import { withFirebase } from '../Context';

import * as ROUTES from '../../constants/routes';

const SignOutButtonBase = (props) => {
  const { firebase, history } = props;

  const handleClick = () => {
    firebase.doSignOut();
    history.push(ROUTES.SIGN_IN);
  };

  return <Button text="Sign Out" onClick={handleClick} />;
};

const SignOutButton = withRouter(withFirebase(SignOutButtonBase));

export default SignOutButton;
