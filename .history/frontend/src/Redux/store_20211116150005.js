import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer';
import { applyMiddleware } from 'redux';

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
}

const store = createStore(rootReducer, applyMiddleware(
    thunk
));

export default store;