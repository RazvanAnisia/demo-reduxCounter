import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


//in initial state counter is the property we mapped in combineReducers ()
const initialState = {counter:0};

const store = createStore(rootReducer,
     initialState,
     applyMiddleware(thunk));

export default store;