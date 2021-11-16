import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer';
import { applyMiddleware } from 'redux';

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer,
    composeWithDevTools(), applyMiddleware(
        thunk
    ));

export default store;