import { combineReducers } from 'redux';
import listReducer from './list.reducers';

const rootReducers = combineReducers({
  movieList: listReducer,
});

export default rootReducers;
