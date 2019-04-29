import  { combineReducers } from 'redux';
import counterReducer from './CounterReducer';

const rootReducer = combineReducers({counter:counterReducer});
//this produces the state object  { counter:{ }}

export default rootReducer;



