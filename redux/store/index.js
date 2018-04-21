import { createStore, applyMiddleware } from 'redux';
import { createFirebaseMiddleware } from '../middlewares/FirebaseMiddleware';
import reducers from '../reducers';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import { firebaseConfig } from '../../config';

firebase.initializeApp(firebaseConfig);

const firebaseMiddleware = createFirebaseMiddleware(firebase);
const INITIAL_STATE = {};

const store = createStore(
    reducers,
    INITIAL_STATE,
    applyMiddleware(firebaseMiddleware, thunk)
);

export default store;