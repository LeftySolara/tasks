import React from 'react';

import Button from '../Button';
import { withFirebase } from '../Context';

const SignOutButtonBase = (props) => {
  const { firebase } = props;

  return <Button text="Sign Out" onClck={firebase.doSignOut} primary />;
};

const SignOutButton = withFirebase(SignOutButtonBase);

export default SignOutButton;
