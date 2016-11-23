import { combineReducers } from 'redux';
import userAccount from './userAccount';

const masterReducer = combineReducers({
  userAccount,
});

export default masterReducer;
