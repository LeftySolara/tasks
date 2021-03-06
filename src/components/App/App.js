import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import {
  LandingPage,
  TasksPage,
  SignUpPage,
  SignInPage,
  AccountPage,
  AdminPage,
  ForgotPasswordPage,
} from '../../pages';

import * as ROUTES from '../../constants/routes';
import { Theme, withAuthentication } from '../Context';

const App = () => (
  <BrowserRouter>
    <Theme>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
      <Route path={ROUTES.HOME} component={TasksPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </Theme>
  </BrowserRouter>
);

export default withAuthentication(App);
