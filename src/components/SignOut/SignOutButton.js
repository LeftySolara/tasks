import React from 'react';

import Button from '../Button';
import { withFirebase } from '../Context';

const SignOutButtonBase = (props) => {
  const { firebase } = props;

  return <Button text="Sign Out" onClick={() => firebase.doSignOut()} />;
};

const SignOutButton = withFirebase(SignOutButtonBase);

export default SignOutButton;
