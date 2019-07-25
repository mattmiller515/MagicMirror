import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import quoteReducer from './quoteReducer';

export default combineReducers({
  weather: weatherReducer,
  quote: quoteReducer
});
