import React from 'react';
import ChangePasswordForm from '../../components/ChangePassword';
import { ForgotPasswordForm } from '../../components/ForgotPassword';

const AccountPage = () => {
  return (
    <div>
      <h1>Account Page</h1>
      <ForgotPasswordForm />
      <ChangePasswordForm />
    </div>
  );
};

export default AccountPage;
