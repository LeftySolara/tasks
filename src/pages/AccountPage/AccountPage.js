import React from 'react';
import ChangePasswordForm from '../../components/ChangePassword';
import { ForgotPasswordForm } from '../../components/ForgotPassword';

import { AuthUserContext, withAuthorization } from '../../components/Context';

const AccountPage = () => {
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          <h1>Logged in as {authUser.email}</h1>
          <ForgotPasswordForm />
          <ChangePasswordForm />
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
