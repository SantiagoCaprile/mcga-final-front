import { combineReducers } from 'redux';
import matchesReducer from './matches/reducer';
import usersReducer from './users/reducer';

const rootReducer = combineReducers({
  matches: matchesReducer,
  users: usersReducer,
});

export default rootReducer;