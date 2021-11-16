import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer';

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer,
    composeWithDevTools()
));

export default store;