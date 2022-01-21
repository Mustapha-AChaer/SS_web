import celesteStore from 'celeste-framework/dist/store';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import modalReducer from './reducers/modalReducer';
import mintReducer from './reducers/mintReducer';

const reducer = combineReducers({
    modalReducer,
    mintReducer,
});

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(celesteStore)));

export default store;
