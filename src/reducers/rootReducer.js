import  { combineReducers } from 'redux';
import counterReducer from './CounterReducer';
import postsReducer from './PostsReducer';

//what we map it to here, we have to use inside the component mapStateToProps
const rootReducer = combineReducers({counter:counterReducer,
                                     posts:postsReducer
                                   });
//this produces the state object  { counter:{ }, posts { }}

export default rootReducer;



