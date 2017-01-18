import { combineReducers } from 'redux';
import order from './order';
import goods from './goods';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  order,
  goods
});

export default rootReducer;
