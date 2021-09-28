import { combineReducers } from 'redux';
import listReducer from './list.reducers';

const rootReducers = combineReducers({
  listReducer,
});

export default rootReducers;
