import { combineReducers } from 'redux';
import { userReducer, logedinUserReducer } from './userReducer';

const reducers = combineReducers({
  allUsers: userReducer,
  activeUser: logedinUserReducer,
});

export default reducers;
