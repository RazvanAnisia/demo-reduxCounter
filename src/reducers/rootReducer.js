import  { combineReducers } from 'redux';
import counterReducer from './CounterReducer';
import postsReducer from './PostsReducer';

const rootReducer = combineReducers({counter:counterReducer,
                                     posts:postsReducer
                                   });
//this produces the state object  { counter:{ }}

export default rootReducer;



