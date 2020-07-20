import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { reducer } from 'redux-form';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  form: reducer,
});

export { rootReducer };
