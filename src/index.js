import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import App from './App';
import { store } from './store/configureStore';
import { firebase } from './configs/firebaseConfig';

const firebaseProps = {
  firebase,
  config: { userProfile: 'users' },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...firebaseProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);
