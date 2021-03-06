import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Firebase from './components/Firebase';
import { FirebaseContext } from './components/Context';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
