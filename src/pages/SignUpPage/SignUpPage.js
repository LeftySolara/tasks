import React from 'react';
import SignUpForm from '../../components/SignUp/SignUpForm';
import { FirebaseContext } from '../../components/Context';

const SignUpPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => <SignUpForm firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default SignUpPage;
