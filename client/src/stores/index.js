import { combineReducers, createStore, applyMiddleware } from 'redux';
import recordReducer from './reducers/recordReducer';
import userReducer from './reducers/userReducer';
import utilReducer from './reducers/utilReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  record: recordReducer,
  user: userReducer,
  util: utilReducer
});

const middleware = applyMiddleware(thunk);

export default createStore(rootReducer, middleware);
