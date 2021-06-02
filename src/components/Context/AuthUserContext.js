/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter } from 'react-router';
import { withFirebase } from './FirebaseContext';

import * as ROUTES from '../../constants/routes';

const AuthUserContext = createContext(null);

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const { firebase } = props;
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      firebase.auth.onAuthStateChanged((user) => {
        // eslint-disable-next-line no-unused-expressions
        user ? setAuthUser(user) : setAuthUser(null);
      });
      return null;
    }, [authUser]);

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component {...props} />
      </AuthUserContext.Provider>
    );
  };

  return withFirebase(WithAuthentication);
};

const withAuthorization = (condition) => (Component) => {
  const WithAuthorization = (props) => {
    const { firebase, history } = props;
    // eslint-disable-next-line no-unused-vars
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      const listener = firebase.auth.onAuthStateChanged((user) => {
        if (!condition(user)) {
          history.push(ROUTES.SIGN_IN);
        }
      });
      return () => listener();
    }, [authUser]);

    return (
      <AuthUserContext.Consumer>
        {(user) => (condition(user) ? <Component {...props} /> : null)}
      </AuthUserContext.Consumer>
    );
  };

  return withRouter(withFirebase(WithAuthorization));
};

export { AuthUserContext as default, withAuthentication, withAuthorization };
