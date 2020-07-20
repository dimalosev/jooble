import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import { rootReducer } from './rootReducer';
import { firebase } from '../configs/firebaseConfig';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({ getFirestore })), reduxFirestore(firebase)),
);

export { store };
