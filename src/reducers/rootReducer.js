import  { combineReducers } from 'redux';
import counterReducer from './CounterReducer';
import {postsReducer, loadingReducer} from './PostsReducer';

//what we map it to here, we have to use inside the component mapStateToProps
const rootReducer = combineReducers({counter:counterReducer,
                                     posts:postsReducer,
                                     loading:loadingReducer,                                    
                                   });
//this produces the state object  { counter:{ }, posts { }, loading:{ } }

export default rootReducer;



