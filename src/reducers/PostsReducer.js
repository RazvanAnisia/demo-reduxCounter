import { FETCH_POSTS } from '../actions/types';


const postsReducer = (state = {}, action )=> {
    switch (action.type) {
        case FETCH_POSTS:
        //create a new state.using the old state and adding the api payload
         return { ...state, posts:action.payload }
        default:
         return state;
    }
}

export default postsReducer;