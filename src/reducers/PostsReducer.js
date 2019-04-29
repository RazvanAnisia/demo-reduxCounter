import { FETCH_POSTS } from '../actions/types';

const initialState = {
    posts:{}
}

const postsReducer = (state = initialState, action )=> {
    switch (action.type) {
        case FETCH_POSTS:
          return { ...state, posts:action.payload }
          console.log('fetch')
        default:
          return state;
    }
}

export default postsReducer;