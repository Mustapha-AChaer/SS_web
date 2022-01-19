import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import modalReducer from './reducers/modalReducer';

const reducer = combineReducers({    
    modalReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
