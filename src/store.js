import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

//in initial state counter is the property we mapped in combineReducers ()
const initialState = {counter:0};

const store = createStore(rootReducer, initialState);

export default store;