import { FETCH_POSTS, LOADING_POSTS, LOADING_FINISHED} from '../actions/types';

export const postsReducer = (state = {}, action )=> {
    switch (action.type) {
        case FETCH_POSTS:
        //create a new state.using the old state and adding the api payload
         return { ...state, posts:action.payload }
        default:
         return state;
    }
}

export const loadingReducer = (state = {loading:false} ,action)=> {
  switch(action.type){
    case LOADING_POSTS:
      return { ...state, loading:true}
    case LOADING_FINISHED:
      return { ...state, loading:false}
    default:
      return state;
  }  
}
