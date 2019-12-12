import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // syncing firestore
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import WireFrameListReducer from './wireFrameListReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  WireFrameList: WireFrameListReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;