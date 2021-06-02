/* eslint-disable react/jsx-props-no-spreading */
import React, { createContext, useEffect, useState } from 'react';
import { withFirebase } from './FirebaseContext';

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

export { AuthUserContext as default, withAuthentication };
